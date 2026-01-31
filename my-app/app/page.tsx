"use client";
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import anime from 'animejs';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu } from 'lucide-react';

// --- 3D Background (Three.js) ---
function DataParticles() {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
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
  const containerRef = useRef(null);

  useEffect(() => {
    // Anime.js Intro Animation
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
    <div className="min-h-screen bg-black text-cyan-400 font-mono selection:bg-cyan-900">
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <DataParticles />
        </Canvas>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        
        {/* HERO SECTION */}
        <section className="mb-32 animate-in">
          <h1 className="text-6xl font-black mb-2 tracking-tighter text-white uppercase">
            Priya Dharshini <span className="text-cyan-500 underline decoration-magenta-500">H</span>
          </h1>
          <p className="text-xl text-cyan-200 mb-6 flex items-center gap-2">
            <Terminal size={20} /> Data Engineer // 4.8 Years Experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-l-2 border-cyan-500 pl-6 bg-cyan-950/20 py-4">
            <p>LOCATION: Chennai, India</p>
            <p>CORE: PySpark, Azure Databricks, Oracle DB</p>
          </div>
        </section>

        {/* TECHNICAL SKILLS - Cyberpunk Grid */}
        <section className="mb-32 animate-in">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2">
            <Cpu className="text-magenta-500" /> SYSTEM_CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Languages", skills: "Python, SQL, PL/SQL, Bash", icon: <Code /> },
              { title: "Big Data/ETL", skills: "Spark, PySpark, Hadoop, Hive", icon: <Database /> },
              { title: "Cloud", skills: "Azure Databricks, ADF, AWS EMR", icon: <Cloud /> },
            ].map((item, i) => (
              <div key={i} className="border border-cyan-900 p-6 bg-black/60 hover:border-cyan-400 transition-colors group">
                <div className="mb-4 text-cyan-500 group-hover:text-white transition-colors">{item.icon}</div>
                <h3 className="text-white font-bold mb-2 uppercase tracking-widest">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.skills}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS - Timeline Style */}
        <section className="mb-32 animate-in">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-2 border-b border-cyan-800 pb-2">
            <Database className="text-magenta-500" /> MISSION_LOGS
          </h2>
          
          <div className="space-y-12">
            <div className="border-l border-magenta-500 pl-8 relative">
              <div className="absolute w-3 h-3 bg-magenta-500 -left-[6px] top-2 shadow-[0_0_10px_#ff00ff]" />
              <h3 className="text-xl text-white font-bold">Standard Chartered Bank (via TCS)</h3>
              <p className="text-cyan-600 mb-4 italic text-sm">Oct 2022 - Present</p>
              <ul className="space-y-3 text-cyan-100/80 text-sm">
                <li>• Managed 10+ scalable pipelines processing <span className="text-cyan-400 font-bold">10TB+ data</span>.</li>
                <li>• Migrated Hive to <span className="text-white underline decoration-cyan-500">Spark/Azure Cloud</span> (40% proficiency gain).</li>
                <li>• Automated CI/CD in Azure DevOps, reducing manual effort significantly.</li>
                <li>• Optimized SQL queries improving retrieval speed by 40% using partitioning.</li>
              </ul>
            </div>

            <div className="border-l border-cyan-500 pl-8 relative">
              <div className="absolute w-3 h-3 bg-cyan-500 -left-[6px] top-2 shadow-[0_0_10px_#00f3ff]" />
              <h3 className="text-xl text-white font-bold">Gulf Insurance Group (via Azentio)</h3>
              <p className="text-cyan-600 mb-4 italic text-sm">Apr 2021 - Oct 2022</p>
              <ul className="space-y-3 text-cyan-100/80 text-sm">
                <li>• Optimized complex PL/SQL queries boosting reporting performance by <span className="text-cyan-400 font-bold">80%</span>.</li>
                <li>• Engineered secure file transfer workflows using FileIT and Solace.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in mb-32">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase">
              <Award size={20} /> Commendations
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500 italic">"Star of the Month" (Awarded 3x at TCS)</li>
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500 italic">"GEM Award" - Outstanding Performance</li>
              <li className="bg-cyan-950/30 p-3 border-r-2 border-cyan-500 italic">"Contextual Master" - Historical Data Restoration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-cyan-800 pb-2 uppercase">
              <BookOpen size={20} /> Certifications
            </h2>
            <div className="space-y-3">
              <div className="p-3 border border-dashed border-cyan-700">
                <p className="text-white font-bold uppercase">AZ-900</p>
                <p className="text-xs">Microsoft Azure Fundamentals</p>
              </div>
              <div className="p-3 border border-dashed border-cyan-700">
                <p className="text-white font-bold uppercase">DP-900</p>
                <p className="text-xs">Microsoft Azure Data Fundamentals</p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="animate-in border-t border-cyan-900 pt-10">
          <p className="text-xs opacity-50 mb-2 uppercase tracking-widest">End_of_Transmission</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-white font-bold uppercase">B.Tech in Information Technology</p>
              <p className="text-sm">JEPPIAAR SRR Engineering College (CGPA: 7.01)</p>
            </div>
            <div className="text-right">
                <p className="text-cyan-500 text-xs">CONTACT</p>
                <p className="text-white text-sm">8939285953</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}