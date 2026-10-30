import React from 'react';
import confetti from 'canvas-confetti';
import { ArrowUpRight, PartyPopper, Music, Cake, Sparkles, Heart } from 'lucide-react';
import { CelebrantProfile } from '../types';
import { playFanfare, playHappyBirthdayTune } from '../utils/audio';

interface HeroProps {
  profile: CelebrantProfile;
  mainLink: string;
  onEditProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, mainLink, onEditProfile }) => {
  const triggerConfetti = () => {
    playFanfare();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EF4444', '#EC4899', '#8B5CF6', '#10B981'],
    });
  };

  return (
    <section id="hero" className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background ambient glow circles */}
      <div className="absolute top-0 left-1/4 -z-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 -z-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Marquee Text & Main Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Celebrant Kicker & Edit Trigger */}
            <div className="flex items-center gap-2 text-sm text-amber-800/80 font-medium">
              <span className="flex items-center gap-1.5 bg-amber-100/90 text-amber-900 px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                Special Celebration
              </span>
              <span>·</span>
              <button
                onClick={onEditProfile}
                className="underline hover:text-amber-950 transition-colors cursor-pointer text-xs"
              >
                Personalize: {profile.name}
              </button>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] text-balance">
              Happy Birthday,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-500 to-amber-600">
                {profile.name}!
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Today belongs entirely to you. We built this celebration space with warm wishes, sweet candles to blow out, surprise gift vouchers, and your special destination link waiting below.
            </p>

            {/* THE PROMINENT MAIN BUTTON (linking to LINKKKKKPLSSSSSS) */}
            <div className="w-full sm:w-auto pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base md:text-lg font-bold text-white bg-gradient-to-r from-amber-500 via-amber-600 to-rose-500 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <PartyPopper className="w-5 h-5 transition-transform group-hover:rotate-12" />
                <span className="tracking-wide">Launch Birthday Portal</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Cheerful Song Audio Button */}
              <button
                onClick={() => {
                  triggerConfetti();
                  playHappyBirthdayTune();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <Music className="w-4 h-4 text-amber-600" />
                <span>Play Birthday Chime</span>
              </button>
            </div>

            {/* Destination Note for Transparency */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-mono bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-600 truncate max-w-xs sm:max-w-md">
                Destination: {mainLink}
              </span>
              <span>·</span>
              <span>Tap to visit your surprise</span>
            </div>

            {/* Quick Feature Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-amber-200/50 w-full">
              <a
                href="#candles"
                className="flex flex-col group p-2 rounded-lg hover:bg-amber-100/30 transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-amber-700">
                  <Cake className="w-3.5 h-3.5 text-amber-500" /> Option 1
                </span>
                <span className="text-xs text-slate-500 mt-0.5">Blow Candles</span>
              </a>

              <a
                href="#wishes"
                className="flex flex-col group p-2 rounded-lg hover:bg-amber-100/30 transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-amber-700">
                  <Heart className="w-3.5 h-3.5 text-rose-500" /> Option 2
                </span>
                <span className="text-xs text-slate-500 mt-0.5">Custom Wishes</span>
              </a>

              <a
                href="#gifts"
                className="flex flex-col group p-2 rounded-lg hover:bg-amber-100/30 transition-colors"
              >
                <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-amber-700">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Option 3
                </span>
                <span className="text-xs text-slate-500 mt-0.5">Unwrap Mystery</span>
              </a>
            </div>

          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-200/80 shadow-2xl bg-white p-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-amber-100">
                <img
                  src="/src/assets/images/birthday_cake_celebration_1793353172064.jpg"
                  alt={`Festive birthday celebration cake for ${profile.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Celebration tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="text-xs font-medium text-amber-200 uppercase tracking-wider">
                      Celebration Cake
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Make a wish & blow the candles
                    </p>
                  </div>
                  <button
                    onClick={triggerConfetti}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg shadow cursor-pointer transition-colors"
                  >
                    🎉 Cheer!
                  </button>
                </div>
              </div>

              {/* Under-photo celebratory caption */}
              <div className="p-3 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Every year is a gift. Let&apos;s celebrate it!
                </span>
                <span className="font-medium text-amber-700">Party Edition</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
