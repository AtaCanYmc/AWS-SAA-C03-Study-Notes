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
