import React from 'https://esm.sh/react@18.2.0';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';
import ColorBends from './ColorBends.js';

const bgContainer = document.getElementById('color-bends-root');
if (bgContainer) {
  const root = createRoot(bgContainer);
  root.render(
    React.createElement(ColorBends, {
      colors: ["#ff5c7a", "#8a5cff", "#00ffd1"],
      rotation: 90,
      speed: 0.2,
      scale: 1,
      frequency: 1,
      warpStrength: 1,
      mouseInfluence: 1,
      noise: 0.02,
      parallax: 0.5,
      iterations: 1,
      intensity: 1.5,
      bandWidth: 6,
      transparent: true,
    })
  );
}
