import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Send, MapPin, Mail, Phone, Check } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SERVICES = [
  'Automation & AI',
  'Hardware',
  'PCBs',
  'Web development',
  'Mobile development',
  'Product design',
  'UX UI design',
];

const BUDGETS = [
  'Under $5k',
  '$5k – $15k',
  '$15k – $30k',
  '$30k – $60k',
  '$60k+',
];

export function ContactPage({ onBack }: ContactPageProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const toggleService = (s: string) =>
    setSelectedServices(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#111] text-white"
      style={{ fontFamily: 'Acumin Pro, sans-serif' }}
    >
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '52vh' }}>
        {/* Ambient bg */}
        <img
          src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-30 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#111]/60 to-[#111]" />

        {/* Back */}
        <button
          onClick={onBack}
          className="absolute top-28 left-12 z-10 flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="text-[13px] tracking-wide">Back</span>
        </button>

        {/* Hero text */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-12 pt-44 pb-20">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <p className="text-white/30 text-[10.5px] tracking-[0.22em] uppercase mb-5">
              Get in touch
            </p>
            <h1
              className="text-white leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              Let's build something<br />
              <span className="text-white/40">worth talking about.</span>
            </h1>
            <p className="text-white/45 max-w-lg" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              At our core, we offer automated solutions that simplify your problems. Name your challenge,
              and our tech-based solutions are here for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main grid ── */}
      <section className="max-w-[1440px] mx-auto px-12 pb-32">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">

          {/* ──────────── LEFT: Form ──────────── */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-32"
              >
                <div className="w-16 h-16 rounded-full bg-white/[0.07] border border-white/15 flex items-center justify-center mb-6">
                  <Check className="w-7 h-7 text-white/80" />
                </div>
                <h2 className="text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                  Message received.
                </h2>
                <p className="text-white/40 text-[14px] max-w-sm leading-relaxed mb-8">
                  Thanks, <span className="text-white/70">{form.name}</span>. We'll be in touch at{' '}
                  <span className="text-white/70">{form.email}</span> within one business day.
                </p>
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all duration-200 text-[13px]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to portfolio
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Row 1 — Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {(['name', 'email'] as const).map(field => (
                    <div key={field} className="relative">
                      <label
                        className={`absolute left-4 transition-all duration-200 pointer-events-none
                          ${focused === field || form[field]
                            ? 'top-2.5 text-[10px] text-white/30 tracking-[0.16em] uppercase'
                            : 'top-1/2 -translate-y-1/2 text-[13.5px] text-white/35'
                          }`}
                        style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                      >
                        {field === 'name' ? 'Your name' : 'Email address'}
                        <span className="text-white/25 ml-0.5">*</span>
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        value={form[field]}
                        onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        required
                        className="w-full bg-[#161616] border border-white/[0.08] rounded-2xl px-4 pt-7 pb-3 text-white text-[14px] outline-none focus:border-white/20 transition-colors duration-200"
                        style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2 — Company */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focused === 'company' || form.company
                        ? 'top-2.5 text-[10px] text-white/30 tracking-[0.16em] uppercase'
                        : 'top-1/2 -translate-y-1/2 text-[13.5px] text-white/35'
                      }`}
                    style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                  >
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-[#161616] border border-white/[0.08] rounded-2xl px-4 pt-7 pb-3 text-white text-[14px] outline-none focus:border-white/20 transition-colors duration-200"
                    style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                  />
                </div>

                {/* Services selector */}
                <div>
                  <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-3">
                    Services needed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map(s => {
                      const active = selectedServices.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`px-3.5 py-1.5 rounded-full border text-[12.5px] tracking-wide transition-all duration-200
                            ${active
                              ? 'border-white/40 bg-white/10 text-white'
                              : 'border-white/[0.09] text-white/40 hover:border-white/20 hover:text-white/65'
                            }`}
                          style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                        >
                          {active && <span className="mr-1.5 text-white/60">✓</span>}
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget selector */}
                <div>
                  <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-3">
                    Approximate budget
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map(b => {
                      const active = selectedBudget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(active ? null : b)}
                          className={`px-4 py-1.5 rounded-full border text-[12.5px] tracking-wide transition-all duration-200
                            ${active
                              ? 'border-white/40 bg-white/10 text-white'
                              : 'border-white/[0.09] text-white/40 hover:border-white/20 hover:text-white/65'
                            }`}
                          style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none
                      ${focused === 'message' || form.message
                        ? 'top-3 text-[10px] text-white/30 tracking-[0.16em] uppercase'
                        : 'top-5 text-[13.5px] text-white/35'
                      }`}
                    style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-[#161616] border border-white/[0.08] rounded-2xl px-4 pt-8 pb-4 text-white text-[14px] outline-none focus:border-white/20 transition-colors duration-200 resize-none"
                    style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                  />
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="flex items-center gap-2.5 px-7 py-3 rounded-full bg-white text-black text-[13.5px] tracking-wide hover:bg-white/90 transition-all duration-200 group"
                    style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                  >
                    Send message
                    <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="text-white/20 text-[11.5px] leading-relaxed">
                    We'll reply within<br />one business day.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* ──────────── RIGHT: Info sidebar ──────────── */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="space-y-4 lg:sticky lg:top-28"
          >
            {/* Contact details card */}
            <div className="bg-[#161616] border border-white/[0.07] rounded-3xl p-7">
              <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-6">
                Contact details
              </p>
              <div className="space-y-5">
                {[
                  { Icon: Mail,   label: 'Email',    value: 'info@octathorn.com', href: 'mailto:info@octathorn.com' },
                  { Icon: Phone,  label: 'Phone',    value: '+92 51 8773179 - +92 305 5400609' },
                  { Icon: MapPin, label: 'Location', value: 'Office 608, Alpha Techno Square NASTP, Old Airport Building Chaklala Cantt. Rawalpindi, Punjab Pakistan' },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-white/45" />
                    </div>
                    <div>
                      <p className="text-white/25 text-[10.5px] tracking-[0.14em] uppercase mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white/75 text-[13.5px] hover:text-white underline underline-offset-2 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/75 text-[13.5px]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-[#161616] border border-white/[0.07] rounded-3xl p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
                  Currently available
                </p>
              </div>
              <p className="text-white/65 text-[13.5px] leading-relaxed mb-5">
                We're accepting new projects for Q2 2026.
                Slots are limited — reach out early to secure your spot.
              </p>
              <div className="border-t border-white/[0.06] pt-5">
                <p className="text-white/25 text-[10px] tracking-[0.18em] uppercase mb-3">Typical timeline</p>
                <div className="space-y-2">
                  {[
                    { range: '1–2 days', desc: 'Initial response & discovery call' },
                    { range: '3–5 days', desc: 'Proposal & project scope' },
                    { range: '1–2 weeks', desc: 'Kick-off & first deliverables' },
                  ].map(t => (
                    <div key={t.range} className="flex items-center justify-between">
                      <span className="text-white/35 text-[12px]">{t.desc}</span>
                      <span className="text-white/55 text-[11.5px] ml-3 flex-shrink-0">{t.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="bg-[#161616] border border-white/[0.07] rounded-3xl p-7">
              <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-4">Social network</p>
              <div className="space-y-2">
                {[
                  { name: 'Facebook',  url: 'https://www.facebook.com/octathornpvtltd' },
                  { name: 'LinkedIn',  url: 'https://www.linkedin.com/company/octathorn/posts/?feedView=all' },
                  { name: 'YouTube',   url: 'https://www.youtube.com/@OctathornTech' },
                ].map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0 group"
                  >
                    <span className="text-white/50 text-[13.5px] group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ── Bottom strip ── */}
      <div className="border-t border-white/[0.05] bg-[#0d0d0d]">
        <div className="max-w-[1440px] mx-auto px-12 py-6 flex items-center justify-between">
          <p className="text-white/20 text-[11.5px]">
            © 2026 Octathorn. All rights reserved.
          </p>
          <p className="text-white/15 text-[11.5px] tracking-wide">
            Design · Brand · Technology
          </p>
        </div>
      </div>
    </motion.div>
  );
}