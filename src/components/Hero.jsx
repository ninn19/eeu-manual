import { useApp } from '../context/AppContext';
import EEULogo from './EEULogo';
import styles from './Hero.module.css';

const STAFF_SECTIONS = ['add', 'update', 'tracking', 'storage', 'documents'];

export default function Hero() {
  const { t, role, setRole } = useApp();

  const scrollTo = (id) => {
    const el = document.getElementById('section-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleRoleSelect = (r) => {
    setRole(r);
    setTimeout(() => scrollTo('overview'), 100);
  };

  return (
    <section className={styles.hero} id="section-hero">
      {/* Hero top */}
      <div className={styles.heroTop}>
        <div className={styles.logoWrap}>
          <EEULogo size={100} />
        </div>
        <div className={styles.badge}>{t.heroLabel}</div>
        <h1 className={styles.title}>{t.heroTitle}</h1>
        <p className={styles.subtitle}>{t.heroSubtitle}</p>
        <p className={styles.desc}>{t.heroDesc}</p>
        <div className={styles.actions}>
          <button className={styles.ctaBtn} onClick={() => scrollTo(role ? 'overview' : 'overview')}>
            {t.heroCta}
          </button>
        </div>
      </div>

      {/* Role selector */}
      <div className={styles.roleBox}>
        <div className={styles.roleTitle}>{t.roleSelectTitle}</div>
        <p className={styles.roleSub}>{t.roleSelectSub}</p>
        <div className={styles.roleCards}>
          {['staff', 'viewer', 'all'].map((r) => {
            const isAll = r === 'all';
            const label = isAll ? (t.lang === 'am' ? 'ሁሉም' : 'Show All') : t['roleStaff'.replace('Staff', r === 'staff' ? 'Staff' : 'Viewer')];
            const desc = isAll
              ? (t.lang === 'am' ? 'ሁሉንም ክፍሎች ይዩ' : 'View complete manual for all roles')
              : t[r === 'staff' ? 'roleDesc_staff' : 'roleDesc_viewer'];
            const icon = r === 'staff' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
            ) : r === 'viewer' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
            );
            return (
              <button
                key={r}
                className={`${styles.roleCard} ${role === r ? styles.selected : ''}`}
                onClick={() => handleRoleSelect(r)}
              >
                <span className={styles.roleIcon}>{icon}</span>
                <span className={styles.roleName}>
                  {r === 'staff' ? t.roleStaff : r === 'viewer' ? t.roleViewer : (t.lang === 'am' ? 'ሁሉም' : 'Show All')}
                </span>
                <span className={styles.roleDesc}>{desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
