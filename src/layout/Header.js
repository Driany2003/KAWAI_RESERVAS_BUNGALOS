import React from 'react';
import Navbar from './Navbar';
import { useScroll } from '../hooks/useScroll';

const Header = () => {
  const isScrolled = useScroll(50);

  return (
    <header className="relative z-50">
      <Navbar isScrolled={isScrolled} />
    </header>
  );
};

export default Header; 