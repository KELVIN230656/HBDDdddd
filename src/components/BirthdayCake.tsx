import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, Wind, RotateCcw, CheckCircle2 } from 'lucide-react';
import { playBlowSound, playFanfare } from '../utils/audio';

interface BirthdayCakeProps {
  celebrantName: string;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ celebrantName }) => {
  // 5 interactive candles: true = lit, false = blown out
  const [candles, setCandles] = useState<boolean[]>([true, true, true, true, true]);
  const [wishMade, setWishMade] = useState(false);

  const litCount = candles.filter(Boolean).length;
  const allBlownOut = litCount === 0;

  const handleCandleClick = (index: number) => {
    if (!candles[index]) return; // already blown out
    playBlowSound();

    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);

    // If this was the last candle
    if (newCandles.filter(Boolean).length === 0) {
      setWishMade(true);
      playFanfare();
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#F43F5E', '#10B981', '#3B82F6', '#8B5CF6'],
      });
    }
  };

  const blowAllOut = () => {
    playBlowSound();
    setCandles([false, false, false, false, false]);
    setWishMade(true);
    playFanfare();
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#F43F5E', '#10B981', '#3B82F6', '#8B5CF6'],
    });
  };

  const relightCandles = () => {
    setCandles([true, true, true, true, true]);
    setWishMade(false);
  };

  return (
    <section id="candles" className="py-16 md:py-20 bg-gradient-to-b from-transparent via-amber-100/40 to-transparent">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 bg-amber-100/80 px-3 py-1 rounded-md">
            Option 1 · The Birthday Ritual
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
            Make a Wish & Blow Out the Candles
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Click on individual flames to blow them out one by one, or take a deep breath and extinguish all 5 at once!
          </p>
        </div>

        {/* Interactive Cake Container */}
        <div className="bg-white rounded-2xl border border-amber-200/80 shadow-xl p-8 sm:p-12 relative overflow-hidden text-center">
          
          {/* Status Counter */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-xs font-medium text-slate-500">
              Candles Glowing:
            </span>
            <span className="font-mono font-bold text-sm bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
              {litCount} of 5
            </span>
          </div>

          {/* Stylized Illustrated Cake with Candles */}
          <div className="relative mx-auto w-72 sm:w-80 h-56 flex flex-col items-center justify-end">
            
            {/* Candles Row */}
            <div className="flex items-end justify-center gap-5 sm:gap-6 z-20 mb-2">
              {candles.map((isLit, idx) => (
                <div
                  key={idx}
                  onClick={() => handleCandleClick(idx)}
                  className="flex flex-col items-center cursor-pointer group select-none"
                  title={isLit ? 'Click to blow out candle' : 'Candle blown out'}
                >
                  {/* Candle Flame or Smoke */}
                  <div className="h-8 flex items-center justify-center">
                    {isLit ? (
                      <div className="w-4 h-6 bg-gradient-to-t from-amber-500 via-yellow-300 to-yellow-100 rounded-full animate-flame shadow-[0_0_12px_rgba(251,191,36,0.9)] group-hover:scale-125 transition-transform" />
                    ) : (
                      <div className="text-slate-400 text-xs font-mono opacity-60">
                        ~
                      </div>
                    )}
                  </div>

                  {/* Candle Wick */}
                  <div className="w-0.5 h-2 bg-slate-700" />

                  {/* Candle Wax Body */}
                  <div
                    className={`w-3.5 h-16 rounded-t-sm border border-slate-300/40 shadow-inner ${
                      idx % 2 === 0
                        ? 'bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400'
                        : 'bg-gradient-to-b from-rose-200 via-rose-300 to-rose-400'
                    }`}
                  >
                    {/* Decorative spiral stripes */}
                    <div className="w-full h-full opacity-30 flex flex-col justify-around py-1">
                      <div className="w-full h-0.5 bg-white" />
                      <div className="w-full h-0.5 bg-white" />
                      <div className="w-full h-0.5 bg-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cake Top Tier */}
            <div className="w-64 sm:w-72 h-16 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-200 rounded-t-2xl border-t-4 border-amber-300 shadow-md relative z-10 flex items-center justify-center">
              <span className="text-xs font-semibold tracking-wider text-amber-800">
                ★ {celebrantName} ★
              </span>
            </div>

            {/* Cake Bottom Tier */}
            <div className="w-72 sm:w-80 h-20 bg-gradient-to-b from-amber-200 via-amber-100 to-amber-300 rounded-t-lg border-t-4 border-rose-300 shadow-lg relative flex items-center justify-center">
              <div className="text-center">
                <span className="text-xs font-bold text-slate-800 tracking-widest uppercase">
                  Happy Birthday
                </span>
              </div>
            </div>

            {/* Cake Stand Plate */}
            <div className="w-80 sm:w-96 h-4 bg-slate-200 border border-slate-300 rounded-full shadow-md -mt-1" />
            <div className="w-28 h-6 bg-slate-300 rounded-b-xl border border-slate-400/50 shadow-inner" />
          </div>

          {/* Success Banner when all candles are out */}
          {allBlownOut && (
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border border-amber-300 rounded-xl shadow-md max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-lg mb-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span>All Candles Extinguished!</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Your birthday wish has officially been locked into the universe! May this year bring you boundless happiness, health, and wild success.
              </p>
            </div>
          )}

          {/* Action Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {!allBlownOut ? (
              <button
                onClick={blowAllOut}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <Wind className="w-4 h-4 text-amber-300" />
                <span>Blow Out All Candles</span>
              </button>
            ) : (
              <button
                onClick={relightCandles}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-amber-700" />
                <span>Relight Candles</span>
              </button>
            )}

            <button
              onClick={() => {
                confetti({
                  particleCount: 50,
                  spread: 60,
                  origin: { y: 0.7 },
                });
              }}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Flame className="w-4 h-4 text-rose-500" />
              <span>Sparkle Cheers</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
