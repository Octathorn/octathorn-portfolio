import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  genre?: string;
  category?: string;
  description: string;
  fullDescription?: string;
  image: string;
  url?: string;
  details?: {
    heroTitle: string;
    heroSubtitle: string;
    meta: {
      client: string;
      role: string;
      timeline: string;
      year: string;
      scope: string;
    };
    overview: {
      heading: string;
      paragraphs: string[];
      image: string;
    };
    tags: string[];
    challenge: {
      title: string;
      paragraphs: string[];
    };
    process: {
      steps: Array<{
        step: string;
        title: string;
        body: string;
      }>;
    };
    solution: {
      heading: string;
      paragraphs: string[];
      image: string;
    };
    results: Array<{
      stat: string;
      label: string;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      authorRole: string;
      initials: string;
    };
    gallery?: Array<{
      src: string;
      alt: string;
    }>;
    designSystemImages?: Array<{
      src: string;
      alt: string;
    }>;
  };
}

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
  onNextProject?: () => void;
  nextProjectTitle?: string;
}

// Fixed diverse mockup gallery images
const MOCKUP_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=1200&q=85', alt: 'Mobile App UI' },
  { src: 'https://images.unsplash.com/photo-1760720962321-f03e04a03b41?w=1200&q=85', alt: 'Brand Stationery' },
  { src: 'https://images.unsplash.com/photo-1665470909939-959569b20021?w=1200&q=85', alt: 'Dashboard Interface' },
  { src: 'https://images.unsplash.com/photo-1770012977129-19f856a1f935?w=1200&q=85', alt: 'Logo Typography' },
  { src: 'https://images.unsplash.com/photo-1752134594016-f4969838b68d?w=1200&q=85', alt: 'Packaging Design' },
  { src: 'https://images.unsplash.com/photo-1571456610111-72c649ad3521?w=1200&q=85', alt: 'Wireframes' },
  { src: 'https://images.unsplash.com/photo-1765758014805-a7a6cc272982?w=1200&q=85', alt: 'Studio Workspace' },
  { src: 'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?w=1200&q=85', alt: 'Poster Design' },
  { src: 'https://images.unsplash.com/photo-1614010524751-75119514aaba?w=1200&q=85', alt: '3D Render' },
  { src: 'https://images.unsplash.com/photo-1574857049314-11f766fb0b20?w=1200&q=85', alt: 'Color Palette' },
  { src: 'https://images.unsplash.com/photo-1565351167686-7a19c5114965?w=1200&q=85', alt: 'Creative Team' },
];

const TAGS = ['Branding', 'Visual Identity', 'Design System', 'Brand Strategy', 'Print', 'Digital'];

