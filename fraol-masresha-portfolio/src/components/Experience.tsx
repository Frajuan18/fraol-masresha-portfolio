import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeading, Sheet } from './ui';
import { EASE } from '../lib/motion';

type ExperienceEntry = {
  year: string;
  role: string;
  org: string;
  summary: string;
  tech: string[];
  details: string[];
  current?: boolean;
};

/* Chronology assembled from the projects and studies already in this portfolio */
const ENTRIES: ExperienceEntry[] = [
  {
    year: '2026',
    current: true,
    role: 'Full-Stack Developer',
    org: 'Personal / Freelance',
    summary:
      'Building full-stack products with modern web technologies — most recently a private Children Management System for registration, attendance tracking, classes, and guardian check-in/out.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    details: [
      'Designed and shipped the Children Management System end to end — MERN stack with JWT-secured roles and guardian check-in flows.',
      'Building this portfolio as a live exercise in interaction detail, motion, and typography.',
    ],
  },
  {
    year: '2024',
    role: 'Developer',
    org: 'Project Work',
    summary:
      'Shipped three products across the stack — an AI analytics dashboard, a collaborative task manager, and enterprise cloud-migration tooling.',
    tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Socket.io'],
    details: [
      'AI Analytics Dashboard — real-time analytics with machine-learning predictions and D3.js visualization.',
      'Task Management System — team workspaces and project dashboards with live updates.',
      'Cloud Migration Suite — migration, monitoring, and seamless cloud transitions.',
    ],
  },
  {
    year: '2023',
    role: 'Developer',
    org: 'Project Work',
    summary:
      'Started building cross-platform mobile products — a real-time social platform and an on-demand food-delivery app with live order tracking.',
    tech: ['React Native', 'Firebase', 'Node.js', 'Razorpay'],
    details: [
      'Social Media App — cross-platform messaging and content sharing in real time.',
      'Food Delivery App — online ordering, live tracking, and integrated payments.',
    ],
  },
];

function CurrentTag() {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
      <span className="h-1 w-1 rounded-full bg-emerald-500" />
      Current
    </span>
  );
}

function Entry({
  entry,
  index,
  open,
  onToggle,
}: {
  entry: ExperienceEntry;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      className="group relative grid grid-cols-[15px_1fr] gap-x-5 pb-12 last:pb-0 lg:grid-cols-[9rem_15px_1fr]"
    >
      {/* Date — left column on desktop */}
      <div
        className={`hidden pt-[7px] font-mono text-[11px] font-bold uppercase tracking-[0.16em] lg:col-start-1 lg:row-start-1 lg:block ${
          entry.current ? 'text-ink' : 'text-placeholder'
        }`}
      >
        {entry.year}
        {entry.current && (
          <div className="mt-2">
            <CurrentTag />
          </div>
        )}
      </div>

      {/* Date — moved above the entry on mobile */}
      <div
        className={`col-start-2 row-start-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em] lg:hidden ${
          entry.current ? 'text-ink' : 'text-placeholder'
        }`}
      >
        {entry.year}
        {entry.current && (
          <span className="ml-3">
            <CurrentTag />
          </span>
        )}
      </div>

      {/* Timeline dot */}
      <div className="col-start-1 row-start-2 pt-[13px] lg:col-start-2 lg:row-start-1">
        <span
          className={`block h-[9px] w-[9px] rounded-full transition-all duration-300 ${
            entry.current
              ? 'bg-emerald-500 ring-4 ring-emerald-500/15 group-hover:ring-emerald-500/30'
              : 'bg-line-strong group-hover:scale-125 group-hover:bg-ink'
          }`}
        />
      </div>

      {/* Content */}
      <div className="col-start-2 row-start-2 lg:col-start-3 lg:row-start-1">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-start justify-between gap-4 text-left"
        >
          <span>
            <span
              className={`block font-display text-xl tracking-[-0.02em] text-ink transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-2xl ${
                entry.current ? 'font-bold' : 'font-semibold'
              }`}
            >
              {entry.role}
              {entry.current && (
                <span className="ml-3 align-middle lg:hidden">
                  <CurrentTag />
                </span>
              )}
            </span>
            <span className="mt-1 block font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-muted transition-colors duration-300 group-hover:text-body">
              {entry.org}
            </span>
          </span>
          <Plus
            size={16}
            aria-hidden="true"
            className={`mt-2 shrink-0 text-placeholder transition-all duration-300 group-hover:text-ink ${
              open ? 'rotate-45' : ''
            }`}
          />
        </button>

        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-body">
          {entry.summary}
        </p>

        <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-placeholder transition-colors duration-300 group-hover:text-muted">
          {entry.tech.join('  ·  ')}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {entry.details.map((detail) => (
                  <li key={detail} className="flex gap-3 text-sm leading-relaxed text-body">
                    <span aria-hidden="true" className="mt-[9px] h-px w-3 shrink-0 bg-line-strong" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Sheet id="experience" className="px-6 py-14 sm:px-10 sm:py-20">
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-muted">Been.</span>
          </>
        }
        sub="A timeline of the work, projects, and experiences that shaped how I build."
      />

      <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
        {/* The continuous timeline line — runs through the dot column */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-2 left-[7px] top-[8px] w-px bg-line lg:left-[calc(9rem+7px)]"
          />
          {ENTRIES.map((entry, index) => (
            <Entry
              key={entry.year}
              entry={entry}
              index={index}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Quiet footnote — studies, from the About section */}
        <div className="mt-12 flex items-center gap-3 border-t border-line pt-6">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
            3rd year — BSc Information Systems, Addis Ababa University
          </p>
        </div>
      </div>
    </Sheet>
  );
}
