import { motion, useReducedMotion } from 'framer-motion';
import { Sheet } from './ui';
import { EASE } from '../lib/motion';

type Principle = { number: string; title: string; detail: string; cue: string };

const principles: Principle[] = [
  { number: '01', title: 'Experience First', detail: 'The job is to understand what people need, then make the path through a product feel natural.', cue: 'Start with the person' },
  { number: '02', title: 'Simplify Complexity', detail: 'Thoughtful systems can do difficult work in the background while the experience stays calm and clear.', cue: 'Make the hard feel easy' },
  { number: '03', title: 'Think in Systems', detail: 'Frontend, backend, data, infrastructure, and real-time behavior should work together as one whole.', cue: 'See the whole system' },
  { number: '04', title: 'Details Matter', detail: 'Spacing, loading states, responsiveness, accessibility, and performance are part of the product.', cue: 'Polish is product work' },
  { number: '05', title: 'Build → Learn → Refine', detail: 'Ship with intention, learn from the result, and keep improving what matters most.', cue: 'Progress over perfection' },
  { number: '06', title: 'Own the Outcome', detail: 'I take responsibility from the initial idea through implementation, measurement, and refinement.', cue: 'From idea to impact' },
];

function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE, delay: (index % 3) * 0.08 }}
      className="group flex min-h-[240px] flex-col rounded-2xl border border-line p-6 transition-colors duration-300 hover:border-line-strong sm:min-h-[280px] sm:p-8"
    >
      <div className="flex items-start justify-between border-b border-line pb-4">
        <span className="text-[10px] font-bold uppercase tracking-[.2em] text-placeholder">How I build</span>
        <span className="font-display text-lg font-bold tracking-tight text-ink">{principle.number}</span>
      </div>

      <div className="my-auto py-7">
        <p className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[.98] tracking-[-.03em] text-ink">
          {principle.title}
        </p>
      </div>

      <div className="border-t border-line pt-4">
        <p className="body-sm text-muted transition-colors duration-300 group-hover:text-body">{principle.detail}</p>
        <p className="mt-4 text-[9px] font-bold uppercase tracking-[.18em] text-placeholder">{principle.cue}</p>
      </div>
    </motion.article>
  );
}

export default function Timeline() {
  return (
    <Sheet id="timeline" className="px-6 py-14 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE }}
          className="eyebrow"
        >
          How I Build
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
          className="mt-3 h4 max-w-lg text-ink sm:h3"
        >
          A few principles behind <span className="text-muted">the things I create.</span>
        </motion.h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </Sheet>
  );
}
