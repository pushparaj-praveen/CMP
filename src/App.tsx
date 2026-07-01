import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData, StudentRecord } from "./types";
import { defaultUniversityData } from "./defaultData";
import { HomeView } from "./components/HomeView";
import { AboutView } from "./components/AboutView";
import { AcademicsView } from "./components/AcademicsView";
import { StudentRecordsView } from "./components/StudentRecordsView";
import { FacultyView } from "./components/FacultyView";
import { GalleryView } from "./components/GalleryView";
import { TimetableView } from "./components/TimetableView";
import { ContactView } from "./components/ContactView";
import { DatabaseEditorView } from "./components/DatabaseEditorView";
import { AnnaUniversityLogo } from "./components/AnnaUniversityLogo";
import { 
  Home, 
  GraduationCap, 
  Users, 
  Image as ImageIcon, 
  Calendar, 
  Compass, 
  Database, 
  Menu, 
  X, 
  Building2,
  Sparkles,
  Bookmark,
  Building,
  School,
  FileText
} from "lucide-react";

export default function App() {
  // Load initial data from localStorage if existing, else default
  const [data, setData] = useState<UniversityData>(() => {
    const cached = localStorage.getItem("annauniv_portal_db");
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        console.error("Cache parsing error. Restoring defaults.", e);
      }
    }
    return defaultUniversityData;
  });

  // Active tab state
  const [activeTab, setActiveTab] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Save to cache whenever database state changes
  const saveDatabase = (updatedData: UniversityData) => {
    setData(updatedData);
    localStorage.setItem("annauniv_portal_db", JSON.stringify(updatedData));
  };

  const handleResetDatabase = () => {
    setData(defaultUniversityData);
    localStorage.setItem("annauniv_portal_db", JSON.stringify(defaultUniversityData));
  };

  const handleUpdateStudents = (updatedStudents: StudentRecord[]) => {
    const updated = {
      ...data,
      students: updatedStudents
    };
    saveDatabase(updated);
  };

  const handleUpdateDatabase = (updatedData: UniversityData) => {
    saveDatabase(updatedData);
  };

  // Sync light mode root attributes
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("light");
    root.style.backgroundColor = "#f8fafc";
  }, []);

  // Defined navigation tabs matching user requests
  const navItems = [
    { id: "home", label: "Home", icon: Home, desc: "Campus Main Overview", activeClass: "bg-gradient-to-r from-teal-500/10 to-emerald-500/5 border-l-teal-600 text-teal-950 font-bold", iconClass: "text-teal-600" },
    { id: "about", label: "About Us", icon: Bookmark, desc: "Heritage & Vision", activeClass: "bg-gradient-to-r from-rose-500/10 to-pink-500/5 border-l-rose-600 text-rose-950 font-bold", iconClass: "text-rose-600" },
    { id: "students", label: "Students", icon: GraduationCap, desc: "Syllabus & Registry", activeClass: "bg-gradient-to-r from-teal-500/10 to-emerald-500/5 border-l-teal-600 text-teal-950 font-bold", iconClass: "text-teal-600" },
    { id: "departments", label: "Departments", icon: School, desc: "Divisions & Fields", activeClass: "bg-gradient-to-r from-amber-500/10 to-orange-500/5 border-l-amber-600 text-amber-950 font-bold", iconClass: "text-amber-600" },
    { id: "faculty", label: "Faculty", icon: Users, desc: "Scholars Directory", activeClass: "bg-gradient-to-r from-purple-500/10 to-indigo-500/5 border-l-purple-600 text-purple-950 font-bold", iconClass: "text-purple-600" },
    { id: "timetable", label: "Timetable", icon: Calendar, desc: "Weekly Schedules", activeClass: "bg-gradient-to-r from-blue-500/10 to-indigo-500/5 border-l-blue-600 text-blue-950 font-bold", iconClass: "text-blue-600" },
    { id: "gallery", label: "Gallery", icon: ImageIcon, desc: "Visual Perspectives", activeClass: "bg-gradient-to-r from-fuchsia-500/10 to-violet-500/5 border-l-fuchsia-600 text-fuchsia-950 font-bold", iconClass: "text-fuchsia-600" },
    { id: "contact", label: "Contact", icon: Compass, desc: "Reach out & Map", activeClass: "bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border-l-cyan-600 text-cyan-950 font-bold", iconClass: "text-cyan-600" },
    { id: "database", label: "Central Database", icon: Database, desc: "Live JSON Editor", activeClass: "bg-gradient-to-r from-indigo-500/10 to-violet-500/5 border-l-indigo-600 text-indigo-950 font-bold", iconClass: "text-indigo-600" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render Sub-Views based on active state
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeView data={data} onNavigate={handleNavClick} />;
      case "about":
        return <AboutView data={data} />;
      case "students":
        return <StudentRecordsView data={data} onUpdateStudents={handleUpdateStudents} />;
      case "departments":
        return <AcademicsView data={data} />;
      case "faculty":
        return <FacultyView data={data} />;
      case "gallery":
        return <GalleryView data={data} />;
      case "timetable":
        return <TimetableView data={data} />;
      case "contact":
        return <ContactView data={data} />;
      case "database":
        return (
          <DatabaseEditorView 
            data={data} 
            onUpdateDatabase={handleUpdateDatabase}
            onResetDatabase={handleResetDatabase}
          />
        );
      default:
        return <HomeView data={data} onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased relative overflow-hidden">
      
      {/* Background Vibrant Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-rose-400/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-3xl translate-y-1/3 pointer-events-none z-0" />

      {/* 1. TOP HEADER NAVIGATION - EXACTLY 80PX TALL */}
      <header className="fixed top-0 left-0 right-0 z-40 h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 flex items-center justify-between shadow-sm">
        
        {/* Academic branding and crest */}
        <AnnaUniversityLogo variant="badge" size={44} isDarkTheme={false} />

        {/* Right Info Box & Hamburger on mobile */}
        <div className="flex items-center gap-4">
          
          {/* Quick Stats Block (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-mono border-l border-slate-200 pl-4">
            <div className="text-right">
              <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none">Established</span>
              <span className="font-extrabold text-slate-800">{data.established}</span>
            </div>
            <div className="h-6 w-[1px] bg-slate-200" />
            <div className="text-right">
              <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-none">Campus Core</span>
              <span className="font-extrabold text-slate-800">Chennai, TN</span>
            </div>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all text-slate-800 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </header>

      {/* Spacer for the fixed header to prevent main content from hiding behind it */}
      <div className="h-20 w-full shrink-0" />

      {/* 2. BODY LAYOUT: SIDEBAR + CONTENT AREA */}
      <div className="flex-1 flex flex-col md:flex-row items-stretch">
        
        {/* Spacer to reserve space for the fixed sidebar on desktop */}
        <div className="hidden md:block w-64 shrink-0" />

        {/* Left Navigation Sidebar (Desktop fixed sidebar) */}
        <aside className="hidden md:flex flex-col justify-between w-64 border-r border-slate-200 bg-white/70 backdrop-blur-md p-5 space-y-6 fixed top-20 left-0 h-[calc(100vh-80px)] overflow-y-auto shrink-0 z-30">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest block mb-4">
              Academic Navigation
            </span>

            <nav className="space-y-1.5">
              {navItems.map(item => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-left transition-all flex items-center justify-between group cursor-pointer border-l-4 ${
                      isActive 
                        ? `${item.activeClass} border-y border-r border-slate-200/50 shadow-xs`
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-l-transparent border-y border-r border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-4.5 h-4.5 transition-colors ${isActive ? item.iconClass : "text-slate-400 group-hover:text-slate-700"}`} />
                      <div>
                        <span className="block text-xs font-mono font-bold">{item.label}</span>
                        <span className="block text-[10px] text-slate-500 font-sans font-normal mt-0.5 leading-none">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Footer branding of Sidebar */}
          <div className="pt-4 border-t border-slate-100 text-center font-mono">
            <div className="flex items-center justify-center gap-1.5 text-[9px] text-slate-500 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
              <span>Anna University Portal v1.3.0</span>
            </div>
          </div>
        </aside>

        {/* Dynamic padded active content view */}
        <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full relative z-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* 3. MOBILE SLIDEOUT DRAWER MENU (Unified production-grade layout with full option details) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Dark glass backdrop */}
            <div 
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slideout panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="relative w-80 max-w-xs bg-white border-r border-slate-200 p-5 flex flex-col justify-between h-full z-10 shadow-2xl"
            >
              <div className="space-y-5 overflow-y-auto max-h-[85vh]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2 text-teal-700">
                    <School className="w-5.5 h-5.5" />
                    <span className="font-serif font-bold text-sm text-slate-900">Portal Directory</span>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 cursor-pointer"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                <nav className="space-y-2">
                  {navItems.map(item => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full px-4 py-3 rounded-xl text-left transition-all flex items-center justify-between group cursor-pointer border-l-4 ${
                          isActive 
                            ? `${item.activeClass} border-y border-r border-slate-200 shadow-xs`
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-l-transparent border-y border-r border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <item.icon className={`w-5 h-5 ${isActive ? item.iconClass : "text-slate-400"}`} />
                          <div>
                            <span className="block text-xs font-mono font-bold">{item.label}</span>
                            <span className="block text-[10px] text-slate-500 font-sans font-normal mt-0.5 leading-none">
                              {item.desc}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="text-center font-mono text-[9px] text-slate-500 font-bold border-t border-slate-100 pt-4">
                <span>{data.universityName}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
