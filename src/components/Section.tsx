import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "muted";
};

export function Section({ id, eyebrow, title, children, tone = "default" }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 px-6 py-20 lg:px-16 ${
        tone === "muted" ? "bg-zinc-50/80 dark:bg-white/[0.025]" : ""
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-300" />
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                {eyebrow}
              </p>
            ) : null}
          </div>
          <h2 className="text-3xl font-bold leading-tight text-zinc-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
}
