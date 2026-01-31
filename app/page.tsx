"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu } from 'lucide-react';

// --- Safe Particle Logic ---
function DataParticles() {
  // FIXED: Added (null) to satisfy strict TypeScript rules
  const ref = useRef<any>(null); 
  const [sphere] = useState(() => {
    const arr = new Float32Array(5000);
    for (let i = 0; i < 5000; i++) {
      arr[i] = (Math.random() - 0.5) * 3;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00f3ff" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    import('animejs').then((animeModule) => {
      const anime = animeModule.default;
      anime({
        targets: '.animate-in',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: 'easeOutExpo',
        duration: 1200
      });
    });
  }, []);

  if (!mounted) return <div className="bg-black min-h-screen" />;

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono selection:bg-cyan-900 overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <DataParticles />
        </Canvas>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* HERO SECTION */}
        <section className="mb-32 animate-in opacity-0">
          <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter text-white uppercase">
            PRIYA DHARSHINI <span className="text-cyan-500">H</span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-200 mb-6 flex items-center gap-2">
            <Terminal size={20} /> DATA ENGINEER // 4.8 YEARS EXP
          </p>
          <div className="border-l-2 border-cyan-500 pl-6 bg-cyan-950/20 py-4">
            <p className="text-sm text-cyan-300 uppercase tracking-widest">Assistant Systems Engineer @ TCS</p>
            <p className="text-xs text-cyan-500 mt-2">Azure | PySpark | SQL | Databricks</p>
          </div>
        </section>

        {/* SKILLS GRID */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase">
            <Cpu className="text-pink-500" /> Technical_Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-cyan-900 p-6 bg-black/60 hover:border-cyan-400 transition-all">
              <Code className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Languages</h3>
              <p className="text-xs leading-relaxed">Python, SQL, PL/SQL, Bash, PySpark</p>
            </div>
            <div className="border border-cyan-900 p-6 bg-black/60 hover:border-cyan-400 transition-all">
              <Database className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Data Engineering</h3>
              <p className="text-xs leading-relaxed">Hadoop, Hive, Spark, Oracle DB, ETL/ELT Models</p>
            </div>
            <div className="border border-cyan-900 p-6 bg-black/60 hover:border-cyan-400 transition-all">
              <Cloud className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Cloud & Tools</h3>
              <p className="text-xs leading-relaxed">Azure Databricks, ADF, AWS EMR, Control-M, Azure DevOps</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase">
            <Database className="text-pink-500" /> Professional_Experience
          </h2>
          <div className="space-y-12">
            <div className="border-l border-pink-500 pl-8 relative">
              <div className="absolute w-3 h-3 bg-pink-500 -left-[6px] top-2" />
              <h3 className="text-xl text-white font-bold uppercase">Standard Chartered Bank</h3>
              <p className="text-cyan-600 mb-4 text-xs italic tracking-widest">Oct 2022 - Present | TCS</p>
              <ul className="text-sm space-y-3 text-cyan-100/80">
                <li>• Managed 10+ pipelines processing <span className="text-cyan-400 font-bold">10TB+ of Data</span></li>
                <li>• Spearheaded Hive to <span className="text-white uppercase">Spark migration</span> on Azure Cloud</li>
                <li>• Optimized SQL retrieval speed by <span className="text-cyan-400 font-bold">40%</span> using partitioning</li>
                <li>• Developed CI/CD pipelines in Azure DevOps to automate production releases</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in opacity-0 mb-32">
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase text-white">
              <Award size={20} className="text-pink-500" /> Recognition
            </h2>
            <ul className="text-xs space-y-4">
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500">Star of the Month Award (Consecutive 3 times) - TCS</li>
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500">GEM Award for Outstanding Performance - TCS</li>
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500">Contextual Master for Regulatory Compliance restoration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase text-white">
              <BookOpen size={20} className="text-pink-500" /> Certifications
            </h2>
            <div className="text-xs space-y-3">
              <div className="p-3 border border-cyan-800 bg-black/40">
                <p className="text-cyan-400 font-bold uppercase">Microsoft AZ-900</p>
                <p className="opacity-60 uppercase mt-1">Azure Fundamentals</p>
              </div>
              <div className="p-3 border border-cyan-800 bg-black/40">
                <p className="text-cyan-400 font-bold uppercase">Microsoft DP-900</p>
                <p className="opacity-60 uppercase mt-1">Azure Data Fundamentals</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center pt-20 border-t border-cyan-900">
          <p className="text-[10px] opacity-40 tracking-[0.5em] uppercase animate-pulse">
            System Online // Priya Dharshini H // Port_ID: 8939285953
          </p>
        </footer>
      </main>
    </div>
  );
}