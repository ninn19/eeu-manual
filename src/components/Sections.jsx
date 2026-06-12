import { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  StepCard, SectionHeading, VideoPlaceholder,
  ScreenshotPlaceholder, InfoTable, Callout, Divider
} from './Shared';
import styles from './Sections.module.css';

/* ── section anchor wrapper ── */
function Sec({ id, children }) {
  return (
    <section id={'section-' + id} className={styles.section}>
      {children}
    </section>
  );
}

/* ── Overview ── */
function OverviewSection() {
  const { t } = useApp();
  return (
    <Sec id="overview">
      <SectionHeading title={t.overviewTitle} intro={t.overviewIntro} />
      <div className={styles.featureGrid}>
        {t.overviewFeatures.map((f, i) => (
          <div key={i} className={styles.featureCard}>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
      <h3 className={styles.subHeading}>{t.rolesTableTitle}</h3>
      <InfoTable headers={t.rolesTable.headers} rows={t.rolesTable.rows} />
      <Callout type="info">{t.rolesTableNote}</Callout>
      <VideoPlaceholder
        label={t.videoLabel}
        sub={t.videoSub}
        youtubeUrl="https://www.youtube.com/embed/p6_kUfgrV3U?si=Ds_6h1lTx0JI8MSH"
      />
    </Sec>
  );
}

/* ── Login ── */
function LoginSection() {
  const { t } = useApp();
  return (
    <Sec id="login">
      <SectionHeading title={t.loginTitle} intro={t.loginIntro} />
      <div className={styles.steps}>
        {t.loginSteps.map((s, i) => (
          <StepCard key={i} number={i + 1} title={s.title} body={s.body}
            tip={s.tip} warning={s.warning} defaultOpen={i === 0} />
        ))}
      </div>
      <VideoPlaceholder label={t.videoLabel} sub={t.videoSub} 
      youtubeUrl="https://www.youtube.com/embed/fz0kChzBBFw?si=e9Fom6eqKfucqPLk"
      ></VideoPlaceholder>
    </Sec>
  );
}

/* ── Find File ── */
function FindSection() {
  const { t } = useApp();
  return (
    <Sec id="find">
      <SectionHeading title={t.findTitle} intro={t.findIntro} />
      <div className={styles.steps}>
        {t.findSteps.map((s, i) => (
          <StepCard key={i} number={i + 1} title={s.title} body={s.body}
            tip={s.tip} warning={s.warning} defaultOpen={i === 0} />
        ))}
      </div>
      <h3 className={styles.subHeading}>{t.statusTableTitle}</h3>
      <InfoTable headers={t.statusTable.headers} rows={t.statusTable.rows} />
      {/* <ScreenshotPlaceholder label={t.screenshotFindLabel} /> */}
      <VideoPlaceholder label={t.videoFindLabel} sub={t.videoFindSub} youtubeUrl="https://www.youtube.com/embed/Z7sShZNPvys?si=3ETkiVy3J8Ve59FS" />
    </Sec>
  );
}
/* ── Add File ── */
function AddSection() {
  const { t } = useApp();
  return (
    <Sec id="add">
      <SectionHeading title={t.addTitle} intro={t.addIntro} staffOnly staffLabel={t.staffOnly} />
      <div className={styles.steps}>
        {t.addSteps.map((s, i) => (
          <StepCard key={i} number={i + 1} title={s.title} body={s.body}
            tip={s.tip} warning={s.warning} defaultOpen={i === 0} />
        ))}
      </div>
      {/* <ScreenshotPlaceholder label={t.screenshotAddLabel} /> */}
      <VideoPlaceholder label={t.videoAddLabel} sub={t.videoAddSub} 
      youtubeUrl="https://www.youtube.com/embed/_rhoo-H6Hko?si=2HwEXHio6UqOF6YH"
      />
    </Sec>
  );
}

/* ── Update File ── */
function UpdateSection() {
  const { t } = useApp();
  return (
    <Sec id="update">
      <SectionHeading title={t.updateTitle} intro={t.updateIntro} staffOnly staffLabel={t.staffOnly} />
      <div className={styles.steps}>
        {t.updateSteps.map((s, i) => (
          <StepCard key={i} number={i + 1} title={s.title} body={s.body}
            tip={s.tip} warning={s.warning} defaultOpen={i === 0} />
        ))}
      </div>
      {/* <ScreenshotPlaceholder label={t.screenshotUpdateLabel} /> */}
      <VideoPlaceholder label={t.videoUpdateLabel} sub={t.videoUpdateSub} 
      youtubeUrl="https://www.youtube.com/embed/O6jNZg5uf80?si=GFv73bk2L7AItLyC"
      />
    </Sec>
  );
}

/* ── File Tracking ── */
function TrackingSection() {
  const { t } = useApp();
  return (
    <Sec id="tracking">
      <SectionHeading title={t.trackingTitle} intro={t.trackingIntro} staffOnly staffLabel={t.staffOnly} />

      {/* Status reference pills */}
      <div className={styles.statusPills}>
        {[
          { label: t.lang === 'am' ? 'ይገኛል'    : 'Available', color: '#2e8b3f' },
          { label: t.lang === 'am' ? 'ተዋሷል'    : 'Borrowed',  color: '#e08f10' },
          { label: t.lang === 'am' ? 'ጠፍቷል'    : 'Missing',   color: '#c0392b' },
          { label: t.lang === 'am' ? 'ተበላሽቷል'  : 'Damaged',   color: '#7f8c8d' },
        ].map((s, i) => (
          <span key={i} className={styles.statusPill} style={{ background: s.color }}>
            {s.label}
          </span>
        ))}
      </div>

      <div className={styles.steps}>
        {t.trackingSteps.map((s, i) => (
          <StepCard key={i} number={i + 1} title={s.title} body={s.body}
            tip={s.tip} warning={s.warning} defaultOpen={i === 0} />
        ))}
      </div>
      {/* <ScreenshotPlaceholder label={t.screenshotTrackLabel} /> */}
      <VideoPlaceholder label={t.videoTrackLabel} sub={t.videoTrackSub} 
      youtubeUrl="https://www.youtube.com/embed/6X5tN4NZC6c?si=Yf-fOHCwFbJpHJJ-"
      />
    </Sec>
  );
}

/* ── Storage ── */
function StorageSection() {
  const { t } = useApp();
  return (
    <Sec id="storage">
      <SectionHeading title={t.storageTitle} intro={t.storageIntro} staffOnly staffLabel={t.staffOnly} />

      {/* 4-level hierarchy */}
      <div className={styles.storageHierarchy}>
        {t.storageHierarchy.map((item, i, arr) => (
          <div key={i} className={styles.hierarchyRow}>
            <div className={styles.hierarchyBox}>
              <span className={styles.hierarchyLabel}>{item.label}</span>
              <span className={styles.hierarchySub}>{item.sub}</span>
            </div>
            {i < arr.length - 1 && <div className={styles.hierarchyArrow}>↓</div>}
          </div>
        ))}
      </div>

      <div className={styles.steps}>
        {t.storageSteps.map((s, i) => (
          <StepCard key={i} number={i + 1} title={s.title} body={s.body}
            tip={s.tip} warning={s.warning} defaultOpen={i === 0} />
        ))}
      </div>
      {/* <ScreenshotPlaceholder label={t.screenshotStorageLabel} /> */}
      <VideoPlaceholder label={t.videoStorageLabel} sub={t.videoStorageSub} 
      youtubeUrl="https://www.youtube.com/embed/DKl5-hy7wsQ?si=4Xh-R6PiZTTStlc1"
      />
    </Sec>
  );
}

/* ── FAQ ── */
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQ} onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className={styles.faqChevron}>{open ? '−' : '+'}</span>
      </button>
      {open && <div className={styles.faqA}>{a}</div>}
    </div>
  );
}

