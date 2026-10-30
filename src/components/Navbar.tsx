import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

interface NavbarProps {
  mainLink: string;
  onOpenSettings?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ mainLink, onOpenSettings }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-200/60 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
          <span>Celebration Hub</span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#hero"
            className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Welcome
          </a>
          <a
            href="#options-overview"
            className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Celebration Options
          </a>
          <a
            href="#candles"
            className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Blow Candles
          </a>
          <a
            href="#wishes"
            className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Personal Wishes
          </a>
          <a
            href="#gifts"
            className="hover:text-amber-600 transition-colors whitespace-nowrap shrink-0"
          >
            Unwrap Gift
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 rounded"
              title="Edit celebrant name or link"
            >
              Customize
            </button>
          )}
          <a
            href={mainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
          >
            <span>Main Surprise</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
