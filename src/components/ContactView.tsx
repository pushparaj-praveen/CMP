import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UniversityData } from "../types";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  Compass, 
  Clock,
  CheckCircle,
  Building2,
  Bookmark,
  Building,
  AlertCircle
} from "lucide-react";

interface ContactViewProps {
  data: UniversityData;
}

interface MapPinHotspot {
  id: string;
  name: string;
  top: string; // CSS percentage
  left: string; // CSS percentage
  description: string;
}

export const ContactView: React.FC<ContactViewProps> = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPin, setSelectedPin] = useState<MapPinHotspot | null>(null);

  const hotspots: MapPinHotspot[] = [
    { 
      id: "pin-1", 
      name: "Main Quadrangle", 
      top: "42%", 
      left: "48%", 
      description: "Anna University administrative hub built with historic brick masonry housing the Dean's Chamber." 
    },
    { 
      id: "pin-2", 
      name: "Great Ceremonial Hall", 
      top: "30%", 
      left: "62%", 
      description: "Host of our Annual Convocation, commencements, and distinguished speaker forums." 
    },
    { 
      id: "pin-3", 
      name: "Quantum Simulation Suite", 
      top: "65%", 
      left: "35%", 
      description: "State-of-the-art cryogenic laser traps and superconducting research arrays." 
    },
    { 
      id: "pin-4", 
      name: "Knowledge Atrium & Library", 
      top: "55%", 
      left: "75%", 
      description: "Preservation archive digitizing rare vintage manuscripts and providing quiet study carrels." 
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }
    
    setErrorMessage("");
    setIsSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSent(false);
    }, 4000);
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
            <Compass className="w-4 h-4 text-teal-300" />
            Connect & Navigate
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-2">
            Contact & Location Channels
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-2xl font-light font-serif">
            Reach out directly to divisional administrative suites, schedule campus tours, or explore key facilities across our Cambridge campus coordinates.
          </p>
        </div>
      </motion.div>

      {/* 2. CONTACT CHANNELS GRID & STATIC FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Registry Contact Details */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-serif text-slate-900 font-bold flex items-center gap-2 border-b border-slate-50 pb-2">
              <Building2 className="w-4.5 h-4.5 text-teal-700" />
              Administrative Office
            </h3>

            <div className="space-y-4 text-xs md:text-sm font-light text-slate-600 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-teal-600 mt-1 flex-shrink-0" />
                <p>
                  <strong className="text-slate-900 font-serif font-semibold block">Campus Postal Address</strong>
                  {data.contactInfo.address}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-teal-600 mt-0.5 flex-shrink-0" />
                <p>
                  <strong className="text-slate-900 font-serif font-semibold block">Academic Registrar Email</strong>
                  <a href={`mailto:${data.contactInfo.email}`} className="text-teal-700 font-mono text-xs hover:underline">
                    {data.contactInfo.email}
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-teal-600 mt-0.5 flex-shrink-0" />
                <p>
                  <strong className="text-slate-900 font-serif font-semibold block">Inquiry Desk Line</strong>
                  <span className="font-mono text-xs text-slate-700">{data.contactInfo.phone}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Departmental Extension List */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Departmental Extensions</h4>
            <div className="space-y-2 text-xs text-slate-600 font-mono">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-800">Office of Admissions</span>
                <span className="font-bold text-teal-700">ext. 104</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-800">Student Housing Division</span>
                <span className="font-bold text-teal-700">ext. 208</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-800">Financial Aid Registry</span>
                <span className="font-bold text-teal-700">ext. 115</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-800">International Scholar Support</span>
                <span className="font-bold text-teal-700">ext. 302</span>
              </div>
            </div>
          </div>

          {/* Office hours */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              Official Business Hours
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-light font-serif">
              Our administrative and registry desks inside the Main Quadrangle are open Monday through Friday, 9:00 AM to 5:00 PM EST, excluding university holiday recesses.
            </p>
          </div>

        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
          <AnimatePresence>
            {isSent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center space-y-4"
              >
                <div className="p-3 bg-teal-50 border border-teal-100 text-teal-700 rounded-full">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-serif text-slate-900 font-bold">Inquiry Sent Successfully</h4>
                <p className="text-xs text-slate-500 max-w-sm leading-relaxed font-light">
                  Your inquiry has been cataloged and routed directly to the Registrar Desk. Our staff shall respond within 24 working hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSendMessage} className="space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <h3 className="text-lg font-serif text-slate-900 font-bold flex items-center gap-2">
                <Send className="w-4 h-4 text-teal-700" />
                Direct Inquiry Terminal
              </h3>
              <p className="text-xs text-slate-400 font-light">Have academic questions? Submit an official inquiry form below to contact us.</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Liam Sterling"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Your Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. liam@sterling.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Inquiry Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Undergrad Admissions Requirements"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Inquiry Message</label>
                <textarea 
                  rows={5}
                  required
                  placeholder="Write details of your academic query, transfer requests, or admissions concerns..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:outline-none focus:border-teal-500 rounded-xl text-xs resize-none font-light"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
            >
              Submit Roster Inquiry
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* 3. INTERACTIVE LANDMARK MAP HOTSPOTS */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Compass className="w-4.5 h-4.5 text-teal-700" />
            <h3 className="text-xl font-serif text-slate-900 font-bold">Interactive Campus Landmark Map</h3>
          </div>
          <p className="text-xs text-slate-500 font-light">
            Select or click hotspots across our Cambridge district blueprint map below to discover key academic, research, and administrative landmarks.
          </p>
        </div>

        {/* Map Canvas */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-150 bg-slate-100 h-[360px] shadow-inner">
          <img 
            src={data.contactInfo.mapImage} 
            alt="Cambridge Campus Map Layout"
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />

          {/* Hotspots overlay */}
          {hotspots.map((pin) => {
            const isActive = selectedPin?.id === pin.id;
            return (
              <button
                key={pin.id}
                onClick={() => setSelectedPin(pin)}
                className="absolute p-2 rounded-full z-10 transition-all hover:scale-115 active:scale-95 cursor-pointer focus:outline-none"
                style={{ top: pin.top, left: pin.left }}
              >
                <span className="absolute inset-0 rounded-full bg-teal-500/35 animate-ping" />
                <span className={`relative block w-4.5 h-4.5 rounded-full border border-slate-900 shadow-md ${
                  isActive ? "bg-amber-400" : "bg-teal-700 hover:bg-amber-400"
                }`} />
              </button>
            );
          })}

          {/* Floating Detail Overlays */}
          <AnimatePresence>
            {selectedPin && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-slate-950/95 backdrop-blur-sm border border-teal-500/30 shadow-2xl space-y-1.5 text-xs text-white max-w-md mx-auto"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-amber-400 font-serif font-bold text-sm">{selectedPin.name}</strong>
                  <button 
                    onClick={() => setSelectedPin(null)}
                    className="text-slate-400 hover:text-white font-mono text-sm"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-slate-200 leading-relaxed font-light font-serif italic text-xs">
                  "{selectedPin.description}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hotspots button grid */}
        <div className="flex flex-wrap gap-2.5 justify-center">
          {hotspots.map(pin => (
            <button
              key={pin.id}
              onClick={() => setSelectedPin(pin)}
              className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                selectedPin?.id === pin.id
                  ? "bg-teal-50 text-teal-700 border-teal-300 font-bold"
                  : "bg-slate-50 text-slate-600 border-slate-150 hover:bg-slate-100"
              }`}
            >
              {pin.name}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
