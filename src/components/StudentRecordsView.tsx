import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData, StudentRecord } from "../types";
import { 
  Search, 
  UserPlus, 
  SlidersHorizontal, 
  Trash2, 
  Edit, 
  GraduationCap, 
  Mail, 
  Calendar, 
  Star,
  FileCheck2,
  FileDown,
  Scale,
  ShieldAlert,
  Download,
  Notebook,
  TrendingUp,
  Award,
  Users2,
  X
} from "lucide-react";

interface StudentRecordsViewProps {
  data: UniversityData;
  onUpdateStudents: (updatedStudents: StudentRecord[]) => void;
}

export const StudentRecordsView: React.FC<StudentRecordsViewProps> = ({ data, onUpdateStudents }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Custom Toast & Modal States
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [archiveCandidateId, setArchiveCandidateId] = useState<string | null>(null);
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);

  // Keyboard accessibility: Escape key closes active modals
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsAdding(false);
        setArchiveCandidateId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAdding, archiveCandidateId]);

  // Form State for Adding / Editing
  const [formName, setFormName] = useState("");
  const [formRoll, setFormRoll] = useState("");
  const [formDept, setFormDept] = useState("");
  const [formYear, setFormYear] = useState(1);
  const [formEmail, setFormEmail] = useState("");
  const [formGpa, setFormGpa] = useState(3.5);
  const [formStatus, setFormStatus] = useState<"Dean's List" | "Active" | "On Probation">("Active");

  // Dynamic calculations for Student Statistics
  const totalEnrolled = data.students.length * 150 + 120; // Prestigious representation
  const deansListCount = data.students.filter(s => s.status === "Dean's List").length;
  const avgGpa = data.students.reduce((acc, s) => acc + s.gpa, 0) / (data.students.length || 1);

  // Filter students
  const filteredStudents = data.students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || student.department === selectedDept;
    const matchesStatus = selectedStatus === "All" || student.status === selectedStatus;
    return matchesSearch && matchesDept && matchesStatus;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleOpenAdd = () => {
    setFormName("");
    setFormRoll(`AU-2026-${Math.floor(100 + Math.random() * 900)}`);
    setFormDept(data.departments[0]?.name || "");
    setFormYear(1);
    setFormEmail("");
    setFormGpa(3.5);
    setFormStatus("Active");
    setEditingId(null);
    setFormErrorMessage(null);
    setIsAdding(true);
  };

  const handleOpenEdit = (student: StudentRecord) => {
    setFormName(student.name);
    setFormRoll(student.rollNo);
    setFormDept(student.department);
    setFormYear(student.year);
    setFormEmail(student.email);
    setFormGpa(student.gpa);
    setFormStatus(student.status);
    setEditingId(student.id);
    setFormErrorMessage(null);
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    setArchiveCandidateId(id);
  };

  const confirmArchive = () => {
    if (archiveCandidateId) {
      const updated = data.students.filter(s => s.id !== archiveCandidateId);
      onUpdateStudents(updated);
      setArchiveCandidateId(null);
      showToast("Scholar academic file successfully archived.");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formName.trim() || !formEmail.trim()) {
      setFormErrorMessage("Full Legal Name and Academic Email are required.");
      return;
    }

    const finalName = formName.trim();

    if (editingId) {
      const updated = data.students.map(s => {
        if (s.id === editingId) {
          return {
            ...s,
            name: finalName,
            rollNo: formRoll,
            department: formDept,
            year: Number(formYear),
            email: formEmail,
            gpa: Number(formGpa),
            status: formStatus
          };
        }
        return s;
      });
      onUpdateStudents(updated);
      showToast("Scholar academic file modified successfully.");
    } else {
      const newStudent: StudentRecord = {
        id: `st-${Date.now()}`,
        name: finalName,
        rollNo: formRoll,
        department: formDept,
        year: Number(formYear),
        email: formEmail,
        gpa: Number(formGpa),
        status: formStatus,
        enrollmentDate: new Date().toISOString().split("T")[0]
      };
      onUpdateStudents([...data.students, newStudent]);
      showToast(`Scholar ${finalName} successfully matriculated.`);
    }

    setIsAdding(false);
  };

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[280px] rounded-3xl overflow-hidden shadow-md"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2NH0RC6vvhELxGDScP4PTjtPvJUw6SnqLGb7DnlxRV4lsPkTZ8ZKopy7GHO78yK5GtPGWDsPgysKW8QVlIgOJcQhfbUlbT8ofiASgsjprZXc6h5RIW_YB-Opm4QqLW_1HXdJ0utHfEbuKYcOIExVWPsueqcRwzEpUnySsC88ZrSSiwaV89DvpYiwu1UV9mNiRQq4R2FKmTD2H3HBAtvEUooy_3DHA-_U0vPMbblFCQsA1ATxLG90MJInKsOzmAoacp5Inw4T3FRC5')` 
          }}
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-white">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-teal-300 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            Scholarly Registry
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-2">
            Student Life & Academics
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl font-light">
            Welcome to the official student directory. Explore academic resources, community standing rules, download official registrar forms, and consult real-time registry rosters.
          </p>
        </div>
      </motion.div>

      {/* 2. STUDENT STATISTICS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-6 shadow-xl shadow-teal-500/10 text-white flex items-center gap-4 border border-white/10">
          <div className="p-3.5 rounded-2xl bg-white/20 text-white">
            <Users2 className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase text-teal-100 font-bold tracking-wider">Total Matriculated Scholars</span>
            <span className="text-2xl font-serif font-extrabold text-white">{totalEnrolled}</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 shadow-xl shadow-amber-500/10 text-white flex items-center gap-4 border border-white/10">
          <div className="p-3.5 rounded-2xl bg-white/20 text-white">
            <Award className="w-6 h-6 animate-pulse stroke-[2.5]" />
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase text-amber-100 font-bold tracking-wider">Dean's List Honors Count</span>
            <span className="text-2xl font-serif font-extrabold text-white">{deansListCount} Scholars</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 shadow-xl shadow-indigo-500/10 text-white flex items-center gap-4 border border-white/10">
          <div className="p-3.5 rounded-2xl bg-white/20 text-white">
            <TrendingUp className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase text-indigo-100 font-bold tracking-wider">Average Institutional GPA</span>
            <span className="text-2xl font-serif font-extrabold text-white">{avgGpa.toFixed(2)} / 4.00</span>
          </div>
        </div>
      </div>

      {/* 3. SEARCH & 4. STUDENT TABLE */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <h2 className="text-xl font-serif text-slate-900 font-bold">Matriculated Scholar Ledger</h2>
            <p className="text-xs text-slate-500 font-light">Interactive search panel representing officially verified and enrolled scholars.</p>
          </div>
          
          <button
            onClick={handleOpenAdd}
            className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-mono text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm self-start md:self-center cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            Matriculate New Student
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search by name, roll ID, email..."
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
            <option value="All">All Departments</option>
            {data.departments.map(d => (
              <option key={d.id} value={d.name}>{d.name}</option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
          >
            <option value="All">All Standing Statuses</option>
            <option value="Dean's List">Dean's List (Honors)</option>
            <option value="Active">Active Standing</option>
            <option value="On Probation">Academic Probation</option>
          </select>
        </div>

        {/* HTML Student Table (Required) */}
        <div className="overflow-x-auto border border-slate-100 rounded-2xl shadow-sm">
          <table className="univ-table">
            <thead>
              <tr>
                <th>Registration ID</th>
                <th>Full Name</th>
                <th>Academic Affiliation</th>
                <th>Standing Year</th>
                <th>Institutional GPA</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => {
                const isDeansList = student.status === "Dean's List";
                const isOnProbation = student.status === "On Probation";

                return (
                  <tr key={student.id}>
                    <td className="font-mono text-xs font-medium text-teal-700">{student.rollNo}</td>
                    <td>
                      <div className="font-semibold text-slate-900">{student.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{student.email}</div>
                    </td>
                    <td className="text-xs text-slate-600 font-light">{student.department}</td>
                    <td className="font-mono text-xs text-slate-600">Year {student.year}</td>
                    <td>
                      <span className={`font-mono text-xs font-bold ${isDeansList ? "text-amber-600" : "text-slate-700"}`}>
                        {student.gpa.toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <span className={`inline-flex px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-mono font-bold ${
                        isDeansList ? "bg-amber-50 text-amber-700 border border-amber-200" :
                        isOnProbation ? "bg-red-50 text-red-700 border border-red-200" :
                        "bg-teal-50 text-teal-700 border border-teal-200"
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="text-right">
                      <div className="inline-flex gap-2">
                        <button
                          onClick={() => handleOpenEdit(student)}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-teal-50 text-slate-500 hover:text-teal-700 transition-colors border border-slate-100"
                          title="Edit scholar details"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-500 hover:text-red-600 transition-colors border border-slate-100"
                          title="Archive record"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-slate-400 font-light italic">
                    No matriculated scholars match the specified parameters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grid: Student Services & Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 5. STUDENT SERVICES (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="mono-tag text-teal-600 font-semibold block">Campus Support</span>
            <h3 className="text-xl font-serif text-slate-900 font-bold">Academic Registry Services</h3>
            <p className="text-xs text-slate-500 font-light">The Office of academic Registry provides critical resources to maintain your scholar portfolio.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-5 border border-slate-50 rounded-2xl bg-slate-50/30 space-y-2">
              <span className="text-xl">📜</span>
              <h4 className="font-serif font-bold text-slate-900 text-sm">Official Transcript Issuance</h4>
              <p className="text-slate-500 text-xs font-light leading-relaxed">Request secure verified physical or encrypted PDF copies of your cumulative transcripts.</p>
            </div>

            <div className="p-5 border border-slate-50 rounded-2xl bg-slate-50/30 space-y-2">
              <span className="text-xl">🛡️</span>
              <h4 className="font-serif font-bold text-slate-900 text-sm">Enrollment Certifications</h4>
              <p className="text-slate-500 text-xs font-light leading-relaxed">Generate instant signed certificates for insurance coverage, internships, or visas.</p>
            </div>

            <div className="p-5 border border-slate-50 rounded-2xl bg-slate-50/30 space-y-2">
              <span className="text-xl">⚖️</span>
              <h4 className="font-serif font-bold text-slate-900 text-sm">Core Major Declaration</h4>
              <p className="text-slate-500 text-xs font-light leading-relaxed">Submit requests to align or transfer your scholar status into other divisions.</p>
            </div>

            <div className="p-5 border border-slate-50 rounded-2xl bg-slate-50/30 space-y-2">
              <span className="text-xl">💳</span>
              <h4 className="font-serif font-bold text-slate-900 text-sm">Smart ID Campus Card</h4>
              <p className="text-slate-500 text-xs font-light leading-relaxed">Manage your campus access keys, digital manuscript prints, and cafeteria tokens.</p>
            </div>
          </div>
        </div>

        {/* 6. ACADEMIC RULES & CODE OF CONDUCT (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <Scale className="w-5 h-5 text-teal-700" />
            <h3 className="text-lg font-serif text-slate-900 font-bold">Academic Integrity & Rules</h3>
          </div>

          <div className="space-y-4 text-xs text-slate-600 leading-relaxed font-light">
            <div className="flex gap-3 items-start">
              <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">01</span>
              <div>
                <strong className="text-slate-900 font-serif font-semibold block mb-0.5">The Honor Code Commitment</strong>
                All students must sign and adhere to the Anna University Honor Code. Academic plagiarism, unsanctioned model-generation use in primary essays, or sharing answers results in direct probation.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">02</span>
              <div>
                <strong className="text-slate-900 font-serif font-semibold block mb-0.5">Attendance Matrix</strong>
                Minimum 75% attendance is required in laboratory practicals, quantum computing trap rooms, and trading floors to receive eligibility for final examinations.
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="font-mono font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">03</span>
              <div>
                <strong className="text-slate-900 font-serif font-semibold block mb-0.5">Standing Requirements</strong>
                Undergraduates must maintain a minimum cumulative GPA of 2.00. GPA scores slipping below are issued temporary Academic Probation status.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Grid: Downloads & Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* 7. DOWNLOADS (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
            <FileDown className="w-5 h-5 text-teal-700 font-extrabold" />
            <h3 className="text-lg font-serif text-slate-950 font-bold">Official Forms & Downloads</h3>
          </div>

          <div className="space-y-3">
            {[
              { name: "Official Transcript Request Form (PDF)", size: "240 KB", desc: "For graduate applications and global credit transfers." },
              { name: "Academic Scholarship Application 2026 (PDF)", size: "450 KB", desc: "Submit before August 30 for merit-based financial aid." },
              { name: "Core Curriculum Overview Brochure (PDF)", size: "1.2 MB", desc: "Details on required subjects, GPA thresholds, and credits." }
            ].map((f, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-2 border-slate-100 rounded-xl hover:bg-slate-50 hover:border-teal-500/20 transition-all">
                <div className="space-y-1.5 pr-4">
                  <span className="text-slate-950 font-serif font-bold text-xs block">{f.name}</span>
                  <p className="text-[10px] text-slate-600 font-medium leading-none">{f.desc}</p>
                </div>
                <button 
                  onClick={() => showToast(`Initiated download for secure document: ${f.name}`)}
                  className="px-3 py-2 rounded-lg bg-teal-100 hover:bg-teal-200 text-teal-800 font-mono text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  {f.size}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 8. IMPORTANT NOTICE (6 cols) */}
        <div className="lg:col-span-6 bg-amber-50/40 border border-amber-200/50 rounded-3xl p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-amber-800">
              <ShieldAlert className="w-5 h-5 text-amber-700" />
              <h3 className="text-lg font-serif font-bold">Dean's Office Urgent Notices</h3>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed font-light">
              <p>
                <strong>Course Registration Deadline:</strong> Autumn Cohort registration officially locks on August 20, 2026. Failures to finalize core schedules result in automatic late enrollment processing fines.
              </p>
              <p>
                <strong>Dean's List Reception:</strong> Honored scholars possessing GPAs above 3.80 are cordially invited to the Dean's Private Garden Reception on September 14, following the Convocation.
              </p>
              <p>
                <strong>Classroom Location Shifts:</strong> Due to equipment upgrades inside the subatomic particle containment Traps, all Quantum Physics lectures scheduled in Lab 304 have been shifted temporarily to Lecture Hall D.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-amber-200/50 flex items-center justify-between text-[11px] text-amber-800 font-mono">
            <span>By Order: Office of Academic Leadership</span>
            <span>Anna University Administrative Registry</span>
          </div>
        </div>

      </div>

      {/* Add / Edit Dialog Slideover */}
      <AnimatePresence>
        {isAdding && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="scholar-modal-title"
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-150 max-w-md w-full shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 id="scholar-modal-title" className="text-lg font-serif text-slate-900 font-bold">
                    {editingId ? "Modify Scholar Academic File" : "Matriculate Scholar"}
                  </h2>
                  <button 
                    onClick={() => setIsAdding(false)}
                    className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer flex items-center justify-center min-w-[36px] min-h-[36px]"
                    aria-label="Close dialog"
                    type="button"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                <form onSubmit={handleSave} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Full Legal Name</label>
                      <button
                        type="button"
                        onClick={() => {
                          setFormName("Pusparaj");
                          setFormEmail("pusparaj50739790@gmail.com");
                        }}
                        className="text-[9px] font-mono font-bold text-teal-600 hover:text-teal-850 bg-teal-50 hover:bg-teal-100/80 px-2 py-0.5 rounded-md transition-all cursor-pointer flex items-center gap-1 border border-teal-100"
                        title="Autofill with Pusparaj"
                      >
                        ⚡ Autofill: Pusparaj
                      </button>
                    </div>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Pusparaj"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-2 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
                    />
                  </div>

                  {/* Roll No */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Roll Registration ID</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. AU-2026-900"
                      value={formRoll}
                      onChange={(e) => setFormRoll(e.target.value)}
                      className="w-full px-4 py-2 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs font-mono"
                    />
                  </div>

                  {/* Department */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Academic Department</label>
                    <select
                      value={formDept}
                      onChange={(e) => setFormDept(e.target.value)}
                      className="w-full px-4 py-2 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
                    >
                      {data.departments.map(d => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Academic Email Affiliation</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. cynthia.rogers@aethelgard.edu"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs font-mono"
                    />
                  </div>

                  {/* Year & GPA */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Standing Year</label>
                      <select
                        value={formYear}
                        onChange={(e) => setFormYear(Number(e.target.value))}
                        className="w-full px-4 py-2 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
                      >
                        <option value={1}>Year 1 / Freshman</option>
                        <option value={2}>Year 2 / Sophomore</option>
                        <option value={3}>Year 3 / Junior</option>
                        <option value={4}>Year 4 / Senior</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Cumulative GPA (Max 4)</label>
                      <input 
                        type="number" 
                        step="0.01"
                        min="0.00"
                        max="4.00"
                        required
                        value={formGpa}
                        onChange={(e) => setFormGpa(Number(e.target.value))}
                        className="w-full px-4 py-2 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs font-mono"
                      />
                    </div>
                  </div>

                  {/* Status */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Standing Status</label>
                    <select
                      value={formStatus}
                      onChange={(e) => setFormStatus(e.target.value as any)}
                      className="w-full px-4 py-2 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
                    >
                      <option value="Active">Active / Standing Good</option>
                      <option value="Dean's List">Dean's List / Honors</option>
                      <option value="On Probation">Academic Probation</option>
                    </select>
                  </div>

                  {formErrorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs font-medium">
                      ⚠️ {formErrorMessage}
                    </div>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAdding(false)}
                      className="flex-1 py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-mono font-semibold transition-colors border border-slate-200 cursor-pointer min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs font-mono transition-colors shadow-sm cursor-pointer min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    >
                      Save File
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. CUSTOM CONFIRM ARCHIVE POPUP MODAL */}
      <AnimatePresence>
        {archiveCandidateId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="archive-modal-title"
              aria-describedby="archive-modal-desc"
              className="bg-white rounded-3xl p-6 md:p-8 border-2 border-slate-200 max-w-md w-full shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setArchiveCandidateId(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-950 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer flex items-center justify-center min-w-[32px] min-h-[32px]"
                aria-label="Close confirmation dialog"
                type="button"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="space-y-2 text-center pt-2">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-xl">
                  ⚠️
                </div>
                <h3 id="archive-modal-title" className="text-lg font-serif font-extrabold text-slate-950">
                  Archive Scholar Record?
                </h3>
                <p id="archive-modal-desc" className="text-xs text-slate-650 leading-relaxed">
                  Are you absolutely certain you want to archive this student's academic standing record? This will withdraw them from the active ledger.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setArchiveCandidateId(null)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-xs font-bold border border-slate-200 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmArchive}
                  className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold transition-colors shadow-sm cursor-pointer min-h-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  Archive File
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. FLOATING TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white px-5 py-3.5 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3 max-w-sm"
          >
            <span className="text-teal-400 font-extrabold text-sm">✓</span>
            <span className="text-xs font-mono font-medium text-slate-100">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
