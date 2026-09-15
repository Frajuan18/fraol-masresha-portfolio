import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Sheet } from './ui';
import { EASE } from '../lib/motion';

const EMAIL = 'fraolabmas@gmail.com';

/* Only accounts that actually exist — add real profiles here as they go live. */
const socials = [{ label: 'Telegram', href: 'https://t.me/Fra_juan' }];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: EASE, delay },
});

const inputClass =
  'w-full border-b border-line bg-transparent pb-2.5 font-medium text-ink placeholder:font-normal placeholder:text-placeholder outline-none transition-colors duration-200 focus:border-ink';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* No backend yet — the submit composes a real email instead of faking a success state. */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Sheet id="contact" className="px-6 pb-16 sm:px-10">

      {/* ——— Editorial two-column layout ——— */}
      <div className="grid gap-14 pt-14 sm:pt-16 lg:grid-cols-12 lg:gap-10">
        {/* Left — the statement */}
        <div className="lg:col-span-7">
          <motion.p {...fadeUp(0)} className="eyebrow">
            Contact
          </motion.p>

          <motion.h2
            {...fadeUp(0.08)}
            className="mt-6 max-w-[12ch] font-display text-[clamp(2.6rem,6.5vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink"
          >
            Let&apos;s build something <span className="text-muted">worth talking about.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.16)} className="mt-7 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
            Whether you have a product in mind, need a hand bringing an idea to life, or just want
            to talk about building something interesting — my inbox is open. Freelance work,
            collaborations, internships, good conversations.
          </motion.p>

          <motion.a
            {...fadeUp(0.24)}
            href={`mailto:${EMAIL}`}
            className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink"
          >
            Start a conversation
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* Right — contact details */}
        <motion.dl
          {...fadeUp(0.2)}
          className="border-t border-line pt-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-2"
        >
          <div className="border-b border-line pb-6">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-placeholder">
              Email
            </dt>
            <dd className="mt-2">
              <a
                href={`mailto:${EMAIL}`}
                className="text-lg font-semibold text-ink transition-opacity duration-200 hover:opacity-60 sm:text-xl"
              >
                {EMAIL}
              </a>
            </dd>
          </div>

          <div className="border-b border-line py-6">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-placeholder">
              Location
            </dt>
            <dd className="mt-2 text-lg font-semibold text-ink sm:text-xl">Addis Ababa, Ethiopia</dd>
          </div>

          <div className="pt-6">
            <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-placeholder">
              Socials
            </dt>
            <dd className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-muted underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-ink"
                >
                  {label}
                </a>
              ))}
            </dd>
          </div>
        </motion.dl>
      </div>

      {/* ——— Minimal form — feels part of the page, not a boxed widget ——— */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 sm:gap-x-10"
      >
        <div>
          <label
            htmlFor="contact-name"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-placeholder"
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="What should I call you?"
            className={`mt-3 ${inputClass}`}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-placeholder"
          >
            Your email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`mt-3 ${inputClass}`}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-placeholder"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="What are we building?"
            className={`mt-3 resize-none ${inputClass}`}
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink transition-opacity duration-200 hover:opacity-60"
          >
            Send message
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </motion.form>
    </Sheet>
  );
}
