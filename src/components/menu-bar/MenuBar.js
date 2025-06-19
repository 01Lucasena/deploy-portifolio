import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MenuBar.css';

export default function MenuBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { label: t('menu.home'), path: '/' },
    { label: t('menu.about'), path: '/terra' },
    { label: t('menu.projects'), path: '/saturno' },
    { label: t('menu.journey'), path: '/estacao' },
    { label: t('menu.contact'), path: '/orion' },
  ];

  return (
    <div className="menu-bar">
      {menuItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={location.pathname === item.path ? 'active' : ''}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}