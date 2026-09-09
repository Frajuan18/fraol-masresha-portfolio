import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { EASE } from '../lib/motion';
import logoImg from '../assets/logo.png';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const allLinks = [{ id: 'home', label: 'Home' }, ...navLinks];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        className={`fixed z-50 transition-[top,width,border-radius,box-shadow,background-color,backdrop-filter] duration-500 ease-in-out ${
          scrolled
            ? 'inset-x-0 top-3 mx-auto w-[calc(100%-1.5rem)] max-w-3xl rounded-full bg-surface/80 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:w-[calc(100%-3rem)]'
            : 'inset-x-0 top-0 w-full rounded-none bg-transparent shadow-none backdrop-blur-none'
        }`}
      >
        <nav
          aria-label="Primary"
          className="flex h-16 flex-nowrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap"
          >
            <img
              src={logoImg}
              alt="Fraol Masresha logo"
              draggable={false}
              className="h-9 w-9 select-none rounded-full border border-line object-cover"
            />
            <span className="text-base font-bold tracking-tight text-heading dark:text-ink">
              Fraol<span className="text-ink dark:text-neutral-0">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                  className="rounded-full px-4 py-2 text-[13px] font-semibold text-muted transition-colors duration-200 hover:bg-line hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle color theme"
              className="btn-icon !h-9 !w-9 shrink-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -50, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 50, scale: 0.7 }}
                  transition={{ duration: 0.22, ease: EASE }}
                >
                  {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              className="hidden h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-4 text-[13px] font-bold text-canvas transition-all duration-200 hover:opacity-90 active:opacity-95 sm:inline-flex"
            >
              Hire Me <ArrowRight size={13} />
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE }}
            className={`fixed inset-x-0 z-40 border-b border-line bg-surface/95 backdrop-blur-xl lg:hidden ${
              scrolled ? 'top-[76px]' : 'top-16'
            }`}
          >
            <div className="px-4 py-2">
              <ul className="flex flex-col gap-0.5">
                {allLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.id);
                        setOpen(false);
                      }}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-heading transition-colors hover:bg-line"
                    >
                      {link.label}
                      <ArrowUpRight size={14} className="text-placeholder" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 border-t border-line pt-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                    setOpen(false);
                  }}
                  className="flex h-12 items-center justify-center gap-1.5 rounded-xl bg-ink text-sm font-bold text-canvas"
                >
                  Hire Me <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
