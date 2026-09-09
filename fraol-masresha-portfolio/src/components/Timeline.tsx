import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiPrisma,
} from 'react-icons/si';
import { SectionHeading, Sheet } from './ui';

const techIcons: Record<string, { Icon: typeof SiReact; color: string }> = {
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  React: { Icon: SiReact, color: '#61DAFB' },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  Express: { Icon: SiExpress, color: '#000000' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Tailwind: { Icon: SiTailwindcss, color: '#06B6D4' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'Next.js': { Icon: SiNextdotjs, color: '#000000' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Prisma: { Icon: SiPrisma, color: '#2D3748' },
};

interface Entry {
  year: string;
  role: string;
  title: string;
  note: string;
  tech: string[];
  current?: boolean;
}

const entries: Entry[] = [
  { year: '2022', role: 'The Beginning', title: 'Genesis', note: 'Learning the fundamentals of the web from scratch.', tech: ['HTML', 'CSS', 'JavaScript'] },
  { year: '2023', role: 'React Ecosystem', title: 'Frontend Craft', note: 'Mastering React and modern UI frameworks to build fast interfaces.', tech: ['React', 'Tailwind', 'JavaScript', 'Node.js'] },
  { year: '2024', role: 'MERN Architecture', title: 'Full-Stack', note: 'Building complete applications with Node, Express, MongoDB and authentication.', tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'] },
  { year: '2025', role: 'TypeScript & Scale', title: 'Architecture Focus', note: 'Sharpening code quality with TypeScript and clean, maintainable architecture.', tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Docker', 'Prisma'] },
  { year: '2026', role: 'Current Chapter', title: 'Innovation & Leadership', note: 'Leading teams and building real-time, scalable products people rely on.', tech: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Docker'], current: true },
];

function TimelineCard({ entry }: { entry: Entry }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className="group relative min-w-[280px] max-w-[320px] shrink-0 snap-center"
    >
      <div className="rounded-3xl border border-line bg-canvas/60 p-5 transition-all duration-300 group-hover:border-line-strong group-hover:bg-canvas">
        {/* Year + Status */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-placeholder">
            {entry.year}
          </span>
          {entry.current && (
            <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold text-canvas">
              Current
            </span>
          )}
        </div>

        {/* Title */}
        <p className="mt-2 text-base font-semibold text-heading dark:text-ink">
          {entry.title}
          <span className="ml-2 text-xs font-medium text-muted">{entry.role}</span>
        </p>

        {/* Description */}
        <p className="mt-1.5 text-xs leading-relaxed text-muted">{entry.note}</p>

        {/* Tech Stack */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.tech.map((t) => {
            const entry = techIcons[t];
            if (!entry) return null;
            const { Icon, color } = entry;
            return (
              <span
                key={t}
                title={t}
                className="grid h-7 w-7 place-items-center rounded-lg border border-line bg-surface text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas"
              >
                <Icon size={13} style={{ color }} />
              </span>
            );
          })}
        </div>
      </div>

      {/* Connector dot */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <span
          className={`block h-2.5 w-2.5 rounded-full ring-4 ring-surface ${
            entry.current ? 'bg-ink' : 'border border-line bg-canvas'
          }`}
        />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <Sheet id="timeline" className="px-6 pb-10 sm:px-10">
      <SectionHeading
        eyebrow="Experience"
        title={<span>The path <span className="text-muted">so far.</span></span>}
        sub="A short record of the journey — from first line of code to building products today."
      />

      {/* Horizontal Timeline */}
      <div className="relative mt-8">
        {/* Horizontal line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-line" />

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 pt-4 scrollbar-none sm:justify-center">
          {entries.map((entry) => (
            <TimelineCard key={entry.year} entry={entry} />
          ))}
        </div>
      </div>
    </Sheet>
  );
}
