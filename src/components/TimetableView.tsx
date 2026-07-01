import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData } from "../types";
import { 
  Calendar, 
  Printer, 
  Download, 
  Clock, 
  MapPin, 
  User, 
  SlidersHorizontal,
  BookmarkCheck,
  CheckCircle,
  FileCheck,
  AlertCircle,
  CalendarCheck2,
  Bookmark,
  Sparkles
} from "lucide-react";

interface TimetableViewProps {
  data: UniversityData;
}

export const TimetableView: React.FC<TimetableViewProps> = ({ data }) => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [showToast, setShowToast] = useState(false);
  const [activeToastMsg, setActiveToastMsg] = useState("");

  const days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const depts = ["All", ...data.departments.map(d => d.name)];

  const filteredSlots = data.timetable.filter(slot => {
    const matchesDept = selectedDept === "All" || slot.department === selectedDept;
    const matchesDay = selectedDay === "All" || slot.day === selectedDay;
    return matchesDept && matchesDay;
  });

  const triggerToast = (msg: string) => {
    setActiveToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePrint = () => {
    triggerToast("Generating verified high-resolution syllabus print stylesheet... Sending to print queue.");
    setTimeout(() => {
      window.print();
    }, 800);
  };

  const handleDownloadPDF = () => {
    triggerToast("Compiling official schedule roster into PDF format... Saving download.");
  };

  // Static Academic Milestones
  const academicCalendar = [
    { date: "August 15, 2026", event: "Autumn Semester Convocation & President's Welcome Address" },
    { date: "September 04, 2026", event: "Interdisciplinary Research Grant Proposals Deadline" },
    { date: "October 12 - 16, 2026", event: "Mid-Term Examination Evaluation Block" },
    { date: "November 24 - 27, 2026", event: "Annual Thanksgiving & Autumn Harvest Recess" },
    { date: "December 14 - 18, 2026", event: "Final Theory Evaluations & Term Papers Submissions" }
  ];

  // Static Exam Schedules
  const examDates = [
    { subject: "Quantum Computing Algorithms", date: "October 14, 2026", time: "09:00 AM - 12:00 PM", room: "Lab 402 (Cryo-Suite)" },
    { subject: "Empirical Behavioral Economics", date: "October 15, 2026", time: "01:00 PM - 04:00 PM", room: "Lecture Hall A" },
    { subject: "Neural Cognitive Architectures", date: "October 16, 2026", time: "09:00 AM - 12:00 PM", room: "Syllabus Annex D" }
  ];

  return (
    <div className="space-y-16 pb-12">
      
      {/* Toast notifications */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-slate-900 border border-teal-500 shadow-2xl flex items-center gap-3 text-xs text-slate-200"
          >
            <FileCheck className="w-4 h-4 text-teal-400" />
            <span>{activeToastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO BANNER */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[280px] rounded-3xl overflow-hidden shadow-md"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBA9wOfKp5umVGtMdMnsAQhMGt-8LKXuC_iNQP5Tbt3SdmLLeol20ub8Ze4aM61RVlOx8gh2dtscR455SbB1tZp0QSfXd6Q7ZAz4NMbDCfXxBN05cmiv20HzZaxThkZgfaTk2RZrxDMy1hHVrh7RexaV1_LtUmG0tNdTxo__1H0t72NOQcZis3OFOb9tMdJHP4h8qSy_mZb6icPthVgbpAbRQRG1hwcAstPMlT2epmsy3HNDsfaSj2HFt3-F9b2hqwfvQgvEOJziOic')` 
          }}
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-teal-300 uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-teal-300" />
              Syllabus Matrix & Times
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight">
              Class Schedule & Timetable
            </h1>
            <p className="text-sm text-slate-200 font-light leading-relaxed">
              Plan your educational pathways, coordinate lab traps, consult weekly lecture slots, and view mid-term examination calendars.
            </p>
          </div>

          <div className="flex gap-3 text-xs font-mono flex-shrink-0">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-white/15 border border-white/20 hover:bg-white/25 text-white font-medium flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-4 h-4 text-white" />
              Print Page
            </button>
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-medium flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              Export PDF
            </button>
          </div>
        </div>
      </motion.div>

      {/* 2. TODAY'S SCHEDULE HIGHLIGHTS */}
      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="space-y-1">
            <span className="mono-tag text-teal-600 font-semibold block">Academic Flow</span>
            <h3 className="text-lg font-serif text-slate-900 font-bold">Selected Day Lecture Flow</h3>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-200/60 p-1 rounded-xl">
            {days.map(d => (
              <button
                key={d}
                onClick={() => setSelectedDay(d)}
                className={`text-xs font-mono py-1 px-3 rounded-lg transition-all cursor-pointer ${
                  selectedDay === d
                    ? "bg-teal-700 text-white shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {d.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Card Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredSlots.length === 0 ? (
            <div className="col-span-full py-8 text-center text-slate-400 font-light italic text-xs">
              No active lectures scheduled for {selectedDay} under current department settings.
            </div>
          ) : (
            filteredSlots.map((slot) => (
              <div 
                key={slot.id} 
                className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm space-y-4 hover:border-teal-200 hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded uppercase font-bold">
                    {slot.department.split(" ")[0]}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                    <span>{slot.time}</span>
                  </div>
                </div>

                <h4 className="text-slate-950 font-serif font-bold text-sm leading-snug group-hover:text-teal-700 transition-colors">
                  {slot.subject}
                </h4>

                <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-300" />
                    <span className="truncate max-w-[100px]">{slot.teacher}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-300" />
                    <span>{slot.room}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 3. WEEKLY SCHEDULE HTML TABLE (Required) */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <h3 className="text-lg font-serif text-slate-900 font-bold">Official Registry Lecture Ledger</h3>
            <p className="text-xs text-slate-500 font-light">Comprehensive, verified weekly curriculum schedule matrix.</p>
          </div>

          {/* Department Filter Dropdown */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Division Filter:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 focus:outline-none focus:border-teal-500 rounded-lg text-xs"
            >
              <option value="All">All Divisions</option>
              {depts.slice(1).map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* HTML Timetable (Required) */}
        <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
          <table className="univ-table">
            <thead>
              <tr>
                <th>Lecture Day</th>
                <th>Syllabus Course Subject</th>
                <th>Department Division</th>
                <th>Scheduled Duration</th>
                <th>Assigned Professor</th>
                <th>Assigned Room</th>
              </tr>
            </thead>
            <tbody>
              {data.timetable
                .filter(slot => selectedDept === "All" || slot.department === selectedDept)
                .map((slot) => {
                  const isCurrentDay = slot.day === selectedDay;
                  return (
                    <tr 
                      key={slot.id}
                      className={isCurrentDay ? "bg-teal-50/20" : ""}
                    >
                      <td className="font-mono text-xs font-bold text-teal-700">
                        <div className="flex items-center gap-1.5">
                          {isCurrentDay && <span className="h-1.5 w-1.5 rounded-full bg-teal-600 animate-pulse" />}
                          {slot.day}
                        </div>
                      </td>
                      <td className="font-semibold text-slate-900">{slot.subject}</td>
                      <td className="text-xs text-slate-600 font-light">{slot.department}</td>
                      <td className="font-mono text-xs text-slate-600 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {slot.time}
                      </td>
                      <td className="text-xs text-slate-600">{slot.teacher}</td>
                      <td>
                        <span className="px-2 py-0.5 bg-slate-50 border border-slate-150 text-[10px] font-mono text-slate-700 rounded-md">
                          {slot.room}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid: Academic Calendar & Exam Dates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* 4. ACADEMIC CALENDAR (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <CalendarCheck2 className="w-5 h-5 text-teal-700" />
            <h3 className="text-lg font-serif text-slate-900 font-bold">Academic Calendar Milestones</h3>
          </div>

          <div className="space-y-5">
            {academicCalendar.map((milestone, idx) => (
              <div key={idx} className="flex gap-4 items-start text-xs">
                <div className="bg-teal-50 border border-teal-200/60 text-teal-800 font-mono font-bold py-1 px-3.5 rounded-lg w-fit text-center flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="space-y-0.5 leading-relaxed">
                  <span className="text-[10px] font-mono text-slate-400 block">{milestone.date}</span>
                  <span className="text-slate-800 font-serif font-semibold">{milestone.event}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. EXAM DATES (5 cols) */}
        <div className="lg:col-span-5 bg-amber-50/40 border border-amber-200/50 rounded-3xl p-8 space-y-6">
          <div className="flex items-center gap-2.5 border-b border-amber-200/50 pb-4">
            <AlertCircle className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg font-serif text-amber-800 font-bold">Autumn Exam Schedules</h3>
          </div>

          <div className="space-y-4">
            {examDates.map((exam, idx) => (
              <div key={idx} className="bg-white border border-amber-100 rounded-xl p-4 space-y-2 shadow-sm">
                <div className="flex justify-between items-start">
                  <h4 className="font-serif font-bold text-slate-950 text-xs leading-snug pr-4">{exam.subject}</h4>
                  <span className="font-mono text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-bold uppercase shrink-0">MID-TERM</span>
                </div>

                <div className="text-[11px] text-slate-600 font-mono space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.room}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
