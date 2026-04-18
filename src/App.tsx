import { motion } from "framer-motion";
import {
  ArrowDown,
  Award,
  BadgeCheck,
  CalendarDays,
  ExternalLink,
  FileText,
  Gauge,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Section } from "./components/Section";
import { portfolio } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";

type Theme = "dark" | "light";

const metricAccents = [
  {
    icon: ShieldCheck,
    className: "border-blue-100 bg-blue-50 text-blue-600",
  },
  {
    icon: Award,
    className: "border-violet-100 bg-violet-50 text-violet-600",
  },
  {
    icon: BadgeCheck,
    className: "border-teal-100 bg-teal-50 text-teal-600",
  },
  {
    icon: Gauge,
    className: "border-emerald-100 bg-emerald-50 text-emerald-600",
  },
];

function App() {
  const sectionIds = useMemo(
    () => ["about", "skills", "experience", "certifications", "contact"],
    [],
  );
  const activeId = useActiveSection(sectionIds);
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme-v2");
    return saved === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme-v2", theme);
  }, [theme]);

  const socialLinks = portfolio.contactLinks.filter((link) => link.href.startsWith("http"));

  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-blue-200 selection:text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(180deg,rgba(239,246,255,0.9),rgba(255,255,255,0.94)_32%,#f8fafc_100%)] dark:bg-[linear-gradient(180deg,#09090b,#111827_48%,#09090b_100%)]" />
      <Navbar
        activeId={activeId}
        theme={theme}
        onThemeToggle={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
      />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen scroll-mt-28 items-center overflow-hidden px-6 py-24 lg:px-16"
        >
          <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center justify-center gap-12 lg:flex-row lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Open to Work
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
                {portfolio.personal.name}
              </h1>
              <p className="mt-4 text-xl font-semibold text-blue-600 dark:text-blue-300 sm:text-2xl">
                QA Analyst & Automation Engineer
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 lg:mx-0">
                {portfolio.hero.subtitle}
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 lg:justify-start">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                <span>{portfolio.personal.location}</span>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#experience"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  View Experience
                  <ArrowDown className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-blue-300"
                >
                  Contact Me
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={portfolio.personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-blue-300"
                >
                  Download Resume
                  <FileText className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                      className="text-zinc-500 transition hover:-translate-y-0.5 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-300"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
              className="relative mx-auto w-full max-w-xs shrink-0 sm:max-w-sm lg:mx-0"
            >
              <div className="absolute -inset-4 rounded-md bg-blue-500/10 blur-2xl dark:bg-blue-400/15" />
              <div className="relative overflow-hidden rounded-md border border-blue-100 bg-white p-3 shadow-[0_26px_80px_rgba(37,99,235,0.18)] dark:border-blue-400/20 dark:bg-white/10">
                <div className="overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={portfolio.personal.portrait}
                    alt={`${portfolio.personal.name} portrait`}
                    className="aspect-[4/5] w-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title={portfolio.about.title} tone="muted">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                {portfolio.about.summary}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {portfolio.metrics.map((metric, index) => {
                  const MetricIcon = metricAccents[index % metricAccents.length].icon;
                  return (
                    <motion.div
                      key={metric.label}
                      whileHover={{ y: -4 }}
                      className="rounded-md border border-zinc-200 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06]"
                    >
                      <span className={`mb-4 grid h-10 w-10 place-items-center rounded-md border ${metricAccents[index % metricAccents.length].className}`}>
                        <MetricIcon className="h-5 w-5" />
                      </span>
                      <p className="text-3xl font-bold text-zinc-950 dark:text-white">
                        <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                        {metric.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-3">
              {portfolio.about.focusAreas.map((area) => (
                <motion.div
                  key={area}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 rounded-md border border-zinc-200 bg-white p-4 text-sm font-medium leading-6 text-zinc-700 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition hover:border-teal-200 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-200"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                  <span>{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Tools and judgment for reliable releases.">
          <div className="grid gap-5 md:grid-cols-2">
            {portfolio.skills.map((group) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  whileHover={{ y: -5 }}
                  className="rounded-md border border-zinc-200 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-zinc-200 bg-white shadow-sm dark:border-white/10">
                      {group.logo ? (
                        <img
                          src={group.logo}
                          alt={group.logoAlt ?? `${group.title} logo`}
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <Icon className="h-5 w-5 text-blue-600" />
                      )}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Enterprise QA work with measurable impact." tone="muted">
          <div className="space-y-5">
            {portfolio.experience.map((item) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                whileHover={{ y: -4 }}
                className="rounded-md border border-zinc-200 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:border-blue-200 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                      {item.company} · {item.location}
                    </p>
                    {item.projects ? (
                      <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-300">
                        Projects: {item.projects}
                      </p>
                    ) : null}
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200">
                    <CalendarDays className="h-4 w-4" />
                    {item.period}
                  </span>
                </div>
                <ul className="mt-5 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="certifications"
          eyebrow="Certifications"
          title="Salesforce credentials that support the QA work."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.certifications.map((certification) => (
              <motion.article
                key={certification.title}
                whileHover={{ y: -5 }}
                className="rounded-md border border-zinc-200 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)] transition hover:border-violet-200 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-zinc-200 bg-white shadow-sm dark:border-white/10">
                    <img
                      src={certification.logo}
                      alt={certification.logoAlt}
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <BadgeCheck className="h-6 w-6 shrink-0 text-violet-600 dark:text-violet-300" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                  {certification.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {certification.issuer}
                </p>
                <p className="mt-5 text-sm font-semibold text-teal-600 dark:text-teal-300">
                  {certification.year}
                </p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s talk about cleaner releases." tone="muted">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Open to QA Analyst, Salesforce QA, automation-focused QA, API testing,
                and enterprise systems validation roles.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={portfolio.personal.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Download Resume
                  <FileText className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${portfolio.personal.email}`}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-blue-300"
                >
                  Send Email
                  <Send className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              {portfolio.contactLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group flex min-h-14 items-center gap-3 rounded-md border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-200 dark:hover:border-blue-300"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-teal-600 transition group-hover:scale-110 dark:text-teal-300" />
                    <span className="break-words underline decoration-transparent underline-offset-4 transition group-hover:decoration-blue-400">
                      {link.label}
                    </span>
                    {isExternal ? <ExternalLink className="ml-auto h-3.5 w-3.5 opacity-50" /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-200/70 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {portfolio.personal.name}.
        </p>
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
