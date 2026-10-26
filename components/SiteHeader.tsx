'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/about', label: 'about' },
  { href: '/blog', label: 'blog' },
];

const isCurrent = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname.startsWith(href);

export default function SiteHeader() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      const isDark = storedTheme === 'dark';
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 pt-6 sm:px-10">
      <nav className="pill-bar" aria-label="Main">
        <span className="hidden px-2 font-mono text-sm text-[var(--muted)] sm:inline">
          ~/
        </span>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-pill"
            aria-current={isCurrent(pathname, link.href) ? 'page' : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <button
        onClick={toggleTheme}
        className="pill-bar nav-pill"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span aria-hidden="true">{isDarkMode ? '☀' : '☾'}</span>
        <span className="hidden sm:inline">
          {isDarkMode ? 'light' : 'dark'}
        </span>
      </button>
    </header>
  );
}
