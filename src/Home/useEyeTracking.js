import { useEffect, useState } from 'react';

export function useEyeTracking() {
  const [position, setPosition] = useState({ left: '50%', top: '50%', transition: '0.3s' });

  useEffect(() => {
    const move = (event) => setPosition({
      left: `${event.clientX * 100 / window.innerWidth}%`,
      top: `${event.clientY * 100 / window.innerHeight}%`,
      transition: '0s',
    });
    const reset = (event) => {
      if (!event.relatedTarget) {
        setPosition({ left: '50%', top: '50%', transition: '0.3s' });
      }
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseout', reset);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseout', reset);
    };
  }, []);

  return position;
}
