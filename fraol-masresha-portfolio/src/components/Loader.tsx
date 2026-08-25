import { motion, AnimatePresence } from 'framer-motion';
import { EASE } from '../lib/motion';

export default function Loader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* glow ring */}
            <motion.div
              className="absolute h-32 w-32 rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.6, 2] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
              }}
            />

            {/* logo circle */}
            <motion.div
              className="relative grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-white/5"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              {/* spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(255,255,255,0.25) 85%, transparent 100%)',
                }}
              >
                <motion.div
                  className="h-full w-full rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              {/* F letter */}
              <motion.span
                className="relative text-4xl font-extrabold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: EASE }}
              >
                F
              </motion.span>
            </motion.div>

            {/* name text */}
            <motion.div
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5, ease: EASE }}
            >
              <span className="text-lg font-bold tracking-tight text-white">
                Fraol Masresha
              </span>
              <motion.div
                className="h-0.5 w-0 bg-white/40"
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 0.8, ease: EASE }}
              />
              <motion.span
                className="text-xs font-medium uppercase tracking-[0.25em] text-white/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                Full-Stack Developer
              </motion.span>
            </motion.div>

            {/* loading dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1 w-1 rounded-full bg-white/30"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
