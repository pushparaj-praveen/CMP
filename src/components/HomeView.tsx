import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData } from "../types";
import { AnnaUniversityLogo } from "./AnnaUniversityLogo";
import { 
  Sparkles, 
  BookOpen, 
  Award, 
  Users, 
  Building2, 
  ArrowRight, 
  Megaphone, 
  Clock, 
  Compass, 
  GraduationCap, 
  Calendar, 
  Library, 
  FlameKindling,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Globe,
  BookOpenCheck
} from "lucide-react";

interface HomeViewProps {
  data: UniversityData;
  onNavigate: (tab: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ data, onNavigate }) => {
  const [activeAnnFilter, setActiveAnnFilter] = useState<string>("All");
  const [expandedAnn, setExpandedAnn] = useState<string | null>(null);

  const categories = ["All", "Admissions", "Academic", "General"];

  const filteredAnnouncements = activeAnnFilter === "All"
    ? data.announcements
    : data.announcements.filter(ann => ann.category === activeAnnFilter);

  // Stats
  const stats = [
    { label: "Established Year", value: data.established, icon: Building2, desc: "A Legacy of Innovation", bg: "bg-rose-50/70 border-rose-200/80 hover:border-rose-400 hover:shadow-rose-100/50", iconBg: "bg-rose-100 text-rose-700" },
    { label: "Distinguished Faculty", value: `${data.faculty.length}`, icon: Users, desc: "Scholarly Mentorship", bg: "bg-teal-50/70 border-teal-200/80 hover:border-teal-400 hover:shadow-teal-100/50", iconBg: "bg-teal-100 text-teal-700" },
    { label: "Enrolled Scholars", value: `${data.students.length * 150}+`, icon: GraduationCap, desc: "Leading the Future", bg: "bg-amber-50/70 border-amber-200/80 hover:border-amber-400 hover:shadow-amber-100/50", iconBg: "bg-amber-100 text-amber-700" },
    { label: "Endowment & Research Fund", value: "$1.4 Billion", icon: Award, desc: "Fueling Crucial Research", bg: "bg-violet-50/70 border-violet-200/80 hover:border-violet-400 hover:shadow-violet-100/50", iconBg: "bg-violet-100 text-violet-750" },
  ];

  // Quick navigation access options
  const quickAccess = [
    { id: "about", label: "About Anna University", desc: "Our history, Dean's address, and core academic pillars.", icon: Compass, gradient: "from-rose-500 via-pink-500 to-rose-600 shadow-rose-500/20" },
    { id: "students", label: "Student Portal", desc: "Academic registry, statistics, downloads, and rules.", icon: BookOpenCheck, gradient: "from-teal-500 via-emerald-500 to-teal-600 shadow-teal-500/20" },
    { id: "departments", label: "Academic Divisions", desc: "Explore our innovative programs and research facilities.", icon: Building2, gradient: "from-amber-500 via-orange-500 to-amber-600 shadow-amber-500/20" },
    { id: "faculty", label: "Faculty Directory", icon: Users, desc: "Meet our world-class scholars and Nobel-laureate minds.", gradient: "from-purple-500 via-indigo-500 to-purple-600 shadow-purple-500/20" },
    { id: "timetable", label: "Lecture Timetable", icon: Calendar, desc: "Weekly academic schedules, exams, and calendar matrices.", gradient: "from-blue-500 via-indigo-500 to-blue-600 shadow-blue-500/20" },
    { id: "gallery", label: "Campus Showcase", icon: Library, desc: "Immersive visual masonry of halls, laboratories, and life.", gradient: "from-fuchsia-500 via-pink-500 to-violet-600 shadow-fuchsia-500/20" }
  ];

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[520px] rounded-3xl overflow-hidden shadow-lg border border-slate-100"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnsGnLUC48iytjVIwtt9ql7s7nrmNTvPaFs6D5XvbU9XMqPmr1K3Xs44xS9OesTm3UnKcsj2sS5L-HpLpj-6P3u7JCFpFk2y3OlTU8eXEK7HyUU3Fo7puT6U82f-vPQQDlSz3beRJxibKlUgIFPqAZ8shb2tYBTWBe4uCMY5K_EudFbN3imQWbgfpbBsBAlyNAiZdOjdKfqEQUTOR69WYRJK2hzLX-NuyLPazunPSTxvNIXaKHFnsL2Gs8favRQzMFIV2iecWBNaxT')` 
          }}
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
        
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end space-y-6 text-white max-w-4xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <AnnaUniversityLogo size={96} className="bg-slate-950/40 border border-white/20 rounded-full p-2 backdrop-blur-md shrink-0 shadow-2xl self-start sm:self-auto" />
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-[10px] uppercase tracking-widest w-fit">
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                Empowering Restless Curiosity
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-tight text-white">
                {data.universityName}
              </h1>
              <p className="text-sm md:text-lg text-teal-100 font-serif italic font-light opacity-95">
                "{data.tagline}"
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={() => onNavigate("about")}
              className="px-6 py-3 rounded-xl bg-teal-700 text-white font-medium hover:bg-teal-800 transition-all flex items-center gap-2 text-sm shadow-md cursor-pointer"
            >
              Discover Anna University
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => onNavigate("departments")}
              className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all flex items-center gap-2 text-sm cursor-pointer"
            >
              Academic Divisions
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. QUICK ACCESS CARDS */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="mono-tag text-teal-700 font-extrabold block">Campus Discovery</span>
          <h2 className="text-2xl md:text-3.5xl font-serif text-slate-950 font-bold">Quick Access Portal</h2>
          <p className="text-xs md:text-sm text-slate-650 font-semibold">
            Quickly navigate to important schedules, divisions, student services, and administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccess.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => onNavigate(item.id)}
              className={`rounded-3xl p-7 cursor-pointer flex flex-col justify-between h-56 group transition-all bg-gradient-to-br ${item.gradient} text-white shadow-lg hover:shadow-2xl border border-white/10`}
            >
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-2xl bg-white/15 backdrop-blur-md text-white group-hover:bg-white/25 transition-all">
                  <item.icon className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="p-2 rounded-full bg-white/10 opacity-80 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif font-bold text-white text-xl tracking-tight leading-snug">
                  {item.label}
                </h3>
                <p className="text-white/85 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. ACADEMIC STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`rounded-2xl p-6 border-2 shadow-xs relative overflow-hidden flex items-center gap-5 transition-all hover:scale-102 hover:shadow-lg ${stat.bg}`}
          >
            <div className={`p-3.5 rounded-xl font-extrabold shadow-sm ${stat.iconBg}`}>
              <stat.icon className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="space-y-1">
              <p className="text-[9px] text-slate-500 font-mono font-bold uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-serif text-slate-950 font-extrabold">{stat.value}</p>
              <p className="text-xs text-slate-800 font-medium leading-normal">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. ANNOUNCEMENTS & 5. UPCOMING EVENTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Announcements (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2.5">
                <Megaphone className="w-5 h-5 text-teal-700 font-extrabold" />
                <h3 className="text-lg font-serif text-slate-950 font-extrabold">Latest Campus Announcements</h3>
              </div>
              <span className="text-xs font-mono text-slate-500 font-bold">Official Releases</span>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 w-fit">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveAnnFilter(cat)}
                  className={`text-xs font-mono font-bold py-1 px-3.5 rounded-lg transition-all ${
                    activeAnnFilter === cat
                      ? "bg-teal-750 text-white shadow-xs"
                      : "text-slate-650 hover:text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Announcements List */}
            <div className="space-y-3.5 max-h-[320px] overflow-y-auto pr-2">
              <AnimatePresence mode="popLayout">
                {filteredAnnouncements.map((ann) => {
                  const isExpanded = expandedAnn === ann.id;
                  return (
                    <motion.div
                      layout
                      key={ann.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onClick={() => setExpandedAnn(isExpanded ? null : ann.id)}
                      className="p-4 rounded-xl border-2 border-slate-100 bg-slate-50/20 hover:border-teal-500/20 hover:bg-teal-50/10 transition-all cursor-pointer space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${
                          ann.category === "Admissions" ? "bg-teal-100/70 text-teal-900 border border-teal-250" :
                          ann.category === "Academic" ? "bg-blue-100/70 text-blue-900 border border-blue-250" :
                          ann.category === "Event" ? "bg-amber-100/70 text-amber-900 border border-amber-250" :
                          "bg-slate-200 text-slate-800"
                        }`}>
                          {ann.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono font-bold">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          {ann.date}
                        </div>
                      </div>
                      
                      <h4 className="text-slate-950 font-serif font-bold text-sm group-hover:text-teal-800 transition-colors">
                        {ann.title}
                      </h4>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="text-xs text-slate-800 leading-relaxed pt-2.5 border-t border-slate-200 font-normal"
                          >
                            {ann.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-200 text-center">
            <span className="text-[11px] text-slate-500 font-mono font-bold italic">
              Click any notification row to read full details.
            </span>
          </div>
        </div>

        {/* Upcoming Events (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-amber-700 font-extrabold" />
                <h3 className="text-lg font-serif text-slate-950 font-bold">Upcoming Events</h3>
              </div>
              <span className="text-xs font-mono text-slate-500 font-bold">Schedules</span>
            </div>

            {/* Event List */}
            <div className="space-y-4">
              {data.events.map((ev) => (
                <div key={ev.id} className="group border-2 border-slate-200/80 hover:border-teal-500/20 rounded-2xl overflow-hidden shadow-xs flex flex-col bg-slate-50/20 transition-all">
                  <div className="h-32 w-full overflow-hidden relative">
                    <img 
                      src={ev.image} 
                      alt={ev.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/90 text-white px-2.5 py-1 rounded text-[11px] font-mono font-bold shadow-md">
                      {ev.date}
                    </div>
                  </div>
                  <div className="p-4 space-y-2 bg-white">
                    <h4 className="text-slate-950 font-serif font-bold text-sm leading-snug group-hover:text-teal-800 transition-colors">
                      {ev.title}
                    </h4>
                    <p className="text-slate-750 text-xs leading-relaxed font-normal line-clamp-2">
                      {ev.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-mono font-bold pt-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-700" />
                      <span>{ev.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* 6. DEPARTMENTS PREVIEW */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="mono-tag text-teal-700 font-extrabold block">Academic Excellence</span>
            <h2 className="text-2xl md:text-3.5xl font-serif text-slate-950 font-bold">Departments Preview</h2>
          </div>
          <button 
            onClick={() => onNavigate("departments")}
            className="text-xs md:text-sm text-teal-750 hover:text-teal-900 font-bold font-mono flex items-center gap-1 hover:underline cursor-pointer"
          >
            All Departments
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.departments.slice(0, 2).map((dept) => (
            <div key={dept.id} className="univ-card rounded-2xl overflow-hidden border-2 border-slate-200 flex flex-col md:flex-row shadow-sm">
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img 
                  src={dept.image} 
                  alt={dept.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/90 rounded shadow-md text-[10px] font-mono text-teal-300 font-bold">
                  {dept.code}
                </div>
              </div>
              <div className="md:w-3/5 p-6 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-2">
                  <h4 className="text-slate-950 font-serif font-bold text-lg leading-snug">{dept.name}</h4>
                  <p className="text-slate-750 text-xs leading-relaxed font-normal line-clamp-3">
                    {dept.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-[10px] text-slate-600 font-mono font-bold">
                    <span className="font-extrabold text-teal-800">{dept.streams.length}</span> programs offered
                  </div>
                  <button 
                    onClick={() => onNavigate("departments")}
                    className="text-xs text-teal-750 font-mono font-bold flex items-center gap-0.5 hover:underline"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FACULTY HIGHLIGHTS */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="mono-tag text-amber-600 font-semibold block">Scholarly Mentorship</span>
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900">Faculty Spotlight</h2>
          </div>
          <button 
            onClick={() => onNavigate("faculty")}
            className="text-xs md:text-sm text-teal-700 hover:text-teal-900 font-medium font-mono flex items-center gap-1 hover:underline cursor-pointer"
          >
            Full Directory
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.faculty.slice(0, 3).map((member) => (
            <div key={member.id} className="univ-card rounded-2xl p-6 border border-slate-100 flex flex-col justify-between space-y-5 shadow-sm text-center">
              <div className="space-y-3 flex flex-col items-center">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-slate-900 font-serif font-bold text-base leading-tight">{member.name}</h4>
                  <p className="text-xs text-teal-700 font-mono font-medium mt-0.5">{member.title}</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-light tracking-wide">{member.department}</p>
                </div>
              </div>
              <p className="text-slate-500 text-xs font-light leading-relaxed line-clamp-3 italic">
                "{member.bio}"
              </p>
              <div className="pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-mono">
                Research: <span className="text-slate-700 font-medium">{member.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. CAMPUS GALLERY PREVIEW */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="mono-tag text-teal-600 font-semibold block">Campus Vibe</span>
            <h2 className="text-2xl md:text-3xl font-serif text-slate-900">Campus Perspectives</h2>
          </div>
          <button 
            onClick={() => onNavigate("gallery")}
            className="text-xs md:text-sm text-teal-700 hover:text-teal-900 font-medium font-mono flex items-center gap-1 hover:underline cursor-pointer"
          >
            Exhibitions Gallery
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.gallery.slice(0, 3).map((item) => (
            <div key={item.id} className="relative h-64 rounded-2xl overflow-hidden group shadow-sm border border-slate-100">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="text-[9px] font-mono uppercase bg-teal-700/80 px-2 py-0.5 rounded tracking-widest block w-fit mb-1.5">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-sm text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9. STUDENT SERVICES */}
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="mono-tag text-teal-600 font-semibold block">Scholarly Support</span>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900">Academic & Student Services</h2>
          <p className="text-slate-500 font-light text-xs md:text-sm">
            We provide a welcoming ecosystem equipped with high-end tools to foster growth, learning, research, and life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">📚</div>
            <h4 className="font-serif font-bold text-slate-900 text-sm">Digital Manuscripts Suite</h4>
            <p className="text-slate-500 text-xs leading-normal font-light">Access over 12,000 vintage high-resolution leather-bound manuscript OCR scans.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">🧠</div>
            <h4 className="font-serif font-bold text-slate-900 text-sm">Mental Well-being Atrium</h4>
            <p className="text-slate-500 text-xs leading-normal font-light">Acoustic discussion spaces, guidance counselors, and rest pods.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">🚀</div>
            <h4 className="font-serif font-bold text-slate-900 text-sm">Venture Sandbox Labs</h4>
            <p className="text-slate-500 text-xs leading-normal font-light">Incubate ideas, build startup projects, and network with technology mentors.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">🎓</div>
            <h4 className="font-serif font-bold text-slate-900 text-sm">Financial Aid Counseling</h4>
            <p className="text-slate-500 text-xs leading-normal font-light">Personalized advice for federal grants, research stipends, and scholarships.</p>
          </div>
        </div>
      </div>

      {/* 10. PREMIUM FOOTER */}
      <footer className="border-t border-slate-200 pt-12 mt-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-teal-700 flex items-center justify-center text-white shadow-sm font-serif font-bold text-lg">
                Æ
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-base">{data.universityName}</h4>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed font-light">
              Fostering excellence, restless discovery, and ethical leadership in education since {data.established} at our Cambridge, Massachusetts campus.
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-mono uppercase text-slate-900 font-bold tracking-widest">Connect with Admissions</h5>
            <div className="space-y-2 text-xs text-slate-500 leading-none">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>{data.contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>{data.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 leading-normal">
                <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>{data.contactInfo.address}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-mono uppercase text-slate-900 font-bold tracking-widest">Global Affiliations</h5>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-slate-500 font-mono">
              <span className="bg-slate-100 px-2.5 py-1 rounded">Ivy-Plus Affiliation</span>
              <span className="bg-slate-100 px-2.5 py-1 rounded">AAU Member</span>
              <span className="bg-slate-100 px-2.5 py-1 rounded">NECHE Accredited</span>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-light">
          <div>
            © {new Date().getFullYear()} {data.universityName}. All rights reserved.
          </div>
          <div className="flex gap-4 font-mono text-[11px] text-slate-500">
            <span className="hover:text-teal-700 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-teal-700 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-teal-700 cursor-pointer">Security Portal</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
