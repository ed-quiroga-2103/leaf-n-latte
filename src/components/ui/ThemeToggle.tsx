// components/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
    console.log('Theme set to:', document.documentElement.dataset.theme);
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="btn btn-outline px-3 py-2"
      aria-pressed={dark}
      aria-label="Toggle theme"
    >
      {dark ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
