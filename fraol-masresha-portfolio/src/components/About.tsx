import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, CalendarDays, Globe, GraduationCap, Layers, Palette, Rocket } from 'lucide-react';
import { IconTile, Sheet } from './ui';
import { EASE, staggerItem, staggerParent } from '../lib/motion';
import profileImg from '../assets/profile.png';

/* One headline line — revealed from below through an overflow mask.
   whileInView lives on the OUTER wrapper (never transformed, so IntersectionObserver
   can see it); the inner line inherits the variant and slides up into view. */
function HeadlineLine({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <motion.span
      className="block overflow-hidden pb-[0.08em]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.span
        className="block"
        variants={{
          hidden: { y: '112%' },
          visible: { y: 0 },
        }}
        transition={{ duration: 0.75, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

const services: {
  title: string;
  description: string;
  scope: string[];
  Icon: typeof Globe;
}[] = [
  { title: 'Web Development', description: 'Modern, responsive websites and web applications.', scope: ['React', 'Node.js', 'Tailwind'], Icon: Globe },
  { title: 'Full-Stack Development', description: 'Frontend experiences connected to reliable backend systems.', scope: ['Node.js', 'Express', 'Databases'], Icon: Layers },
  { title: 'UI / UX Design', description: 'Transforming complex requirements into clean, intuitive interfaces.', scope: ['Wireframing', 'Prototyping', 'Responsive'], Icon: Palette },
  { title: 'Product Development', description: 'Shaping an idea into a polished, functional digital product.', scope: ['Architecture', 'Integration', 'Deployment'], Icon: Rocket },
];

export default function About() {
  return (
    <Sheet id="about" className="px-4 sm:px-10">
      <div className="mx-auto w-full max-w-6xl py-14 sm:py-24">
        {/* Top — portrait left, oversized introduction right */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="group mx-auto w-full max-w-[300px] overflow-hidden rounded-xl border border-line sm:max-w-sm lg:max-w-none">
              <img
                src={profileImg}
                alt="Portrait of Fraol Masresha"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-placeholder">
              <span>Fraol Masresha</span>
              <span>Fig. 01</span>
            </div>
          </motion.div>

          <div className="flex flex-col lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-placeholder"
            >
              01 — Introduction
            </motion.p>

            <h2 className="mt-5 font-display text-[clamp(2.25rem,10vw,7rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-ink sm:mt-6">
              <HeadlineLine delay={0.05}>Hey — I&apos;m</HeadlineLine>
              <HeadlineLine delay={0.14}>Fraol</HeadlineLine>
              <HeadlineLine delay={0.23}>
                <span className="text-muted">Masresha</span>
              </HeadlineLine>
            </h2>

            {/* Story — sits under the headline, still beside the image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.48 }}
            >
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink sm:mt-10">
                About me
              </span>

              {/* Education — expressed with icons */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-muted sm:mt-5">
                <span className="flex items-center gap-2">
                  <GraduationCap size={15} className="text-ink" />
                  Addis Ababa University
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen size={15} className="text-ink" />
                  Information Systems
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-ink" />
                  3rd year
                </span>
              </div>

              <p className="mt-5 text-base leading-relaxed text-ink sm:mt-6 sm:text-xl">
                I&apos;m a full-stack developer who cares about the space between{' '}
                <span className="font-semibold">great engineering</span> and{' '}
                <span className="font-semibold">great design</span> — turning ideas into products
                that feel simple, intentional, and genuinely good to use.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-base">
                My work covers the whole journey: shaping the interface, building the frontend
                experience, architecting the backend behind it, and refining the details that make
                something feel finished. Every decision is measured against how real people will
                actually use the product — not how impressive it looks in a demo.
              </p>

              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink underline decoration-line underline-offset-8 transition-colors duration-200 hover:decoration-ink sm:mt-8"
              >
                See the tools I build with
                <ArrowUpRight
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            {/* Metadata — closes the column at the bottom of all the text.
                The auto-margin lives on a wrapper so a minimum 2.5rem gap
                always stays above the hairline (mt-auto alone can collapse
                to 0 when the text column is nearly full). */}
            <div className="lg:mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-muted sm:mt-10"
              >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to opportunities
              </span>
              <span className="text-placeholder">/</span>
              <span>Full-stack developer</span>
              <span className="text-placeholder">/</span>
              <span>React · Node · TypeScript</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* What I can do — a quiet card grid closing out the section */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ title, description, scope, Icon }) => (
            <motion.li
              key={title}
              variants={staggerItem}
              className="group flex flex-col rounded-2xl border border-line bg-canvas/60 p-4 transition-colors duration-200 hover:border-line-strong sm:p-5"
            >
              <div className="flex items-start justify-between">
                <IconTile>
                  <Icon size={18} className="transition-colors duration-200 group-hover:text-ink" />
                </IconTile>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-placeholder transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-4 body-sm font-semibold text-heading dark:text-ink sm:mt-5">{title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{description}</p>
              <p className="mt-auto pt-4 text-[11px] font-medium text-placeholder">{scope.join(' · ')}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Sheet>
  );
}