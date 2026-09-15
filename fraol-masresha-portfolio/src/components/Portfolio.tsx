import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiD3,
  SiFastapi,
  SiPostgresql,
  SiSocketdotio,
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiJsonwebtokens,
  SiRazorpay,
} from 'react-icons/si';
import { SectionHeading, Sheet } from './ui';
import { staggerParent, staggerItem, EASE } from '../lib/motion';
import childrenMsImg from '../assets/children ms.png';

const techIcons: Record<string, { Icon: typeof SiReact; color: string }> = {
  React: { Icon: SiReact, color: '#61DAFB' },
  'Node.js': { Icon: SiNodedotjs, color: '#339933' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Express: { Icon: SiExpress, color: '#FFFFFF' },
  Tailwind: { Icon: SiTailwindcss, color: '#06B6D4' },
  Python: { Icon: SiPython, color: '#3776AB' },
  TensorFlow: { Icon: SiTensorflow, color: '#FF6F00' },
  'D3.js': { Icon: SiD3, color: '#F9A03C' },
  FastAPI: { Icon: SiFastapi, color: '#009688' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169E1' },
  'Socket.io': { Icon: SiSocketdotio, color: '#FFFFFF' },
  Terraform: { Icon: SiTerraform, color: '#7B42BC' },
  Docker: { Icon: SiDocker, color: '#2496ED' },
  Kubernetes: { Icon: SiKubernetes, color: '#326CE5' },
  'React Native': { Icon: SiReact, color: '#61DAFB' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },
  JWT: { Icon: SiJsonwebtokens, color: '#FB015B' },
  Razorpay: { Icon: SiRazorpay, color: '#072654' },
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  year: string;
  private?: boolean;
}

const projects: Project[] = [
  {
    title: 'Children Management System',
    description:
      'A private church children management platform for registration, attendance tracking, classes, and guardian check-in/out — secured with JWT authentication.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    link: '#',
    image: childrenMsImg,
    year: '2026',
    private: true,
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics with machine-learning predictions and data visualization.',
    tech: ['Python', 'TensorFlow', 'React', 'D3.js', 'FastAPI'],
    link: '#',
    year: '2024',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task tracking with team workspaces and project dashboards.',
    tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
    link: '#',
    year: '2024',
  },
  {
    title: 'Cloud Migration Suite',
    description: 'Enterprise tooling for cloud migration, monitoring, and seamless transitions.',
    tech: ['AWS', 'Terraform', 'Python', 'Docker', 'Kubernetes'],
    link: '#',
    year: '2024',
  },
  {
    title: 'Social Media App',
    description: 'Cross-platform app with real-time messaging and content sharing.',
    tech: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
    link: '#',
    year: '2023',
  },
  {
    title: 'Food Delivery App',
    description: 'Online ordering with live order tracking and integrated payments.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
    link: '#',
    year: '2023',
  },
];

/* Corner brackets framing the project screen */
function Corners() {
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute -left-2.5 -top-2.5 h-4 w-4 border-l-2 border-t-2 border-ink" />
      <span aria-hidden className="pointer-events-none absolute -right-2.5 -top-2.5 h-4 w-4 border-r-2 border-t-2 border-ink" />
      <span aria-hidden className="pointer-events-none absolute -bottom-2.5 -left-2.5 h-4 w-4 border-b-2 border-l-2 border-ink" />
      <span aria-hidden className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-4 w-4 border-b-2 border-r-2 border-ink" />
    </>
  );
}

/* Screen content — full image fit inside the frame, initials fallback */
function ScreenBody({ project }: { project: Project }) {
  return project.image ? (
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-contain p-2 sm:p-3"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <span className="font-display text-7xl font-extrabold tracking-tighter text-line">
          {project.title.slice(0, 2)}
        </span>
        <p className="mt-2 font-mono text-sm text-placeholder">{project.year}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const selected = projects[index];
  const trackRef = useRef<HTMLDivElement>(null);
  const syncingRef = useRef(false);

  const goTo = (i: number) =>
    setIndex(((i % projects.length) + projects.length) % projects.length);

  /* Mobile carousel — scroll position follows the selected slide */
  useEffect(() => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    syncingRef.current = true;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    const t = window.setTimeout(() => {
      syncingRef.current = false;
    }, 600);
    return () => window.clearTimeout(t);
  }, [index]);

  /* Mobile carousel — selected slide follows manual swipes */
  const onTrackScroll = () => {
    if (syncingRef.current) return;
    const track = trackRef.current;
    const slide = track?.children[0] as HTMLElement | undefined;
    if (!track || !slide) return;
    const step = slide.offsetWidth + 16;
    const next = Math.round(track.scrollLeft / step);
    if (next !== index && next >= 0 && next < projects.length) setIndex(next);
  };

  return (
    <Sheet id="portfolio" className="px-6 pb-10 sm:px-10">
      <SectionHeading
        eyebrow="Selected Work"
        title={<span>A selection of things <span className="text-muted">I&apos;ve built.</span></span>}
        sub="A few projects that show how I think about product, craft, and code."
      />

      {/* Desktop — index | screen | detail */}
      <div className="mt-14 hidden items-center gap-10 md:grid md:grid-cols-[minmax(190px,22%)_1fr_minmax(220px,25%)] lg:gap-14">
          {/* Left — project index */}
          <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            {projects.map((project, i) => (
              <motion.li key={project.title} variants={staggerItem}>
                <button
                  onClick={() => setIndex(i)}
                  className={`group flex w-full items-center gap-3 py-2.5 text-left font-display text-[15px] font-medium tracking-tight transition-colors duration-200 ${
                    i === index ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  <span
                    className={`h-px shrink-0 bg-ink transition-all duration-300 ${
                      i === index ? 'w-5' : 'w-0 group-hover:w-3'
                    }`}
                  />
                  <span className={`flex-1 ${i === index ? 'font-semibold' : ''}`}>{project.title}</span>
                  <span className={`text-[12px] ${i === index ? 'text-ink' : 'text-placeholder'}`}>
                    {project.year}
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>

          {/* Middle — project screen */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <Corners />
            <div className="group relative aspect-[16/10] overflow-hidden border border-line bg-surface">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.title}
                  initial={{ opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="absolute inset-0"
                >
                  <ScreenBody project={selected} />
                </motion.div>
              </AnimatePresence>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-ink/50 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                {selected.private ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl">
                    <Lock size={15} />
                    Personal project
                  </span>
                ) : (
                  <a
                    href={selected.link}
                    target={selected.link.startsWith('http') ? '_blank' : undefined}
                    rel={selected.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:bg-ink hover:text-canvas"
                  >
                    Visit Project
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right — detail */}
          <div className="flex flex-col justify-center gap-6">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-placeholder">{selected.year}</p>
            <p className="text-justify font-mono text-[13px] uppercase leading-[1.9] tracking-[0.05em] text-body">
              {selected.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {selected.tech.map((t) => {
                const entry = techIcons[t];
                if (!entry) return null;
                const { Icon, color } = entry;
                return (
                  <span
                    key={t}
                    title={t}
                    className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur-md transition-colors duration-200 hover:bg-ink hover:text-canvas"
                  >
                    <Icon size={14} style={{ color }} />
                  </span>
                );
              })}
            </div>
            {selected.private ? (
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-xs font-semibold text-body">
                <Lock size={13} />
                Personal project
              </span>
            ) : (
              <a
                href={selected.link}
                target={selected.link.startsWith('http') ? '_blank' : undefined}
                rel={selected.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-canvas transition-opacity duration-200 hover:opacity-85"
              >
                Visit Project
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>

        {/* Mobile — carousel */}
        <div className="mt-8 md:hidden">
          <div
            ref={trackRef}
            onScroll={onTrackScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((p) => (
              <article key={p.title} className="w-[80%] shrink-0 snap-center">
                <div className="aspect-[16/10] overflow-hidden border border-line bg-surface">
                  <ScreenBody project={p} />
                </div>
                <div className="pt-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-bold tracking-tight text-ink">{p.title}</h3>
                    <span className="font-mono text-xs text-placeholder">{p.year}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.private ? (
                    <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold text-body">
                      <Lock size={13} />
                      Personal project
                    </span>
                  ) : (
                    <a
                      href={p.link}
                      target={p.link.startsWith('http') ? '_blank' : undefined}
                      rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-canvas transition-opacity duration-200 hover:opacity-85"
                    >
                      Visit Project
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-5 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous project"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next project"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="flex gap-1.5">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${p.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-ink' : 'w-1.5 bg-line'}`}
                />
              ))}
            </div>
          </div>
        </div>
    </Sheet>
  );
}
