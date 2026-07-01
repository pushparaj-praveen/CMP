import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData, Department } from "../types";
import { 
  Building, 
  Users, 
  GraduationCap, 
  ChevronRight, 
  BookOpen,
  Microscope,
  Award,
  Atom,
  School,
  Sparkles,
  Layers,
  MapPin
} from "lucide-react";

interface AcademicsViewProps {
  data: UniversityData;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({ data }) => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

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
            <School className="w-4 h-4 text-teal-300" />
            Core Divisions
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-2">
            Academic Departments
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl font-light">
            Unifying quantum precision engineering, neuroscience research, global economic networks, and classic ethics into cohesive streams of scholarly investigation.
          </p>
        </div>
      </motion.div>

      {/* 2. SUMMARY COUNTER */}
      <div className="bg-gradient-to-r from-teal-500 via-indigo-500 to-rose-500 rounded-3xl p-8 flex flex-wrap justify-around items-center gap-6 text-center text-white shadow-lg shadow-teal-500/10 border border-white/10">
        <div>
          <span className="block text-4xl font-serif font-extrabold text-white">{data.departments.length}</span>
          <span className="text-[10px] text-teal-100 font-mono uppercase tracking-widest font-bold">Primary Divisions</span>
        </div>
        <div className="h-8 w-[1px] bg-white/25 hidden md:block" />
        <div>
          <span className="block text-4xl font-serif font-extrabold text-white">
            {data.departments.reduce((acc, d) => acc + d.studentsCount, 0)}
          </span>
          <span className="text-[10px] text-teal-100 font-mono uppercase tracking-widest font-bold">Enrolled Undergrad Scholars</span>
        </div>
        <div className="h-8 w-[1px] bg-white/25 hidden md:block" />
        <div>
          <span className="block text-4xl font-serif font-extrabold text-white">100% Accredited</span>
          <span className="text-[10px] text-teal-100 font-mono uppercase tracking-widest font-bold">UGC & AICTE Curriculum Matrix</span>
        </div>
      </div>

      {/* 3. GRID OF DEPARTMENT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.departments.map((dept, idx) => {
          return (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-slate-100 hover:border-teal-100 hover:shadow-md rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all group"
            >
              {/* Image & Code badge */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img 
                  src={dept.image} 
                  alt={dept.name} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-white text-slate-900 font-mono text-[9px] uppercase tracking-widest font-bold rounded shadow-sm border border-slate-100">
                  {dept.code}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base md:text-lg font-serif font-bold tracking-tight">
                    {dept.name}
                  </h3>
                </div>
              </div>

              {/* Information overview */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                    {dept.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-3 text-xs text-slate-600 font-mono">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-teal-600" />
                      <div>
                        <span className="block text-[9px] text-slate-400 uppercase tracking-widest">Enrolled</span>
                        <span className="font-bold text-slate-900">{dept.studentsCount}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-teal-600" />
                      <div>
                        <span className="block text-[9px] text-slate-400 uppercase tracking-widest">Faculty</span>
                        <span className="font-bold text-slate-900">{dept.facultyCount} Scholars</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="font-mono text-[10px] uppercase bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded font-bold">CHAIR</span>
                    <span className="font-serif font-semibold">{dept.hod}</span>
                  </div>

                  <button
                    onClick={() => setSelectedDept(dept)}
                    className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-150 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 text-xs font-mono font-bold text-slate-700 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Explore Syllabus & Labs
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modern Department Details Modal */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-150 max-w-2xl w-full shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Image banner inside Modal */}
              <div className="relative h-52 bg-slate-100 flex-shrink-0">
                <img 
                  src={selectedDept.image} 
                  alt={selectedDept.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => setSelectedDept(null)}
                    className="p-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                    Department Division ({selectedDept.code})
                  </span>
                  <h2 className="text-2xl font-serif font-bold leading-tight">
                    {selectedDept.name}
                  </h2>
                </div>
              </div>

              {/* Scrollable details */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                
                {/* 1. Overview */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase text-teal-700 tracking-wider font-semibold block">Academic Mission</span>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light font-serif italic">
                    "{selectedDept.description}"
                  </p>
                </div>

                {/* 2. Streams offered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-800">
                      <BookOpen className="w-4.5 h-4.5 text-teal-600" />
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Programs & Degrees</h4>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 font-light">
                      {selectedDept.streams.map((stream, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                          <span>{stream}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Research & Laboratories */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-800">
                      <Microscope className="w-4.5 h-4.5 text-teal-600" />
                      <h4 className="font-serif font-bold text-slate-900 text-sm">Laboratories & Facilities</h4>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 font-light">
                      {selectedDept.facilities?.map((facility, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          <span>{facility}</span>
                        </li>
                      )) || (
                        <li className="italic text-slate-400">Standard research chambers and seminar facilities.</li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* 4. Division Administration */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-teal-50 text-teal-700">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-400 font-mono uppercase tracking-widest">DEPARTMENT CHAIR</span>
                      <strong className="font-serif text-slate-900 font-bold">{selectedDept.hod}</strong>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[9px] text-slate-400 font-mono uppercase tracking-widest">OFFICE OFFICE</span>
                    <span className="font-mono text-slate-700 font-semibold">Hall D, Suite 302</span>
                  </div>
                </div>

              </div>

              {/* Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end flex-shrink-0">
                <button
                  onClick={() => setSelectedDept(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-mono text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  Close Division Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
