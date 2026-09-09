import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASE } from '../lib/motion';
import profileImg from '../assets/profile.png';

// iPhone-style multilingual hello — ends on English
const greetings = ['ሰላም', 'hola', 'bonjour', 'ciao', 'こんにちは', 'नमस्ते', 'مرحبا', 'hello'];

export default function Loader({ show }: { show: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setIndex((i) => Math.min(i + 1, greetings.length - 1));
    }, 380);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed inset-0 z-[100] overflow-hidden bg-black"
        >
          {/* profile photo as the full-screen background */}
          <motion.img
            src={profileImg}
            alt=""
            draggable={false}
            className="absolute inset-0 h-full w-full select-none object-cover"
            style={{ objectPosition: '50% 5%' }}
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: EASE }}
          />
          {/* dark veil so the greeting stays readable */}
          <div className="absolute inset-0 bg-black/45" />

          {/* iPhone-style hello — crossfading greetings, near the bottom like iOS */}
          <div className="absolute inset-x-0 top-[80%] flex justify-center">
            <AnimatePresence>
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }}
                transition={{ duration: 0.34, ease: EASE }}
                className="absolute inset-x-0 px-6 text-right text-7xl font-semibold tracking-tight text-white drop-shadow-lg sm:pr-16 sm:text-8xl lg:pr-24"
              >
                {greetings[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
