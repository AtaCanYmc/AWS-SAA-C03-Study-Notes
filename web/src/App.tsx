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
  CheckSquare,
  Sun,
  Moon,
  Globe,
  Download,
  X,
  FileCode,
  Share2,
  Check,
  Volume2,
  VolumeX,
  Filter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import type { Question, FilterStatus } from './types';
import questionsEn from './data/questions_en.json';
import questionsTr from './data/questions_tr.json';
import { translations, Language } from './i18n';
import {
  exportQuestionsPdf,
  exportQuestionsMarkdown,
  exportAllQuestionsJson,
  exportProgressJson,
  exportProgressCsv
} from './export';

const questionsDataset: Record<Language, Question[]> = {
  en: questionsEn as Question[],
  tr: questionsTr as Question[],
};

export const App: React.FC = () => {
  // Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem('aws_quiz_theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('aws_quiz_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  // Language State
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('aws_quiz_lang');
      if (saved === 'en' || saved === 'tr') return saved;
      return (navigator.language && navigator.language.startsWith('tr')) ? 'tr' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('aws_quiz_lang', lang);
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  const questionsData = useMemo(() => {
    return questionsDataset[lang] || questionsEn;
  }, [lang]);

  const t = translations[lang];

  // Export Modal State
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [exportFeedback, setExportFeedback] = useState<string | null>(null);

  // Mobile PWA Install Guidance Modal
  const [showPwaModal, setShowPwaModal] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const isIOS = useMemo(() => typeof navigator !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent), []);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    const isMobileDevice = window.matchMedia('(max-width: 768px)').matches || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true;
    const isDismissed = localStorage.getItem('aws_pwa_prompt_dismissed') === 'true';

    if (isMobileDevice && !isStandalone && !isDismissed) {
      const timer = setTimeout(() => {
        setShowPwaModal(true);
      }, 700);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallPwa = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      try {
        const choice = await deferredPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') {
          localStorage.setItem('aws_pwa_prompt_dismissed', 'true');
        }
      } catch {
        // ignore
      }
      setDeferredPrompt(null);
    }
    setShowPwaModal(false);
  };

  const dismissPwaModal = (dontShowAgain: boolean) => {
    setShowPwaModal(false);
    if (dontShowAgain) {
      localStorage.setItem('aws_pwa_prompt_dismissed', 'true');
    }
  };

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim()) count++;
    if (selectedModule !== 'all') count++;
    if (selectedService !== 'all') count++;
    if (filterStatus !== 'all') count++;
    return count;
  }, [searchQuery, selectedModule, selectedService, filterStatus]);

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
  }, [questionsData]);

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
        const query = searchQuery.trim().toLowerCase();
        const numQuery = query.replace(/^[#q\s]+/i, '');
        const inId = q.id.toLowerCase().includes(query) || (numQuery && String(q.questionNumber) === numQuery);
        const inText = q.questionText.toLowerCase().includes(query);
        const inExpl = q.explanation.toLowerCase().includes(query);
        const inOpts = q.options.some(o => o.text.toLowerCase().includes(query));
        const inServices = q.services.some(s => s.toLowerCase().includes(query));
        const inDomain = q.domain.toLowerCase().includes(query);
        if (!inId && !inText && !inExpl && !inOpts && !inServices && !inDomain) {
          return false;
        }
      }
      return true;
    });
  }, [questionsData, selectedModule, selectedService, filterStatus, searchQuery, bookmarks, history]);

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

  const [isShareCopied, setIsShareCopied] = useState(false);

  // Deep-linking via ?q=id or #id on initial load
  const [initialQId] = useState<string | null>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const qFromQuery = params.get('q');
      if (qFromQuery) return qFromQuery.trim();
      const hash = window.location.hash.replace('#', '').trim();
      if (hash) return hash;
      return null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (initialQId && filteredQuestions.length > 0) {
      const targetIdx = filteredQuestions.findIndex(q => q.id.toLowerCase() === initialQId.toLowerCase());
      if (targetIdx !== -1) {
        setCurrentIndex(targetIdx);
      }
    }
  }, [initialQId, filteredQuestions]);

  const handleShareQuestion = async () => {
    if (!currentQ) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}?q=${encodeURIComponent(currentQ.id)}`;
    const shareTitle = `AWS SAA-C03 Scenario [${currentQ.id}]`;
    const shareText = `[AWS SAA-C03] Scenario ${currentQ.id}:\n${currentQ.questionText.slice(0, 150)}...`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (e: any) {
        if (e.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsShareCopied(true);
      setTimeout(() => setIsShareCopied(false), 2200);
    } catch {
      const input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setIsShareCopied(true);
      setTimeout(() => setIsShareCopied(false), 2200);
    }
  };

  // Text-to-Speech (TTS) Read Aloud
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentQ?.id]);

  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert(t.ttsNotSupported);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!currentQ) return;

    window.speechSynthesis.cancel();

    // Prepare speech text: scenario prompt + options
    const optionsText = currentQ.options
      .map(opt => `${opt.key}: ${opt.text}`)
      .join('. ');
    const fullText = `${currentQ.questionText}. ${optionsText}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = lang === 'tr' ? 'tr-TR' : 'en-US';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled') {
        console.warn('Speech synthesis error:', e);
      }
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
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
      if (e.key === 'Escape') {
        if (isExportOpen) setIsExportOpen(false);
        if (showPwaModal) setShowPwaModal(false);
      } else if (e.key === 'ArrowRight') {
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
  }, [currentIndex, filteredQuestions.length, currentQ, userSelections, isExportOpen]);

  // Export actions
  const onExportAllPdf = () => {
    const docTitle = lang === 'tr' ? 'Tüm Soru Havuzu (1766 Soru)' : 'Complete Question Bank (1766 Questions)';
    exportQuestionsPdf(docTitle, questionsData, lang);
  };

  const onExportBookmarksPdf = () => {
    const bookmarkedList = questionsData.filter(q => bookmarks.has(q.id));
    if (bookmarkedList.length === 0) {
      setExportFeedback(t.noBookmarks);
      setTimeout(() => setExportFeedback(null), 3000);
      return;
    }
    const docTitle = lang === 'tr' ? 'Yıldızlı Sorular' : 'Saved Questions';
    exportQuestionsPdf(docTitle, bookmarkedList, lang);
  };

  const onExportIncorrectPdf = () => {
    const incorrectList = questionsData.filter(q => history[q.id] && !history[q.id].isCorrect);
    if (incorrectList.length === 0) {
      setExportFeedback(t.noWrongs);
      setTimeout(() => setExportFeedback(null), 3000);
      return;
    }
    const docTitle = lang === 'tr' ? 'Hatalı Sorular İnceleme' : 'Incorrect Questions Review';
    exportQuestionsPdf(docTitle, incorrectList, lang);
  };

  const onExportAllMd = () => {
    const docTitle = lang === 'tr' ? 'Tum-Soru-Havuzu' : 'Complete-Question-Bank';
    exportQuestionsMarkdown(docTitle, questionsData);
  };

  const onExportAllJson = () => {
    exportAllQuestionsJson(questionsData);
  };

  const onExportBookmarksMd = () => {
    const bookmarkedList = questionsData.filter(q => bookmarks.has(q.id));
    if (bookmarkedList.length === 0) {
      setExportFeedback(t.noBookmarks);
      setTimeout(() => setExportFeedback(null), 3000);
      return;
    }
    exportQuestionsMarkdown('Bookmarked-Scenarios', bookmarkedList);
  };

  const onExportIncorrectMd = () => {
    const incorrectList = questionsData.filter(q => history[q.id] && !history[q.id].isCorrect);
    if (incorrectList.length === 0) {
      setExportFeedback(t.noWrongs);
      setTimeout(() => setExportFeedback(null), 3000);
      return;
    }
    exportQuestionsMarkdown('Incorrect-Questions-Review', incorrectList);
  };

  const onExportProgressJson = () => {
    exportProgressJson(history, bookmarks);
  };

  const onExportProgressCsv = () => {
    exportProgressCsv(history, questionsData);
  };

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
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="AWS SAA-C03 Logo" className="brand-logo-img" />
            <div className="brand-details">
              <h1 className="brand-title-full">Solutions Architect Associate (SAA-C03)</h1>
              <h1 className="brand-title-short">AWS SAA-C03</h1>
              <span className="brand-subtitle">{t.brandSubtitle}</span>
            </div>
          </div>

          <div className="masthead-tools-group">
            <div className="masthead-hud">
              <div className="hud-cell" title={`${t.progress}: ${totalAnswered} / ${questionsData.length}`}>
                <Award size={14} color="var(--color-focus)" />
                <span><span className="hud-cell-label">{t.progress}: </span><strong>{totalAnswered}</strong> / {questionsData.length}</span>
              </div>
              <div className="hud-cell" title={`${t.accuracy}: ${accuracy}%`}>
                <CheckCircle2 size={14} color="var(--color-correct)" />
                <span><span className="hud-cell-label">{t.accuracy}: </span><strong>{accuracy}%</strong></span>
              </div>
              <div className="hud-cell" title={`${t.saved}: ${bookmarks.size}`}>
                <Bookmark size={14} color="oklch(0.78 0.18 70)" />
                <span><span className="hud-cell-label">{t.saved}: </span><strong>{bookmarks.size}</strong></span>
              </div>
            </div>

            {/* Quick Controls: Export, Theme, Language */}
            <div className="masthead-controls">
              <button
                className="tool-badge-btn tool-export-btn"
                onClick={() => setIsExportOpen(true)}
                title={t.exportBtn}
                aria-label={t.exportBtn}
              >
                <Download size={13} />
                <span className="tool-btn-label">{t.exportBtn}</span>
              </button>

              <button
                className="tool-badge-btn"
                onClick={() => setLang(l => (l === 'en' ? 'tr' : 'en'))}
                title={t.langToggle}
                aria-label={t.langToggle}
              >
                <Globe size={13} />
                <span>{lang.toUpperCase()}</span>
              </button>

              <button
                className="tool-icon-btn"
                onClick={() => setTheme(curr => (curr === 'dark' ? 'light' : 'dark'))}
                title={theme === 'dark' ? t.themeLight : t.themeDark}
                aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workbench Body */}
      <main className="workbench-body">
        {/* Mobile Filter Toggle Bar (visible <= 860px via CSS) */}
        <div className="mobile-filter-bar">
          <button
            type="button"
            className={`mobile-filter-toggle-btn ${isMobileFilterOpen ? 'active' : ''}`}
            onClick={() => setIsMobileFilterOpen(prev => !prev)}
            aria-expanded={isMobileFilterOpen}
            aria-controls="filter-rail-panel"
          >
            <div className="mobile-filter-btn-left">
              <Filter size={15} />
              <span>{isMobileFilterOpen ? t.hideFilters : t.mobileFilters}</span>
              {activeFilterCount > 0 && (
                <span className="mobile-filter-count-badge">
                  {t.activeFiltersCount(activeFilterCount)}
                </span>
              )}
            </div>
            <div className="mobile-filter-btn-right">
              <span className="mobile-filter-match-count">{filteredQuestions.length} {t.scenario}</span>
              {isMobileFilterOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>
        </div>

        {/* Left Filter Rail */}
        <aside
          id="filter-rail-panel"
          className={`filter-rail ${isMobileFilterOpen ? 'mobile-open' : 'mobile-collapsed'}`}
        >
          {/* Quick Search */}
          <div className="rail-section">
            <label className="rail-label" htmlFor="workbench-search">{t.searchLabel}</label>
            <div className="rail-input-wrapper">
              <Search size={14} className="rail-search-icon" />
              <input
                id="workbench-search"
                type="text"
                className="rail-input"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Module Selector */}
          <div className="rail-section">
            <label className="rail-label" htmlFor="module-select">{t.targetModule}</label>
            <select
              id="module-select"
              className="rail-select"
              value={selectedModule}
              onChange={e => setSelectedModule(e.target.value)}
            >
              <option value="all">{t.allModules}</option>
              <option value="01">{t.mod01}</option>
              <option value="02">{t.mod02}</option>
              <option value="03">{t.mod03}</option>
            </select>
          </div>

          {/* Service Filter */}
          <div className="rail-section">
            <label className="rail-label" htmlFor="service-select">{t.serviceFilter}</label>
            <select
              id="service-select"
              className="rail-select"
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
            >
              <option value="all">{t.allServices}</option>
              {availableServices.map(svc => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="rail-section">
            <div className="rail-label">{t.recordStatus}</div>
            <div className="tab-filter-strip">
              <button
                className={`tab-filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                {t.statusAll}
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'unanswered' ? 'active' : ''}`}
                onClick={() => setFilterStatus('unanswered')}
              >
                {t.statusUnanswered}
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'correct' ? 'active' : ''}`}
                onClick={() => setFilterStatus('correct')}
              >
                {t.statusCorrect} ({correctCount})
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'incorrect' ? 'active' : ''}`}
                onClick={() => setFilterStatus('incorrect')}
              >
                {t.statusIncorrect} ({totalAnswered - correctCount})
              </button>
              <button
                className={`tab-filter-btn ${filterStatus === 'bookmarked' ? 'active' : ''}`}
                onClick={() => setFilterStatus('bookmarked')}
              >
                {t.statusSaved} ({bookmarks.size})
              </button>
            </div>
          </div>

          {/* Mobile Apply & Close Rail Button */}
          <button
            type="button"
            className="mobile-rail-close-btn"
            onClick={() => setIsMobileFilterOpen(false)}
          >
            <Check size={14} />
            <span>{t.applyFilters}</span>
          </button>

          {/* Keyboard Cheatsheet */}
          <div className="cheatsheet-box">
            {t.keyCheatsheet.map(item => (
              <div key={item.key}><kbd>{item.key}</kbd> {item.desc}</div>
            ))}
          </div>
        </aside>

        {/* Workbench Scenario Canvas */}
        <section className="scenario-canvas">
          {filteredQuestions.length === 0 ? (
            <div className="empty-canvas">
              <Layers size={36} color="var(--color-ink-dim)" />
              <h3>
                {filterStatus === 'bookmarked'
                  ? t.emptyBookmarksTitle
                  : filterStatus === 'incorrect'
                  ? t.emptyWrongTitle
                  : filterStatus === 'correct'
                  ? t.emptyCorrectTitle
                  : searchQuery.trim()
                  ? t.emptySearchTitle
                  : t.emptyTitle}
              </h3>
              <p>
                {filterStatus === 'bookmarked'
                  ? t.emptyBookmarksDesc
                  : filterStatus === 'incorrect'
                  ? t.emptyWrongDesc
                  : filterStatus === 'correct'
                  ? t.emptyCorrectDesc
                  : searchQuery.trim()
                  ? t.emptySearchDesc(searchQuery.trim())
                  : t.emptyDesc}
              </p>
              <button
                className="nav-tool-btn btn-primary-action"
                style={{ marginTop: '0.75rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedModule('all');
                  setSelectedService('all');
                  setFilterStatus('all');
                }}
              >
                <RotateCcw size={14} /> {t.clearFilters}
              </button>
            </div>
          ) : currentQ ? (
            <>
              {/* Toolbar */}
              <div className="canvas-toolbar">
                <div className="question-counter-label">
                  {t.scenario} <strong>{currentIndex + 1}</strong> {t.of} {filteredQuestions.length}
                  <span className="counter-id-tag">[{currentQ.id}]</span>
                </div>

                <div className="canvas-nav-actions">
                  <button
                    className="nav-tool-btn"
                    disabled={currentIndex === 0}
                    onClick={() => setCurrentIndex(i => i - 1)}
                    title="Previous Question (Left Arrow)"
                  >
                    <ChevronLeft size={15} /> {t.prev}
                  </button>
                  <button
                    className="nav-tool-btn"
                    disabled={currentIndex === filteredQuestions.length - 1}
                    onClick={() => setCurrentIndex(i => i + 1)}
                    title="Next Question (Right Arrow)"
                  >
                    {t.next} <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Main Examination Sheet */}
              <article className="examination-sheet">
                <header className="sheet-meta-bar">
                  <div className="meta-tags-row">
                    <span className="meta-code-tag">{t.moduleLabel} {currentQ.module}</span>
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
                      title={bookmarks.has(currentQ.id) ? t.bookmarkRemove : t.bookmarkAdd}
                      aria-label="Bookmark scenario"
                    >
                      {bookmarks.has(currentQ.id) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    </button>
                    <button
                      className={`icon-tool-btn ${isShareCopied ? 'shared' : ''}`}
                      onClick={handleShareQuestion}
                      title={isShareCopied ? t.shareCopied : t.shareQuestion}
                      aria-label="Share scenario"
                    >
                      {isShareCopied ? <Check size={16} color="var(--color-correct)" /> : <Share2 size={16} />}
                    </button>
                    {isShareCopied && (
                      <div className="share-toast">
                        {t.shareCopied}
                      </div>
                    )}
                    <button
                      className={`icon-tool-btn ${isSpeaking ? 'speaking' : ''}`}
                      onClick={handleToggleSpeech}
                      title={isSpeaking ? t.stopReadAloud : t.readAloud}
                      aria-label="Read scenario aloud"
                    >
                      {isSpeaking ? <VolumeX size={16} color="var(--color-focus)" /> : <Volume2 size={16} />}
                    </button>
                    {isCurrentRevealed && (
                      <button
                        className="icon-tool-btn"
                        onClick={handleResetCurrent}
                        title={t.resetQuestion}
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
                    <CheckSquare size={14} /> {t.multipleChoiceNotice(currentQ.correctAnswers.length)}
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
                <div className="scenario-action-bar">
                  {!isCurrentRevealed ? (
                    <button
                      className="nav-tool-btn btn-primary-action"
                      disabled={activeSelected.length === 0}
                      onClick={handleReveal}
                    >
                      <CheckCircle2 size={15} /> {t.verifyAnswer}
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
                      {t.nextScenario} <ChevronRight size={15} />
                    </button>
                  )}
                </div>

                {/* Architectural Proof & Solution Drawer */}
                {isCurrentRevealed && currentQ.explanation && (
                  <section className="architectural-proof-box">
                    <div className="proof-header">
                      <div className="proof-title">
                        <BookOpen size={15} color="var(--color-accent)" />
                        <span>{t.analysisTitle}</span>
                      </div>
                      <span className="verified-key-badge">
                        {t.verifiedKey}: {currentQ.correctAnswers.join(', ')}
                      </span>
                    </div>

                    <div className="proof-explanation-body">
                      {currentQ.explanation}
                    </div>

                    {currentQ.officialDocs.length > 0 && (
                      <div className="proof-reference-links">
                        <div style={{ fontSize: '0.72rem', color: 'var(--color-ink-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                          {t.officialDocsLabel}
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
        {t.footer}
      </footer>

      {/* Export Modal Dialog */}
      {isExportOpen && (
        <div className="modal-backdrop" onClick={() => setIsExportOpen(false)}>
          <div className="export-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{t.exportModalTitle}</h2>
              <button
                className="icon-tool-btn"
                onClick={() => setIsExportOpen(false)}
                aria-label={t.close}
              >
                <X size={16} />
              </button>
            </div>

            <div className="modal-body">
              {exportFeedback && (
                <div style={{ padding: '0.65rem 0.85rem', background: 'var(--color-wrong-bg)', border: '1px solid var(--color-wrong-border)', color: 'var(--color-wrong)', fontSize: '0.8rem', borderRadius: 'var(--radius-xs)', fontFamily: 'var(--font-mono)' }}>
                  {exportFeedback}
                </div>
              )}

              {/* Option 1: Complete Question Bank (PDF, MD, JSON) */}
              <div className="export-item-card">
                <div className="export-item-info">
                  <div className="export-item-title">
                    <BookOpen size={15} color="var(--color-focus)" />
                    <span>{t.exportAllPdfTitle}</span>
                  </div>
                  <p className="export-item-desc">{t.exportAllPdfDesc}</p>
                </div>
                <div className="export-card-actions">
                  <button className="nav-tool-btn btn-primary-action" onClick={onExportAllPdf}>
                    <Download size={13} /> PDF ({questionsData.length})
                  </button>
                  <button className="nav-tool-btn" onClick={onExportAllMd} title={t.exportAllMdTitle}>
                    <Download size={13} /> .md
                  </button>
                  <button className="nav-tool-btn" onClick={onExportAllJson} title={t.exportAllJsonTitle}>
                    <Download size={13} /> .json
                  </button>
                </div>
              </div>

              {/* Option 2: Saved Questions (PDF & MD) */}
              <div className="export-item-card">
                <div className="export-item-info">
                  <div className="export-item-title">
                    <Bookmark size={15} color="oklch(0.78 0.18 70)" />
                    <span>{t.exportBookmarksPdfTitle}</span>
                  </div>
                  <p className="export-item-desc">{t.exportBookmarksPdfDesc}</p>
                </div>
                <div className="export-card-actions">
                  <button className="nav-tool-btn btn-primary-action" onClick={onExportBookmarksPdf}>
                    <Download size={13} /> PDF ({bookmarks.size})
                  </button>
                  <button className="nav-tool-btn" onClick={onExportBookmarksMd}>
                    <Download size={13} /> .md
                  </button>
                </div>
              </div>

              {/* Option 3: Incorrect Questions Review (PDF & MD) */}
              <div className="export-item-card">
                <div className="export-item-info">
                  <div className="export-item-title">
                    <XCircle size={15} color="var(--color-wrong)" />
                    <span>{t.exportWrongPdfTitle}</span>
                  </div>
                  <p className="export-item-desc">{t.exportWrongPdfDesc}</p>
                </div>
                <div className="export-card-actions">
                  <button className="nav-tool-btn btn-primary-action" onClick={onExportIncorrectPdf}>
                    <Download size={13} /> PDF ({totalAnswered - correctCount})
                  </button>
                  <button className="nav-tool-btn" onClick={onExportIncorrectMd}>
                    <Download size={13} /> .md
                  </button>
                </div>
              </div>

              {/* Option 4: Study Progress Backup & Log */}
              <div className="export-item-card">
                <div className="export-item-info">
                  <div className="export-item-title">
                    <FileCode size={15} color="var(--color-accent)" />
                    <span>{t.exportProgressJsonTitle}</span>
                  </div>
                  <p className="export-item-desc">{t.exportProgressJsonDesc}</p>
                </div>
                <div className="export-card-actions">
                  <button className="nav-tool-btn" onClick={onExportProgressJson}>
                    <Download size={13} /> .json
                  </button>
                  <button className="nav-tool-btn" onClick={onExportProgressCsv}>
                    <Download size={13} /> .csv
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="nav-tool-btn" onClick={() => setIsExportOpen(false)}>
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile PWA Install Guidance Modal */}
      {showPwaModal && (
        <div className="modal-backdrop" onClick={() => dismissPwaModal(false)}>
          <div className="pwa-modal" onClick={e => e.stopPropagation()}>
            <div className="pwa-modal-header">
              <div className="pwa-modal-icon">
                <img src="./apple-touch-icon.png" alt="AWS SAA-C03 Study App" />
              </div>
              <div className="pwa-modal-title-wrap">
                <h2 className="pwa-modal-title">{t.pwaModalTitle}</h2>
                <p className="pwa-modal-subtitle">{t.pwaModalSubtitle}</p>
              </div>
              <button
                className="pwa-modal-close"
                onClick={() => dismissPwaModal(false)}
                aria-label={t.close}
              >
                <X size={18} />
              </button>
            </div>

            <div className="pwa-modal-body">
              <div className="pwa-features-grid">
                <span className="pwa-feature-pill">⚡ {t.pwaFeatureOffline}</span>
                <span className="pwa-feature-pill">📱 {t.pwaFeatureScreen}</span>
                <span className="pwa-feature-pill">🚀 {t.pwaFeatureFast}</span>
              </div>

              <div className="pwa-instructions-box">
                {isIOS ? (
                  <>
                    <div className="pwa-instruction-step">
                      <span className="pwa-step-badge">1</span>
                      <span>{t.pwaIosStep1}</span>
                    </div>
                    <div className="pwa-instruction-step">
                      <span className="pwa-step-badge">2</span>
                      <span>{t.pwaIosStep2}</span>
                    </div>
                    <div className="pwa-instruction-step">
                      <span className="pwa-step-badge">3</span>
                      <span>{t.pwaIosStep3}</span>
                    </div>
                  </>
                ) : (
                  <div className="pwa-instruction-step">
                    <span className="pwa-step-badge">👉</span>
                    <span>{t.pwaAndroidStep}</span>
                  </div>
                )}
              </div>

              <div className="pwa-modal-actions">
                {deferredPrompt ? (
                  <button className="pwa-btn-install" onClick={handleInstallPwa}>
                    <Download size={15} /> {t.pwaInstallBtn}
                  </button>
                ) : (
                  <button className="pwa-btn-install" onClick={() => dismissPwaModal(false)}>
                    <CheckCircle2 size={15} /> {t.pwaGotItBtn}
                  </button>
                )}
                <button className="pwa-btn-secondary" onClick={() => dismissPwaModal(true)}>
                  {t.pwaDontShowAgain}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
