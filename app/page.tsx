"use client";
import React from 'react';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu, Mail, Linkedin, Phone, Briefcase } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30">
      
      {/* GLOW EFFECT BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="text-cyan-400 font-black tracking-tighter text-2xl uppercase">PRIYA<span className="text-white">.DE</span></div>
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#awards" className="hover:text-cyan-400 transition-colors">Awards</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-40">
        
        {/* HERO */}
        <header className="mb-32">
          <div className="inline-block mb-4 px-3 py-1 border border-cyan-500/30 rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/5">
            Data Engineer // System Architect
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase mb-6">
            PRIYA <br /> DHARSHINI <span className="text-cyan-500 italic">H</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-400 mb-8 leading-relaxed">
            4.8 years of experience building scalable data pipelines with <span className="text-white">PySpark, Spark, and Azure Databricks</span>.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="mailto:harikrishnanpriyad0708@gmail.com" className="bg-white text-black font-bold px-6 py-3 rounded text-xs uppercase hover:bg-cyan-400 transition-all flex items-center gap-2">
              Get in Touch <Mail size={14} />
            </a>
            <div className="flex gap-4 text-slate-500 ml-2">
               <Linkedin size={20} className="hover:text-cyan-400 cursor-pointer" />
               <span className="text-xs font-mono uppercase tracking-widest">8939285953</span>
            </div>
          </div>
        </header>

        {/* SKILLS */}
        <section id="skills" className="mb-32">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
            <span className="h-[1px] w-8 bg-cyan-500"></span> Technical Inventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-cyan-500/40 transition-all">
              <Database className="text-cyan-400 mb-4" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase text-sm">Big Data / ETL</h3>
              <p className="text-xs text-slate-400 leading-relaxed">PySpark, Spark, Hadoop, Hive, Oracle DB, SCD Methodology, ELT/ETL Modeling.</p>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-cyan-500/40 transition-all">
              <Cloud className="text-blue-400 mb-4" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase text-sm">Cloud & DevOps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Azure Databricks, Azure Data Factory, AWS EMR, Azure DevOps (CI/CD), Jenkins, GIT.</p>
            </div>
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:border-cyan-500/40 transition-all">
              <Cpu className="text-indigo-400 mb-4" size={28} />
              <h3 className="text-white font-bold mb-2 uppercase text-sm">Languages</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Python, SQL, Oracle PL/SQL, Bash Scripting, OBIEE, Control-M Scheduling.</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mb-32">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
            <span className="h-[1px] w-8 bg-cyan-500"></span> Experience_Log
          </h2>
          
          <div className="space-y-12">
            <div className="relative pl-10 border-l border-white/10 group">
              <div className="absolute top-0 -left-[5px] w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-all shadow-[0_0_10px_#06b6d4]" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Assistant Systems Engineer // TCS</h3>
                  <p className="text-cyan-500 font-mono text-[10px] uppercase mt-1">Project: Standard Chartered Bank</p>
                </div>
                <div className="text-slate-500 text-[10px] font-bold mt-2 md:mt-0 uppercase tracking-widest">Oct 2022 — Present</div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs text-slate-400 leading-relaxed">
                <li className="flex items-start gap-2 italic underline decoration-white/10 decoration-1 underline-offset-4 tracking-tight">• Managed 10+ data pipelines processing 10TB+ Scale</li>
                <li className="flex items-start gap-2 italic underline decoration-white/10 decoration-1 underline-offset-4 tracking-tight">• Hive to PySpark & Azure Cloud Migration</li>
                <li className="flex items-start gap-2 italic underline decoration-white/10 decoration-1 underline-offset-4 tracking-tight">• Optimized SQL retrieval speed by 40% with partitions</li>
                <li className="flex items-start gap-2 italic underline decoration-white/10 decoration-1 underline-offset-4 tracking-tight">• CI/CD automation in Azure DevOps for production</li>
              </ul>
            </div>

            <div className="relative pl-10 border-l border-white/10 group">
              <div className="absolute top-0 -left-[5px] w-2 h-2 bg-white/20 rounded-full" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Associate Software Engineer // Azentio</h3>
                  <p className="text-slate-500 font-mono text-[10px] uppercase mt-1">Project: Gulf Insurance Group</p>
                </div>
                <div className="text-slate-500 text-[10px] font-bold mt-2 md:mt-0 uppercase tracking-widest">Apr 2021 — Oct 2022</div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-3xl border-t border-white/5 pt-4">
                Optimized complex PL/SQL procedures and queries, resulting in an <span className="text-white">80% boost</span> in Daily Reporting System performance. Engineered secure file transfer workflows using FileIT and Solace.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER-STYLE INFO */}
        <section id="awards" className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-20">
          <div>
             <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">Achievements</h2>
             <div className="space-y-4">
                <div className="p-4 border border-white/5 bg-white/[0.01] rounded">
                  <p className="text-xs font-bold text-white uppercase italic">Star of the Month (3 times)</p>
                  <p className="text-[9px] text-slate-500 uppercase mt-1">TCS Recognition 2023-2024</p>
                </div>
                <div className="p-4 border border-white/5 bg-white/[0.01] rounded">
                  <p className="text-xs font-bold text-white uppercase italic">GEM Award & Contextual Master</p>
                  <p className="text-[9px] text-slate-500 uppercase mt-1">Compliance & Digital Excellence</p>
                </div>
             </div>
          </div>
          <div>
             <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">Education</h2>
             <div className="p-6 border border-white/5 bg-white/[0.01] rounded">
                <p className="text-sm font-bold text-white uppercase mb-1">B.Tech in Information Technology</p>
                <p className="text-xs text-slate-500 uppercase mb-4">JEPPIAAR SRR Engineering College</p>
                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">GPA SUCCESS RATE</span>
                  <span className="text-cyan-400 font-mono font-bold">7.01 %</span>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* TERMINAL FOOTER */}
      <footer className="w-full py-10 border-t border-white/5 text-center bg-black/30 backdrop-blur-sm">
        <p className="text-[9px] text-slate-600 font-mono uppercase tracking-[0.8em]">8939285953 // PRIYA DHARSHINI H // SYSTEM_ONLINE</p>
      </footer>

    </div>
  );
}