import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerParent, staggerItem } from '../lib/motion';
import { GithubIcon, LinkedinIcon, XIcon } from './icons';
import { Sheet, SectionHeading } from './ui';
import profileImg from '../assets/photo_2026-01-13_08-55-15-removebg-preview.png';

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
    <Sheet id="home" className="relative px-6 pb-10 pt-20 sm:px-10 sm:pt-24">
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

      {/* Right — DEVELOPER Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none lg:block"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="text-[8vw] font-black leading-none tracking-tighter text-line/60">DEVELOPER</span>
      </span>

      <SectionHeading
        eyebrow="Full-Stack Developer"
        title={
          <span>
            Designing software that works{' '}
            <span className="text-muted">effortlessly.</span>
          </span>
        }
        sub="I'm Fraol, a full-stack developer. I collaborate with companies to craft digital interfaces and build fast, scalable web applications — focused on clean code and great user experience."
      />

      <div className="mt-6 flex flex-col items-center">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Avatar */}
          <motion.div variants={staggerItem} className="relative">
            <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-line">
              <img
                src={profileImg}
                alt="Portrait of Fraol"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={staggerItem} className="flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:fraolabmas@gmail.com" className="btn-primary btn">
              Start a conversation <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary btn"
            >
              View selected work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="grid w-full max-w-md grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-canvas/60"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="px-2 py-4 text-center">
                <p className="text-lg font-extrabold tracking-tight text-ink">{value}</p>
                <p className="text-[11px] font-medium text-muted">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.ul
            variants={staggerItem}
            className="flex items-center justify-center gap-2"
          >
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
      </div>
    </Sheet>
  );
}
