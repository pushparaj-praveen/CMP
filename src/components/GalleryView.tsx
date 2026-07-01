import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData } from "../types";
import { 
  Camera,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Compass,
  Sparkles,
  Layers,
  Calendar
} from "lucide-react";

interface GalleryViewProps {
  data: UniversityData;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categories requested: Campus, Library, Laboratories, Sports, Events, Graduation
  const categories = [
    "All", 
    "Campus & Quad", 
    "Libraries", 
    "Laboratories", 
    "Sports & Athletics", 
    "Academic Events", 
    "Graduation"
  ];

  // Map default data categories into our neat UI filters for robust filtering
  const mapCategory = (itemCat: string): string => {
    const cat = itemCat.toLowerCase();
    if (cat.includes("campus") || cat.includes("quad")) return "Campus & Quad";
    if (cat.includes("academic") || cat.includes("library") || cat.includes("atrium")) return "Libraries";
    if (cat.includes("lab") || cat.includes("research") || cat.includes("quantum")) return "Laboratories";
    if (cat.includes("sport") || cat.includes("athletic") || cat.includes("regatta")) return "Sports & Athletics";
    if (cat.includes("event") || cat.includes("commencement")) return "Academic Events";
    if (cat.includes("graduation") || cat.includes("commence")) return "Graduation";
    return "Campus & Quad";
  };

  const filteredItems = activeCategory === "All"
    ? data.gallery
    : data.gallery.filter(item => mapCategory(item.category) === activeCategory);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO BANNER */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[280px] rounded-3xl overflow-hidden shadow-md"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4Mky2L5BqbJFvZbz-IpfywOWPLHVmuVHyZ6B5FPCD-yVinG4N8uf1JalZ_IHp9ZZSpCfj3vtKWqzz_aCffIkYMmx5_q891pdEllcKEuzW30YX5XpMzaw022gJOwOQSlo1pLkX4GWfsv3GYwROssl1k5bSqg0_neRMtEJ19JbuGrs2x__NOqEirwTUyKwQgW2TjiIARIiuXdUG6rr9bS8HFTCa-RUc6jg2fhTiKLU4I0mcGk-6X_7vZdNZnqAEb7uaxjcLK91uWqLH')` 
          }}
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-teal-300 uppercase tracking-widest">
            <Camera className="w-4 h-4 text-teal-300" />
            Vibrant Campus Perspectives
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-2">
            The Campus Gallery
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl font-light">
            An artistic, high-contrast visual showcase representing life, study, historical libraries, state-of-the-art physics chambers, competitive athletics, and graduation commencements.
          </p>
        </div>
      </motion.div>

      {/* 2. EXPANSE FILTERS */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <h3 className="text-xl font-serif text-slate-900 font-bold">Photographic Exhibitions</h3>
            <p className="text-xs text-slate-500 font-light font-mono">Select a portfolio division below to filter perspective plates.</p>
          </div>

          <div className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1 rounded-md border border-slate-200">
            Plates Catalog: <span className="text-teal-700 font-bold">{data.gallery.length} Images</span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-1.5 bg-slate-50 p-1.5 rounded-2xl w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono py-1.5 px-4 rounded-xl transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-teal-700 text-white shadow-sm font-bold"
                  : "text-slate-500 hover:text-slate-950 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. MASONRY LAYOUT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setLightboxIndex(index)}
                  className="bg-white border border-slate-150 hover:border-teal-150 rounded-2xl overflow-hidden group cursor-pointer relative h-80 shadow-sm hover:shadow-md transition-all"
                >
                  {/* Image */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-95 group-hover:via-slate-950/35 transition-all" />
                  
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 px-2.5 py-0.5 bg-white/90 backdrop-blur-sm border border-slate-200 text-[9px] font-mono text-teal-800 font-bold uppercase tracking-wider rounded">
                    {mapCategory(item.category)}
                  </span>

                  {/* Zoom indicator icon on hover */}
                  <div className="absolute top-4 right-4 p-2 bg-slate-900/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Meta details */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-1 text-white">
                    <span className="text-[9px] text-teal-300 font-mono tracking-widest uppercase block">Anna University Campus Roster</span>
                    <h3 className="text-base font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 font-light line-clamp-1 opacity-90">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400 font-light border border-dashed border-slate-200 rounded-2xl italic text-xs">
              No photographic plates correspond to the selected classification matrix.
            </div>
          )}
        </div>
      </div>

      {/* 4. LIGHTBOX VIEWPORT MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors border border-white/10 z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Plate */}
            <button
              onClick={handlePrev}
              className="absolute left-6 p-3.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors border border-white/10 z-10 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Plate */}
            <button
              onClick={handleNext}
              className="absolute right-6 p-3.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white transition-colors border border-white/10 z-10 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Visual Frame */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative max-w-4xl w-full px-4 flex flex-col items-center space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[65vh] flex justify-center">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[65vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description Box */}
              <div className="bg-white max-w-xl w-full p-6 rounded-2xl border border-slate-150 space-y-2.5 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 bg-teal-50 text-teal-700 border border-teal-200 rounded font-bold uppercase">
                    {mapCategory(filteredItems[lightboxIndex].category)}
                  </span>
                  <span className="text-slate-400">
                    Plate {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                
                <h3 className="text-lg font-serif font-bold text-slate-950">
                  {filteredItems[lightboxIndex].title}
                </h3>
                
                <p className="text-slate-600 text-xs font-light leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
