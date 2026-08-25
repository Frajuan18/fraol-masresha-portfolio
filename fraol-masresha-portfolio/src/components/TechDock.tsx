import { motion } from 'framer-motion';
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
  SiDocker,
  SiKubernetes,
  SiFirebase,
} from 'react-icons/si';
import { staggerParent, staggerItem } from '../lib/motion';

const techStack = [
  { name: 'React', Icon: SiReact, bg: '#000000', color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, bg: '#339933', color: '#FFFFFF' },
  { name: 'MongoDB', Icon: SiMongodb, bg: '#000000', color: '#47A248' },
  { name: 'Express', Icon: SiExpress, bg: '#000000', color: '#FFFFFF' },
  { name: 'Tailwind', Icon: SiTailwindcss, bg: '#06B6D4', color: '#FFFFFF' },
  { name: 'Python', Icon: SiPython, bg: '#3776AB', color: '#FFD43B' },
  { name: 'TensorFlow', Icon: SiTensorflow, bg: '#FF6F00', color: '#FFFFFF' },
  { name: 'D3.js', Icon: SiD3, bg: '#F9A03C', color: '#FFFFFF' },
  { name: 'FastAPI', Icon: SiFastapi, bg: '#009688', color: '#FFFFFF' },
  { name: 'PostgreSQL', Icon: SiPostgresql, bg: '#4169E1', color: '#FFFFFF' },
  { name: 'Docker', Icon: SiDocker, bg: '#2496ED', color: '#FFFFFF' },
  { name: 'Kubernetes', Icon: SiKubernetes, bg: '#326CE5', color: '#FFFFFF' },
  { name: 'Firebase', Icon: SiFirebase, bg: '#FFCA28', color: '#000000' },
];

export default function TechDock() {
  const row1 = techStack.slice(0, 7);
  const row2 = techStack.slice(7);

  return (
    <section className="flex w-full items-center justify-center py-6">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Mobile — Two docks */}
        <div className="flex flex-col items-center gap-2 sm:hidden">
          <div className="flex items-center justify-center gap-2 rounded-3xl border border-line/60 bg-surface/70 px-4 py-3 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),0_2px_8px_-2px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4),0_2px_8px_-2px_rgba(0,0,0,0.3)]">
            {row1.map(({ name, Icon, bg, color }) => (
              <motion.div key={name} variants={staggerItem} className="group">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[12px] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:rounded-[16px] group-hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.25),0_4px_8px_-2px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] dark:group-hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5),0_4px_8px_-2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]"
                  style={{
                    backgroundColor: bg,
                    boxShadow: '0 4px 12px -2px rgba(0,0,0,0.2), 0 2px 4px -1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 rounded-3xl border border-line/60 bg-surface/70 px-4 py-3 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),0_2px_8px_-2px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4),0_2px_8px_-2px_rgba(0,0,0,0.3)]">
            {row2.map(({ name, Icon, bg, color }) => (
              <motion.div key={name} variants={staggerItem} className="group">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[12px] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:rounded-[16px] group-hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.25),0_4px_8px_-2px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] dark:group-hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5),0_4px_8px_-2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]"
                  style={{
                    backgroundColor: bg,
                    boxShadow: '0 4px 12px -2px rgba(0,0,0,0.2), 0 2px 4px -1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet+ — Single dock */}
        <div className="hidden w-fit items-center justify-center gap-3 rounded-3xl border border-line/60 bg-surface/70 px-6 py-3 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.12),0_2px_8px_-2px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4),0_2px_8px_-2px_rgba(0,0,0,0.3)] sm:flex md:gap-4">
          {techStack.map(({ name, Icon, bg, color }) => (
            <motion.div key={name} variants={staggerItem} className="group">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-[14px] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:rounded-[18px] group-hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.25),0_4px_8px_-2px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] dark:group-hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5),0_4px_8px_-2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] md:h-14 md:w-14"
                style={{
                  backgroundColor: bg,
                  boxShadow: '0 4px 12px -2px rgba(0,0,0,0.2), 0 2px 4px -1px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.15)',
                }}
              >
                <Icon size={22} className="md:hidden" style={{ color }} />
                <Icon size={24} className="hidden md:block" style={{ color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
