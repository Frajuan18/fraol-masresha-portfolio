import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerParent, staggerItem } from '../lib/motion';
import { GithubIcon, LinkedinIcon, XIcon } from './icons';
import { Sheet } from './ui';
import profileImg from '../assets/profile.png';
import heroBgLight from '../assets/pexels-ian-panelo-35376091.jpg';
import heroBgDark from '../assets/pexels-allan-carvalho-264847051-28579779.jpg';

const socials: {
  label: string;
  href: string;
  Icon: React.ComponentType<{ size?: number | string; className?: string }>;
}[] = [
  { label: 'GitHub', href: '#', Icon: GithubIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'X', href: '#', Icon: XIcon },
];

const roles = ['Developer', 'Problem Solver', 'Designer'];

const stats = [
  { value: '3+', label: 'Years' },
  { value: '20+', label: 'Projects' },
  { value: '10+', label: 'Clients' },
];

export default function Hero() {
  return (
    <Sheet
      id="home"
      className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-10 sm:pb-20 sm:pt-32"
    >
      {/* Background — themed photo (light: sky photo / dark: clouds) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroBgLight}
          alt=""
          className="h-full w-full object-cover object-center opacity-[0.18] brightness-[0.96] dark:hidden"
        />
        <img
          src={heroBgDark}
          alt=""
          className="hidden h-full w-full object-cover opacity-40 dark:block"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-canvas/70 via-canvas/30 to-canvas dark:block" />
      </div>

      {/* Left — Role Labels */}
      <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col gap-12 lg:flex">
        {roles.map((role) => (
          <span
            key={role}
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-placeholder"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {role}
          </span>
        ))}
      </div>

      {/* Text column */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center"
      >
          {/* Online status — small profile picture with live dot */}
          <motion.div variants={staggerItem} className="flex items-center gap-2.5">
            <div className="relative shrink-0">
              <img
                src={profileImg}
                alt="Fraol Masresha"
                draggable={false}
                className="h-10 w-10 select-none rounded-full border border-line object-cover shadow-[0_6px_12px_-3px_rgba(0,0,0,0.35)]"
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-canvas bg-emerald-500">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              Online — Available for work
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={staggerItem} className="mt-5 h3 text-ink sm:mt-6">
            Designing software that works{' '}
            <span className="text-muted">effortlessly.</span>
          </motion.h1>

          <motion.p variants={staggerItem} className="mx-auto mt-4 max-w-xl body-sm text-muted sm:mt-5">
            I&apos;m Fraol, a full-stack developer. I collaborate with companies
            to craft digital interfaces and build fast, scalable web
            applications — focused on clean code and great user experience.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={staggerItem} className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <a href="mailto:fraolabmas@gmail.com" className="btn btn-primary shadow-none">
              Start a conversation <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-secondary"
            >
              View selected work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="mx-auto mt-6 grid w-full max-w-md grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-canvas/60 sm:mt-8"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="px-2 py-3 text-center sm:py-4">
                <p className="text-lg font-extrabold tracking-tight text-ink">{value}</p>
                <p className="text-[11px] font-medium text-muted">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.ul variants={staggerItem} className="mt-6 flex items-center justify-center gap-2 sm:mt-8">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-ink"
                >
                  <Icon size={15} />
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
    </Sheet>
  );
}
