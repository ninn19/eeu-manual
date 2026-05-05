import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import styles from './Sidebar.module.css';

const STAFF_SECTIONS = ['add', 'update', 'tracking', 'storage', 'documents'];

export default function Sidebar() {
  const { t, role } = useApp();
  const [active, setActive] = useState('overview');

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      const sections = t.sidebarSections
        .filter(s => role === 'viewer' ? !STAFF_SECTIONS.includes(s.id) : true);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById('section-' + sections[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) { setActive(sections[i].id); break; }
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [t, role]);

  const scrollTo = (id) => {
    const el = document.getElementById('section-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const visibleSections = t.sidebarSections.filter(s =>
    role === 'viewer' ? !STAFF_SECTIONS.includes(s.id) : true
  );

  return (
    <nav className={styles.sidebar}>
      <div className={styles.inner}>
        <div className={styles.sectionLabel}>Contents</div>
        {visibleSections.map((s) => {
          const isStaff = STAFF_SECTIONS.includes(s.id);
          return (
            <button
              key={s.id}
              className={`${styles.item} ${active === s.id ? styles.active : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              <span className={styles.label}>{s.label}</span>
              {isStaff && (
                <span className={styles.staffBadge}>{t.staffOnly}</span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
