import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

export function useAnimatedNumber(
  value: number,
  duration: number = 0.5,
  onUpdate: (latest: number) => void
) {
  const prevValue = useRef(value);

  useEffect(() => {
    const controls = animate(prevValue.current, value, {
      duration,
      ease: 'easeOut',
      onUpdate,
    });

    prevValue.current = value;

    return () => controls.stop();
  }, [value, duration, onUpdate]);
}
