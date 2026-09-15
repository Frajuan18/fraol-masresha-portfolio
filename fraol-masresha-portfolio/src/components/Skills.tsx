import { useRef } from 'react';
import type { ComponentType, CSSProperties } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { Sheet } from './ui';
import { EASE } from '../lib/motion';
import './AboutField.css';

type IconProps = { size?: number; style?: CSSProperties; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' };
type IconComponent = ComponentType<IconProps>;
type Tech = { name: string; Icon: IconComponent; color: string };
type Column = { duration: number; delay: number; items: Tech[] };

/* Skill pools — shared by the categorized index and the floating tile field.
   `color` is the brand hue used to tint each tile. */
const FRONTEND: Tech[] = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#8B5CF6' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3B82F6' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#EAB308' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Three.js', Icon: SiThreedotjs, color: '#F472B6' },
];

const BACKEND_CORE: Tech[] = [
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', Icon: SiExpress, color: '#F97316' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
];

const DATABASE: Tech[] = [
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Firebase', Icon: SiFirebase, color: '#F59E0B' },
];

const TOOLS: Tech[] = [
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#E879F9' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Figma', Icon: SiFigma, color: '#A259FF' },
  { name: 'Vercel', Icon: SiVercel, color: '#6366F1' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
];

/* Conveyor columns — speeds and phase offsets differ so no two columns move alike */
const COLUMNS: Column[] = [
  { duration: 36, delay: 0, items: FRONTEND },
  { duration: 44, delay: -11, items: [...BACKEND_CORE, ...DATABASE] },
  { duration: 40, delay: -18, items: TOOLS },
];

const ALL_TECH: Tech[] = Array.from(
  new Map(COLUMNS.flatMap((column) => column.items).map((tech) => [tech.name, tech])).values(),
);

/* Dock-style shadow shared by every tile */
const TILE_SHADOW =
  '0 10px 22px -6px rgba(0,0,0,0.35), 0 4px 10px -3px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)';
const TILE_SHADOW_HOVER =
  '0 18px 34px -8px rgba(0,0,0,0.4), 0 8px 14px -4px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.15)';

/* Brand hex → rgba, so each tile carries its own hue at a controlled alpha */
function tint(hex: string, alpha: number) {
  const raw = hex.replace('#', '');
  const full = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw;
  const n = Number.parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

/* Every tile is tinted with its own brand colour — soft wash at rest, richer on hover */
function tileStyle(color: string, strong: boolean): CSSProperties {
  return {
    backgroundColor: tint(color, strong ? 0.2 : 0.1),
    borderColor: tint(color, strong ? 0.55 : 0.3),
    color,
    boxShadow: strong ? TILE_SHADOW_HOVER : TILE_SHADOW,
  };
}

function TechTile({ tech }: { tech: Tech }) {
  return (
    <div className="w-full shrink-0">
      <div
        className="flex aspect-square w-full items-center justify-center rounded-2xl border transition-[box-shadow,border-color,background-color] duration-300 ease-out"
        style={tileStyle(tech.color, false)}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, tileStyle(tech.color, true));
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, tileStyle(tech.color, false));
        }}
      >
        <tech.Icon size={28} className="hidden sm:block" aria-hidden="true" />
        <tech.Icon size={20} className="sm:hidden" aria-hidden="true" />
      </div>
    </div>
  );
}

/* Eases a strip's animation playbackRate toward its target via rAF */
function crawlTick(
  el: HTMLDivElement | null,
  rateRef: { current: number },
  targetRef: { current: number },
  rafRef: { current: number },
) {
  const target = targetRef.current;
  rateRef.current += (target - rateRef.current) * 0.12;
  if (Math.abs(target - rateRef.current) < 0.004) rateRef.current = target;
  el?.getAnimations().forEach((a) => {
    a.playbackRate = rateRef.current;
  });
  rafRef.current = rateRef.current === target ? 0 : requestAnimationFrame(() => crawlTick(el, rateRef, targetRef, rafRef));
}

