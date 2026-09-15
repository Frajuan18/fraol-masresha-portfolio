import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Mic, X } from 'lucide-react';
import { askFraol, type ChatMessage } from '../lib/chatbot';
import { EASE } from '../lib/motion';
import logoImg from '../assets/logo.png';

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
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [voiceSupported] = useState(() => getSpeechRecognition() !== null);
  const listRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  // Auto-scroll to the newest message
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const send = async (text: string) => {
    const value = text.trim();
    if (!value || loading) return;

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
    } catch {
      setListening(false);
    }
  };

  return (

    <>
      {/* Floating launcher button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        aria-label={open ? 'Close chat' : `Ask ${ASSISTANT_NAME} anything about Fraol`}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full border border-line bg-ink px-5 py-3 text-sm font-bold text-canvas shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)] transition-colors duration-200 hover:opacity-90 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <X size={17} />
        ) : (
          <img
            src={logoImg}
            alt=""
            draggable={false}
            className="h-7 w-7 select-none rounded-full object-cover ring-1 ring-canvas/40"
          />
        )}
        <span className="hidden sm:inline">{open ? 'Close chat' : `Ask ${ASSISTANT_NAME}`}</span>
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-canvas bg-emerald-500" />
          </span>
        )}
      </motion.button>


      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 24, scale: 0.96, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed bottom-20 right-5 z-50 flex h-[min(560px,72vh)] w-[min(94vw,384px)] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_64px_-16px_rgba(0,0,0,0.4)] sm:bottom-24 sm:right-6"
            role="dialog"
            aria-label={`Ask ${ASSISTANT_NAME} — Fraol's AI assistant`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-line bg-canvas/60 px-5 py-4">
              <div className="relative shrink-0">
                <img
                  src={logoImg}
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
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-8 w-8 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors duration-200 hover:text-ink"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="chat-scroll flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <img
                      src={logoImg}
                      alt=""
                      draggable={false}
                      className="mt-0.5 h-6 w-6 shrink-0 select-none rounded-lg border border-line object-cover"
                    />
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-br-md bg-ink text-canvas'
                        : 'rounded-bl-md border border-line bg-canvas/60 text-ink'
                    }`}
                  >
                    {msg.content}
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

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void send(input);
              }}
              className="border-t border-line bg-canvas/60 p-3"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-line bg-surface p-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={listening ? 'Listening…' : `Ask ${ASSISTANT_NAME}…`}
                  aria-label="Your message"
                  className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-[13px] text-ink outline-none placeholder:text-placeholder"
                />
                {voiceSupported && (
                  <button
                    type="button"
                    onClick={toggleListening}
                    disabled={loading}
                    aria-label={listening ? 'Stop voice input' : 'Start voice input'}
                    className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-30 ${
                      listening
                        ? 'border-transparent bg-ink text-canvas'
                        : 'border-line bg-canvas/60 text-muted hover:text-ink'
                    }`}
                  >
                    {listening && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-xl bg-ink opacity-20" />
                    )}
                    <Mic size={16} className="relative" />
                  </button>
                )}
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  aria-label="Send message"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink text-canvas transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

