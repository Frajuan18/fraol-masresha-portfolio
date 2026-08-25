import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './icons';
import { SectionHeading, Sheet } from './ui';
import { EASE, staggerItem, staggerParent } from '../lib/motion';

const details: { label: string; value: string; href?: string; Icon: typeof Mail }[] = [
  { label: 'Email', value: 'fraolabmas@gmail.com', href: 'mailto:fraolabmas@gmail.com', Icon: Mail },
  { label: 'Location', value: 'Addis Ababa, Ethiopia', Icon: MapPin },
];

const socials: {
  label: string;
  href: string;
  Icon: React.ComponentType<{ size?: number | string; className?: string }>;
}[] = [
  { label: 'GitHub', href: '#', Icon: GithubIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'X', href: '#', Icon: XIcon },
  { label: 'Telegram', href: 'https://t.me/Fra_juan', Icon: Send },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      window.setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <Sheet id="contact" className="px-6 pb-10 sm:px-10">
      <SectionHeading
        eyebrow="Contact"
        title={<span>Let&apos;s <span className="text-muted">build something</span> worth using.</span>}
        sub="Have an idea, a project, or an opportunity in mind? I&apos;d love to hear about it."
      />

      <div className="mt-6 flex justify-center">
        <a href="mailto:fraolabmas@gmail.com" className="btn btn-primary">
          Start a conversation <ArrowRight size={16} />
        </a>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-5">
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-3xl border border-line bg-canvas/60 sm:col-span-2"
        >
          {details.map(({ label, value, href, Icon }) => (
            <motion.li
              key={label}
              variants={staggerItem}
              className="flex items-center gap-4 border-b border-line p-5 last:border-b-0"
            >
              <Icon size={17} className="shrink-0 text-ink" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-placeholder">{label}</p>
                {href ? (
                  <a href={href} className="mt-0.5 block body-sm font-semibold text-heading dark:text-ink transition-colors hover:text-ink">
                    {value}
                  </a>
                ) : (
                  <p className="mt-0.5 body-sm font-semibold text-heading dark:text-ink">{value}</p>
                )}
              </div>
            </motion.li>
          ))}
          <motion.li variants={staggerItem} className="flex flex-wrap items-center gap-2 p-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-line bg-surface text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-ink"
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.li>
        </motion.ul>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="rounded-3xl border border-line bg-canvas/60 p-5 sm:col-span-3"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="field-group">
              <label htmlFor="contact-name" className="field-label">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="field"
              />
            </div>
            <div className="field-group">
              <label htmlFor="contact-email" className="field-label">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="field"
              />
            </div>
          </div>
          <div className="field-group">
            <label htmlFor="contact-message" className="field-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="field"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2 w-full sm:w-auto">
            Send message <ArrowRight size={16} />
          </button>
          {sent && (
            <p className="mt-3 flex items-center gap-1.5 text-xs font-medium text-ink">
              <CheckCircle2 size={14} /> Thanks — I&apos;ll get back to you soon.
            </p>
          )}
        </motion.form>
      </div>
    </Sheet>
  );
}
