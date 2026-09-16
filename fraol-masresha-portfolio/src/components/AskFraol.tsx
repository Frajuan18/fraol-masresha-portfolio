import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUp,
  Briefcase,
  CalendarDays,
  Check,
  CodeXml,
  Copy,
  ExternalLink,
  FolderGit2,
  Lightbulb,
  Mail,
  Mic,
  Send,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { askFraol, type ChatMessage } from '../lib/chatbot';
import { EASE } from '../lib/motion';
import chatLogo from '../assets/chat-logo.png';

const ASSISTANT_NAME = 'Fira';

const GREETING =
  "Hi! I'm Fira, Fraol's AI assistant. Ask me anything about his skills, projects, experience, or services.";

const SUGGESTIONS = [
  'What does Fraol specialize in?',
  'Show me his projects',
  'Is he available for work?',
  'How can I contact him?',
];

function TypingDots() {
  return (
    <span className="flex items-center gap-1 py-1" aria-label="Assistant is typing">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: EASE }}
        />
      ))}
    </span>
  );
}

/* ============================================================================
   Response rendering — plain replies become scannable, tappable content
   ========================================================================== */

const BULLET_RE = /^\s*[-*•]\s+(.+)$/;
const NUMBER_RE = /^\s*\d{1,2}[.)]\s+(.+)$/;
const LINK_RE =
  /(https?:\/\/[^\s)]+|www\.[^\s)]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|t\.me\/[A-Za-z0-9_]+)/g;

type Block =
  | { kind: 'p'; lines: string[] }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'numbers'; items: string[] };

/** Group the assistant's plain text into paragraphs, bullets, and numbered steps. */
function parseBlocks(content: string): Block[] {
  const blocks: Block[] = [];

  for (const raw of content.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;

    const bullet = line.match(BULLET_RE);
    if (bullet) {
      const last = blocks[blocks.length - 1];
      if (last?.kind === 'bullets') last.items.push(bullet[1]);
      else blocks.push({ kind: 'bullets', items: [bullet[1]] });
      continue;
    }

    const numbered = line.match(NUMBER_RE);
    if (numbered) {
      const last = blocks[blocks.length - 1];
      if (last?.kind === 'numbers') last.items.push(numbered[1]);
      else blocks.push({ kind: 'numbers', items: [numbered[1]] });
      continue;
    }

    const last = blocks[blocks.length - 1];
    if (last?.kind === 'p') last.lines.push(line);
    else blocks.push({ kind: 'p', lines: [line] });
  }

  // Soft-wrapped lines belong to the same paragraph
  return blocks.map((b) => (b.kind === 'p' ? { ...b, lines: [b.lines.join(' ')] } : b));
}

