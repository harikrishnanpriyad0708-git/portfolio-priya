"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import anime from 'animejs';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu } from 'lucide-react';

// --- Improved 3D Background ---
function DataParticles() {
  const ref = useRef<any>();
  // Create random points manually to avoid 'maath' build errors
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
  useEffect(() => {
    anime({
      targets: '.animate-in',
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      easing: 'easeOutExpo',
      duration: 1200
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono selection:bg-cyan-900 overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <DataParticles />
        </Canvas>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* HERO */}
        <section className="mb-32 animate-in opacity-0">
          <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter text-white uppercase">
            PRIYA DHARSHINI <span className="text-cyan-500">H</span>
          </h1>
          <p className="text-lg md:text-xl text-cyan-200 mb-6 flex items-center gap-2">
            <Terminal size={20} /> DATA ENGINEER // 4.8 YEARS EXP
          </p>
          <div className="border-l-2 border-cyan-500 pl-6 bg-cyan-950/20 py-4">
            <p className="text-sm md:text-base text-cyan-300">LOCATION: Chennai, India</p>
            <p className="text-sm md:text-base text-cyan-300">TECH: PySpark, Azure Databricks, Oracle DB</p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2">
            <Cpu className="text-pink-500" /> SYSTEM_CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-cyan-900 p-6 bg-black/60 hover:border-cyan-400 transition-colors group">
              <Code className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Languages</h3>
              <p className="text-xs">Python, SQL, PL/SQL, Bash</p>
            </div>
            <div className="border border-cyan-900 p-6 bg-black/60 hover:border-cyan-400 transition-colors group">
              <Database className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Big Data</h3>
              <p className="text-xs">Spark, Hive, Hadoop, Oracle DB</p>
            </div>
            <div className="border border-cyan-900 p-6 bg-black/60 hover:border-cyan-400 transition-colors group">
              <Cloud className="mb-4 text-cyan-500" />
              <h3 className="text-white font-bold mb-2 uppercase">Cloud</h3>
              <p className="text-xs">Azure Databricks, ADF, AWS EMR</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-32 animate-in opacity-0">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2">
            <Database className="text-pink-500" /> MISSION_LOGS
          </h2>
          <div className="space-y-12">
            <div className="border-l border-pink-500 pl-8 relative">
              <div className="absolute w-3 h-3 bg-pink-500 -left-[6px] top-2" />
              <h3 className="text-xl text-white font-bold uppercase">Standard Chartered Bank</h3>
              <p className="text-cyan-600 mb-4 text-xs italic">Oct 2022 - Present</p>
              <ul className="text-sm space-y-2 text-cyan-100/80">
                <li>• Managed 10+ pipelines processing <span className="text-cyan-400">10TB+ data</span></li>
                <li>• Migrated systems to <span className="text-white">PySpark & Azure Cloud</span></li>
                <li>• Built CI/CD pipelines in Azure DevOps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in opacity-0 mb-32">
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-cyan-800 pb-2">
              <Award size={20} /> AWARDS
            </h2>
            <ul className="text-xs space-y-4">
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500 underline decoration-pink-500">Star of the Month (3x) - TCS</li>
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500 underline decoration-pink-500">GEM Award - TCS</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-cyan-800 pb-2">
              <BookOpen size={20} /> CERTIFICATIONS
            </h2>
            <div className="text-xs space-y-2">
              <p className="p-2 border border-cyan-800">AZ-900: Azure Fundamentals</p>
              <p className="p-2 border border-cyan-800">DP-900: Data Fundamentals</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-[10px] opacity-30 tracking-[0.5em] uppercase">
          Initializing Connection... System Stable... Priya_Dharshini_H
        </footer>
      </main>
    </div>
  );
}