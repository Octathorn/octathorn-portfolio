import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ContactInfo } from './ContactInfo';
import { ProjectDetails } from './ProjectDetails';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SubCategoryPageProps {
  categoryName: string;
  subCategoryName: string;
}

export function SubCategoryPage({ categoryName, subCategoryName }: SubCategoryPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<number | null>(null);

  // Generate projects for this subcategory
  const projects = [
    {
      id: 1,
      title: `${subCategoryName} Project 1`,
      genre: subCategoryName,
      description: `Professional ${categoryName.toLowerCase()} solution`,
      image: `https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80`,
      url: "#"
    },
    {
      id: 2,
      title: `${subCategoryName} Project 2`,
      genre: subCategoryName,
      description: `Creative ${categoryName.toLowerCase()} design`,
      image: `https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80`,
      url: "#"
    },
    {
      id: 3,
      title: `${subCategoryName} Project 3`,
      genre: subCategoryName,
      description: `Innovative ${categoryName.toLowerCase()} approach`,
      image: `https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80`,
      url: "#"
    }
  ];

  const n = projects.length;
  const prevIdx = (currentIndex - 1 + n) % n;
  const nextIdx = (currentIndex + 1) % n;

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % n);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const next = () => { setIsAutoPlaying(false); setDirection(1);  setCurrentIndex((prev) => (prev + 1) % n); };
  const prev = () => { setIsAutoPlaying(false); setDirection(-1); setCurrentIndex((prev) => (prev - 1 + n) % n); };
  const goToSlide = (index: number) => { setIsAutoPlaying(false); setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); };

  // Preview handlers
  const closePreview = () => setPreviewImage(null);
  const nextPreview = () => setPreviewImage((prev) => prev !== null ? (prev + 1) % n : 0);
  const prevPreview = () => setPreviewImage((prev) => prev !== null ? (prev - 1 + n) % n : 0);

  // Handle ESC key to close preview
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') closePreview(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const groupVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
  };

  const springTransition = {
    type: 'spring' as const,
    stiffness: 280,
    damping: 38,
    mass: 1,
  };

  // If a project is selected, show the details page
  if (selectedProject !== null) {
    const nextProjectIndex = (selectedProject + 1) % n;
    const nextProject = projects[nextProjectIndex];
    return (
      <ProjectDetails
        project={projects[selectedProject]}
        onBack={() => setSelectedProject(null)}
        onNextProject={() => {
          setSelectedProject(nextProjectIndex);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        nextProjectTitle={nextProject.title}
      />
    );
  }

  return (
    <div className="relative w-full bg-[#1D1D1D]">
      {/* Carousel */}
      <div
        className="relative w-full h-screen overflow-hidden py-20 bg-[#1D1D1D]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative h-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={`${subCategoryName}-${currentIndex}`}
              custom={direction}
              variants={groupVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={springTransition}
              className="absolute inset-0 flex items-center gap-3 px-3"
            >
              {/* ← Prev Card */}
              <motion.div
                className="w-[24%] h-[88%] flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer group"
                onClick={prev}
                whileHover={{ opacity: 0.75 }}
                initial={{ opacity: 0.45 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Ambient blurred background */}
                <img
                  src={projects[prevIdx].image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70 pointer-events-none"
                />
                {/* Dark tint over blur */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Sharp image */}
                <img
                  src={projects[prevIdx].image}
                  alt={projects[prevIdx].title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-0.5">{projects[prevIdx].genre}</p>
                  <p className="text-white/80 text-sm leading-snug line-clamp-2">{projects[prevIdx].title}</p>
                </div>
              </motion.div>

              {/* ★ Center Card — Featured */}
              <div className="flex-1 h-full rounded-2xl overflow-hidden relative shadow-[0_0_60px_rgba(255,255,255,0.08)] ring-1 ring-white/15">
                {/* Ambient blurred background */}
                <img
                  src={projects[currentIndex].image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70 pointer-events-none"
                />
                {/* Dark tint over blur */}
                <div className="absolute inset-0 bg-black/25" />
                {/* Sharp main image */}
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pt-24 pb-8 px-8">
                  <motion.div
                    key={`info-${subCategoryName}-${currentIndex}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.45 }}
                    className="flex items-end justify-between gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="inline-block bg-white/15 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full tracking-widest uppercase mb-2">
                        {projects[currentIndex].genre}
                      </span>
                      <h2
                        className="text-white leading-tight mb-1"
                        style={{ fontSize: '1.45rem', fontFamily: 'Acumin Pro, sans-serif' }}
                      >
                        {projects[currentIndex].title}
                      </h2>
                      <p className="text-white/60 text-sm">{projects[currentIndex].description}</p>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                      <button
                        onClick={() => setSelectedProject(currentIndex)}
                        className="bg-white hover:bg-white/90 text-black px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                      >
                        View more
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Project counter badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white/70 text-xs px-3 py-1.5 rounded-full">
                  {currentIndex + 1} / {n}
                </div>
              </div>

              {/* → Next Card */}
              <motion.div
                className="w-[24%] h-[88%] flex-shrink-0 rounded-2xl overflow-hidden relative cursor-pointer group"
                onClick={next}
                whileHover={{ opacity: 0.75 }}
                initial={{ opacity: 0.45 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Ambient blurred background */}
                <img
                  src={projects[nextIdx].image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70 pointer-events-none"
                />
                {/* Dark tint over blur */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Sharp image */}
                <img
                  src={projects[nextIdx].image}
                  alt={projects[nextIdx].title}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-0.5">{projects[nextIdx].genre}</p>
                  <p className="text-white/80 text-sm leading-snug line-clamp-2">{projects[nextIdx].title}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 w-1.5 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Contact Information */}
        <ContactInfo />
      </div>

      {/* Image Preview Modal */}
      {previewImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closePreview}
        >
          <button onClick={closePreview} className="absolute top-8 right-8 text-white/80 hover:text-white transition-colors z-10">
            <X className="w-10 h-10" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevPreview(); }} className="absolute left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10">
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextPreview(); }} className="absolute right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10">
            <ChevronRight className="w-12 h-12" />
          </button>
          <div className="max-w-7xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img src={projects[previewImage].image} alt={projects[previewImage].title} className="max-w-full max-h-[90vh] object-contain rounded-2xl" />
            <p className="text-white text-center mt-4">{previewImage + 1} / {n}</p>
          </div>
        </div>
      )}
    </div>
  );
}