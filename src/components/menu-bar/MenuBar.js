import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MenuBar.css';

export default function MenuBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Terra', path: '/terra' },
    { label: 'Saturno', path: '/saturno' },
    { label: 'Estação Espacial', path: '/estacao' },
    { label: 'Orion', path: '/orion' },
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