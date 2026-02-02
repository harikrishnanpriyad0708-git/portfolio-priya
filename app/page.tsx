"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu } from 'lucide-react';

function DataParticles() {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00f3ff" size={0.015} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initAnims = async () => {
      try {
        const anime = (await import('animejs')).default;
        anime({
          targets: '.animate-in',
          translateY: [20, 0],
          opacity: [0, 1],
          delay: anime.stagger(100),
          easing: 'easeOutExpo',
        });
      } catch (e) {
        console.log("Animation load skipped");
      }
    };
    initAnims();
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono selection:bg-cyan-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <DataParticles />
        </Canvas>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* HEADER */}
        <header className="mb-24 animate-in opacity-0">
          <div className="inline-block px-2 py-1 border border-cyan-500 text-[10px] mb-4 text-cyan-500 uppercase tracking-[0.3em]">
            Data Engineer Profile // V 4.8
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-4">
            Priya Dharshini <span className="text-cyan-500">H</span>
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-cyan-200/70 border-l border-cyan-800 pl-6">
            <span className="flex items-center gap-2"><Terminal size={14}/> 4.8 Yrs Exp</span>
            <span className="flex items-center gap-2"><Database size={14}/> PySpark / SQL / Hadoop</span>
            <span className="flex items-center gap-2"><Cloud size={14}/> Azure Cloud</span>
          </div>
        </header>

        {/* SKILLS */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3 text-white uppercase tracking-widest">
            <Cpu size={18} className="text-pink-500" /> Tech_Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="bg-cyan-950/10 border border-cyan-900/50 p-6">
              <Code className="text-cyan-500 mb-4" size={20} />
              <h3 className="text-white text-xs font-bold uppercase mb-2">Languages</h3>
              <p className="text-[11px] leading-relaxed opacity-60">Python, SQL, Oracle PL/SQL, Bash, PySpark</p>
            </div>
            <div className="bg-cyan-950/10 border border-cyan-900/50 p-6">
              <Database className="text-cyan-500 mb-4" size={20} />
              <h3 className="text-white text-xs font-bold uppercase mb-2">Big Data</h3>
              <p className="text-[11px] leading-relaxed opacity-60">Spark, Hadoop, Hive, Oracle DB, OBIEE, SCD Models</p>
            </div>
            <div className="bg-cyan-950/10 border border-cyan-900/50 p-6">
              <Cloud className="text-cyan-500 mb-4" size={20} />
              <h3 className="text-white text-xs font-bold uppercase mb-2">Platform</h3>
              <p className="text-[11px] leading-relaxed opacity-60">Azure Databricks, ADF, Azure DevOps, Control-M, Jenkins</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3 text-white uppercase tracking-widest">
            <Terminal size={18} className="text-pink-500" /> Work_History
          </h2>
          <div className="space-y-16">
            <div className="relative pl-8 border-l border-cyan-900">
              <div className="absolute top-0 left-[-4px] w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_#ff00ff]" />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg text-white font-bold uppercase">Standard Chartered Bank</h3>
                <span className="text-[10px] bg-cyan-900/30 px-2 py-1 text-cyan-400">2022 - PRESENT</span>
              </div>
              <p className="text-xs text-cyan-500 mb-4 uppercase font-bold tracking-tighter">Assistant Systems Engineer // TCS</p>
              <ul className="text-xs space-y-3 opacity-80 leading-relaxed">
                <li>• Managed <span className="text-white">10+ scalable pipelines</span> processing 10TB+ of data.</li>
                <li>• Migrated Hive systems to <span className="text-white">PySpark & Azure Cloud</span> (40% performance gain).</li>
                <li>• Optimized SQL queries to improve retrieval speed by <span className="text-white">40%</span>.</li>
                <li>• Automated release cycles via <span className="text-white">Azure DevOps CI/CD</span>.</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l border-cyan-900">
              <div className="absolute top-0 left-[-4px] w-2 h-2 bg-cyan-500 rounded-full" />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg text-white font-bold uppercase">Gulf Insurance Group</h3>
                <span className="text-[10px] bg-cyan-900/30 px-2 py-1 text-cyan-400">2021 - 2022</span>
              </div>
              <p className="text-xs text-cyan-500 mb-4 uppercase font-bold tracking-tighter">Associate Software Engineer // Azentio</p>
              <ul className="text-xs space-y-3 opacity-80 leading-relaxed">
                <li>• Boosted reporting system performance by <span className="text-white">80%</span> via PL/SQL optimization.</li>
                <li>• Managed secure data integrations between TP systems.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in opacity-0">
          <div>
            <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-widest border-b border-cyan-900 pb-2 flex items-center gap-2">
              <Award size={16} className="text-pink-500"/> Recognition
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-cyan-950/20 text-xs border-r border-cyan-500 italic">"Star of the Month" (x3) - TCS</div>
              <div className="p-3 bg-cyan-950/20 text-xs border-r border-cyan-500 italic">"GEM Award" for Excellence - TCS</div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-6 text-white uppercase tracking-widest border-b border-cyan-900 pb-2 flex items-center gap-2">
              <BookOpen size={16} className="text-pink-500"/> Certs
            </h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 border border-cyan-900 text-[10px] text-center uppercase tracking-tighter">Azure AZ-900</div>
              <div className="p-3 border border-cyan-900 text-[10px] text-center uppercase tracking-tighter">Azure DP-900</div>
            </div>
          </div>
        </section>

        <footer className="mt-40 text-center opacity-20">
          <p className="text-[9px] tracking-[1em] uppercase">Connect // 8939285953 // PRIYA DHARSHINI H</p>
        </footer>
      </main>
    </div>
  );
}