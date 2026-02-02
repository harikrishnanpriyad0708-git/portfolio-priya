"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

// --- Animated 3D Data Particles ---
function BackgroundCircles() {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000 * 3; i++) arr[i] = (Math.random() - 0.5) * 15;
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00f3ff" size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
      </Points>
    </group>
  );
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadAnims = async () => {
      const anime = (await import('animejs')).default;
      anime({
        targets: '.reveal',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        easing: 'easeOutQuart',
        duration: 1000
      });
    };
    loadAnims();
  }, []);

  if (!mounted) return <div className="bg-[#050505] min-h-screen" />;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 selection:text-white">
      {/* 3D Visual Layer */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <BackgroundCircles />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505]" />
      </div>

      <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-cyan-500 font-bold tracking-tighter text-xl uppercase">PDH.DE</div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Tech</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Projects</a>
        </div>
      </nav>

      <main className="relative z-10 pt-40 px-6 md:px-20 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <section id="about" className="mb-40">
          <div className="reveal opacity-0">
            <span className="text-cyan-500 font-mono tracking-[0.5em] text-xs uppercase block mb-4">Lead Data Engineer // Cloud Architect</span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase">
              Priya <br /> <span className="text-transparent border-t-2 border-b-2 border-white/20 inline-block py-2">Dharshini</span>
            </h1>
            <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mb-10">
              Proficient in <span className="text-white">PySpark, Spark, and Azure Databricks</span>. Transforming 10TB+ scale datasets into actionable business intelligence for 4.8 years.
            </p>
            <div className="flex gap-4">
              <button className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-sm uppercase">
                Contact Me <Mail size={16}/>
              </button>
              <div className="flex gap-2">
                <a href="#" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors"><Linkedin size={20}/></a>
                <a href="#" className="p-4 border border-white/10 rounded-full hover:bg-white/5 transition-colors"><Phone size={20}/></a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS GRID */}
        <section id="skills" className="mb-40">
          <h2 className="reveal opacity-0 text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-gray-800"></span> Technical Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { title: "Big Data Frameworks", desc: "Hadoop, Hive, Spark, PySpark, Oracle DB", icon: <Database className="text-cyan-500"/> },
              { title: "Cloud Platforms", desc: "Azure Databricks, Azure Data Factory, AWS EMR", icon: <Cloud className="text-magenta-500"/> },
              { title: "Languages & Tools", desc: "Python, SQL, PL/SQL, Bash, Control-M, Jenkins", icon: <Code className="text-yellow-500"/> }
            ].map((skill, i) => (
              <div key={i} className="reveal opacity-0 group bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.05] transition-all duration-500 cursor-default">
                <div className="mb-6">{skill.icon}</div>
                <h3 className="text-white text-lg font-bold mb-3 uppercase tracking-tight">{skill.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="mb-40">
          <h2 className="reveal opacity-0 text-sm font-bold text-gray-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-gray-800"></span> Professional Experience
          </h2>
          
          <div className="space-y-1">
            <div className="reveal opacity-0 bg-white/[0.02] border border-white/5 p-12 hover:border-cyan-500/50 transition-all group">
              <div className="flex flex-col md:flex-row justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-black uppercase italic group-hover:text-cyan-400 transition-colors">Standard Chartered Bank</h3>
                  <p className="text-gray-500 font-mono text-sm">Assistant Systems Engineer @ TCS | Chennai, India</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-white/5 px-4 py-2 rounded-full text-white/60">OCT 2022 — PRESENT</span>
                </div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3"><Terminal size={14} className="mt-1 text-cyan-500"/> Managed 10+ scalable pipelines (10TB+ scale)</li>
                <li className="flex items-start gap-3"><Terminal size={14} className="mt-1 text-cyan-500"/> Hive to Spark migration on Azure Cloud</li>
                <li className="flex items-start gap-3"><Terminal size={14} className="mt-1 text-cyan-500"/> Optimized SQL speed by 40% with partitions</li>
                <li className="flex items-start gap-3"><Terminal size={14} className="mt-1 text-cyan-500"/> Automated CI/CD workflows in Azure DevOps</li>
              </ul>
            </div>

            <div className="reveal opacity-0 bg-white/[0.02] border border-white/5 p-12 hover:border-cyan-500/50 transition-all group">
              <div className="flex flex-col md:flex-row justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-black uppercase italic group-hover:text-cyan-400 transition-colors">Gulf Insurance Group</h3>
                  <p className="text-gray-500 font-mono text-sm">Associate Software Engineer @ Azentio</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-white/5 px-4 py-2 rounded-full text-white/60">APR 2021 — OCT 2022</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                Optimized complex PL/SQL procedures and queries, resulting in an <span className="text-white">80% boost in Daily Reporting System performance</span>.
              </p>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & EDUCATION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-40">
          <div className="reveal opacity-0 bg-white/[0.02] border border-white/5 p-12">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-8">Honors & Awards</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 text-cyan-500 rounded-lg"><Award size={20}/></div>
                <div>
                  <p className="text-white font-bold uppercase">Star of the Month (3x)</p>
                  <p className="text-xs text-gray-500 uppercase">Tata Consultancy Services</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-magenta-500/10 text-magenta-500 rounded-lg"><Award size={20}/></div>
                <div>
                  <p className="text-white font-bold uppercase">GEM Award</p>
                  <p className="text-xs text-gray-500 uppercase">Excellence in Digital Technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal opacity-0 bg-white/[0.02] border border-white/5 p-12">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-8">Education</h2>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 text-white rounded-lg"><BookOpen size={20}/></div>
              <div>
                <p className="text-white font-bold uppercase">B.Tech Information Tech</p>
                <p className="text-xs text-gray-500 uppercase">JEPPIAAR SRR Engineering College</p>
                <p className="text-xs text-cyan-500 font-mono mt-2">CGPA: 7.01 %</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 border-t border-white/5 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[1em]">Created by Priya Dharshini H // 2024 Edition</p>
        </footer>

      </main>
    </div>
  );
}