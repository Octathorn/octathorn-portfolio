import image_da4b86b575347f6936ab64824f29eb6f45d45a08 from 'figma:asset/da4b86b575347f6936ab64824f29eb6f45d45a08.png';
import { Search, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SearchOverlay } from './SearchOverlay';
import { serviceProjects } from './projectsData';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  'Home',
  'Automation & AI',
  'Hardware',
  'PCBs',
  'Web development',
  'Mobile development',
  'Product design',
  'UX UI design',
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isMenuOpen = hoveredItem && hoveredItem !== 'Home' && serviceProjects[hoveredItem];
  const activeProjects = hoveredItem ? (serviceProjects[hoveredItem] ?? []) : [];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        onMouseLeave={() => { setHoveredItem(null); setHoveredProject(null); }}
      >
        {/* ── Main bar ── */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-2xl border-b border-white/[0.06]">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex items-center justify-between h-[60px]">

              {/* Logo */}
              <button
                onClick={() => { onNavigate('Home'); setHoveredItem(null); }}
                className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={image_da4b86b575347f6936ab64824f29eb6f45d45a08}
                  alt="Octathorn"
                  className="h-[38px] w-auto"
                />
              </button>

              {/* Nav items */}
              <div className="flex items-center gap-0.5">
                {navItems.map((item) => {
                  const isActive = currentPage === item || currentPage.startsWith(item + ' >');
                  const isHovered = hoveredItem === item;
                  return (
                    <button
                      key={item}
                      onClick={() => { onNavigate(item); setHoveredItem(null); }}
                      onMouseEnter={() => { setHoveredItem(item); setHoveredProject(null); }}
                      className={`relative px-3 py-1.5 rounded-full text-[12px] tracking-wide whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-white/10'
                          : isHovered
                          ? 'text-white/90 bg-white/[0.06]'
                          : 'text-white/50 hover:text-white/80'
                      }`}
                      style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                    >
                      {item}
                      {isActive && (
                        <motion.span
                          layoutId="activeDot"
                          className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/60"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right actions */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-200"
                >
                  <Search className="w-[15px] h-[15px]" />
                </button>
                <div className="w-px h-4 bg-white/10" />
                <button
                  onClick={() => { onNavigate('Contact'); setHoveredItem(null); }}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all duration-200 text-[12px] tracking-wide"
                  style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                >
                  Let's Talk
                  <ArrowUpRight className="w-3 h-3 opacity-70" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ── Mega dropdown ── */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key={hoveredItem}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-b from-[#0e0e0e]/98 to-[#0a0a0a]/98 backdrop-blur-3xl border-b border-white/[0.08] shadow-2xl"
              onMouseEnter={() => setHoveredItem(hoveredItem!)}
            >
              <div className="max-w-[1440px] mx-auto px-8 py-9">
                {/* Header */}
                <div className="flex items-center gap-5 mb-7">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <p
                      className="text-white/50 text-[11px] tracking-[0.2em] uppercase font-medium"
                      style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                    >
                      {hoveredItem}
                    </p>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-white/[0.12] to-transparent" />
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    <div className="w-1 h-1 rounded-full bg-white/30" />
                    <p className="text-white/30 text-[10px] tracking-[0.16em] uppercase font-medium">
                      {activeProjects.length} Projects
                    </p>
                  </div>
                </div>

                {/* Project grid — cleaner, more spacious */}
                <div className="grid grid-cols-2 gap-x-16 gap-y-1">
                  {activeProjects.map((project, i) => {
                    const isHov = hoveredProject === i;
                    return (
                      <motion.button
                        key={project.id}
                        onClick={() => {
                          onNavigate(`${hoveredItem} > ${project.title}`);
                          setHoveredItem(null);
                          setHoveredProject(null);
                        }}
                        onMouseEnter={() => setHoveredProject(i)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group relative flex items-center gap-5 py-4 text-left w-full transition-all duration-200"
                        initial={false}
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      >
                        {/* Hover background */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: isHov ? 1 : 0, scale: isHov ? 1 : 0.96 }}
                          transition={{ duration: 0.2 }}
                        />

                        {/* Content wrapper */}
                        <div className="relative flex items-center gap-5 w-full px-4">
                          {/* Index number */}
                          <span
                            className={`text-[11px] tabular-nums font-medium w-6 text-right flex-shrink-0 transition-all duration-200 ${
                              isHov ? 'text-white/60 scale-105' : 'text-white/20'
                            }`}
                            style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>

                          {/* Thumbnail with better styling */}
                          <motion.div
                            className="relative w-14 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-white/[0.08]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ 
                              opacity: isHov ? 1 : 0.4, 
                              scale: isHov ? 1.05 : 1,
                              borderColor: isHov ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'
                            }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                          >
                            <img
                              src={project.image}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                            {/* Subtle overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 transition-opacity duration-200 ${isHov ? 'opacity-0' : 'opacity-60'}`} />
                          </motion.div>

                          {/* Title + description with better hierarchy */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-2">
                              <span
                                className={`block text-[14px] font-medium transition-all duration-200 truncate ${
                                  isHov ? 'text-white' : 'text-white/65'
                                }`}
                                style={{ fontFamily: 'Acumin Pro, sans-serif', letterSpacing: '-0.01em' }}
                              >
                                {project.title}
                              </span>
                            </div>
                            <span
                              className={`block text-[11.5px] mt-1 truncate transition-all duration-200 ${
                                isHov ? 'text-white/50' : 'text-white/25'
                              }`}
                              style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                            >
                              {project.description}
                            </span>
                          </div>

                          {/* Arrow with smooth animation */}
                          <motion.div
                            className="flex-shrink-0"
                            animate={{ 
                              opacity: isHov ? 1 : 0,
                              x: isHov ? 0 : -8,
                              y: isHov ? 0 : 8
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowUpRight className="w-4 h-4 text-white/60" />
                          </motion.div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Footer: view all link with better styling */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex justify-between items-center">
                  <p className="text-white/20 text-[10.5px] tracking-wide" style={{ fontFamily: 'Acumin Pro, sans-serif' }}>
                    Explore our {hoveredItem?.toLowerCase()} portfolio
                  </p>
                  <button
                    onClick={() => { onNavigate(hoveredItem!); setHoveredItem(null); }}
                    className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-white/50 hover:text-white hover:border-white/25 hover:bg-white/[0.08] text-[11.5px] tracking-wide font-medium transition-all duration-300"
                    style={{ fontFamily: 'Acumin Pro, sans-serif' }}
                  >
                    View all projects
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
}