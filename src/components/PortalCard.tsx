import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ExternalLink, Copy, Check, Sparkles, PartyPopper, Link as LinkIcon, RotateCcw } from 'lucide-react';
import { playFanfare } from '../utils/audio';

interface PortalCardProps {
  mainLink: string;
  onUpdateLink: (newLink: string) => void;
  celebrantName: string;
}

export const PortalCard: React.FC<PortalCardProps> = ({ mainLink, onUpdateLink, celebrantName }) => {
  const [copied, setCopied] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [tempLink, setTempLink] = useState(mainLink);

  const handleCopy = () => {
    navigator.clipboard.writeText(mainLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempLink.trim()) {
      onUpdateLink(tempLink.trim());
      setShowEdit(false);
    }
  };

  const handleReset = () => {
    const defaultPlaceholder = 'LINKKKKKPLSSSSSS';
    setTempLink(defaultPlaceholder);
    onUpdateLink(defaultPlaceholder);
  };

  const triggerPortalCelebration = () => {
    playFanfare();
    confetti({
      particleCount: 150,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#F59E0B', '#F43F5E', '#10B981', '#3B82F6', '#EC4899'],
    });
  };

  return (
    <section id="portal" className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Portal Card Container */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-300/80 shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-8 sm:p-12 lg:p-16">
          
          {/* Subtle background image texture */}
          <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
            <img
              src="/src/assets/images/birthday_celebration_balloons_1793353172552.jpg"
              alt="Celebration ambient"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Main Destination</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready for the Grand Surprise, {celebrantName}?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              The moment has arrived. Tap the main celebration button below to open your personalized destination page.
            </p>

            {/* THE MAIN BUTTON */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerPortalCelebration}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 rounded-2xl shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
              >
                <PartyPopper className="w-6 h-6 text-slate-950 transition-transform group-hover:rotate-12" />
                <span className="tracking-wide">Launch Portal ({mainLink})</span>
                <ExternalLink className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={handleCopy}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-5 text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl backdrop-blur-md transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied Link!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Target Display and Customizer Toggle */}
            <div className="pt-4 flex flex-col items-center gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Configured Target:</span>
                <code className="text-amber-300 font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10">
                  {mainLink}
                </code>
              </div>

              <div className="flex items-center gap-3 mt-1">
                <button
                  onClick={() => setShowEdit(!showEdit)}
                  className="text-amber-300/80 hover:text-amber-200 underline cursor-pointer"
                >
                  {showEdit ? 'Close Link Editor' : 'Edit or Test Different URL'}
                </button>
                {mainLink !== 'LINKKKKKPLSSSSSS' && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset to LINKKKKKPLSSSSSS</span>
                  </button>
                )}
              </div>
            </div>

            {/* Optional Inline URL Editor for the User */}
            {showEdit && (
              <form
                onSubmit={handleSave}
                className="mt-4 p-4 bg-black/50 border border-amber-400/30 rounded-xl max-w-md mx-auto text-left space-y-3"
              >
                <label className="block text-xs font-medium text-amber-200">
                  Target URL (Currently: {mainLink})
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tempLink}
                    onChange={(e) => setTempLink(e.target.value)}
                    placeholder="https://..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                <p className="text-[11px] text-slate-400">
                  Use this to test your destination URL or keep the default placeholder.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
