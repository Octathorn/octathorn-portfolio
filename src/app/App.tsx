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
import svgPaths from './imports/svg-gmafgso3hz';
import imgOctathornHero from "figma:asset/d5577470c8316c83ef842a0a8afd1d184714ba32.png";
import imgStreamNowShrinkingComedyNewSeason from "figma:asset/8834a6cabda1d7e8bcdc3cb59dff75870bf6e2f1.png";
import imgStreamNowHijackThrillerWhoCanYouTrustWhenItsAllOnTheLine from "figma:asset/603dca2e2b77bce04cd33d06b020c0ad87fb5ddd.png";
import imgStreamNowMonarchLegacyOfMonstersAdventureNewSeasonFeb27 from "figma:asset/fe2d6de7273646a3202566b9bfd1721c8a78860b.png";
import imgStreamNowTehranThrillerASecretAgentEmbarksOnHerMostDangerousMissionYet from "figma:asset/2f6ec3eedc162aa7d3ec48dd829231a9a1feb900.png";
import imgStreamNowF1TheMovieAction4OscarNominationsIncludingBestPicture from "figma:asset/e5c842f031a297fc00f3c1126cf8b1d512803871.png";
import imgStreamNowPluribusDramaHappinessIsAStateOfMind from "figma:asset/166b59795ed99e5e1e47bb19ed6e3062b0ed4912.png";
import imgStreamNowTedLassoComedyKindnessMakesAComeback from "figma:asset/2a76b8bd054e51c5169768201afe75ce68198e90.png";
import imgStreamNowDropsOfGodDramaAnImpossiblePairing from "figma:asset/0a96630bb441146d7cece9caa2a2f9f45ae1e00c.png";
import imgStreamNowTheMorningShowDramaTheTruthIsTheTopStory from "figma:asset/1495e1c8c284f0fec6f70eab67dd101b375cde46.png";
import img226X226SrJpg from "figma:asset/ae8f7d69ff0a9c31d88e224169301d121a5444c0.png";
import img470X264Jpg from "figma:asset/8001866d533db8ddf2a306ad6088a384430d4575.png";
import img470X264Jpg1 from "figma:asset/affd7cf95a9b951a5bc45e60425f042cd7573624.png";
import img226X226ScDn01Jpg from "figma:asset/a0d369b1d44acb3fca6e99414024dcc873b899fb.png";
import img470X264Jpg2 from "figma:asset/a407eb0701dc5afced61e5bb2e049fa233af8121.png";
import img470X264Jpg3 from "figma:asset/44c883164c348cf19442039678f73f6ad24bce0c.png";
import img226X226ScDn01Jpg1 from "figma:asset/e7c83c6f7a8b69ea0fdf8e57dc685c51e44375d2.png";
import img470X264Jpg4 from "figma:asset/c75d4c882ee50ebb98fcc44dd37dfd69b5049567.png";
import img470X264Jpg5 from "figma:asset/1c599506f7e02424821bd7e095927ca22a357d87.png";
import imgAiDrivenBanner from "figma:asset/e4501df564166b043db900f04bf5cc44858236c3.png";
import imgSlide1 from "figma:asset/4f8036569aced65fc200078b7f4d97cd93dce27e.png";
import imgSlide2 from "figma:asset/a79de417d94c786dd0eec1fcee444020779a9352.png";
import imgSlide3 from "figma:asset/44d885758b6ee670511b09c36b581bda66d69eed.png";
import imgCompanyProfile from "figma:asset/a79de417d94c786dd0eec1fcee444020779a9352.png";

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

  const smallCards = [
    {
      id: 1,
      type: "music",
      title: "Sabrina Carpenter: The Zane Lowe Interview",
      image: img226X226SrJpg,
      logo: svgPaths.p36deed80,
      buttonText: "Listen now",
      url: "https://music.apple.com/us/station/sabrina-carpenter-the-zane-lowe-interview/ra.1837392419"
    },
    {
      id: 2,
      type: "fitness",
      title: "HIIT with Anja",
      image: img470X264Jpg,
      logo: svgPaths.p32446300,
      buttonText: "Watch now",
      url: "https://fitness.apple.com/us/workout/hiit-with-anja/1863074838"
    },
    {
      id: 3,
      type: "fitness",
      title: "Cycling with Emily",
      image: img470X264Jpg1,
      logo: svgPaths.p32446300,
      buttonText: "Watch now",
      url: "#"
    },
    {
      id: 4,
      type: "music",
      title: "Top 100: Global",
      image: img226X226ScDn01Jpg,
      logo: svgPaths.p36deed80,
      buttonText: "Listen now",
      url: "#"
    },
    {
      id: 5,
      type: "fitness",
      title: "Yoga with Molly",
      image: img470X264Jpg2,
      logo: svgPaths.p32446300,
      buttonText: "Watch now",
      url: "#"
    },
    {
      id: 6,
      type: "fitness",
      title: "Strength with Kyle",
      image: img470X264Jpg3,
      logo: svgPaths.p32446300,
      buttonText: "Watch now",
      url: "#"
    },
    {
      id: 7,
      type: "music",
      title: "Chill Hits",
      image: img226X226ScDn01Jpg1,
      logo: svgPaths.p36deed80,
      buttonText: "Listen now",
      url: "#"
    },
    {
      id: 8,
      type: "fitness",
      title: "Dance with LaShawn",
      image: img470X264Jpg4,
      logo: svgPaths.p32446300,
      buttonText: "Watch now",
      url: "#"
    },
    {
      id: 9,
      type: "fitness",
      title: "Pilates with Darryl",
      image: img470X264Jpg5,
      logo: svgPaths.p32446300,
      buttonText: "Watch now",
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

function SmallCard({ card }: { card: typeof smallCards[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={card.url}
      className="block relative rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[470/264] bg-black">
        {/* Image */}
        {card.type === 'music' ? (
          <div className="absolute inset-0 flex items-center">
            <div className="flex items-center justify-start px-5 w-full gap-5 z-10">
              <div className="w-[226px] h-[226px] rounded-lg overflow-hidden shadow-[3px_5px_30px_0px_rgba(0,0,0,0.22)]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className="text-[#f5f5f7] text-[14px] font-['Segoe_UI'] font-semibold leading-[18px] tracking-[-0.224px]"
                  style={{ textShadow: '0px 0px 5px rgba(0,0,0,0.6)' }}
                >
                  {card.title}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#1a0e07]">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-between"
          style={{
            backgroundImage: card.type === 'music' 
              ? "linear-gradient(rgba(29, 29, 31, 0.4) 0%, rgba(29, 29, 31, 0) 26.515%, rgba(29, 29, 31, 0) 73.485%, rgba(29, 29, 31, 0.4) 100%)"
              : "linear-gradient(rgba(29, 29, 31, 0.4) 0%, rgba(29, 29, 31, 0) 26.459%, rgba(29, 29, 31, 0) 73.541%, rgba(29, 29, 31, 0.4) 100%)"
          }}
        >
          {/* Logo */}
          <div className="flex items-start justify-center pt-5 px-4">
            <svg className="h-[14px] w-auto" fill="none" preserveAspectRatio="none" viewBox={card.type === 'music' ? "0 0 58.9805 13.9209" : "0 0 77.9503 13.89"}>
              <path d={card.logo} fill="white" />
            </svg>
          </div>

          {/* Bottom Content */}
          <div className="flex items-center justify-between pb-4 px-5">
            {card.type === 'fitness' && (
              <p
                className="text-[#f5f5f7] text-[14px] font-['Segoe_UI'] font-semibold leading-[18px] tracking-[-0.224px]"
                style={{ textShadow: '0px 0px 5px rgba(0,0,0,0.6)' }}
              >
                {card.title}
              </p>
            )}
            <motion.button
              className="bg-[#f5f5f7] hover:bg-white text-black px-4 py-2 rounded-full text-[14px] font-['Segoe_UI'] tracking-[-0.224px] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {card.buttonText}
            </motion.button>
            {card.type === 'music' && <div />}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function SmallCardsRow() {
  return null;
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
        <ServicePage serviceName={categoryName} />
      ) : (
        <ServicePage serviceName={currentPage} />
      )}
      
      <SmallCardsRow />
    </div>
  );
}