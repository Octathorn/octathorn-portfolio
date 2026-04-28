import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, TrendingUp, Clock } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export function SearchOverlay({ isOpen, onClose, onNavigate }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const popularSearches = [
    { title: 'AI Solutions', category: 'Automation & AI' },
    { title: 'Mobile Apps', category: 'UX UI design' },
    { title: 'IoT Systems', category: 'Hardware' },
    { title: 'Circuit Design', category: 'PCBs' },
    { title: 'Frontend Development', category: 'Web development' },
    { title: 'iOS Development', category: 'Mobile development' },
  ];

  const recentSearches = [
    { title: 'Wireframing', category: 'UX UI design' },
    { title: 'PCB Layout', category: 'PCBs' },
    { title: 'Smart Automation', category: 'Automation & AI' },
  ];

  const allServices = [
    'Automation & AI',
    'Hardware',
    'PCBs',
    'Web development',
    'Mobile development',
    'Product design',
    'UX UI design',
  ];

  const filteredServices = searchQuery
    ? allServices.filter(service =>
        service.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchClick = (query: string, category?: string) => {
    if (category) {
      onNavigate(`${category} > ${query}`);
    } else {
      onNavigate(query);
    }
    onClose();
    setSearchQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Search Container */}
          <motion.div
            className="fixed top-0 left-0 right-0 z-[70] bg-[#1d1d1f] border-b border-white/10"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="max-w-[1400px] mx-auto px-8 py-8">
              {/* Search Input */}
              <div className="relative mb-8">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40">
                  <Search className="w-6 h-6" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, projects, or categories..."
                  className="w-full bg-transparent border-none outline-none text-white text-[28px] font-normal pl-12 pr-12 placeholder:text-white/30"
                />
                <button
                  onClick={onClose}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery ? (
                  // Filtered Results
                  <div>
                    {filteredServices.length > 0 ? (
                      <div>
                        <h3 className="text-white/50 text-[13px] font-medium mb-4 tracking-wide uppercase">
                          Services
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {filteredServices.map((service) => (
                            <button
                              key={service}
                              onClick={() => handleSearchClick(service)}
                              className="text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                                <span className="text-white text-[16px] font-normal group-hover:text-white transition-colors">
                                  {service}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-white/40 text-[16px]">No results found for "{searchQuery}"</p>
                        <p className="text-white/30 text-[14px] mt-2">Try searching for something else</p>
                      </div>
                    )}
                  </div>
                ) : (
                  // Default View with Suggestions
                  <div className="space-y-8">
                    {/* Popular Searches */}
                    <div>
                      <h3 className="text-white/50 text-[13px] font-medium mb-4 tracking-wide uppercase flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Popular Searches
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {popularSearches.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => handleSearchClick(item.title, item.category)}
                            className="text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-white text-[16px] font-normal group-hover:text-white transition-colors mb-1">
                                  {item.title}
                                </p>
                                <p className="text-white/40 text-[13px] font-normal">
                                  {item.category}
                                </p>
                              </div>
                              <Search className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Recent Searches */}
                    <div>
                      <h3 className="text-white/50 text-[13px] font-medium mb-4 tracking-wide uppercase flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Recent Searches
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {recentSearches.map((item) => (
                          <button
                            key={item.title}
                            onClick={() => handleSearchClick(item.title, item.category)}
                            className="text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-white text-[16px] font-normal group-hover:text-white transition-colors mb-1">
                                  {item.title}
                                </p>
                                <p className="text-white/40 text-[13px] font-normal">
                                  {item.category}
                                </p>
                              </div>
                              <Clock className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                      <h3 className="text-white/50 text-[13px] font-medium mb-4 tracking-wide uppercase">
                        All Services
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {allServices.map((service) => (
                          <button
                            key={service}
                            onClick={() => handleSearchClick(service)}
                            className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-[14px] font-normal transition-all duration-300"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}