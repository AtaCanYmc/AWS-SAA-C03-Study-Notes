import type { Question } from './types';

function triggerDownload(filename: string, content: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function exportQuestionsPdf(
  title: string,
  questions: Question[],
  lang: 'en' | 'tr' = 'en'
) {
  if (questions.length === 0) return false;

  const isTr = lang === 'tr';
  const dateStr = new Date().toLocaleDateString(isTr ? 'tr-TR' : 'en-US');
  const count = questions.length;

  const questionsHtml = questions.map((q, idx) => {
    const optionsHtml = q.options.map(opt => `
      <div class="option-item">
        <span class="option-key">${escapeHtml(opt.key)}:</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
      </div>
    `).join('');

    const docsHtml = q.officialDocs && q.officialDocs.length > 0 ? `
      <div class="docs-section">
        <strong>${isTr ? 'Resmi Dokümantasyon:' : 'Official Documentation:'}</strong>
        <ul>
          ${q.officialDocs.map(d => `<li><a href="${escapeHtml(d)}" target="_blank">${escapeHtml(d)}</a></li>`).join('')}
        </ul>
      </div>
    ` : '';

    return `
      <article class="question-card">
        <div class="q-header">
          <span class="q-num">${isTr ? 'Senaryo' : 'Scenario'} ${idx + 1} (${escapeHtml(q.id)})</span>
          <div class="q-badges">
            <span class="badge">${isTr ? 'Modül' : 'Module'} ${escapeHtml(q.module)}</span>
            <span class="badge domain">${escapeHtml(q.domain)}</span>
            ${q.services.map(s => `<span class="badge svc">${escapeHtml(s)}</span>`).join('')}
          </div>
        </div>
        <div class="q-text">${escapeHtml(q.questionText)}</div>
        <div class="options-list">
          ${optionsHtml}
        </div>
        <div class="ans-box">
          <div class="ans-key">${isTr ? 'Doğru Seçenek:' : 'Verified Key:'} <code>${escapeHtml(q.correctAnswers.join(', '))}</code></div>
          ${q.explanation ? `<div class="ans-expl">${escapeHtml(q.explanation).replace(/\n/g, '<br/>')}</div>` : ''}
          ${docsHtml}
        </div>
      </article>
    `;
  }).join('');

  const docHtml = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <title>AWS SAA-C03 — ${escapeHtml(title)}</title>
  <style>
    @page {
      size: A4;
      margin: 15mm 12mm 15mm 12mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #1a202c;
      background: #ffffff;
      line-height: 1.5;
      font-size: 12px;
      margin: 0;
      padding: 24px;
    }
    .no-print-bar {
      background: #0f172a;
      color: #f8fafc;
      padding: 12px 20px;
      margin: -24px -24px 24px -24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 2px solid #2563eb;
    }
    .no-print-title {
      font-size: 14px;
      font-weight: 700;
      font-family: monospace;
    }
    .print-btn {
      background: #2563eb;
      color: #ffffff;
      border: none;
      padding: 8px 18px;
      font-size: 13px;
      font-weight: 600;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .print-btn:hover {
      background: #1d4ed8;
    }
    @media print {
      .no-print-bar { display: none !important; }
      body { padding: 0; }
      .question-card { break-inside: avoid; page-break-inside: avoid; }
    }
    .doc-header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .doc-title {
      font-size: 18px;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 6px 0;
      letter-spacing: -0.01em;
    }
    .doc-meta {
      font-size: 11px;
      color: #64748b;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    .question-card {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 12px 14px;
      margin-bottom: 14px;
      background: #ffffff;
    }
    .q-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 8px;
      padding-bottom: 6px;
      border-bottom: 1px solid #f1f5f9;
      gap: 8px;
    }
    .q-num {
      font-weight: 700;
      color: #0f172a;
      font-size: 12.5px;
    }
    .q-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }
    .badge {
      font-size: 9.5px;
      padding: 2px 6px;
      border-radius: 3px;
      background: #f1f5f9;
      color: #475569;
      font-weight: 500;
      border: 1px solid #e2e8f0;
    }
    .badge.domain {
      background: #eff6ff;
      color: #1d4ed8;
      border-color: #bfdbfe;
    }
    .badge.svc {
      background: #f0fdf4;
      color: #15803d;
      border-color: #bbf7d0;
    }
    .q-text {
      font-size: 12.5px;
      color: #1e293b;
      margin-bottom: 10px;
      line-height: 1.55;
    }
    .options-list {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .option-item {
      padding: 5px 8px;
      border-radius: 4px;
      font-size: 11.5px;
      background: #f8fafc;
      border: 1px solid #f1f5f9;
      line-height: 1.45;
    }
    .option-key {
      font-weight: 700;
      margin-right: 4px;
      color: #0f172a;
    }
    .ans-box {
      margin-top: 8px;
      padding: 8px 12px;
      background: #f8fafc;
      border-left: 3px solid #2563eb;
      border-radius: 0 4px 4px 0;
      font-size: 11px;
    }
    .ans-key {
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 4px;
    }
    .ans-key code {
      background: #dbeafe;
      padding: 1px 5px;
      border-radius: 3px;
      font-size: 11px;
    }
    .ans-expl {
      color: #334155;
      line-height: 1.5;
    }
    .docs-section {
      margin-top: 6px;
      padding-top: 6px;
      border-top: 1px dashed #cbd5e1;
      font-size: 10px;
      color: #64748b;
    }
    .docs-section ul {
      margin: 4px 0 0 16px;
      padding: 0;
    }
    .docs-section a {
      color: #2563eb;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="no-print-bar">
    <span class="no-print-title">AWS SAA-C03 • ${escapeHtml(title)} (${count} ${isTr ? 'Soru' : 'Questions'})</span>
    <button class="print-btn" onclick="window.print()">🖨️ ${isTr ? 'Yazdır / PDF Olarak Kaydet' : 'Print / Save as PDF'}</button>
  </div>

  <header class="doc-header">
    <h1 class="doc-title">AWS Certified Solutions Architect — Associate (SAA-C03)</h1>
    <div class="doc-meta">
      <span><strong>${isTr ? 'Doküman:' : 'Document:'}</strong> ${escapeHtml(title)}</span>
      <span><strong>${isTr ? 'Tarih:' : 'Date:'}</strong> ${escapeHtml(dateStr)}</span>
      <span><strong>${isTr ? 'Soru Sayısı:' : 'Total Items:'}</strong> ${count}</span>
    </div>
  </header>

  <main>
    ${questionsHtml}
  </main>
</body>
</html>`;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(docHtml);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 600);
  }
  return true;
}

export function exportQuestionsMarkdown(
  title: string,
  questions: Question[]
) {
  if (questions.length === 0) return false;

  const date = new Date().toISOString().split('T')[0];
  let md = `# AWS SAA-C03 - ${title}\n\n`;
  md += `> **Export Date:** ${date} | **Total Items:** ${questions.length}\n\n---\n\n`;

  questions.forEach((q, idx) => {
    md += `## Scenario ${idx + 1} (${q.id})\n\n`;
    md += `**Module:** ${q.module} | **Domain:** ${q.domain}\n\n`;
    md += `**Services:** ${q.services.join(', ')}\n\n`;
    md += `${q.questionText}\n\n`;

    q.options.forEach(opt => {
      md += `- **${opt.key}**: ${opt.text}\n`;
    });

    md += `\n> **Verified Answer:** \`${q.correctAnswers.join(', ')}\`\n`;
    if (q.explanation) {
      md += `>\n> **Explanation & Architecture:**\n> ${q.explanation.replace(/\n/g, '\n> ')}\n`;
    }
    if (q.officialDocs && q.officialDocs.length > 0) {
      md += `>\n> **Documentation Links:**\n`;
      q.officialDocs.forEach(d => {
        md += `> - <${d}>\n`;
      });
    }
    md += `\n---\n\n`;
  });

  const safeFilename = `aws-saa-c03-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${date}.md`;
  triggerDownload(safeFilename, md, 'text/markdown;charset=utf-8');
  return true;
}

export function exportAllQuestionsJson(questions: Question[]) {
  if (questions.length === 0) return false;
  const date = new Date().toISOString().split('T')[0];
  const payload = {
    exam: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
    exportDate: new Date().toISOString(),
    totalQuestions: questions.length,
    questions
  };
  triggerDownload(`aws-saa-c03-all-questions-${date}.json`, JSON.stringify(payload, null, 2), 'application/json;charset=utf-8');
  return true;
}

export function exportProgressJson(
  history: Record<string, { selected: string[]; isCorrect: boolean }>,
  bookmarks: Set<string>
) {
  const date = new Date().toISOString().split('T')[0];
  const payload = {
    exam: 'AWS Certified Solutions Architect - Associate (SAA-C03)',
    exportDate: new Date().toISOString(),
    metrics: {
      totalAnswered: Object.keys(history).length,
      correctCount: Object.values(history).filter(h => h.isCorrect).length,
      bookmarkedCount: bookmarks.size
    },
    bookmarks: Array.from(bookmarks),
    history
  };

  const jsonStr = JSON.stringify(payload, null, 2);
  triggerDownload(`aws-saa-c03-progress-${date}.json`, jsonStr, 'application/json;charset=utf-8');
  return true;
}

export function exportProgressCsv(
  history: Record<string, { selected: string[]; isCorrect: boolean }>,
  questions: Question[]
) {
  const questionMap = new Map(questions.map(q => [q.id, q]));
  const date = new Date().toISOString().split('T')[0];

  const headers = ['Question ID', 'Module', 'Domain', 'Services', 'Correct Keys', 'User Selected', 'Result'];
  const rows = [headers.join(',')];

  for (const [qid, data] of Object.entries(history)) {
    const q = questionMap.get(qid);
    const mod = q ? `Module ${q.module}` : '';
    const domain = q ? `"${q.domain.replace(/"/g, '""')}"` : '';
    const services = q ? `"${q.services.join('; ')}"` : '';
    const correct = q ? `"${q.correctAnswers.join(' ')}"` : '';
    const userSelected = `"${data.selected.join(' ')}"`;
    const result = data.isCorrect ? 'CORRECT' : 'WRONG';

    rows.push([qid, mod, domain, services, correct, userSelected, result].join(','));
  }

  const csvContent = rows.join('\n');
  triggerDownload(`aws-saa-c03-history-${date}.csv`, csvContent, 'text/csv;charset=utf-8');
  return true;
}
