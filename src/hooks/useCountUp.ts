import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      }
    };

    frame.current = requestAnimationFrame(animate);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, duration, target]);

  return value;
}
