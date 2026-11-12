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

  // LocalStorage Persistence
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
    if (isRevealed) return;

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
      } else if (e.key.toLowerCase() === 's' && currentQ) {
        toggleBookmark(currentQ.id);
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
      {/* Broadsheet Masthead */}
      <header className="broadsheet-masthead">
        <div className="masthead-inner">
          <div className="masthead-brand">
            <div className="brand-monogram">AWS</div>
            <div className="brand-details">
              <h1>Solutions Architect Associate (SAA-C03)</h1>
              <span>Curated Examination Workbench &bull; 1,766 Scenarios</span>
            </div>
          </div>

          <div className="masthead-hud">
            <div className="hud-cell">
              <Award size={14} color="var(--color-focus)" />
              <span>Progress: <strong>{totalAnswered}</strong> / {questionsData.length}</span>
            </div>
            <div className="hud-cell">
              <CheckCircle2 size={14} color="var(--color-correct)" />
              <span>Accuracy: <strong>{accuracy}%</strong></span>
            </div>
            <div className="hud-cell">
              <Bookmark size={14} color="oklch(0.78 0.18 70)" />
              <span>Saved: <strong>{bookmarks.size}</strong></span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workbench Body */}
      <main className="workbench-body">
        {/* Left Filter Rail */}
        <aside className="filter-rail">
          {/* Quick Search */}
          <div className="rail-section">
            <label className="rail-label" htmlFor="workbench-search">Search Scenarios</label>
            <div className="rail-input-wrapper">
              <Search size={14} className="rail-search-icon" />
              <input
                id="workbench-search"
                type="text"
                className="rail-input"
                placeholder="Keywords, services, topics..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Module Selector */}
          <div className="rail-section">
            <label className="rail-label" htmlFor="module-select">Target Module</label>
            <select
              id="module-select"
              className="rail-select"
              value={selectedModule}
              onChange={e => setSelectedModule(e.target.value)}
            >
              <option value="all">All Modules (1,766 Questions)</option>
              <option value="01">Module 01: Scenarios &amp; Callouts (684 Q)</option>
              <option value="02">Module 02: Comprehensive Bank (1,019 Q)</option>
              <option value="03">Module 03: Annotated Practice (63 Q)</option>
            </select>
          </div>

          {/* Service Filter */}
          <div className="rail-section">
            <label className="rail-label" htmlFor="service-select">AWS Service Filter</label>
            <select
              id="service-select"
              className="rail-select"
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
          <div className="rail-section">
            <div className="rail-label">Record Status</div>
            <div className="tab-filter-strip">
              <button
                className={`tab-filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                All
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'unanswered' ? 'active' : ''}`}
                onClick={() => setFilterStatus('unanswered')}
              >
                Unanswered
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'correct' ? 'active' : ''}`}
                onClick={() => setFilterStatus('correct')}
              >
                Correct ({correctCount})
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'incorrect' ? 'active' : ''}`}
                onClick={() => setFilterStatus('incorrect')}
              >
                Wrong ({totalAnswered - correctCount})
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'bookmarked' ? 'active' : ''}`}
                onClick={() => setFilterStatus('bookmarked')}
              >
                Saved ({bookmarks.size})
              </button>
            </div>
          </div>

          {/* Keyboard Cheatsheet */}
          <div className="cheatsheet-box">
            <div><kbd>1-5</kbd> Select option</div>
            <div><kbd>Enter</kbd> Verify answer</div>
            <div><kbd>&larr;</kbd> <kbd>&rarr;</kbd> Previous / Next</div>
            <div><kbd>S</kbd> Bookmark scenario</div>
          </div>
        </aside>

        {/* Workbench Scenario Canvas */}
        <section className="scenario-canvas">
          {filteredQuestions.length === 0 ? (
            <div className="empty-canvas">
              <Layers size={36} color="var(--color-ink-dim)" />
              <h3>No matching scenarios found</h3>
              <p>
                No questions match your current combination of keyword, module, and service filters.
              </p>
              <button
                className="nav-tool-btn btn-primary-action"
                style={{ marginTop: '0.5rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedModule('all');
                  setSelectedService('all');
                  setFilterStatus('all');
                }}
              >
                <RotateCcw size={14} /> Clear All Filters
              </button>
            </div>
          ) : currentQ ? (
            <>
              {/* Toolbar */}
              <div className="canvas-toolbar">
                <div className="question-counter-label">
                  Scenario <strong>{currentIndex + 1}</strong> of {filteredQuestions.length}
                  <span className="counter-id-tag">[{currentQ.id}]</span>
                </div>

                <div className="canvas-nav-actions">
                  <button
                    className="nav-tool-btn"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(i => i - 1)}
                    title="Previous Question (Left Arrow)"
                  >
                    <ChevronLeft size={15} /> Prev
                  </button>
                  <button
                    className="nav-tool-btn"
                    disabled={currentIndex === filteredQuestions.length - 1}
                    onClick={() => setCurrentIndex(i => i + 1)}
                    title="Next Question (Right Arrow)"
                  >
                    Next <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Main Examination Sheet */}
              <article className="examination-sheet">
                <header className="sheet-meta-bar">
                  <div className="meta-tags-row">
                    <span className="meta-code-tag">Module {currentQ.module}</span>
                    <span className="meta-code-tag domain-tag">{currentQ.domain}</span>
                    {currentQ.services.map(svc => (
                      <span key={svc} className="meta-code-tag">
                        {svc}
                      </span>
                    ))}
                  </div>

                  <div className="meta-right-tools">
                    <button
                      className={`icon-tool-btn ${bookmarks.has(currentQ.id) ? 'bookmarked' : ''}`}
                      onClick={() => toggleBookmark(currentQ.id)}
                      title={bookmarks.has(currentQ.id) ? 'Remove Bookmark (S)' : 'Bookmark Scenario (S)'}
                      aria-label="Bookmark scenario"
                    >
                      {bookmarks.has(currentQ.id) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    </button>
                    {isCurrentRevealed && (
                      <button
                        className="icon-tool-btn"
                        onClick={handleResetCurrent}
                        title="Reset this question"
                        aria-label="Reset question state"
                      >
                        <RotateCcw size={15} />
                      </button>
                    )}
                  </div>
                </header>

                {/* Scenario Prompt */}
                <div className="scenario-prompt">
                  {currentQ.questionText}
                </div>

                {/* Multiple choice note */}
                {currentQ.correctAnswers.length > 1 && (
                  <div className="multi-select-callout">
                    <CheckSquare size={14} /> Multiple choices required ({currentQ.correctAnswers.length} correct keys).
                  </div>
                )}

                {/* Examination Options */}
                <div className="examination-options">
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
                        className={`option-row ${statusClass}`}
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
                        <div className="option-accelerator">{opt.key}</div>
                        <div className="option-body-text">{opt.text}</div>
                        {isCurrentRevealed && isCorrect && (
                          <CheckCircle2 size={18} color="var(--color-correct)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        )}
                        {isCurrentRevealed && isSelected && !isCorrect && (
                          <XCircle size={18} color="var(--color-wrong)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Action Controls */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
                  {!isCurrentRevealed ? (
                    <button
                      className="nav-tool-btn btn-primary-action"
                      disabled={activeSelected.length === 0}
                      onClick={handleReveal}
                    >
                      <CheckCircle2 size={15} /> Verify Answer [Enter]
                    </button>
                  ) : (
                    <button
                      className="nav-tool-btn btn-primary-action"
                      onClick={() => {
                        if (currentIndex < filteredQuestions.length - 1) {
                          setCurrentIndex(i => i + 1);
                        }
                      }}
                    >
                      Next Scenario <ChevronRight size={15} />
                    </button>
                  )}
                </div>

                {/* Architectural Proof & Solution Drawer */}
                {isCurrentRevealed && currentQ.explanation && (
                  <section className="architectural-proof-box">
                    <div className="proof-header">
                      <div className="proof-title">
                        <BookOpen size={15} color="var(--color-accent)" />
                        <span>Architectural Analysis &amp; Rationale</span>
                      </div>
                      <span className="verified-key-badge">
                        Key: {currentQ.correctAnswers.join(', ')}
                      </span>
                    </div>

                    <div className="proof-explanation-body">
                      {currentQ.explanation}
                    </div>

                    {currentQ.officialDocs.length > 0 && (
                      <div className="proof-reference-links">
                        <div style={{ fontSize: '0.72rem', color: 'var(--color-ink-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                          Official AWS Reference Architecture:
                        </div>
                        {currentQ.officialDocs.map(url => (
                          <a
                            key={url}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proof-link"
                          >
                            <ExternalLink size={12} /> {url}
                          </a>
                        ))}
                      </div>
                    )}
                  </section>
                )}
              </article>
            </>
          ) : null}
        </section>
      </main>

      {/* Broadsheet Footer */}
      <footer className="broadsheet-footer">
        AWS Certified Solutions Architect &mdash; Associate (SAA-C03) &bull; Editorial Workbench PWA &bull; Pure Client-Side Offline Engine
      </footer>
    </div>
  );
};
