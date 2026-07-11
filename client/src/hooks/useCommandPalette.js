import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Mail } from 'lucide-react';
import { HomeIcon, UserIcon, GithubIcon, LinkedinIcon } from '../components/ui/GithubIcon';

export const COMMANDS = [
  { id: 'home',     label: 'Home',     subtitle: 'Welcome & overview',              path: '/',        Icon: HomeIcon },
  { id: 'about',    label: 'About',    subtitle: 'Who I am & what I do',            path: '/about',   Icon: UserIcon },
  { id: 'projects', label: 'Projects', subtitle: 'Selected work & case studies',    path: '/projects',Icon: Briefcase },
  { id: 'email',    label: 'Contact',  subtitle: 'Get in touch with me',            href: 'mailto:mohammadhaider7864@gmail.com', Icon: Mail },
  { id: 'github',   label: 'GitHub',   subtitle: 'View source code & projects',     href: 'https://github.com/Haider786x', Icon: GithubIcon },
  { id: 'linkedin', label: 'LinkedIn', subtitle: 'Connect professionally',           href: 'https://www.linkedin.com/in/mohammad-haider-2b1154290/', Icon: LinkedinIcon },
];

// ── Shared singleton state ─────────────────────────────────────────────────
// All hook instances subscribe to this so open/close from any component works.
let _isOpen = false;
const _subscribers = new Set();

function _setState(next) {
  _isOpen = next;
  _subscribers.forEach((fn) => fn(_isOpen));
}
// ──────────────────────────────────────────────────────────────────────────

export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(_isOpen);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Subscribe this instance to shared state changes
  useEffect(() => {
    const handler = (val) => setIsOpen(val);
    _subscribers.add(handler);
    return () => _subscribers.delete(handler);
  }, []);

  const open = useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    _setState(true);
  }, []);

  const close = useCallback(() => {
    _setState(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const navigate = useNavigate();

  const execute = useCallback(
    (cmd) => {
      if (cmd.path && navigate) {
        navigate(cmd.path);
      } else if (cmd.href) {
        window.open(cmd.href, cmd.href.startsWith('mailto') ? '_self' : '_blank', 'noopener noreferrer');
      }
      close();
    },
    [navigate, close]
  );

  const filtered = query.trim()
    ? COMMANDS.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.subtitle.toLowerCase().includes(query.toLowerCase())
      )
    : COMMANDS;

  // Global keyboard: Ctrl/Cmd+K, Escape
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        _isOpen ? _setState(false) : _setState(true);
        setQuery('');
        setSelectedIndex(0);
      }
      if (e.key === 'Escape' && _isOpen) _setState(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Arrow / Tab / Enter navigation (only when open)
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Tab') {
        e.preventDefault();
        setSelectedIndex((i) => (i + 1) % filtered.length);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length);
      }
      if (e.key === 'Enter' && filtered[selectedIndex]) {
        execute(filtered[selectedIndex]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, filtered, selectedIndex, execute]);

  // Reset selection when query changes
  useEffect(() => setSelectedIndex(0), [query]);

  return { isOpen, open, close, query, setQuery, filtered, selectedIndex, setSelectedIndex, execute };
}
