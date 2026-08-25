import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
  SiRazorpay,
} from 'react-icons/si';
import { SectionHeading, Sheet } from './ui';
import { staggerParent, staggerItem, EASE } from '../lib/motion';
import healthImg from '../assets/health care.png';

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
  Razorpay: { Icon: SiRazorpay, color: '#072654' },
};

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  year: string;
}

const projects: Project[] = [
  {
    title: 'Hospital Management System',
    description: 'A comprehensive hospital management platform with patient records, appointments, and billing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    link: 'https://medicare-app-phi.vercel.app/',
    image: healthImg,
    year: '2025',
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

export default function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = projects[selectedIndex];

  return (
    <Sheet id="portfolio" className="px-6 pb-10 sm:px-10">
      <SectionHeading
        eyebrow="Selected Work"
        title={<span>A selection of things <span className="text-muted">I&apos;ve built.</span></span>}
        sub="A few projects that show how I think about product, craft, and code."
      />

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-8">
        {/* Left — Project Links */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-2 sm:w-[20%] sm:min-w-[180px]"
        >
          {projects.map((project, index) => (
            <motion.li key={project.title} variants={staggerItem}>
              <button
                onClick={() => setSelectedIndex(index)}
                className={`group w-full text-left transition-all duration-200 ${
                  index === selectedIndex
                    ? 'text-ink font-semibold underline underline-offset-4 decoration-2'
                    : 'text-muted hover:text-ink underline-offset-4 decoration-1 hover:underline'
                }`}
              >
                <span className="text-sm">{project.title}</span>
              </button>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right — Screen Frame */}
        <div className="relative flex-1 sm:min-h-[420px]">
          {/* Tech Stack Icons — Outside screen, top right */}
          <div className="absolute right-0 -top-3 z-10 flex flex-wrap justify-end gap-2">
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

          {/* Browser Chrome */}
          <div className="flex items-center gap-2 rounded-t-2xl border border-b-0 border-line bg-surface/80 px-4 py-2.5 backdrop-blur-xl">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-3 flex-1 rounded-lg bg-canvas/60 px-3 py-1 backdrop-blur-sm">
              <span className="text-[11px] text-placeholder">{selected.title.toLowerCase().replace(/\s+/g, '-')}.vercel.app</span>
            </div>
          </div>

          {/* Screen Body */}
          <div className="group relative overflow-hidden rounded-b-2xl border border-t-0 border-line bg-canvas/50 backdrop-blur-xl sm:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.title}
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(8px)' }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col"
              >
                {selected.image ? (
                  <div className="relative flex-1 overflow-hidden">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex flex-1 items-center justify-center sm:min-h-[380px]">
                    <div className="text-center">
                      <span className="text-7xl font-extrabold tracking-tighter text-line">
                        {selected.title.slice(0, 2)}
                      </span>
                      <p className="mt-2 text-sm text-placeholder">{selected.year}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-ink/50 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
              <a
                href={selected.link}
                target={selected.link.startsWith('http') ? '_blank' : undefined}
                rel={selected.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl transition-all duration-200 hover:scale-105 hover:bg-ink hover:text-canvas"
              >
                Visit Project
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  );
}