/** Emails, Telegram handles, and links become tappable pills instead of dead text. */
function LinkToken({ token }: { token: string }) {
  const isEmail = token.includes('@');
  const isTelegram = token.startsWith('t.me/');
  const href = isEmail ? `mailto:${token}` : token.startsWith('http') ? token : `https://${token}`;
  const Icon = isEmail ? Mail : isTelegram ? Send : ExternalLink;

  return (
    <a
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-1.5 py-0.5 align-baseline text-[12px] font-medium text-ink transition-colors duration-200 hover:border-line-strong hover:bg-canvas"
    >
      <Icon size={11} className="shrink-0 text-placeholder" />
      {isEmail ? token : token.replace(/^https?:\/\//, '')}
    </a>
  );
}

function autoLink(text: string) {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  LINK_RE.lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    nodes.push(<LinkToken key={`${match.index}-${match[0]}`} token={match[0]} />);
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

/* Contextual icon per bullet — a keyword scan keeps every item scannable */
const ICON_RULES: { re: RegExp; Icon: typeof Check }[] = [
  { re: /e-?mail|telegram|contact|reach out|get in touch/i, Icon: Mail },
  { re: /\b(19|20)\d{2}\b|\byears?\b/i, Icon: CalendarDays },
  { re: /\b(project|app|platform|dashboard|suite|system|website)\b/i, Icon: FolderGit2 },
  { re: /available|hire|freelance|client|opportunit|open to/i, Icon: Briefcase },
  { re: /service|design|develop|maintain|deploy/i, Icon: Wrench },
  { re: /react|node|express|typescript|javascript|tailwind|python|mongo|postgres|prisma|redis|firebase|docker|kubernetes|terraform|socket|next\.?js|fastapi|tensorflow|d3|html|css/i, Icon: CodeXml },
  { re: /skill|tool|stack|technolog|expert/i, Icon: Sparkles },
  { re: /tip|advice|good|best|worth|focus/i, Icon: Lightbulb },
];

function bulletIcon(text: string) {
  return ICON_RULES.find((rule) => rule.re.test(text))?.Icon ?? Check;
}

/** Strips stray markdown the model sometimes emits, then auto-links it. */
function InlineText({ text }: { text: string }) {
  const clean = text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/`(.+?)`/g, '$1');
  return <>{autoLink(clean)}</>;
}

/** Renders a plain-text answer as scannable, tappable content. */
function RichResponse({ content }: { content: string }) {
  const blocks = parseBlocks(content);

  return (
    <div className="space-y-3">
      {blocks.map((block, blockIndex) => {
        if (block.kind === 'bullets') {
          return (
            <ul key={blockIndex} className="space-y-2">
              {block.items.map((item, i) => {
                const Icon = bulletIcon(item);
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, ease: EASE, delay: 0.06 + i * 0.06 }}
                    className="group/row -mx-1.5 flex items-start gap-2.5 rounded-xl px-1.5 py-1 transition-colors duration-200 hover:bg-surface"
                  >
                    <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-md border border-line bg-surface text-muted transition-colors duration-200 group-hover/row:border-ink group-hover/row:bg-ink group-hover/row:text-canvas">
                      <Icon size={11} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <InlineText text={item} />
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          );
        }

        if (block.kind === 'numbers') {
          return (
            <ol key={blockIndex} className="space-y-2">
              {block.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, ease: EASE, delay: 0.06 + i * 0.06 }}
                  className="group/step -mx-1.5 flex items-start gap-2.5 rounded-xl px-1.5 py-1 transition-colors duration-200 hover:bg-surface"
                >
                  <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] font-bold text-canvas transition-transform duration-200 group-hover/step:scale-110">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <InlineText text={item} />
                  </span>
                </motion.li>
              ))}
            </ol>
          );
        }

        return (
          <p key={blockIndex}>
            <InlineText text={block.lines[0]} />
          </p>
        );
      })}
    </div>
  );
}

/* ============================================================================
   Voice input — Web Speech API (Chrome, Edge, Safari)
   ========================================================================== */

interface SpeechRecognitionResultLike {
  isFinal: boolean;
  readonly 0: { transcript: string };
}
interface SpeechRecognitionResultListLike {
  readonly length: number;
  [index: number]: SpeechRecognitionResultLike;
}
interface SpeechRecognitionEventLike {
  resultIndex: number;
  readonly results: SpeechRecognitionResultListLike;
}
interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
}
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