function FAQSection() {
  const { t } = useApp();
  return (
    <Sec id="faq">
      <SectionHeading title={t.faqTitle} />
      <div className={styles.faqList}>
        {t.faqItems.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </Sec>
  );
}

/* ── Glossary ── */
function GlossarySection() {
  const { t } = useApp();
  return (
    <Sec id="glossary">
      <SectionHeading title={t.glossaryTitle} />
      <div className={styles.glossaryList}>
        {t.glossaryItems.map((item, i) => (
          <div key={i} className={styles.glossaryItem}>
            <div className={styles.glossaryTerm}>{item.term}</div>
            <div className={styles.glossaryDef}>{item.def}</div>
          </div>
        ))}
      </div>
    </Sec>
  );
}

/* ── Main export ── */
export default function Sections() {
  const { role } = useApp();
  const isViewer = role === 'viewer';

  return (
    <div className={styles.sections}>
      <OverviewSection />
      <Divider />
      <LoginSection />
      <Divider />
      <FindSection />
      <Divider />
      {!isViewer && <><AddSection />   <Divider /></>}
      {!isViewer && <><UpdateSection /><Divider /></>}
      {!isViewer && <><TrackingSection /><Divider /></>}
      {!isViewer && <><StorageSection /><Divider /></>}
      <FAQSection />
      <Divider />
      <GlossarySection />
    </div>
  );
}
