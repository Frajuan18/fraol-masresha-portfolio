import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Layers, Palette, Rocket } from 'lucide-react';
import { IconTile, SectionHeading, Sheet } from './ui';
import { staggerItem, staggerParent } from '../lib/motion';

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

export default function Services() {
  return (
    <Sheet id="services" className="px-6 pb-10 sm:px-10">
      <SectionHeading
        eyebrow="Services"
        title={<span>What I <span className="text-muted">can build.</span></span>}
        sub="A focused set of ways I can help take a project from an idea to something real."
      />

      <motion.ul
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-canvas/60"
      >
        {services.map(({ title, description, scope, Icon }) => (
          <motion.li
            key={title}
            variants={staggerItem}
            whileHover={{ x: 6 }}
            className="group flex items-center gap-4 px-4 py-5 sm:px-6"
          >
            <IconTile>
              <Icon size={18} className="transition-colors duration-200 group-hover:text-ink" />
            </IconTile>
            <div className="min-w-0 flex-1 text-left">
              <p className="body-sm font-semibold text-heading dark:text-ink">{title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">{description}</p>
              <p className="mt-1 text-[11px] font-medium text-placeholder">{scope.join(' · ')}</p>
            </div>
            <ArrowUpRight
              size={17}
              className="shrink-0 text-placeholder transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
              aria-hidden="true"
            />
          </motion.li>
        ))}
      </motion.ul>
    </Sheet>
  );
}
