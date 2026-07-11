import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function Navbar({ onOpenPalette }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
  ];

  const isLight = theme === 'light';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isLight
              ? 'bg-light-bg/90 backdrop-blur-md border-b border-light-border'
              : 'bg-bg/90 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-lg tracking-tight transition-colors ${
                isLight ? 'text-light-text hover:text-accent' : 'text-text hover:text-accent'
              }`}
            >
              MH
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `font-mono text-2xs uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'text-accent'
                        : isLight
                        ? 'text-light-text-muted hover:text-light-text'
                        : 'text-text-muted hover:text-text'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Search / Command Palette */}
              <button
                onClick={onOpenPalette}
                className={`hidden md:flex items-center gap-2 rounded px-3 py-1.5 text-xs transition-all duration-200 ${
                  isLight
                    ? 'bg-light-surface border border-light-border text-light-text-muted hover:border-light-text-muted'
                    : 'bg-surface border border-border text-text-muted hover:border-border-light'
                }`}
                aria-label="Open command palette"
              >
                <Search size={12} />
                <span className="font-mono text-2xs">Search</span>
                <kbd
                  className={`font-mono text-2xs px-1 py-0.5 rounded ${
                    isLight ? 'bg-light-surface-2 text-light-text-muted' : 'bg-surface-2 text-text-subtle'
                  }`}
                >
                  ⌘K
                </kbd>
              </button>

              {/* Resume button */}
              <Link
                to="/resume"
                className={`hidden md:flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest px-3 py-1.5 rounded border transition-all duration-200 ${
                  isLight
                    ? 'border-light-border text-light-text-muted hover:border-accent hover:text-accent'
                    : 'border-border text-text-muted hover:border-accent hover:text-accent'
                }`}
              >
                <FileText size={12} />
                Resume
              </Link>

              {/* Theme toggle */}
              <button
                onClick={toggle}
                className={`p-2 rounded transition-colors ${
                  isLight
                    ? 'text-light-text-muted hover:text-light-text hover:bg-light-surface'
                    : 'text-text-muted hover:text-text hover:bg-surface'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className={`md:hidden p-2 rounded transition-colors ${
                  isLight
                    ? 'text-light-text-muted hover:text-light-text'
                    : 'text-text-muted hover:text-text'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`fixed inset-0 z-40 pt-14 ${isLight ? 'bg-light-bg' : 'bg-bg'}`}
        >
          <div className={`border-b ${isLight ? 'border-light-border' : 'border-border'}`}>
            <div className="container-wide py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `font-mono text-sm uppercase tracking-widest transition-colors ${
                      isActive
                        ? 'text-accent'
                        : isLight
                        ? 'text-light-text-muted'
                        : 'text-text-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => { setMobileOpen(false); onOpenPalette(); }}
                className={`flex items-center gap-2 font-mono text-sm uppercase tracking-widest ${
                  isLight ? 'text-light-text-muted' : 'text-text-muted'
                }`}
              >
                <Search size={14} />
                Search
              </button>
              <Link
                to="/resume"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent"
              >
                <FileText size={14} />
                Resume
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
