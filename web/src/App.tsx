import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  BookOpen,
  CheckCircle2,
  XCircle,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  ExternalLink,
  Award,
  Layers,
  CheckSquare
} from 'lucide-react';
import type { Question, FilterStatus } from './types';
import rawQuestions from './data/questions.json';

const questionsData: Question[] = rawQuestions as Question[];

export const App: React.FC = () => {
  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');

  // Navigation & Answers
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userSelections, setUserSelections] = useState<Record<string, string[]>>({});
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});

  // Persistence in LocalStorage
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('aws_quiz_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [history, setHistory] = useState<Record<string, { selected: string[]; isCorrect: boolean }>>(() => {
    try {
      const saved = localStorage.getItem('aws_quiz_history');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aws_quiz_bookmarks', JSON.stringify(Array.from(bookmarks)));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    try {
      localStorage.setItem('aws_quiz_history', JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }
  }, [history]);

  // Extract distinct services list
  const availableServices = useMemo(() => {
    const s = new Set<string>();
    questionsData.forEach(q => {
      q.services.forEach(item => s.add(item));
    });
    return Array.from(s).sort();
  }, []);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questionsData.filter(q => {
      if (selectedModule !== 'all' && q.module !== selectedModule) {
        return false;
      }
      if (selectedService !== 'all' && !q.services.includes(selectedService)) {
        return false;
      }
      if (filterStatus === 'bookmarked' && !bookmarks.has(q.id)) {
        return false;
      }
      if (filterStatus === 'unanswered' && history[q.id]) {
        return false;
      }
      if (filterStatus === 'correct' && !history[q.id]?.isCorrect) {
        return false;
      }
      if (filterStatus === 'incorrect' && (!history[q.id] || history[q.id].isCorrect)) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inText = q.questionText.toLowerCase().includes(query);
        const inExpl = q.explanation.toLowerCase().includes(query);
        const inOpts = q.options.some(o => o.text.toLowerCase().includes(query));
        if (!inText && !inExpl && !inOpts) {
          return false;
        }
      }
      return true;
    });
  }, [selectedModule, selectedService, filterStatus, searchQuery, bookmarks, history]);

  // Clamp current index when filter changes
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length) {
      setCurrentIndex(0);
    }
  }, [filteredQuestions.length, currentIndex]);

  const currentQ: Question | undefined = filteredQuestions[currentIndex];

  // Option selection
  const handleSelectOption = (key: string) => {
    if (!currentQ) return;
    const isRevealed = revealedQuestions[currentQ.id] || !!history[currentQ.id];
    if (isRevealed) return; // Prevent changing after reveal

    const currentSelected = userSelections[currentQ.id] || [];
    const isMultiSelect = currentQ.correctAnswers.length > 1;

    let updated: string[];
    if (isMultiSelect) {
      if (currentSelected.includes(key)) {
        updated = currentSelected.filter(k => k !== key);
      } else {
        updated = [...currentSelected, key];
      }
    } else {
      updated = [key];
    }

    setUserSelections(prev => ({
      ...prev,
      [currentQ.id]: updated
    }));
  };

  const handleReveal = () => {
    if (!currentQ) return;
    const selected = userSelections[currentQ.id] || [];
    if (selected.length === 0) return;

    // Check correctness
    const correctSorted = [...currentQ.correctAnswers].sort().join(',');
    const selectedSorted = [...selected].sort().join(',');
    const isCorrect = correctSorted === selectedSorted;

    setRevealedQuestions(prev => ({
      ...prev,
      [currentQ.id]: true
    }));

    setHistory(prev => ({
      ...prev,
      [currentQ.id]: { selected, isCorrect }
    }));
  };

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleResetCurrent = () => {
    if (!currentQ) return;
    setRevealedQuestions(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
    setUserSelections(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
    setHistory(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
        return;
      }
      if (e.key === 'ArrowRight') {
        if (currentIndex < filteredQuestions.length - 1) {
          setCurrentIndex(i => i + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex(i => i - 1);
        }
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (currentQ && currentQ.options[idx]) {
          handleSelectOption(currentQ.options[idx].key);
        }
      } else if (e.key === 'Enter') {
        handleReveal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, filteredQuestions.length, currentQ, userSelections]);

  // Overall Statistics
  const totalAnswered = Object.keys(history).length;
  const correctCount = Object.values(history).filter(h => h.isCorrect).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  const isCurrentRevealed = currentQ ? (revealedQuestions[currentQ.id] || !!history[currentQ.id]) : false;
  const activeSelected = currentQ ? (userSelections[currentQ.id] || history[currentQ.id]?.selected || []) : [];

  return (
    <div className="app-container">
      {/* App Header */}
      <header className="app-header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">AWS</div>
            <div className="brand-title">
              <h1>SAA-C03 Interactive Quiz PWA</h1>
              <p>1,766 Questions &bull; Offline Ready &bull; Instant Service Filtering</p>
            </div>
          </div>

          <div className="stats-bar">
            <div className="stat-cell">
              <Award size={15} color="#38bdf8" />
              <span>Answered: <strong>{totalAnswered}</strong> / {questionsData.length}</span>
            </div>
            <div className="stat-cell">
              <CheckCircle2 size={15} color="#10b981" />
              <span>Accuracy: <strong>{accuracy}%</strong></span>
            </div>
            <div className="stat-cell">
              <Bookmark size={15} color="#f59e0b" />
              <span>Saved: <strong>{bookmarks.size}</strong></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="main-content">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          {/* Search */}
          <div className="filter-section">
            <div className="filter-title">Quick Search</div>
            <div className="search-input-wrapper">
              <Search size={15} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search questions, services, or concepts..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Module Selector */}
          <div className="filter-section">
            <div className="filter-title">Study Module</div>
            <select
              className="select-filter"
              value={selectedModule}
              onChange={e => setSelectedModule(e.target.value)}
            >
              <option value="all">All Modules (1,766 Questions)</option>
              <option value="01">Module 01: Architectural Scenarios (684 Q)</option>
              <option value="02">Module 02: Comprehensive Bank (1,019 Q)</option>
              <option value="03">Module 03: Annotated Practice (63 Q)</option>
            </select>
          </div>

          {/* AWS Service Filter */}
          <div className="filter-section">
            <div className="filter-title">Filter by AWS Service</div>
            <select
              className="select-filter"
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
            >
              <option value="all">All AWS Services</option>
              {availableServices.map(svc => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="filter-section">
            <div className="filter-title">Question Status</div>
            <div className="filter-btn-group">
              <button
                className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                All
              </button>
              <button
                className={`filter-btn ${filterStatus === 'unanswered' ? 'active' : ''}`}
                onClick={() => setFilterStatus('unanswered')}
              >
                Unanswered
              </button>
              <button
                className={`filter-btn ${filterStatus === 'correct' ? 'active' : ''}`}
                onClick={() => setFilterStatus('correct')}
              >
                Correct ({correctCount})
              </button>
              <button
                className={`filter-btn ${filterStatus === 'incorrect' ? 'active' : ''}`}
                onClick={() => setFilterStatus('incorrect')}
              >
                Incorrect ({totalAnswered - correctCount})
              </button>
              <button
                className={`filter-btn ${filterStatus === 'bookmarked' ? 'active' : ''}`}
                onClick={() => setFilterStatus('bookmarked')}
              >
                Bookmarked ({bookmarks.size})
              </button>
            </div>
          </div>
        </aside>

        {/* Quiz Body */}
        <section className="quiz-area">
          {filteredQuestions.length === 0 ? (
            <div className="question-card" style={{ textAlign: 'center', padding: '3rem' }}>
              <Layers size={40} color="#64748b" style={{ margin: '0 auto 1rem' }} />
              <h3>No matching questions found</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Try resetting or broadening your search criteria.
              </p>
              <button
                className="action-btn primary-btn"
                style={{ margin: '1rem auto 0', display: 'inline-flex' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedModule('all');
                  setSelectedService('all');
                  setFilterStatus('all');
                }}
              >
                <RotateCcw size={16} /> Reset Filters
              </button>
            </div>
          ) : currentQ ? (
            <>
              {/* Question Navigation Bar */}
              <div className="quiz-header-bar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Question <strong>{currentIndex + 1}</strong> of {filteredQuestions.length}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    ({currentQ.id})
                  </span>
                </div>

                <div className="quiz-nav-btns">
                  <button
                    className="action-btn"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(i => i - 1)}
                    title="Previous Question (Left Arrow)"
                  >
                    <ChevronLeft size={16} /> Previous
                  </button>
                  <button
                    className="action-btn"
                    disabled={currentIndex === filteredQuestions.length - 1}
                    onClick={() => setCurrentIndex(i => i + 1)}
                    title="Next Question (Right Arrow)"
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Main Question Card */}
              <div className="question-card">
                <div className="question-meta">
                  <div className="tag-list">
                    <span className="badge-tag">Module {currentQ.module}</span>
                    <span className="badge-domain">{currentQ.domain}</span>
                    {currentQ.services.map(svc => (
                      <span key={svc} className="badge-tag">
                        {svc}
                      </span>
                    ))}
                  </div>

                  <div className="meta-right">
                    <button
                      className={`icon-btn ${bookmarks.has(currentQ.id) ? 'bookmarked' : ''}`}
                      onClick={() => toggleBookmark(currentQ.id)}
                      title={bookmarks.has(currentQ.id) ? 'Remove Bookmark' : 'Bookmark Question'}
                      aria-label="Bookmark Question"
                    >
                      {bookmarks.has(currentQ.id) ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
                    </button>
                    {isCurrentRevealed && (
                      <button
                        className="icon-btn"
                        onClick={handleResetCurrent}
                        title="Reset Question State"
                        aria-label="Reset Question"
                      >
                        <RotateCcw size={16} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <div className="question-text">
                  {currentQ.questionText}
                </div>

                {/* Multiple choice note */}
                {currentQ.correctAnswers.length > 1 && (
                  <div style={{ fontSize: '0.82rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckSquare size={14} /> Multiple choices required ({currentQ.correctAnswers.length} correct answers).
                  </div>
                )}

                {/* Options */}
                <div className="options-list">
                  {currentQ.options.map(opt => {
                    const isSelected = activeSelected.includes(opt.key);
                    const isCorrect = currentQ.correctAnswers.includes(opt.key);

                    let statusClass = '';
                    if (isCurrentRevealed) {
                      statusClass = 'revealed';
                      if (isCorrect) {
                        statusClass += ' correct';
                      } else if (isSelected && !isCorrect) {
                        statusClass += ' wrong';
                      }
                    } else if (isSelected) {
                      statusClass = 'selected';
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`option-item ${statusClass}`}
                        onClick={() => handleSelectOption(opt.key)}
                        onKeyDown={e => {
                          if (e.key === ' ' || e.key === 'Enter') {
                            e.preventDefault();
                            handleSelectOption(opt.key);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                      >
                        <div className="option-key">{opt.key}</div>
                        <div className="option-text">{opt.text}</div>
                        {isCurrentRevealed && isCorrect && (
                          <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        )}
                        {isCurrentRevealed && isSelected && !isCorrect && (
                          <XCircle size={18} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Action Controls */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                  {!isCurrentRevealed ? (
                    <button
                      className="action-btn primary-btn"
                      disabled={activeSelected.length === 0}
                      onClick={handleReveal}
                    >
                      <CheckCircle2 size={16} /> Check Answer (Enter)
                    </button>
                  ) : (
                    <button
                      className="action-btn primary-btn"
                      onClick={() => {
                        if (currentIndex < filteredQuestions.length - 1) {
                          setCurrentIndex(i => i + 1);
                        }
                      }}
                    >
                      Next Question <ChevronRight size={16} />
                    </button>
                  )}
                </div>

                {/* Explanation Block */}
                {isCurrentRevealed && currentQ.explanation && (
                  <div className="explanation-box">
                    <div className="explanation-header">
                      <BookOpen size={16} />
                      <span>Architectural Solution &amp; Key Concepts</span>
                      <span className="answer-pill">Correct Answer: {currentQ.correctAnswers.join(', ')}</span>
                    </div>
                    <div className="explanation-content">
                      {currentQ.explanation}
                    </div>

                    {currentQ.officialDocs.length > 0 && (
                      <div className="doc-links">
                        <strong style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                          Official AWS Documentation:
                        </strong>
                        {currentQ.officialDocs.map(url => (
                          <a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="doc-link"
                          >
                            <ExternalLink size={13} /> {url}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : null}
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        AWS Certified Solutions Architect - Associate (SAA-C03) Interactive Quiz Engine &bull; Pure Client-side PWA
      </footer>
    </div>
  );
};
