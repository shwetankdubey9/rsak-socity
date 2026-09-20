import React, { type ReactNode } from "react";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    .filter(Boolean)
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`;
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={key} className="font-semibold text-slate-800 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={key}
            className="rounded bg-slate-100 dark:bg-[#1A2417] border border-slate-200 dark:border-[#34422F] px-1.5 py-0.5 font-mono text-[0.85em] text-herb dark:text-gleam"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return <React.Fragment key={key}>{part}</React.Fragment>;
    });
}

export default function MarkdownBody({ content }: { content: string }) {
  const lines = content.split("\n").map((l) => l.trim());
  const blocks: ReactNode[] = [];
  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let key = 0;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push(
        <p key={`p-${key++}`} className="leading-relaxed text-slate-600 dark:text-slate-300">
          {renderInline(paragraph.join(" "), `p-${key}`)}
        </p>
      );
      paragraph = [];
    }
  };

  const flushList = () => {
    if (!list) return;
    const cls = "space-y-2 pl-5 text-slate-600 dark:text-slate-300 " + (list.ordered ? "list-decimal" : "list-disc");
    const items = list.items;
    const ordered = list.ordered;
    blocks.push(
      ordered ? (
        <ol key={`l-${key++}`} className={cls}>
          {items.map((it, i) => (
            <li key={i} className="leading-relaxed pl-1">
              {renderInline(it.replace(/^\d+\.\s*/, ""), `li-${key}-${i}`)}
            </li>
          ))}
        </ol>
      ) : (
        <ul key={`l-${key++}`} className={cls}>
          {items.map((it, i) => (
            <li key={i} className="leading-relaxed pl-1">
              {renderInline(it, `li-${key}-${i}`)}
            </li>
          ))}
        </ul>
      )
    );
    list = null;
  };

  for (const line of lines) {
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const text = renderInline(heading[2], `h-${key}`);
      blocks.push(
        level === 1 ? (
          <h2 key={`h-${key++}`} className="pt-2 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {text}
          </h2>
        ) : level === 2 ? (
          <h2 key={`h-${key++}`} className="pt-2 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {text}
          </h2>
        ) : (
          <h3 key={`h-${key++}`} className="pt-2 text-base font-bold text-slate-900 dark:text-gleam">
            {text}
          </h3>
        )
      );
      continue;
    }
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    const bullet = line.match(/^[-*]\s+(.*)$/);
    if (ordered || bullet) {
      flushParagraph();
      const isOrdered = !!ordered;
      const item = (ordered ? ordered[1] : bullet![1]);
      if (!list || list.ordered !== isOrdered) {
        flushList();
        list = { ordered: isOrdered, items: [] };
      }
      list.items.push(item);
      continue;
    }
    flushList();
    paragraph.push(line);
  }
  flushParagraph();
  flushList();

  return <div className="space-y-4 text-sm leading-relaxed">{blocks}</div>;
}
