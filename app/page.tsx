"use client";
import React, { useEffect, useState } from 'react';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu, Mail, Linkedin, Phone } from 'lucide-react';

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      {/* HEADER / NAVIGATION */}
      <nav className="sticky top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/10 bg-black/50">
        <div className="text-cyan-500 font-bold tracking-tighter text-xl uppercase">PRIYA.DE</div>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Tech</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
        </div>
      </nav>

      <main className="relative z-10 pt-20 px-6 md:px-20 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section id="about" className="py-20">
          <span className="text-cyan-500 font-mono tracking-[0.5em] text-[10px] uppercase block mb-4">Data Engineer // 4.8 Years Experience</span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter uppercase">
            PRIYA DHARSHINI <br /> <span className="text-gray-700">H</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg mb-10 leading-relaxed">
            Proficient in <span className="text-white">PySpark, Spark, Hadoop, Hive, and Azure Databricks</span>. 
            I build scalable data solutions that drive business intelligence and high-impact decision-making.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:harikrishnanpriyad0708@gmail.com" className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-3 rounded-md transition-all flex items-center gap-2 text-xs uppercase">
              Email Me <Mail size={16}/>
            </a>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/priya-dharshini-h-daataengr99" className="p-3 border border-white/10 rounded-md hover:bg-white/5"><Linkedin size={20}/></a>
              <div className="p-3 border border-white/10 rounded-md text-xs flex items-center gap-2 text-gray-400"><Phone size={16}/> 8939285953</div>
            </div>
          </div>
        </section>

        {/* SKILLS GRID */}
        <section id="skills" className="py-20 border-t border-white/5">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-cyan-900"></span> Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-lg">
              <Database className="text-cyan-500 mb-6" size={32}/>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Big Data & ETL</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Hadoop, Hive, Spark, PySpark, Oracle DB, ETL/ELT Models, SCD Methodology.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-lg">
              <Cloud className="text-cyan-500 mb-6" size={32}/>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Cloud & DevOps</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Azure Databricks, Azure Data Factory, AWS EMR, Azure DevOps (CI/CD), Jenkins, GIT.</p>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-lg">
              <Code className="text-cyan-500 mb-6" size={32}/>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Languages & Tools</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Python, SQL, Oracle PL/SQL, Bash, OBIEE, Control-M Scheduling.</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 border-t border-white/5">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-cyan-900"></span> Experience
          </h2>
          
          <div className="space-y-12">
            <div className="relative pl-8 border-l border-cyan-500/30">
              <div className="absolute w-2 h-2 bg-cyan-500 rounded-full -left-[5px] top-2 shadow-[0_0_10px_#00f3ff]" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Assistant Systems Engineer // TCS</h3>
                  <p className="text-cyan-500 font-mono text-xs uppercase mt-1">Project: Standard Chartered Bank</p>
                </div>
                <div className="text-gray-500 text-[10px] font-bold mt-2 md:mt-0 uppercase">Oct 2022 — Present</div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400">
                <li className="flex items-start gap-2"><Terminal size={12} className="mt-0.5 text-cyan-800"/> Managed 10+ pipelines (10TB+ Scale)</li>
                <li className="flex items-start gap-2"><Terminal size={12} className="mt-0.5 text-cyan-800"/> Hive to Spark / Azure Cloud Migration</li>
                <li className="flex items-start gap-2"><Terminal size={12} className="mt-0.5 text-cyan-800"/> Optimized SQL queries (40% speed boost)</li>
                <li className="flex items-start gap-2"><Terminal size={12} className="mt-0.5 text-cyan-800"/> Automated releases via Azure DevOps</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l border-white/10">
              <div className="absolute w-2 h-2 bg-gray-500 rounded-full -left-[5px] top-2" />
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Associate Software Engineer // Azentio</h3>
                  <p className="text-gray-500 font-mono text-xs uppercase mt-1">Project: Gulf Insurance Group</p>
                </div>
                <div className="text-gray-500 text-[10px] font-bold mt-2 md:mt-0 uppercase">Apr 2021 — Oct 2022</div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-2xl">
                Optimized complex PL/SQL procedures and queries, resulting in an 80% boost in Daily Reporting System performance. 
                Managed secure file transfers using FileIT and Solace.
              </p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & EDUCATION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 border-t border-white/5">
          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-8">Achievements</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded">
                <p className="text-white font-bold text-xs uppercase">Star of the Month (3x)</p>
                <p className="text-[10px] text-gray-500 mt-1 uppercase">Tata Consultancy Services (2023-2024)</p>
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded">
                <p className="text-white font-bold text-xs uppercase">GEM Award</p>
                <p className="text-[10px] text-gray-500 mt-1 uppercase">Digital Technologies Excellence</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-8">Education</h2>
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded">
              <p className="text-white font-bold text-xs uppercase">B.Tech in Information Technology</p>
              <p className="text-[10px] text-gray-500 mt-1 uppercase">JEPPIAAR SRR Engineering College</p>
              <p className="text-cyan-500 font-mono text-xs mt-2 font-bold">CGPA: 7.01 %</p>
            </div>
          </div>
        </section>

        <footer className="py-20 border-t border-white/5 text-center">
          <p className="text-[9px] text-gray-600 uppercase tracking-[1em]">8939285953 // Priya Dharshini H // Chennai, India</p>
        </footer>

      </main>
    </div>
  );
}