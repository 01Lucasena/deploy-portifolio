import React from 'react';
import { motion } from 'framer-motion';
import background from '../assets/background.png';
import './PageWrapper.css';


export default function PageWrapper({ children }) {
  return (
    const location = useLocation();
    const isMapa = location.pathname.includes('mapa');
    <motion.div
      className={isMapa ? 'wrapper no-bg' : 'wrapper'}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
