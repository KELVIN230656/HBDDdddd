import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, RefreshCw, CheckCircle, ExternalLink } from 'lucide-react';
import { SurpriseGift } from '../types';
import { playFanfare } from '../utils/audio';

interface GiftUnboxerProps {
  mainLink: string;
  celebrantName: string;
}

export const GiftUnboxer: React.FC<GiftUnboxerProps> = ({ mainLink, celebrantName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGiftIndex, setActiveGiftIndex] = useState(0);

  const surpriseGifts: SurpriseGift[] = [
    {
      id: 'gift-1',
      title: 'Fine Dining Birthday Feast',
      description: `A delicious celebratory dinner treat at your favorite restaurant of choice with friends or family. Good food & great memories on your special day!`,
      tag: 'Gourmet Treat',
      code: 'BDAY-FEAST-2026',
    },
    {
      id: 'gift-2',
      title: 'Ultimate Coffee & Pastry Pass',
      description: `Unlimited specialty lattes, cold brews, and warm birthday pastries for your celebratory week. Caffeine and sweetness unlocked!`,
      tag: 'Sweet Moments',
      code: 'SWEET-TREAT-99',
    },
    {
      id: 'gift-3',
      title: 'Movie Night & Popcorn Extravaganza',
      description: `Gold-class cinema tickets with extra buttery popcorn and VIP recliners for any movie release you want to see next!`,
      tag: 'Entertainment Pass',
      code: 'CINEMA-VIP-PASS',
    },
    {
      id: 'gift-4',
      title: 'Direct Portal Pass to Mystery Destination',
      description: `An all-access pass leading directly through the main button to ${mainLink}. Your custom digital surprise awaits!`,
      tag: 'Digital Portal',
      code: 'LINKKKKKPLSSSSSS-KEY',
    },
  ];

  const handleOpenGift = () => {
    setIsOpen(true);
    playFanfare();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#10B981', '#6366F1', '#EC4899'],
    });
  };

  const handleNextGift = () => {
    setActiveGiftIndex((prev) => (prev + 1) % surpriseGifts.length);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  const currentGift = surpriseGifts[activeGiftIndex];

  return (
    <section id="gifts" className="py-16 md:py-20 bg-amber-50/50">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-700 bg-indigo-100/80 px-3 py-1 rounded-md">
            Option 3 · Surprise Unboxing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Unwrap Your Birthday Mystery Gift
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Every birthday deserves a wrapped mystery. Tap to pull the satin bow and reveal what&apos;s waiting inside!
          </p>
        </div>

        {/* Unboxing Container */}
        <div className="bg-white rounded-2xl border border-indigo-200/80 shadow-xl overflow-hidden grid md:grid-cols-12 items-center">
          
          {/* Photo Visual Slot */}
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full bg-slate-100 overflow-hidden">
            <img
              src="/src/assets/images/birthday_gift_surprise_1793353172600.jpg"
              alt="Luxury wrapped birthday gift box"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-3 left-4 md:hidden text-white font-medium text-xs">
              Mystery Box for {celebrantName}
            </div>
          </div>

          {/* Interactive Content Slot */}
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            
            {!isOpen ? (
              <div className="text-center md:text-left space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Ready to be opened</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  A Gift Box with Satin Ribbon
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Inside this box is a curated birthday treat voucher selected just for you. Break the seal, unfasten the ribbon, and uncover the perk!
                </p>

                <div>
                  <button
                    onClick={handleOpenGift}
                    className="inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Gift className="w-5 h-5" />
                    <span>Unwrap Surprise Box</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Gift Unwrapped!
                  </span>
                  <span className="text-xs text-slate-400">
                    Voucher {activeGiftIndex + 1} of {surpriseGifts.length}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    {currentGift.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {currentGift.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {currentGift.description}
                  </p>
                </div>

                {/* Perk Voucher Box */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                      Celebration Code
                    </p>
                    <p className="text-sm font-mono font-bold text-slate-800">
                      {currentGift.code}
                    </p>
                  </div>
                  <a
                    href={mainLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <span>Claim at Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Voucher Switcher & Main Button */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handleNextGift}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-slate-600" />
                    <span>Try Another Gift ({activeGiftIndex + 1}/{surpriseGifts.length})</span>
                  </button>

                  <a
                    href={mainLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-lg shadow-sm transition-all"
                  >
                    <span>Go to {mainLink}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
