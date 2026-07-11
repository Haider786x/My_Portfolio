import { useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useCommandPalette } from '../../hooks/useCommandPalette';
import { useTheme } from '../../hooks/useTheme';

export default function CommandPalette() {
  const {
    isOpen,
    close,
    query,
    setQuery,
    filtered,
    selectedIndex,
    setSelectedIndex,
    execute,
  } = useCommandPalette();

  const { theme } = useTheme();
  const isLight = theme === 'light';
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 10);
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const el = listRef.current.querySelector('[data-selected="true"]');
      el?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
      onClick={close}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl ${
          isLight ? 'bg-[#1c1c1e]' : 'bg-[#1c1c1e]'
        }`}
        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        {/* Search bar */}
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Search size={16} className="text-[#888]  flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for pages, actions, or external links..."
            className="flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-[#555]"
            aria-label="Search commands"
          />
          <kbd className="font-mono text-[11px] text-[#555] border border-[#333] bg-[#2a2a2a] px-2 py-1 rounded-md flex-shrink-0">
            ⌘ K
          </kbd>
        </div>

        {/* Command list */}
        <div ref={listRef} className="py-2 max-h-80 overflow-y-auto">
          {filtered.length === 0 && (
            <p className="text-center text-sm text-[#555] py-10">No results found.</p>
          )}

          {filtered.map((cmd, i) => {
            const isSelected = i === selectedIndex;
            const Icon = cmd.Icon;
            return (
              <button
                key={cmd.id}
                data-selected={isSelected}
                onClick={() => execute(cmd)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`w-full flex items-center gap-4 px-4 py-3 mx-1 rounded-xl transition-colors text-left ${
                  isSelected ? 'bg-[#2c2c2e]' : 'hover:bg-[#252527]'
                }`}
                style={{ width: 'calc(100% - 8px)' }}
              >
                {/* Icon block */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'bg-[#3a3a3c]' : 'bg-[#2a2a2c]'
                  }`}
                >
                  <Icon size={18} className="text-[#aaa]" />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`text-[15px] font-medium leading-tight ${isSelected ? 'text-white' : 'text-[#e0e0e0]'}`}>
                    {cmd.label}
                  </p>
                  <p className="text-[12px] text-[#666] mt-0.5 leading-tight truncate">
                    {cmd.subtitle}
                  </p>
                </div>

                {/* Arrow when selected */}
                {isSelected && (
                  <ArrowRight size={15} className="text-[#666] flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Footer hints */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-5">
            {[
              { key: '↑↓', label: 'NAVIGATE' },
              { key: '↵', label: 'SELECT' },
              { key: 'TAB', label: 'QUICK NAV' },
            ].map(({ key, label }) => (
              <span key={key} className="flex items-center gap-1.5">
                <kbd className="font-mono text-[10px] text-[#555] border border-[#333] bg-[#2a2a2a] px-1.5 py-0.5 rounded">
                  {key}
                </kbd>
                <span className="font-mono text-[10px] text-[#444] uppercase tracking-widest">
                  {label}
                </span>
              </span>
            ))}
          </div>
          <button
            onClick={close}
            className="flex items-center gap-1.5"
          >
            <kbd className="font-mono text-[10px] text-[#555] border border-[#333] bg-[#2a2a2a] px-1.5 py-0.5 rounded">
              ESC
            </kbd>
            <span className="font-mono text-[10px] text-[#444] uppercase tracking-widest">
              CLOSE
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
