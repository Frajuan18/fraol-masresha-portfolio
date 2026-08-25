import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading, Sheet } from './ui';
import { staggerItem, staggerParent } from '../lib/motion';

interface Entry {
  year: string;
  role: string;
  title: string;
  note: string;
  current?: boolean;
}

const entries: Entry[] = [
  { year: '2022', role: 'The Beginning', title: 'Genesis', note: 'Learning the fundamentals of the web from scratch.' },
  { year: '2023', role: 'React Ecosystem', title: 'Frontend Craft', note: 'Mastering React and modern UI frameworks to build fast interfaces.' },
  { year: '2024', role: 'MERN Architecture', title: 'Full-Stack', note: 'Building complete applications with Node, Express, MongoDB and authentication.' },
  { year: '2025', role: 'TypeScript & Scale', title: 'Architecture Focus', note: 'Sharpening code quality with TypeScript and clean, maintainable architecture.' },
  { year: '2026', role: 'Current Chapter', title: 'Innovation & Leadership', note: 'Leading teams and building real-time, scalable products people rely on.', current: true },
];

export default function Timeline() {
  return (
    <Sheet id="timeline" className="px-6 pb-10 sm:px-10">
      <SectionHeading
        eyebrow="Experience"
        title={<span>The path <span className="text-muted">so far.</span></span>}
        sub="A short record of the journey — from first line of code to building products today."
      />

      <div className="relative mx-auto mt-6 max-w-xl">
        <span aria-hidden="true" className="absolute bottom-6 left-[5px] top-2 w-px bg-line" />

        <motion.ul variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="space-y-6">
          {entries.map((entry) => (
            <motion.li key={entry.year} variants={staggerItem} className="relative pl-9">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-surface ${
                  entry.current ? 'bg-ink' : 'border border-line bg-canvas'
                }`}
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-placeholder">
                  {entry.year}
                </span>
                {entry.current && (
                  <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold text-canvas">
                    Current
                  </span>
                )}
              </div>
              <div className="mt-1.5 flex items-start justify-between gap-3">
                <div>
                  <p className="body-sm font-semibold text-heading dark:text-ink">
                    {entry.title}
                    <span className="ml-2 text-xs font-medium text-muted">{entry.role}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{entry.note}</p>
                </div>
                {entry.current && (
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-ink" aria-hidden="true" />
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Sheet>
  );
}
