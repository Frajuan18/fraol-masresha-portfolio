import { motion } from 'framer-motion';
import { CheckCircle2, Code, Lightbulb, Sparkles, Target } from 'lucide-react';
import { IconTile, SectionHeading, Sheet } from './ui';
import { staggerItem, staggerParent } from '../lib/motion';
import TechDock from './TechDock';

const process: {
  number: string;
  title: string;
  description: string;
  Icon: typeof Target;
}[] = [
  { number: '01', title: 'Understand', description: 'Start with the problem.', Icon: Target },
  { number: '02', title: 'Simplify', description: 'Remove unnecessary complexity.', Icon: Lightbulb },
  { number: '03', title: 'Build', description: 'Turn the idea into a reliable product.', Icon: Code },
  { number: '04', title: 'Refine', description: 'Polish the details and experience.', Icon: Sparkles },
];

export default function About() {
  return (
    <Sheet id="about" className="px-6 pb-9 sm:px-10">
      <SectionHeading
        eyebrow="About"
        title={<span>I build <span className="text-muted">digital experiences</span> that feel <span className="text-muted">simple, fast, and intentional.</span></span>}
        sub="From the interface people see to the systems running behind it, I care about performance, scalability, and the small details that make a product feel polished."
      />

      <div className="mt-6 px-0 sm:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-lg text-center body-sm text-muted"
        >
          I&apos;m a full-stack website developer focused on building modern web experiences that
          balance clean design, thoughtful user experience, and reliable technology. My approach:
          understand the problem, remove what isn&apos;t needed, and build the right solution.
        </motion.p>

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-canvas/60"
        >
          {process.map(({ number, title, description, Icon }) => (
            <motion.li
              key={number}
              variants={staggerItem}
              whileHover={{ x: 6 }}
              className="group flex items-center gap-4 px-4 py-4 sm:px-6"
            >
              <IconTile>
                <Icon size={17} className="transition-colors duration-200 group-hover:text-ink" />
              </IconTile>
              <div className="text-left">
                <p className="body-sm font-semibold text-heading dark:text-ink">{title}</p>
                <p className="mt-0.5 text-xs text-muted">{number} · {description}</p>
              </div>
              <CheckCircle2 size={18} className="ml-auto text-ink" aria-hidden="true" />
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 text-balance text-center h5"
        >
          <span className="text-muted">Build less.</span> Make it better.
        </motion.p>

        <div className="mt-10">
          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-placeholder"
          >
            Tech Stacks
          </motion.p>
          <TechDock />
        </div>
      </div>
    </Sheet>
  );
}
