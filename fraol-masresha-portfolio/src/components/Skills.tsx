import { motion } from 'framer-motion';
import { Database, Layout, Terminal, Wrench } from 'lucide-react';
import { IconTile, SectionHeading, Sheet } from './ui';
import { staggerItem, staggerParent } from '../lib/motion';

const groups: {
  label: string;
  tagline: string;
  Icon: typeof Layout;
  skills: string[];
}[] = [
  { label: 'Frontend', tagline: 'Interface & experience', Icon: Layout, skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { label: 'Backend', tagline: 'Logic & APIs', Icon: Terminal, skills: ['Node.js', 'Express', 'REST APIs'] },
  { label: 'Database', tagline: 'Storage & structure', Icon: Database, skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'Redis'] },
  { label: 'Tools', tagline: 'Workflow & infrastructure', Icon: Wrench, skills: ['Git', 'Docker'] },
];

export default function Skills() {
  return (
    <Sheet id="skills" className="px-6 pb-10 sm:px-10">
      <SectionHeading
        eyebrow="Skills"
        title={<span>What I <span className="text-muted">work with.</span></span>}
        sub="The tools and technologies I reach for across the full stack — kept simple, without ratings or badges."
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid gap-3 sm:grid-cols-2"
      >
        {groups.map(({ label, tagline, Icon, skills }) => (
          <motion.div
            key={label}
            variants={staggerItem}
            whileHover={{ y: -3 }}
            className="rounded-3xl border border-line bg-canvas/50 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconTile className="!h-9 !w-9 !rounded-xl">
                  <Icon size={16} />
                </IconTile>
                <div>
                  <p className="body-sm font-bold text-heading dark:text-ink">{label}</p>
                  <p className="text-[11px] text-muted">{tagline}</p>
                </div>
              </div>
              <span className="text-[11px] font-bold tabular-nums text-placeholder">
                {String(skills.length).padStart(2, '0')}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-line bg-surface px-2.5 py-1 text-[12px] font-semibold text-muted transition-colors duration-200 hover:text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Sheet>
  );
}
