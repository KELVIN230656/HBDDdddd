/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BirthdayCake } from './components/BirthdayCake';
import { WishCapsule } from './components/WishCapsule';
import { GiftUnboxer } from './components/GiftUnboxer';
import { PortalCard } from './components/PortalCard';
import { Footer } from './components/Footer';
import { PersonalizationModal } from './components/PersonalizationModal';
import { CelebrantProfile } from './types';
import { Cake, Heart, Gift, Sparkles, ExternalLink } from 'lucide-react';

export default function App() {
  // Main button target link explicitly defaulted to the requested placeholder
  const [mainLink, setMainLink] = useState<string>('LINKKKKKPLSSSSSS');

  // Celebrant profile details
  const [profile, setProfile] = useState<CelebrantProfile>({
    name: 'Alex',
    age: '25th',
    senderName: 'Your Favorite People',
    date: 'Today',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 text-slate-900">
      {/* Top Navigation Bar with Top Bar Contract */}
      <Navbar
        mainLink={mainLink}
        onOpenSettings={() => setIsModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Marquee Announcement & Prominent Main Button */}
        <Hero
          profile={profile}
          mainLink={mainLink}
          onEditProfile={() => setIsModalOpen(true)}
        />

        {/* Celebration Options Hub Navigation */}
        <section id="options-overview" className="py-12 bg-white/70 border-y border-amber-200/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-700">
                  Your Birthday Journey
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  Choose Your Celebration Experience
                </h2>
              </div>
              <p className="text-sm text-slate-500 max-w-md">
                Three bespoke options crafted to celebrate {profile.name}, plus the main portal button.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Option 1 Card */}
              <a
                href="#candles"
                className="group p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 hover:bg-white hover:shadow-lg hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
                    <Cake className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    Option 01
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Candle Ritual
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Blow out the interactive candles, make a wish, and trigger golden confetti.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200/40 text-xs font-semibold text-amber-700 group-hover:translate-x-1 transition-transform">
                  Blow Candles &rarr;
                </div>
              </a>

              {/* Option 2 Card */}
              <a
                href="#wishes"
                className="group p-6 rounded-2xl bg-rose-50/60 border border-rose-200/80 hover:bg-white hover:shadow-lg hover:border-rose-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">
                    Option 02
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Wish Capsule
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Personalized heartfelt, humorous, and inspiring quotes for {profile.name}.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-rose-200/40 text-xs font-semibold text-rose-700 group-hover:translate-x-1 transition-transform">
                  Read Wishes &rarr;
                </div>
              </a>

              {/* Option 3 Card */}
              <a
                href="#gifts"
                className="group p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 hover:bg-white hover:shadow-lg hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                    <Gift className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                    Option 03
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Mystery Gift
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Pull the satin bow to unbox curated celebration treats and vouchers.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-indigo-200/40 text-xs font-semibold text-indigo-700 group-hover:translate-x-1 transition-transform">
                  Unwrap Now &rarr;
                </div>
              </a>

              {/* Main Button Shortcut */}
              <a
                href={mainLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200">
                    Main Portal
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Launch Destination
                  </h3>
                  <p className="text-xs text-amber-100 mt-2 leading-relaxed">
                    Direct link pointing to <span className="font-mono underline">{mainLink}</span>.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 text-xs font-bold text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Open {mainLink}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Option 1: Candle Ritual */}
        <BirthdayCake celebrantName={profile.name} />

        {/* Option 2: Wish Capsule */}
        <WishCapsule profile={profile} />

        {/* Option 3: Gift Unboxing */}
        <GiftUnboxer
          mainLink={mainLink}
          celebrantName={profile.name}
        />

        {/* Main Portal Spotlight Section */}
        <PortalCard
          mainLink={mainLink}
          onUpdateLink={(newLink) => setMainLink(newLink)}
          celebrantName={profile.name}
        />
      </main>

      {/* Footer */}
      <Footer mainLink={mainLink} />

      {/* Personalization Modal */}
      <PersonalizationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        profile={profile}
        onSave={(updatedProfile) => setProfile(updatedProfile)}
      />
    </div>
  );
}
