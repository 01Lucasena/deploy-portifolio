import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import './MenuBar.css';

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useOutsideClick(menuRef, () => {
    if (menuOpen) setMenuOpen(false);
  });

  useEffect(() => {
    const handleScrollLock = () => {
      const isMobile = window.innerWidth <= 768;
      if (menuOpen && isMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    handleScrollLock();

    window.addEventListener('resize', handleScrollLock);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleScrollLock);
    };
  }, [menuOpen]);

  const menuItems = [
    { label: t('menu.home'), path: '/' },
    { label: t('menu.about'), path: '/terra' },
    { label: t('menu.projects'), path: '/saturno' },
    { label: t('menu.journey'), path: '/estacao' },
    { label: t('menu.contact'), path: '/orion' },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);

    setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <nav className="menu-bar">
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        ref={menuRef}
        className={`menu-items ${menuOpen ? 'open' : ''}`}
      >
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigate(item.path)}
            className={location.pathname === item.path ? 'active' : ''}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
