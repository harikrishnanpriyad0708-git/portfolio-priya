"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu } from 'lucide-react';

// --- Fixed 3D Particle Logic ---
function DataParticles() {
  const ref = useRef<any>(null); // Added 'null' here to fix the Type Error
  const [sphere] = useState(() => {
    const arr = new Float32Array(5000 * 3); // 5000 points, 3 coords each
    for (let i = 0; i < 5000 * 3; i++) {
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
        <PointMaterial 
          transparent 
          color="#00f3ff" 
          size={0.005} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dynamic import for animejs to prevent build-time crashes
    const loadAnimations = async () => {
      const anime = (await import('animejs')).default;
      anime({
        targets: '.animate-in',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        easing: 'easeOutExpo',
        duration: 1200
      });
    };
    loadAnimations();
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
            <p className="text-sm text-cyan-300 uppercase tracking-widest font-bold text-white">Assistant Systems Engineer @ TCS</p>
            <p className="text-xs text-cyan-500 mt-2 uppercase">Core Tech: PySpark | Azure Databricks | SQL | Hadoop</p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase">
            <Cpu className="text-pink-500" /> Technical_Inventory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-cyan-900 p-6 bg-black/80 backdrop-blur-sm hover:border-cyan-400 transition-all">
              <Code className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Languages</h3>
              <p className="text-xs leading-relaxed">Python, SQL, PL/SQL, Bash, PySpark</p>
            </div>
            <div className="border border-cyan-900 p-6 bg-black/80 backdrop-blur-sm hover:border-cyan-400 transition-all">
              <Database className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Frameworks</h3>
              <p className="text-xs leading-relaxed">Spark, Hive, Hadoop, Oracle DB, OBIEE</p>
            </div>
            <div className="border border-cyan-900 p-6 bg-black/80 backdrop-blur-sm hover:border-cyan-400 transition-all">
              <Cloud className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Cloud & CI/CD</h3>
              <p className="text-xs leading-relaxed">Azure Databricks, ADF, Azure DevOps, Control-M</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase text-white">
            <Database className="text-pink-500" /> Experience_Logs
          </h2>
          <div className="space-y-12">
            <div className="border-l border-pink-500 pl-8 relative">
              <div className="absolute w-3 h-3 bg-pink-500 -left-[6px] top-2 shadow-[0_0_10px_#ff00ff]" />
              <h3 className="text-xl text-white font-bold uppercase tracking-tight">Standard Chartered Bank</h3>
              <p className="text-cyan-600 mb-4 text-xs italic">Oct 2022 - Present | TCS</p>
              <ul className="text-sm space-y-3 text-cyan-100/80">
                <li>• Optimized 10+ pipelines for <span className="text-cyan-400">10TB+ Scale</span></li>
                <li>• Led <span className="text-white">Hive to PySpark Migration</span> on Azure Cloud</li>
                <li>• Improved data speed by <span className="text-cyan-400">40%</span> using partitioning and indexing</li>
                <li>• Automated workflows in <span className="text-white">Control-M</span> and releases via Azure DevOps</li>
              </ul>
            </div>
            
            <div className="border-l border-cyan-500 pl-8 relative">
              <div className="absolute w-3 h-3 bg-cyan-500 -left-[6px] top-2 shadow-[0_0_10px_#00f3ff]" />
              <h3 className="text-xl text-white font-bold uppercase tracking-tight">Gulf Insurance Group</h3>
              <p className="text-cyan-600 mb-4 text-xs italic">Apr 2021 - Oct 2022 | Azentio</p>
              <ul className="text-sm space-y-3 text-cyan-100/80">
                <li>• Optimized complex PL/SQL queries boosting performance by <span className="text-cyan-400 font-bold">80%</span></li>
                <li>• Managed secure file transfers via Solace & FileIT</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in opacity-0 mb-32">
          <div>
            <h2 className="text-xl font-bold mb-6 border-b border-cyan-800 pb-2 text-white uppercase">Achievements</h2>
            <div className="space-y-4">
              <div className="p-3 bg-cyan-950/20 border-l-2 border-pink-500">
                <p className="text-sm">3x Star of the Month Award (TCS)</p>
              </div>
              <div className="p-3 bg-cyan-950/20 border-l-2 border-pink-500">
                <p className="text-sm">GEM Award for Outstanding Excellence (TCS)</p>
              </div>
              <div className="p-3 bg-cyan-950/20 border-l-2 border-pink-500">
                <p className="text-sm">Contextual Master: Compliance Restoration</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-6 border-b border-cyan-800 pb-2 text-white uppercase">Education</h2>
            <div className="p-4 border border-dashed border-cyan-700">
              <p className="text-white font-bold">B.Tech in Information Technology</p>
              <p className="text-xs mt-1">JEPPIAAR SRR Engineering College</p>
              <p className="text-cyan-500 text-xs mt-1 italic italic text-right">CGPA: 7.01</p>
            </div>
          </div>
        </section>

        <footer className="text-center pt-10 border-t border-cyan-900 opacity-50">
          <p className="text-[10px] tracking-[0.5em] uppercase">
            Data_Stream_Stable // Port: 8939285953 // Priya Dharshini H
          </p>
        </footer>
      </main>
    </div>
  );
}