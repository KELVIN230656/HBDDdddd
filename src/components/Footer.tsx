import React from 'react';
import { Heart, Sparkles, ExternalLink } from 'lucide-react';

interface FooterProps {
  mainLink: string;
}

export const Footer: React.FC<FooterProps> = ({ mainLink }) => {
  return (
    <footer className="w-full border-t border-amber-200/60 bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
        
        {/* Brand Lockup */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="font-semibold text-slate-900">Celebration Hub</span>
          <span aria-hidden="true">·</span>
          <span>Crafted with love for birthdays</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600">
          <a href="#hero" className="hover:text-amber-700 transition-colors">
            Top
          </a>
          <a href="#candles" className="hover:text-amber-700 transition-colors">
            Blow Candles
          </a>
          <a href="#wishes" className="hover:text-amber-700 transition-colors">
            Wishes
          </a>
          <a href="#gifts" className="hover:text-amber-700 transition-colors">
            Surprise Gift
          </a>
          <a
            href={mainLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            <span>Target ({mainLink})</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Closing note */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for a wonderful celebration</span>
        </div>

      </div>
    </footer>
  );
};
