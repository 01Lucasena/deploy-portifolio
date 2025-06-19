import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MenuBar.css';

export default function MenuBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: t('menu.home'), path: '/' },
    { label: t('menu.about'), path: '/terra' },
    { label: t('menu.projects'), path: '/saturno' },
    { label: t('menu.journey'), path: '/estacao' },
    { label: t('menu.contact'), path: '/orion' },
  ];

  function handleNavigate(path) {
    navigate(path);
    setMenuOpen(false);
  }

  return (
    <nav className="menu-bar">
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        {menuItems.map(item => (
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
