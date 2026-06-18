import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { ProjectDetails } from './components/ProjectDetails';
import { ServicePage } from './components/ServicePage';
import { serviceProjects } from './components/projectsData';
import { ContactInfo } from './components/ContactInfo';
import { ContactPage } from './components/ContactPage';
import { Toaster } from 'sonner';
import imgSlide1 from '../assets/4f8036569aced65fc200078b7f4d97cd93dce27e.png';
import imgSlide2 from '../assets/a79de417d94c786dd0eec1fcee444020779a9352.png';
import imgSlide3 from '../assets/44d885758b6ee670511b09c36b581bda66d69eed.png';

// Hero Carousel Component - Fixed undefined variable error
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const shows = [
    {
      id: 1,
      title: "Reliable AI-Driven Solutions",
      genre: "AI-Driven",
      description: "Hardware & Software Solutions",
      image: imgSlide1,
      url: "#"
    },
    {
      id: 2,
      title: "We Value Your Partnership",
      genre: "Partnership",
      description: "Building Excellence Together",
      image: imgSlide2,
      url: "#"
    },
    {
      id: 3,
      title: "Innovation & Excellence",
      genre: "Innovation",
      description: "Delivering Quality Solutions",
      image: imgSlide3,
      url: "#"
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleSlideChange('next');
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  // Handle slide change with transition lock
  const handleSlideChange = (dir: 'next' | 'prev' | number) => {
    if (selectedProject !== null) return;
    
    if (dir === 'next') {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % shows.length);
    } else if (dir === 'prev') {
      setDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + shows.length) % shows.length);
    } else {
      setDirection(dir > currentSlide ? 1 : -1);
      setCurrentSlide(dir);
    }
  };

  const goToSlide = (index: number) => handleSlideChange(index);
  const nextSlide = () => handleSlideChange('next');
  const prevSlide = () => handleSlideChange('prev');

  // Smoother animation variants for content slider
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  // Smooth spring transition config
  const transitionConfig = {
    x: { 
      type: "spring" as const, 
      stiffness: 200, 
      damping: 35,
      mass: 1
    },
    opacity: { 
      duration: 0.5,
      ease: "easeInOut" as const
    },
    scale: {
      duration: 0.5,
      ease: "easeInOut" as const
    }
  };

  // If a project is selected, show the details page
  if (selectedProject !== null) {
    return <ProjectDetails project={shows[selectedProject]} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="relative w-full bg-[#091E38] h-screen flex flex-col">
      {/* Carousel */}
      <div 
        className="relative w-full flex-1 overflow-hidden bg-[#1D1D1D]"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative h-full w-full">
          {/* Current Slide - Full Width */}
          <div className="w-full h-full relative">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transitionConfig}
                className="absolute inset-0"
              >
                <a
                  href={shows[currentSlide].url}
                  className="block w-full h-full relative overflow-hidden group"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={shows[currentSlide].image}
                      alt={shows[currentSlide].title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 flex items-end justify-center"
                  >
                    
                  </div>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 hover:opacity-100 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Contact Information - Below Carousel */}
      <ContactInfo />

      {/* Dot Navigation */}
      
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Check if current page is a subcategory (contains " > ")
  const isSubCategory = currentPage.includes(' > ');
  const categoryName = isSubCategory ? currentPage.split(' > ')[0] : '';
  const subCategoryName = isSubCategory ? currentPage.split(' > ')[1] : '';

  const projectsForCategory = isSubCategory ? (serviceProjects[categoryName] ?? []) : [];
  const selectedProjectIndex = isSubCategory
    ? projectsForCategory.findIndex(p => p.title === subCategoryName)
    : -1;
  const selectedProject =
    isSubCategory && selectedProjectIndex >= 0 ? projectsForCategory[selectedProjectIndex] : null;
  const nextProjectIndex =
    isSubCategory && selectedProjectIndex >= 0 ? (selectedProjectIndex + 1) % projectsForCategory.length : -1;
  const nextProjectTitle =
    isSubCategory && nextProjectIndex >= 0 ? projectsForCategory[nextProjectIndex]?.title : undefined;

  return (
    <div className="min-h-screen bg-[#1D1D1D]">
      <Toaster position="top-center" richColors />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'Home' ? (
        <HeroCarousel />
      ) : currentPage === 'Contact' ? (
        <ContactPage onBack={() => setCurrentPage('Home')} />
      ) : isSubCategory && selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={() => setCurrentPage(categoryName)}
          onNextProject={() => {
            const next = projectsForCategory[nextProjectIndex];
            if (!next) return;
            setCurrentPage(`${categoryName} > ${next.title}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          nextProjectTitle={nextProjectTitle}
        />
      ) : isSubCategory ? (
        <ServicePage
          serviceName={categoryName}
          onSelectProject={(title) => {
            setCurrentPage(`${categoryName} > ${title}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <ServicePage
          serviceName={currentPage}
          onSelectProject={(title) => {
            setCurrentPage(`${currentPage} > ${title}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}