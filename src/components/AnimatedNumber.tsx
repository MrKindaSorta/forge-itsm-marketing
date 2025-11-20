import { useState, useEffect } from 'react';
import { useSpring, useTransform } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  format?: (value: number) => string;
  className?: string;
}

export function AnimatedNumber({ value, format, className }: AnimatedNumberProps) {
  const spring = useSpring(value, {
    stiffness: 100,
    damping: 30,
    mass: 0.8
  });
  const display = useTransform(spring, (current) =>
    format ? format(Math.round(current)) : Math.round(current).toString()
  );

  const [displayValue, setDisplayValue] = useState(
    format ? format(value) : value.toString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  useEffect(() => {
    return display.on('change', (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return <span className={className}>{displayValue}</span>;
}
