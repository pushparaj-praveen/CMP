import React from "react";
import { motion } from "motion/react";
import { UniversityData } from "../types";
import { AnnaUniversityLogo } from "./AnnaUniversityLogo";
import { 
  Building, 
  Compass, 
  Sparkles, 
  History, 
  HeartHandshake, 
  MapPin, 
  Bookmark, 
  Award 
} from "lucide-react";

interface AboutViewProps {
  data: UniversityData;
}

export const AboutView: React.FC<AboutViewProps> = ({ data }) => {
  const values = [
    {
      title: "Excellence in Learning",
      desc: "Providing a rigorous academic curriculum that blends classical wisdom with cutting-edge experimental engineering.",
      icon: Bookmark,
      color: "from-teal-500/15 via-emerald-500/5 to-transparent border-teal-200/60 hover:border-teal-500/50 hover:shadow-teal-100/50",
      iconBg: "bg-teal-600 text-white"
    },
    {
      title: "Humanitarian Innovation",
      desc: "Ensuring that every scientific and technological breakthrough serves the greater good, emphasizing ethical AI and sustainability.",
      icon: Sparkles,
      color: "from-amber-500/15 via-orange-500/5 to-transparent border-amber-200/60 hover:border-amber-500/50 hover:shadow-amber-100/50",
      iconBg: "bg-amber-600 text-white"
    },
    {
      title: "Collaborative Community",
      desc: "Nurturing an inclusive campus life where prospective scholars, distinguished faculty, and global researchers interact freely.",
      icon: HeartHandshake,
      color: "from-blue-500/15 via-indigo-500/5 to-transparent border-blue-200/60 hover:border-blue-500/50 hover:shadow-blue-100/50",
      iconBg: "bg-blue-600 text-white"
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Premium Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[320px] rounded-3xl overflow-hidden shadow-md"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4Mky2L5BqbJFvZbz-IpfywOWPLHVmuVHyZ6B5FPCD-yVinG4N8uf1JalZ_IHp9ZZSpCfj3vtKWqzz_aCffIkYMmx5_q891pdEllcKEuzW30YX5XpMzaw022gJOwOQSlo1pLkX4GWfsv3GYwROssl1k5bSqg0_neRMtEJ19JbuGrs2x__NOqEirwTUyKwQgW2TjiIARIiuXdUG6rr9bS8HFTCa-RUc6jg2fhTiKLU4I0mcGk-6X_7vZdNZnqAEb7uaxjcLK91uWqLH')` 
          }}
        />
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-white">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-amber-300 uppercase tracking-widest font-bold">
            <History className="w-4 h-4" />
            University Heritage
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tight mb-2">
            About Our Institution
          </h1>
          <p className="text-sm md:text-base text-slate-100 max-w-2xl font-normal opacity-95">
            Founded in {data.established}, Anna University is dedicated to sculpting intellect, pioneering innovation, and sustaining humanity.
          </p>
        </div>
      </motion.div>

      {/* Grid: Heritage & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Heritage Text (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="mono-tag text-teal-700 font-extrabold block">Academic Excellence Since {data.established}</span>
              <h2 className="text-2xl md:text-3.5xl font-serif text-slate-950 font-bold leading-tight">
                An Intellectual Crucible Located in {data.location}
              </h2>
            </div>
            
            <div className="text-slate-800 space-y-4 leading-relaxed font-normal text-sm md:text-base">
              <p>
                Anna University was established in the late 20th century with a bold objective: to bridge the gap between pure engineering sciences and classic inquiry. What began as a highly specialized technical institution has grown into a world-renowned university, fostering academic excellence across five dynamic departments.
              </p>
              <p>
                Our sprawling campus in Chennai, Tamil Nadu, India, stands adjacent to the world's leading technological hubs, enabling deep partnerships with local industries, technology parks, and research laboratories.
              </p>
              <p>
                At Anna University, we cultivate restless, beautiful curiosity. We challenge our students to look beyond equations and data tables, ensuring every breakthrough they discover is guided by strong ethical anchors and a desire to elevate human dignity.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-5 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-slate-900 font-semibold">
                <MapPin className="w-5.5 h-5.5 text-teal-700" />
                <span className="text-sm">{data.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-900 font-semibold">
                <Award className="w-5.5 h-5.5 text-amber-700" />
                <span className="text-sm">Ranked among Top Global Research Centers</span>
              </div>
            </div>
          </div>

          {/* Dean's Welcome Address Spotlit in About Page */}
          <div className="bg-gradient-to-br from-[#fcfbf7] to-[#faf6ed] border-2 border-amber-500/15 p-8 rounded-3xl shadow-md space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-6 bg-amber-600 rounded-full" />
              <h3 className="mono-tag text-slate-700 font-bold">The Dean's Welcome</h3>
            </div>
            
            <p className="text-slate-800 text-sm md:text-base italic leading-relaxed font-normal">
              "{data.deanMessage.content}"
            </p>

            <div className="pt-6 border-t border-slate-200 flex items-center gap-4">
              <img 
                src={data.deanMessage.avatar} 
                alt={data.deanMessage.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 shadow-xs"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-slate-950 font-serif font-bold text-base">{data.deanMessage.name}</h4>
                <p className="text-xs text-teal-700 font-mono font-bold mt-0.5">{data.deanMessage.title}</p>
                <p className="text-[10px] text-slate-500 font-serif font-bold mt-1.5 italic">{data.deanMessage.signature}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seal Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Official Academic Seal Card */}
          <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3">
              <span className="h-2 w-6 bg-teal-400 rounded-full" />
              <h3 className="text-[10px] font-mono text-teal-300 font-bold uppercase tracking-wider">Official Academic Seal</h3>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <AnnaUniversityLogo size={110} className="hover:scale-105 transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]" />
              <div>
                <h4 className="text-lg font-serif font-bold text-white">Anna University Crest</h4>
                <p className="text-[9px] font-mono text-slate-400 mt-1 uppercase tracking-widest">Chennai, India • Founded {data.established}</p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
              <div className="flex gap-3">
                <span className="font-mono text-amber-400 font-bold">01.</span>
                <p className="text-slate-300 leading-relaxed"><strong className="text-white">Temple Tower (Gopuram):</strong> Represents foundational Tamil heritage, stability, and classical humanistic wisdom.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-amber-400 font-bold">02.</span>
                <p className="text-slate-300 leading-relaxed"><strong className="text-white">The Gear Ring:</strong> Represents continuous engineering progression, industry, and robust technical application.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-mono text-amber-400 font-bold">03.</span>
                <p className="text-slate-300 leading-relaxed"><strong className="text-white">The Open Book & Rays:</strong> Symbolizes the liberation of the mind through accessible and relentless scientific pursuit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Institutional Values */}
      <div className="bg-slate-100/60 rounded-3xl p-8 md:p-12 space-y-8 border border-slate-200">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="mono-tag text-amber-700 font-extrabold block">Core Values</span>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-950 font-bold">What Guides Anna University</h2>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            Our campus community thrives by aligning our scientific innovation with a welcoming, collaborative human spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className={`p-7 rounded-3xl border-2 bg-gradient-to-br transition-all hover:scale-102 hover:shadow-lg space-y-4 ${v.color}`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold shadow-sm ${v.iconBg}`}>
                <v.icon className="w-5.5 h-5.5 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-serif text-slate-950 font-extrabold tracking-tight">{v.title}</h3>
              <p className="text-xs text-slate-750 leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
