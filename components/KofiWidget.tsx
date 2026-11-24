'use client';

import Script from 'next/script';

declare global {
  interface Window {
    kofiWidgetOverlay?: {
      draw: (username: string, options: Record<string, string>) => void;
    };
  }
}

// Ko-fi's floating "Support my work" button on every page. Its position and
// width are overridden in app/globals.css to sit bottom-right.
export default function KofiWidget() {
  return (
    <Script
      src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"
      strategy="lazyOnload"
      onLoad={() => {
        window.kofiWidgetOverlay?.draw('gulfcoastmesh', {
          type: 'floating-chat',
          'floating-chat.donateButton.text': 'Support my work',
          'floating-chat.donateButton.background-color': '#00b9fe',
          'floating-chat.donateButton.text-color': '#fff',
        });
      }}
    />
  );
}