// Default fallback data for projects without details
const DEFAULT_DETAILS = {
  heroTitle: 'Nexus Brand Identity',
  heroSubtitle: 'A full-spectrum brand identity system for a next-generation technology company — from strategy and visual language to guidelines, digital assets, and print collateral.',
  meta: {
    client: 'Nexus Technologies',
    role: 'Lead Brand Designer',
    timeline: '10 Weeks',
    year: '2024',
    scope: 'Identity · Print · Digital'
  },
  overview: {
    heading: 'Building a brand that thinks as clearly as it looks.',
    paragraphs: [
      'Nexus approached us with a clear mission: establish a visual identity that signals intelligence, precision, and human-centered technology. Starting with deep brand strategy sessions, we audited the competitive landscape, defined core positioning, and translated abstract values into a living, breathing visual system.',
      'The result is a cohesive ecosystem of marks, type, color, and motion rules — flexible enough to scale from a business card to a stadium billboard without losing an ounce of its character.'
    ],
    image: MOCKUP_IMAGES[1].src
  },
  tags: TAGS,
  challenge: {
    title: 'A fragmented visual language across 7 product lines with no unified system.',
    paragraphs: [
      'Before Octathorn\'s involvement, Nexus had grown quickly — perhaps too quickly. Each product team had shipped their own interfaces independently, resulting in 7 distinct visual languages living under one roof. Customers struggled to recognise sub-brands, internal teams duplicated design effort, and the premium positioning the company aspired to felt completely out of reach.',
      'The challenge wasn\'t just aesthetic — it was architectural. We had to design backwards compatibility into every decision, ensuring existing products could migrate to the new system without a costly full rebuild.'
    ]
  },
  process: {
    steps: [
      {
        step: '01',
        title: 'Discovery & Audit',
        body: 'A two-week deep dive into Nexus\'s existing touchpoints, competitor landscape, and user perception research across 80+ interviews.'
      },
      {
        step: '02',
        title: 'Strategy & Positioning',
        body: 'Defined brand pillars, voice, tone, and a clear design philosophy: "Intelligence made visible." Every visual decision traces back to this north star.'
      },
      {
        step: '03',
        title: 'Design & System Build',
        body: 'From logo exploration through typographic system, colour palette, iconography, motion principles, and a 140-page brand guidelines document.'
      }
    ]
  },
  solution: {
    heading: 'One unified system. Infinite executions.',
    paragraphs: [
      'The Nexus Design System centres on a geometric wordmark whose negative space forms an implied arrow — a nod to forward motion and precision. Paired with an extensive type hierarchy using Inter as the primary typeface and a cool monochrome palette punctuated by an electric teal accent.',
      'The system ships as a Figma library, an npm design-token package, and a printed guidelines booklet — ensuring every channel from the app to the annual report speaks with one voice.'
    ],
    image: MOCKUP_IMAGES[4].src
  },
  results: [
    { stat: '340%', label: 'increase in brand recognition within 90 days of launch' },
    { stat: '7→1', label: 'product visual languages consolidated into a single system' },
    { stat: '12wk', label: 'end-to-end delivery from discovery to final handoff' },
    { stat: '98%', label: 'stakeholder approval rate on first design presentation' }
  ],
  testimonial: {
    quote: 'Octathorn didn\'t just deliver a logo — they handed us a design infrastructure. Every team across our seven product lines immediately understood how to use it, and our NPS jumped 22 points in the first quarter post-launch. It\'s the best investment we\'ve made in the company\'s presentation.',
    author: 'Marcus Kim',
    authorRole: 'Chief Marketing Officer, Nexus Technologies',
    initials: 'MK'
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:  { opacity: 1, y: 0,  transition: { duration: 0.55, ease: 'easeOut' } },
};

export function ProjectDetails({ project, onBack, onNextProject, nextProjectTitle }: ProjectDetailsProps) {
  const [previewIdx, setPreviewIdx] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const label = project.genre ?? project.category ?? 'Project';

  // Use project details if available, otherwise fall back to default
  const details = project.details ?? DEFAULT_DETAILS;
  const galleryImages = details.gallery ?? MOCKUP_IMAGES;
  const designSystemImages = details.designSystemImages ?? MOCKUP_IMAGES;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // ESC closes lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPreviewIdx(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const prevImg = () => setPreviewIdx(p => p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : 0);
  const nextImg = () => setPreviewIdx(p => p !== null ? (p + 1) % galleryImages.length : 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-[#111] text-white"
      style={{ fontFamily: 'Acumin Pro, sans-serif' }}
    >
      {/* ─── HERO ─── */}
      <section className="relative h-screen overflow-hidden">
        {/* Blurred ambient bg */}
        <img src={project.image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-black/60" />
        {/* Sharp hero image */}
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-contain" />
        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black" />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-28 left-12 z-10 flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="text-[13px] tracking-wide">Back</span>
        </button>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-12 pb-16 max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            <span className="inline-block bg-white/12 backdrop-blur-sm text-white/75 text-[11px] px-3 py-1 rounded-full tracking-[0.16em] uppercase mb-4">
              {label}
            </span>
            <h1 className="text-white mb-4 leading-[1.05]" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}>
              {details.heroTitle}
            </h1>
            <p className="text-white/55 max-w-2xl" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              {details.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── META BAR ─── */}
      <section className="bg-[#161616] border-y border-white/[0.07]">
        <div className="max-w-[1440px] mx-auto px-12 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { label: 'Client',     value: details.meta.client },
            { label: 'Role',       value: details.meta.role },
            { label: 'Timeline',   value: details.meta.timeline },
            { label: 'Year',       value: details.meta.year },
            { label: 'Scope',      value: details.meta.scope },
          ].map(item => (
            <div key={item.label}>
              <p className="text-white/30 text-[10.5px] tracking-[0.16em] uppercase mb-1.5">{item.label}</p>
              <p className="text-white/85 text-[14px]">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OVERVIEW ─── */}
      <section className="max-w-[1440px] mx-auto px-12 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-6">Overview</p>
            <h2 className="text-white mb-6 leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
              {details.overview.heading}
            </h2>
            {details.overview.paragraphs.map((para, idx) => (
              <p key={idx} className="text-white/55 leading-relaxed mb-8" style={{ fontSize: '0.97rem', lineHeight: 1.85 }}>
                {para}
              </p>
            ))}
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {details.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/12 text-white/45 text-[11.5px] tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-[4/3] relative"
          >
            <img src={details.overview.image} alt="Project overview" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE 1 ─── */}
      

      {/* ─── CHALLENGE ─── */}
      <section className="max-w-[1440px] mx-auto px-12 py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-6">The Challenge</p>
            <p className="text-white/85 text-[2rem] leading-snug">
              {details.challenge.title}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="pt-2 md:pt-12">
            {details.challenge.paragraphs.map((para, idx) => (
              <p key={idx} className="text-white/50 leading-relaxed mb-6 last:mb-0" style={{ fontSize: '0.97rem', lineHeight: 1.9 }}>
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS — two-column images + text ─── */}
      <section className="px-6 mb-6">
        {/* Section label row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-white/20 text-[10px] tracking-[0.22em] uppercase">Process</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-white/15 text-[10px] tracking-[0.18em] uppercase">Phase 2 of 3</span>
        </div>

        {/* Asymmetric grid: left 3/5, right 2/5 */}
        
      </section>

      {/* ─── PROCESS TEXT ─── */}
      <section className="max-w-[1440px] mx-auto px-12 py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
          <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-6">Our Process</p>
          <h2 className="text-white mb-0 leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
            Research → Strategy → Design → Refine → Deliver
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {details.process.steps.map(item => (
            <motion.div
              key={item.step}
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="border border-white/[0.08] rounded-2xl p-7 hover:border-white/[0.16] transition-colors duration-300"
            >
              <p className="text-white/20 text-[11px] tracking-[0.2em] uppercase mb-4">{item.step}</p>
              <h3 className="text-white mb-3" style={{ fontSize: '1.05rem' }}>{item.title}</h3>
              <p className="text-white/45 text-[13.5px] leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SOLUTION + MOCKUP ─── */}
      <section className="max-w-[1440px] mx-auto px-12 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="order-2 md:order-1 rounded-2xl overflow-hidden"
            style={{ height: 'clamp(320px, 40vw, 580px)' }}
          >
            <img src={details.solution.image} alt="Solution mockup" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-6">The Solution</p>
            <h2 className="text-white mb-6 leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
              {details.solution.heading}
            </h2>
            {details.solution.paragraphs.map((para, idx) => (
              <p key={idx} className="text-white/50 leading-relaxed mb-6 last:mb-0" style={{ fontSize: '0.97rem', lineHeight: 1.9 }}>
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── THREE-COLUMN MOSAIC ─── */}
      <section className="px-6 mb-6">
        {/* ─── AUTO-SCROLL GALLERY ─── */}
      <section className="pb-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-12 mb-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-3">Project Gallery</p>
            <h2 className="text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>All deliverables</h2>
          </motion.div>
        </div>

        {/* Scrolling strip */}
        <div className="relative overflow-hidden" ref={galleryRef}>
          <div className="flex gap-4 animate-[galleryScroll_40s_linear_infinite] hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[420px] h-[280px] rounded-2xl overflow-hidden cursor-pointer group relative"
                onClick={() => setPreviewIdx(i % galleryImages.length)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </section>

      {/* ─── DESIGN SYSTEM SHOWCASE ─── */}
      <section className="max-w-[1440px] mx-auto px-12 py-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12">
          <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-4">Design System</p>
          <h2 className="text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
            Every element, considered.
          </h2>
        </motion.div>

        {/* Typography and Colour Palette — hidden until project-specific design token data is available
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-[#161616] border border-white/[0.07] rounded-2xl p-8"
          >
            <p className="text-white/30 text-[10.5px] tracking-[0.16em] uppercase mb-6">Typography</p>
            <div className="space-y-3">
              <p className="text-white" style={{ fontSize: '2.8rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Display 48</p>
              <p className="text-white/70" style={{ fontSize: '1.5rem', lineHeight: 1.2 }}>Heading 24 Regular</p>
              <p className="text-white/50" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>Body text 15 — Inter Regular. Clean, legible, purpose-built for information-dense interfaces and long-form reading at any screen size.</p>
              <p className="text-white/30 text-[11px] tracking-[0.22em] uppercase">Caption 11 Uppercase</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-[#161616] border border-white/[0.07] rounded-2xl p-8"
          >
            <p className="text-white/30 text-[10.5px] tracking-[0.16em] uppercase mb-6">Colour Palette</p>
            <div className="grid grid-cols-5 gap-3 mb-6">
              {[
                { hex: '#0A0A0A', name: 'Obsidian' },
                { hex: '#1A1A1A', name: 'Studio' },
                { hex: '#2E2E2E', name: 'Charcoal' },
                { hex: '#F5F5F5', name: 'Cloud' },
                { hex: '#00E5CC', name: 'Teal' },
              ].map(c => (
                <div key={c.hex}>
                  <div className="h-14 rounded-xl mb-2 border border-white/10" style={{ backgroundColor: c.hex }} />
                  <p className="text-white/50 text-[10px] tracking-wide">{c.name}</p>
                  <p className="text-white/25 text-[10px]">{c.hex}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        */}

        {/* Full-width logo showcase */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="rounded-2xl overflow-hidden relative cursor-pointer group"
          style={{ height: 'clamp(280px, 36vw, 520px)' }}
          onClick={() => setPreviewIdx(0)}
        >
          <img src={designSystemImages[0]?.src ?? MOCKUP_IMAGES[3].src} alt="Design system" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-10">
            <p className="text-white/35 text-[11px] tracking-[0.18em] uppercase mb-1">Logo system</p>
            <p className="text-white/70 text-[15px]">Wordmark · Logomark · Monogram · Lockup variations</p>
          </div>
        </motion.div>
      </section>

      

      {/* ─── RESULTS ─── */}
      <section className="bg-[#161616] border-y border-white/[0.07]">
        <div className="max-w-[1440px] mx-auto px-12 py-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
            <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-4">Results</p>
            <h2 className="text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Measurable impact, from day one.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {details.results.map(item => (
              <motion.div
                key={item.stat}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="border-t border-white/[0.1] pt-6"
              >
                <p className="text-white mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>
                  {item.stat}
                </p>
                <p className="text-white/40 text-[13px] leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      {details.testimonial && (
        <section className="max-w-[1440px] mx-auto px-12 py-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-3xl">
            <p className="text-white/20 text-[10.5px] tracking-[0.18em] uppercase mb-8">Client feedback</p>
            <blockquote className="text-white/75 leading-relaxed mb-8" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)', lineHeight: 1.65 }}>
              "{details.testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-[13px]">
                {details.testimonial.initials}
              </div>
              <div>
                <p className="text-white/70 text-[13.5px]">{details.testimonial.author}</p>
                <p className="text-white/30 text-[12px]">{details.testimonial.authorRole}</p>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* ─── NEXT PROJECT ─── */}
      {onNextProject && nextProjectTitle && (
        <section className="border-t border-white/[0.07]">
          <div className="max-w-[1440px] mx-auto px-12 py-16">
            <button
              onClick={onNextProject}
              className="group flex items-center justify-between w-full hover:opacity-75 transition-opacity duration-200"
            >
              <div>
                <p className="text-white/30 text-[10.5px] tracking-[0.18em] uppercase mb-3">Next Project</p>
                <h3 className="text-white" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.6rem)' }}>
                  {nextProjectTitle}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors duration-200">
                <span className="text-[13px] tracking-wide">View project</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </section>
      )}

      {/* ─── LIGHTBOX ─── */}
      {previewIdx !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/96 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setPreviewIdx(null)}
        >
          <button
            onClick={() => setPreviewIdx(null)}
            className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={e => { e.stopPropagation(); prevImg(); }}
            className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={e => { e.stopPropagation(); nextImg(); }}
            className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-6xl w-full px-24" onClick={e => e.stopPropagation()}>
            <img
              src={galleryImages[previewIdx].src}
              alt={galleryImages[previewIdx].alt}
              className="w-full max-h-[82vh] object-contain rounded-2xl"
            />
            <p className="text-white/30 text-center mt-4 text-[13px]">
              {previewIdx + 1} / {galleryImages.length} — {galleryImages[previewIdx].alt}
            </p>
          </div>
        </div>
      )}

      {/* Gallery scroll keyframe */}
      <style>{`
        @keyframes galleryScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </motion.div>
  );
}