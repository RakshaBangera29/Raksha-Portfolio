import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../hooks/useCountUp";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, isInView);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
