import { useEffect } from 'react';

export default function Theme() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (theme === 'light' || (!theme && prefersLight)) {
      document.documentElement.classList.add('light');
    } else if (theme) {
      theme.split(' ').forEach((className) => {
        document.documentElement.classList.add(className);
      });
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return null; // This component does not render anything
}
