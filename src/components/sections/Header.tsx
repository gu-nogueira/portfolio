'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-opacity-90 backdrop-filter backdrop-blur-lg ${scrolled ? 'border-b-2' : ''}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="#hero">
          Gustavo Nogueira
        </Link>
        <nav className="space-x-4">
          <Link href="#about">
            About
          </Link>
          <Link href="#projects">
          Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};
