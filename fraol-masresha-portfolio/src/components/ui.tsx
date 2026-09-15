import React from 'react';
import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

export function Sheet({
  id,
  badge,
  children,
  className = '',
}: {
  id?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div id={id} className="relative scroll-mt-20">
      {badge}
      <motion.section
        initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={`sheet overflow-hidden ${className}`}
      >
        {children}
      </motion.section>
    </div>
  );
}

export function PillBadge({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-1.5 text-xs font-bold text-canvas ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <header className="px-4 pb-2 pt-8 text-center sm:px-6 sm:pt-10 lg:px-10">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="eyebrow inline-flex items-center gap-2"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
            className="inline-block h-1.5 w-1.5 rounded-full bg-ink"
          />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        className="relative z-10 mx-auto mt-3 max-w-xl h3 text-ink"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mx-auto mt-3 max-w-lg body-sm text-muted"
        >
          {sub}
        </motion.p>
      )}
    </header>
  );
}

export function IconTile({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-line bg-canvas text-ink ${className}`}
    >
      {children}
    </span>
  );
}