function getSpeechRecognition(): SpeechRecognitionCtor | null {
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export default function AskFraol() {
  const [open, setOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [voiceSupported] = useState(() => getSpeechRecognition() !== null);
  const [copied, setCopied] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

      /* The pill below is the input itself — focusing it or pressing the arrow
     extends the chat section vertically out of it. */
  const openChat = useCallback(() => setOpen(true), []);

  const closeChat = useCallback(() => {
    setOpen(false);
    setShowPanel(false);
    // Drop focus so the mobile keyboard hides and the next focus re-extends the panel
    inputRef.current?.blur();
  }, []);

  // Auto-scroll to the newest message
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeChat();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeChat]);

      // Focus the pill when the panel opens — desktop only, so the mobile
  // keyboard doesn't jump up uninvited.
  useEffect(() => {
    if (!open) return;
    if (!window.matchMedia('(min-width: 640px)').matches) return;
    const t = setTimeout(() => inputRef.current?.focus(), 250);
    return () => clearTimeout(t);
  }, [open]);

  // Let the input settle into its centered position before extending the panel.
  useEffect(() => {
    if (!open) return;

    const t = setTimeout(() => setShowPanel(true), 480);
    return () => clearTimeout(t);
  }, [open]);

  // The "Copied" confirmation resets on its own
  useEffect(() => {
    if (copied === null) return;
    const t = setTimeout(() => setCopied(null), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copyMessage = (index: number, text: string) => {
    void navigator.clipboard?.writeText(text);
    setCopied(index);
  };

      const send = async (text: string) => {
    const value = text.trim();
    if (!value || loading) return;

    // Sending from the collapsed pill extends the chat section
    setOpen(true);

    const nextHistory: ChatMessage[] = [...messages, { role: 'user', content: value }];
    setMessages(nextHistory);
    setInput('');
    setError(null);
    setLoading(true);

    try {
      const reply = await askFraol(nextHistory.filter((m) => m.content !== GREETING));
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Always-latest send for voice handlers (avoids stale state closures)
  const sendRef = useRef(send);
  useEffect(() => {
    sendRef.current = send;
  });

  const toggleListening = () => {
    // Stop the current session if the user taps the mic again
    if (listening) {
      recognitionRef.current?.stop();
      return;
    }

    const Ctor = getSpeechRecognition();
    if (!Ctor) {
      setError('Voice input is not supported in this browser. Try Chrome or Edge.');
      return;
    }

    const rec = new Ctor();
    recognitionRef.current = rec;
    rec.lang = 'en-US';
    rec.continuous = false; // one utterance per mic press, then auto-send
    rec.interimResults = true;

    rec.onresult = (e) => {
      let text = '';
      for (let i = 0; i < e.results.length; i++) {
        text += e.results[i][0].transcript;
      }
      const trimmed = text.trim();
      setInput(trimmed);
      // Auto-send as soon as the utterance is finalized
      if (trimmed && e.results[e.results.length - 1].isFinal) {
        rec.stop();
        void sendRef.current(trimmed);
      }
    };
    rec.onend = () => {
      recognitionRef.current = null;
      setListening(false);
    };
    rec.onerror = (e) => {
      recognitionRef.current = null;
      setListening(false);
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
        setError('Microphone access was denied. Allow the mic permission and try again.');
      } else if (e.error === 'no-speech') {
        setError("I didn't hear anything — tap the mic and try again.");
      } else if (e.error !== 'aborted') {
        setError('Voice input failed. Please type your question instead.');
      }
    };

        setInput('');
    setError(null);
    try {
      rec.start();
      setListening(true);
      // Make the "Listening…" state and any errors visible
      openChat();
    } catch {
      setListening(false);
    }
  };

    /* Anchored stack — the pill is the resting input; the chat section extends
     vertically out of it. */
  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.55, ease: EASE } }}
      className={`fixed z-[70] flex flex-col ${
        open
          ? 'inset-x-3 bottom-3 sm:bottom-6 sm:left-1/2 sm:right-auto sm:w-[min(560px,calc(100vw-3rem))] sm:-translate-x-1/2'
          : 'bottom-3 right-3 sm:bottom-6 sm:right-6'
      }`}
    >
      <AnimatePresence initial={false} mode="wait">
        {!open && (
          <motion.button
            key="chat-launcher"
            type="button"
            onClick={openChat}
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 8 }}
            transition={{ duration: 0.35, ease: EASE }}
            aria-label={`Open chat with ${ASSISTANT_NAME}`}
            className="relative grid h-14 w-14 place-items-center rounded-full border border-line bg-surface shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105 hover:border-line-strong"
          >
            <img
              src={chatLogo}
              alt=""
              draggable={false}
              className="h-11 w-11 select-none rounded-full border border-line object-cover"
            />
            <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-surface bg-emerald-500" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Vertical extension — grows upward out of the input pill */}
      <AnimatePresence initial={false}>
        {open && showPanel && (
          <motion.div
            initial={{ height: 0, opacity: 0, scaleY: 0.9, y: 12, filter: 'blur(6px)' }}
            animate={{ height: 'auto', opacity: 1, scaleY: 1, y: 0, filter: 'blur(0px)' }}
            exit={{
              height: 0,
              opacity: 0,
              scaleY: 0.94,
              y: 8,
              filter: 'blur(6px)',
              transition: { duration: 0.3, ease: EASE },
            }}
            transition={{ duration: 0.55, ease: EASE }}
            style={{ transformOrigin: 'center bottom' }}
            className="overflow-hidden rounded-t-3xl rounded-b-xl border border-line border-b-0 bg-surface shadow-[0_24px_64px_-16px_rgba(0,0,0,0.45)]"
            role="dialog"
            aria-label={`Ask ${ASSISTANT_NAME} — Fraol's AI assistant`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-line bg-canvas/60 px-5 py-4">
              <div className="relative shrink-0">
                <img
                  src={chatLogo}
                  alt={`${ASSISTANT_NAME} assistant logo`}
                  draggable={false}
                  className="h-10 w-10 select-none rounded-2xl border border-line object-cover"
                />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-canvas bg-emerald-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-ink">{ASSISTANT_NAME}</p>
                <p className="text-[11px] font-medium text-muted">
                  Fraol&apos;s AI assistant · voice enabled
                </p>
              </div>
              <button
                type="button"
                onClick={closeChat}
                aria-label="Close chat"
                className="grid h-8 w-8 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors duration-200 hover:text-ink"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
                        <div ref={listRef} className="chat-scroll h-[min(58svh,450px)] space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <img
                      src={chatLogo}
                      alt=""
                      draggable={false}
                      className="mt-0.5 h-6 w-6 shrink-0 select-none rounded-lg border border-line object-cover"
                    />
                  )}
                  <div
                    className={`flex max-w-[85%] flex-col gap-1.5 ${
                      msg.role === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                        msg.role === 'user'
                          ? 'rounded-br-md bg-ink text-canvas'
                          : 'w-full rounded-bl-md border border-line bg-canvas/60 text-ink'
                      }`}
                    >
                      {msg.role === 'assistant' ? <RichResponse content={msg.content} /> : msg.content}
                    </div>

                    {/* Copy — quiet affordance under every reply (skips the greeting) */}
                    {msg.role === 'assistant' && i > 0 && (
                      <button
                        type="button"
                        onClick={() => copyMessage(i, msg.content)}
                        aria-label="Copy this reply"
                        className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-placeholder transition-colors duration-200 hover:text-ink"
                      >
                        {copied === i ? (
                          <Check size={11} strokeWidth={2.6} />
                        ) : (
                          <Copy size={11} strokeWidth={2.2} />
                        )}
                        {copied === i ? 'Copied' : 'Copy'}
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-line bg-canvas/60 px-3.5 py-2.5">
                    <TypingDots />
                  </div>
                </div>
              )}

              {error && (
                <p className="rounded-2xl border border-line bg-canvas/60 px-3.5 py-2.5 text-[12px] leading-relaxed text-muted">
                  {error}
                </p>
              )}

              {/* Suggestion chips — only before the first user message */}
              {messages.length === 1 && !loading && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => void send(s)}
                      className="rounded-full border border-line bg-canvas/60 px-3 py-1.5 text-[12px] font-medium text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* The input pill — the resting state from the design. Focusing it or
          pressing the arrow extends the chat section vertically above it. */}
      {open && (
      <motion.form
        initial={{ opacity: 0, y: 10, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        onSubmit={(e) => {
          e.preventDefault();
          // Empty submit = the arrow simply extends the chat section
          if (!input.trim()) openChat();
          else void send(input);
        }}
        className="mt-2.5 flex h-16 items-center gap-2.5 rounded-full border border-line bg-surface/95 p-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-200 hover:border-line-strong"
      >
        <span className="relative ml-0.5 shrink-0">
          <img
            src={chatLogo}
            alt=""
            draggable={false}
            className="h-10 w-10 select-none rounded-full border border-line object-cover"
          />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-canvas bg-emerald-500" />
        </span>

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={openChat}
          placeholder={listening ? 'Listening…' : `Ask ${ASSISTANT_NAME} anything…`}
          aria-label={`Ask ${ASSISTANT_NAME} anything about Fraol`}
          aria-expanded={open}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent px-1 py-1.5 text-[13px] text-ink outline-none placeholder:text-placeholder"
        />

        {voiceSupported && (
          <button
            type="button"
            onClick={toggleListening}
            disabled={loading}
            aria-label={listening ? 'Stop voice input' : 'Start voice input'}
            className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${
              listening ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'
            }`}
          >
            {listening && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-20" />
            )}
            <Mic size={16} className="relative" />
          </button>
        )}

        <button
          type="submit"
          disabled={loading}
          aria-label={input.trim() ? 'Send message' : `Open chat with ${ASSISTANT_NAME}`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-canvas transition-all duration-200 hover:scale-105 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          <ArrowUp size={17} />
        </button>
      </motion.form>
      )}
    </motion.div>
  );
}

