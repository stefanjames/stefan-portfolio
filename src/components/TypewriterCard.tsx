"use client";

import { useEffect, useRef, useState } from "react";

interface Segment {
  text: string;
  color: string;
}

type Line = Segment[];

const LINES: Line[] = [
  [{ text: "---", color: "text-muted" }],
  [
    { text: "name", color: "text-primary" },
    { text: ": ", color: "text-muted" },
    { text: "Stefan James", color: "text-foreground" },
  ],
  [
    { text: "role", color: "text-primary" },
    { text: ": ", color: "text-muted" },
    { text: "Security Engineer", color: "text-foreground" },
  ],
  [
    { text: "focus", color: "text-primary" },
    { text: ":", color: "text-muted" },
  ],
  [
    { text: "  - ", color: "text-muted" },
    { text: "Cloud Security", color: "text-secondary" },
  ],
  [
    { text: "  - ", color: "text-muted" },
    { text: "DevSecOps", color: "text-secondary" },
  ],
  [
    { text: "  - ", color: "text-muted" },
    { text: "Risk & Compliance", color: "text-secondary" },
  ],
  [
    { text: "  - ", color: "text-muted" },
    { text: "Vulnerability Management", color: "text-secondary" },
  ],
  [
    { text: "  - ", color: "text-muted" },
    { text: "Web3 & Blockchain Security", color: "text-secondary" },
  ],
  [
    { text: "clearance", color: "text-primary" },
    { text: ":", color: "text-muted" },
  ],
  [
    { text: "  - ", color: "text-muted" },
    { text: "Public Trust (Active)", color: "text-foreground" },
  ],
  [
    { text: "  - ", color: "text-muted" },
    { text: "IRS MBI (Active)", color: "text-foreground" },
  ],
  [
    { text: "status", color: "text-primary" },
    { text: ": ", color: "text-muted" },
    { text: "available", color: "text-green-400" },
  ],
  [{ text: "---", color: "text-muted" }],
];

const CHAR_SPEED = 20;
const LINE_PAUSE = 100;

export default function TypewriterCard() {
  const [typed, setTyped] = useState<{ line: number; char: number }>({
    line: 0,
    char: 0,
  });
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;

    function lineLength(l: number) {
      return LINES[l].reduce((sum, seg) => sum + seg.text.length, 0);
    }

    function step() {
      if (lineIdx >= LINES.length) {
        setDone(true);
        return;
      }

      const len = lineLength(lineIdx);

      if (charIdx < len) {
        charIdx++;
        setTyped({ line: lineIdx, char: charIdx });
        timerRef.current = setTimeout(step, CHAR_SPEED);
      } else {
        lineIdx++;
        charIdx = 0;
        if (lineIdx < LINES.length) {
          setTyped({ line: lineIdx, char: 0 });
          timerRef.current = setTimeout(step, LINE_PAUSE);
        } else {
          setDone(true);
        }
      }
    }

    timerRef.current = setTimeout(step, 400);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function renderLine(lineIdx: number) {
    const line = LINES[lineIdx];
    const isCurrentLine = lineIdx === typed.line && !done;
    const isPastLine = lineIdx < typed.line || done;
    const isFutureLine = lineIdx > typed.line && !done;

    if (isFutureLine) return null;

    let charsToShow = isPastLine
      ? Infinity
      : typed.char;

    const spans: React.ReactNode[] = [];
    let consumed = 0;

    for (let s = 0; s < line.length; s++) {
      const seg = line[s];
      const segStart = consumed;
      const segEnd = consumed + seg.text.length;
      consumed = segEnd;

      if (charsToShow <= segStart) break;

      const visibleCount = Math.min(charsToShow - segStart, seg.text.length);
      const visibleText = seg.text.slice(0, visibleCount);

      if (visibleText) {
        spans.push(
          <span key={`${lineIdx}-${s}`} className={seg.color}>
            {visibleText}
          </span>
        );
      }
    }

    if (isCurrentLine) {
      spans.push(
        <span key="cursor" className="typing-cursor" />
      );
    }

    return spans;
  }

  return (
    <div className="glass-card p-8">
      {/* Terminal dots + filename */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-3 w-3 rounded-full bg-red-500/60" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
        <div className="h-3 w-3 rounded-full bg-green-500/60" />
        <span className="ml-auto font-[family-name:var(--font-jetbrains-mono)] text-xs text-muted">
          security-profile.yml
        </span>
      </div>

      {/* Typed content — fixed height to prevent CLS */}
      <pre
        className={`min-h-[320px] font-[family-name:var(--font-jetbrains-mono)] text-sm leading-relaxed ${
          done ? "select-auto" : "select-none"
        }`}
      >
        <code>
          {LINES.map((_, i) => {
            const content = renderLine(i);
            if (content === null) return null;
            return (
              <span key={i}>
                {i > 0 && "\n"}
                {content}
              </span>
            );
          })}
          {done && <span className="typing-cursor" />}
        </code>
      </pre>
    </div>
  );
}
