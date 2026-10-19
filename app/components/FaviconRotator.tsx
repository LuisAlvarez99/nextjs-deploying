'use client';

import { useEffect } from 'react';

// Rocket League Themed Rotating Tab Icons:
// ⚽ Soccar Ball (Classic Rocket League match ball)
// 🏎️ Octane / Battle-Car (Iconic Battle-Car)
// 🚀 Rocket Boost (Aerial turbo boost)
// 💥 Goal Explosion / Demo (Signature explosion)
// 🏆 RLCS Trophy (Grand Champion tier)
const ROCKET_LEAGUE_ICONS = ['⚽', '🏎️', '🚀', '💥', '🏆'];

export default function FaviconRotator() {
  useEffect(() => {
    let index = 0;

    const updateFavicon = (emoji: string) => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`;
      const dataUri = `data:image/svg+xml,${encodeURIComponent(svg)}`;

      let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.type = 'image/svg+xml';
      link.href = dataUri;
    };

    // Set initial Rocket League icon
    updateFavicon(ROCKET_LEAGUE_ICONS[0]);

    // Rotate every 2.5 seconds
    const interval = setInterval(() => {
      index = (index + 1) % ROCKET_LEAGUE_ICONS.length;
      updateFavicon(ROCKET_LEAGUE_ICONS[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return null;
}
