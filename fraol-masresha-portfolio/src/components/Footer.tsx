import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

const links = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="border-t border-line bg-surface px-6 pb-10 pt-12 text-center"
    >
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="mx-auto mb-6 grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-extrabold text-canvas"
      >
        F
      </motion.span>

      <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {links.map((link, i) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.id);
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.15 + i * 0.05 }}
            className="body-sm font-medium text-muted transition-colors duration-200 hover:text-ink"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-5 text-[11px] text-placeholder"
      >
        &copy; {new Date().getFullYear()} Fraol Masresha. All rights reserved.
      </motion.p>
      <p className="mt-1 text-[11px] text-placeholder">fraolabmas@gmail.com</p>
    </motion.footer>
  );
}