function TechColumn({ column }: { column: Column }) {
  const colRef = useRef<HTMLDivElement>(null);
  const rateRef = useRef(1);
  const targetRef = useRef(1);
  const rafRef = useRef(0);

  const setRate = (target: number) => {
    targetRef.current = target;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(() => crawlTick(colRef.current, rateRef, targetRef, rafRef));
  };

  return (
    <div className="min-w-0 w-16 shrink-0 sm:w-20 lg:w-[5.5rem]">
      <div
        ref={colRef}
        className="tech-col flex flex-col"
        style={{
          animation: `scroll-up ${column.duration}s linear ${column.delay}s infinite`,
        }}
        onMouseEnter={() => setRate(0.08)}
        onMouseLeave={() => setRate(1)}
      >
        {/* List doubled so translating -50% loops seamlessly; per-tile padding keeps it exactly 2x */}
        {[...column.items, ...column.items].map((tech, i) => (
          <div key={i < column.items.length ? tech.name : `${tech.name}-dup`} className="pb-4">
            <TechTile tech={tech} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Mobile — every tile in one horizontal line, drifting left through side blur masks */
function TechMarquee() {
  const rowRef = useRef<HTMLDivElement>(null);
  const rateRef = useRef(1);
  const targetRef = useRef(1);
  const rafRef = useRef(0);
  const all = COLUMNS.flatMap((c) => c.items);

  const setRate = (target: number) => {
    targetRef.current = target;
    if (!rafRef.current) rafRef.current = requestAnimationFrame(() => crawlTick(rowRef.current, rateRef, targetRef, rafRef));
  };

  return (
    <div
      ref={rowRef}
      className="tech-row flex w-max"
      style={{ animation: 'scroll-left 32s linear infinite' }}
      onMouseEnter={() => setRate(0.08)}
      onMouseLeave={() => setRate(1)}
    >
      {[...all, ...all].map((tech, i) => (
        <div key={i < all.length ? tech.name : `${tech.name}-dup`} className="w-16 shrink-0 pr-4">
          <TechTile tech={tech} />
        </div>
      ))}
    </div>
  );
}
export default function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 80, damping: 25, mass: 0.4 });
  const drift = useTransform(smoothVelocity, [-2400, 0, 2400], [18, 0, -18]);

  return (
    <Sheet id="skills" className="px-4 sm:px-10">
      <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center py-14 sm:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — skills introduction (≈60%) */}
          <div className="min-w-0 lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-placeholder"
            >
              02 — Skills
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
              className="mt-5 text-[clamp(2.1rem,8vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink"
            >
              Fluent across
              <br />
              the whole stack.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
              className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-muted [text-wrap:pretty] sm:text-base"
            >
              From pixel-perfect React interfaces to Express APIs and PostgreSQL schemas — I work
              comfortably across every layer of a product, picking the right tool for the job
              instead of forcing one everywhere.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="mt-4 max-w-[34rem] text-[15px] leading-relaxed text-muted [text-wrap:pretty] sm:text-base"
            >
              Design and engineering aren&apos;t separate steps to me. The same care that shapes a
              component&apos;s hover state shapes an endpoint&apos;s response — clean, predictable,
              and built to last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-muted"
            >
              <span>Frontend</span>
              <span className="text-placeholder">/</span>
              <span>Backend</span>
              <span className="text-placeholder">/</span>
              <span>Database</span>
              <span className="text-placeholder">/</span>
              <span>Tools</span>
            </motion.div>
          </div>

          {/* RIGHT — vertical conveyor field (≈40%) */}
          <div className="min-w-0 lg:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          {prefersReducedMotion ? (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
              {ALL_TECH.map((tech) => (
                <TechTile key={tech.name} tech={tech} />
              ))}
            </div>
          ) : (
            <motion.div style={{ y: drift }}>
              {/* Mobile — single horizontal line drifting left through side blur masks */}
              <div className="relative overflow-hidden py-2 sm:hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <TechMarquee />
              </div>

              {/* sm+ — three vertical conveyor columns behind top/bottom blur masks */}
              <div className="relative hidden h-[480px] overflow-hidden sm:block lg:h-[600px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
                <div className="flex h-full items-start justify-center gap-3 sm:ml-8 sm:gap-4 lg:gap-6">
                  {COLUMNS.map((column) => (
                    <TechColumn key={column.duration} column={column} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-placeholder">
            The tools I build with
          </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
