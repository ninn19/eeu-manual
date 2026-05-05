import { useState } from 'react';
import styles from './Shared.module.css';

/* ── Step accordion ── */
export function StepCard({ number, title, body, tip, warning, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`${styles.stepCard} ${open ? styles.open : ''}`}>
      <button className={styles.stepHeader} onClick={() => setOpen(o => !o)}>
        <span className={styles.stepNum}>{number}</span>
        <span className={styles.stepTitle}>{title}</span>
        <span className={styles.stepChevron}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className={styles.stepBody}>
          <p>{body}</p>
          {tip && <Callout type="tip">{tip}</Callout>}
          {warning && <Callout type="warning">{warning}</Callout>}
        </div>
      )}
    </div>
  );
}

/* ── Callout ── */
export function Callout({ type = 'tip', children }) {
  const map = {
    tip:     { cls: styles.calloutTip,     label: 'Note' },
    warning: { cls: styles.calloutWarning, label: 'Important' },
    info:    { cls: styles.calloutInfo,    label: 'Info' },
  };
  const { cls, label } = map[type] || map.tip;
  return (
    <div className={`${styles.callout} ${cls}`}>
      <strong>{label}</strong>
      <span>{children}</span>
    </div>
  );
}

/* ── Section heading ── */
export function SectionHeading({ title, intro, staffOnly = false, staffLabel = 'Staff only' }) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionTitleRow}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {staffOnly && <span className={styles.staffTag}>{staffLabel}</span>}
      </div>
      {intro && <p className={styles.sectionIntro}>{intro}</p>}
    </div>
  );
}

/* ── Screenshot placeholder ── */
export function ScreenshotPlaceholder({ label }) {
  return (
    <div className={styles.screenshot}>
      <div className={styles.screenshotInner}>
        <div className={styles.screenshotIcon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
        </div>
        <span className={styles.screenshotLabel}>{label}</span>
        <span className={styles.screenshotHint}>Screenshot goes here</span>
      </div>
    </div>
  );
}

/* ── Video placeholder ── */
export function VideoPlaceholder({ label, sub, youtubeUrl }) {
  return (
    <div
      className={styles.video}
      onClick={() => youtubeUrl && window.open(youtubeUrl, '_blank')}
      style={{ cursor: youtubeUrl ? 'pointer' : 'default' }}
    >
      <div className={styles.videoOverlay} />
      <span className={styles.ytBadge}>YouTube</span>
      <div className={styles.playBtn}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
      <span className={styles.videoLabel}>{label}</span>
      {sub && <span className={styles.videoSub}>{sub}</span>}
    </div>
  );
}

/* ── Simple table ── */
export function InfoTable({ headers, rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>
                  {typeof cell === 'boolean'
                    ? <span className={cell ? styles.yes : styles.no}>{cell ? '✓' : '—'}</span>
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Divider ── */
export function Divider() {
  return <hr className={styles.divider} />;
}
