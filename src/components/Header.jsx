import { useApp } from '../context/AppContext';
import EEULogo from './EEULogo';
import styles from './Header.module.css';

export default function Header() {
  const { t, lang, setLang } = useApp();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <EEULogo size={38} />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>{t.navTitle}</span>
            <span className={styles.brandSub}>{t.navSubtitle}</span>
          </div>
        </div>

        <button
          className={styles.langBtn}
          onClick={() => setLang(lang === 'en' ? 'am' : 'en')}
          title="Switch language"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          {t.langToggle}
        </button>
      </div>
    </header>
  );
}
