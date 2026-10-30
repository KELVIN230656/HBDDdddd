import React, { useState } from 'react';
import { Copy, Check, Quote, Heart, Smile, Compass, Flame } from 'lucide-react';
import { WishMessage, WishTone, CelebrantProfile } from '../types';

interface WishCapsuleProps {
  profile: CelebrantProfile;
}

export const WishCapsule: React.FC<WishCapsuleProps> = ({ profile }) => {
  const [selectedTone, setSelectedTone] = useState<WishTone>('heartfelt');
  const [copied, setCopied] = useState(false);

  const wishes: Record<WishTone, WishMessage> = {
    heartfelt: {
      id: 'heartfelt',
      label: 'Heartfelt & Warm',
      badge: 'Emotional & Deep',
      quote: `Dearest ${profile.name}, on this special day, I celebrate not just another year of your life, but all the gentle warmth, kindness, and light you bring to everyone around you. May your upcoming year be overflowing with genuine peace, deep laughter, and love in every single corner.`,
      preview: 'Warm, sincere, and heartfelt wishes celebrating their kind soul.',
    },
    humorous: {
      id: 'humorous',
      label: 'Playful & Teasing',
      badge: 'Funny & High Spirits',
      quote: `Happy Birthday to someone who is smart, funny, drop-dead gorgeous, and... oh wait, this is supposed to be about you, ${profile.name}! In all seriousness, happy birthday! May your cake be extra sweet, your drinks be ice cold, and your joints not crack when you stand up tomorrow.`,
      preview: 'Lighthearted jokes and teasing banter for best friends.',
    },
    inspiring: {
      id: 'inspiring',
      label: 'Milestone & Ambition',
      badge: 'Bold & Visionary',
      quote: `${profile.name}, another revolution around the sun is your invitation to dream bigger, reach higher, and conquer new territories. You possess an incredible spark—never dim it for anyone. Here is to making this year your most legendary chapter yet!`,
      preview: 'Inspiring words celebrating courage, growth, and big dreams.',
    },
    hype: {
      id: 'hype',
      label: 'VIP Party & Hype',
      badge: 'Maximum Energy',
      quote: `STOP THE PRESSES! Today is officially ${profile.name.toUpperCase()} DAY! Queue the fireworks, pop the champagne, and turn the music all the way up! May your year ahead be packed with unforgettable road trips, bucket list moments, and pure celebration.`,
      preview: 'High-octane party energy to kickstart an unforgettable birthday.',
    },
  };

  const currentWish = wishes[selectedTone];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentWish.quote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="wishes" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-rose-700 bg-rose-100/80 px-3 py-1 rounded-md">
            Option 2 · Dedicated Wishes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Personal Birthday Messages & Notes
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Select your favorite message style below. Tailored specifically for {profile.name} with instant copy capability.
          </p>
        </div>

        {/* Tone Selector Tabs (Functional Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/80 rounded-xl max-w-xl mx-auto mb-8 border border-slate-200">
          <button
            onClick={() => setSelectedTone('heartfelt')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              selectedTone === 'heartfelt'
                ? 'bg-white text-rose-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Heartfelt</span>
          </button>

          <button
            onClick={() => setSelectedTone('humorous')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              selectedTone === 'humorous'
                ? 'bg-white text-amber-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smile className="w-4 h-4 text-amber-500" />
            <span>Humorous</span>
          </button>

          <button
            onClick={() => setSelectedTone('inspiring')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              selectedTone === 'inspiring'
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4 text-indigo-500" />
            <span>Milestone</span>
          </button>

          <button
            onClick={() => setSelectedTone('hype')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              selectedTone === 'hype'
                ? 'bg-white text-amber-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-500" />
            <span>VIP Hype</span>
          </button>
        </div>

        {/* Wish Card */}
        <div className="bg-white rounded-2xl border border-rose-200/80 shadow-xl p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle decorative quote watermark in background */}
          <Quote className="absolute top-4 right-4 w-24 h-24 text-rose-100/50 pointer-events-none" />

          {/* Card metadata (unboxed text with dot separators) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-6">
            <span className="font-semibold text-rose-700">{currentWish.label}</span>
            <span aria-hidden="true">·</span>
            <span>Celebrant: {profile.name}</span>
            <span aria-hidden="true">·</span>
            <span>Dedicated from {profile.senderName}</span>
          </div>

          {/* Quote Body */}
          <p className="text-xl sm:text-2xl text-slate-800 font-serif leading-relaxed italic mb-8 relative z-10">
            &ldquo;{currentWish.quote}&rdquo;
          </p>

          {/* Card Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <div className="text-xs text-slate-500">
              Style note: {currentWish.preview}
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy This Wish</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
