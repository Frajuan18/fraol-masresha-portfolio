import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="border-t border-line bg-surface px-6 py-8 sm:px-10"
    >
      <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
          &copy; {new Date().getFullYear()} Fraol Masresha
        </p>
        <p className="text-[11px] text-placeholder">Available for interesting work.</p>
      </div>
    </motion.footer>
  );
}
