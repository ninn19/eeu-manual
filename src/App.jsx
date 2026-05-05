import { useEffect, useState } from 'react';
import { useApp } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Sections from './components/Sections';
import styles from './App.module.css';

export default function App() {
  const { role } = useApp();
  const [progress, setProgress] = useState(0);

  // Reading progress bar
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(Math.min(pct, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div id="progress-bar" style={{ width: progress + '%' }} />
      <Header />

      <main className={styles.main}>
        {/* Hero is full-width, outside the sidebar layout */}
        <Hero />

        {/* Content area with sidebar */}
        <div className={styles.body}>
          <Sidebar />
          <div className={styles.content}>
            <Sections />
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <span className={styles.footerOrg}>Ethiopian Electric Utility</span>
            <span className={styles.footerDot}>·</span>
            <span>EEU Archive System — User Manual</span>
            <span className={styles.footerDot}>·</span>
            <span>Internal use only</span>
          </div>
        </footer>
      </main>
    </>
  );
}
