import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData, FacultyMember } from "../types";
import { 
  Search, 
  Mail, 
  Phone, 
  Award, 
  BookOpen, 
  Bookmark,
  Calendar, 
  SlidersHorizontal,
  Sparkles,
  ExternalLink,
  GraduationCap,
  Clock,
  Compass,
  Briefcase
} from "lucide-react";

interface FacultyViewProps {
  data: UniversityData;
}

export const FacultyView: React.FC<FacultyViewProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  const depts = ["All", ...data.departments.map(d => d.name)];

  // Helena Kovic as spotlight faculty or default first
  const spotlightFaculty = data.faculty.find(f => f.id === "fac-6") || data.faculty[0];

  // Filter regular directory list based on query
  const filteredFaculty = data.faculty.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || member.department === selectedDept;
    return matchesSearch && matchesDept;
  });

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
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1xUCObk54E3JPwyduLbKIErFxAINSlTCGTN-5pQlG2Km1dTMTE2qjogbfq_fpNpmgn4IYBJYZaNcgygCSXbyTKqnC-Hf1hqmy3HNjSY8bFZlcE30J1gIcei5v-F45PlR5PcbpFoRGaiF1kt5fr0F8lJYU7YLM-xLcCcWKVpJjEKifYlxp7iA7kL9pmrEpYLb8DCF3QupIfl9MgFFf-dH20zF7wgytn4kCxkGRSLlL3U6wax3P7XJtCLiq_O8_wWj8Rh_IbvWKHrdu')` 
          }}
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-amber-400 uppercase tracking-widest">
            <Award className="w-4 h-4 text-amber-400" />
            Distinguished Academicians
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-2">
            The Faculty Directory
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl font-light">
            Meet the researchers, mentors, and scholars sculpting the next generation of breakthroughs across quantum computing, high-energy physics, computational linguistics, and ethical philosophy.
          </p>
        </div>
      </motion.div>

      {/* 2. CHAIR SCHOLAR SPOTLIGHT */}
      {spotlightFaculty && (
        <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-slate-200">
              <img 
                src={spotlightFaculty.avatar} 
                alt={spotlightFaculty.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-3 left-3 px-2.5 py-0.5 bg-amber-500 text-white font-mono text-[9px] uppercase tracking-widest font-bold rounded-full flex items-center gap-1 shadow-md">
                <Sparkles className="w-2.5 h-2.5 fill-white" />
                Featured Scholar
              </span>
            </div>

            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-teal-700 font-mono text-[10px] uppercase tracking-widest font-semibold block">{spotlightFaculty.department}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span className="text-slate-400 text-[10px] font-mono">Office Hours: Mon/Wed 2-4 PM</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-slate-900 font-bold">
                  {spotlightFaculty.name}
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5 font-medium">{spotlightFaculty.title}</p>
              </div>

              <p className="text-slate-600 text-sm font-light leading-relaxed font-serif italic">
                "{spotlightFaculty.bio}"
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-600 pt-2 border-t border-slate-200">
                <div className="flex items-center gap-1.5 font-mono">
                  <GraduationCap className="w-4 h-4 text-teal-600" />
                  <span>PhD, Stanford University</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Office: Hall D, Room 402</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={`mailto:${spotlightFaculty.email}`}
                  className="px-4 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-mono font-medium transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Professor
                </a>
                <button 
                  onClick={() => setSelectedFaculty(spotlightFaculty)}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 text-xs font-mono font-medium transition-all flex items-center gap-1.5 shadow-sm"
                >
                  View Publications
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 3. DIRECTORY FILTER & ROSTER */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <h3 className="text-xl font-serif text-slate-900 font-bold">Scholarly Roster Directory</h3>
            <p className="text-xs text-slate-500 font-light">Query and locate tenured professors and teaching fellows.</p>
          </div>

          <div className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-200">
            Active Roster: <span className="font-bold text-teal-700">{data.faculty.length} Professors</span>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search by faculty name, title, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
            />
          </div>

          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs appearance-none"
          >
            <option value="All">All Divisions & Departments</option>
            {depts.slice(1).map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Elegant Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFaculty.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white border border-slate-100 hover:border-teal-100 hover:shadow-md rounded-2xl p-6 flex flex-col justify-between space-y-5 shadow-sm transition-all group"
              >
                <div className="space-y-4">
                  {/* Photo Profile */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-xl object-cover border border-slate-100 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-slate-950 font-serif font-bold text-base leading-snug group-hover:text-teal-700 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-[11px] text-teal-600 font-mono mt-0.5">{member.title}</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-500 leading-relaxed font-light">
                    <p className="line-clamp-2 italic font-serif">
                      "{member.bio}"
                    </p>
                    <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600 font-mono">
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                        <span>PhD, Ivy-Plus Accredited</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Office Hours: Tue/Thu 1:00-3:00 PM</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">Research: {member.specialty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-50 flex items-center gap-2">
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 bg-slate-50 hover:bg-teal-50 text-slate-500 hover:text-teal-700 rounded-lg border border-slate-100 transition-colors flex items-center justify-center flex-1"
                    title="Send Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={`tel:${member.phone}`}
                    className="p-2 bg-slate-50 hover:bg-teal-50 text-slate-500 hover:text-teal-700 rounded-lg border border-slate-100 transition-colors flex items-center justify-center flex-1"
                    title="Call Office"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedFaculty(member)}
                    className="px-4 py-1.5 bg-slate-900 hover:bg-teal-700 text-white font-mono text-[10px] rounded-lg font-bold transition-all"
                  >
                    View Publications
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFaculty.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400 font-light border border-dashed border-slate-200 rounded-2xl italic">
              No scholars found matching the search matrix.
            </div>
          )}
        </div>
      </div>

      {/* Publications Showcase Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-150 max-w-lg w-full shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <img 
                    src={selectedFaculty.avatar} 
                    alt={selectedFaculty.name} 
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200 shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-base leading-tight">
                      {selectedFaculty.name}
                    </h3>
                    <p className="text-[10px] text-teal-600 font-mono mt-0.5">{selectedFaculty.title}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedFaculty(null)}
                  className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-950 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">Core Biography</span>
                  <p className="text-xs text-slate-600 leading-relaxed font-serif italic">
                    "{selectedFaculty.bio}"
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div>
                    <span className="block text-[9px] font-mono text-slate-400">OFFICE LINE</span>
                    <span className="font-semibold text-slate-800">{selectedFaculty.phone}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-slate-400">OFFICE HOURS</span>
                    <span className="font-semibold text-slate-800">Mon/Wed 2:00-4:00 PM</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest block">Seminal Publications & Journals</span>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {selectedFaculty.publications.map((pub, idx) => (
                      <div key={idx} className="p-3 bg-teal-50/30 border border-teal-100/50 rounded-lg flex items-start gap-2 text-xs text-slate-700">
                        <Bookmark className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="italic leading-normal">{pub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold hover:bg-teal-700 transition-colors shadow-sm"
                >
                  Close Dossier
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
