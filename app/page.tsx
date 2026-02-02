"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Database, Cloud, Terminal, Award, BookOpen, Code, Cpu } from 'lucide-react';

function DataParticles() {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000 * 3; i++) arr[i] = (Math.random() - 0.5) * 10;
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
        <PointMaterial transparent color="#00f3ff" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-cyan-400 font-mono overflow-x-hidden">
      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <DataParticles />
        </Canvas>
      </div>

      {/* Content Layer */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 bg-black/40">
        <header className="mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Priya Dharshini <span className="text-cyan-500">H</span>
          </h1>
          <p className="mt-4 text-xl text-cyan-300 flex items-center gap-3">
            <Terminal /> DATA ENGINEER // 4.8 YEARS EXP
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="p-6 border border-cyan-900 bg-black/80">
                <Code className="text-pink-500 mb-4" />
                <h3 className="text-white font-bold uppercase mb-2">Languages</h3>
                <p className="text-xs">Python, SQL, PL/SQL, Bash, PySpark</p>
            </div>
            <div className="p-6 border border-cyan-900 bg-black/80">
                <Database className="text-pink-500 mb-4" />
                <h3 className="text-white font-bold uppercase mb-2">Frameworks</h3>
                <p className="text-xs">Spark, Hadoop, Hive, Oracle DB</p>
            </div>
            <div className="p-6 border border-cyan-900 bg-black/80">
                <Cloud className="text-pink-500 mb-4" />
                <h3 className="text-white font-bold uppercase mb-2">Cloud</h3>
                <p className="text-xs">Azure Databricks, ADF, DevOps</p>
            </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-cyan-900 pb-2">EXPERIENCE_LOGS</h2>
          <div className="border-l border-pink-500 pl-8 relative">
            <div className="absolute w-3 h-3 bg-pink-500 -left-[7px] top-1" />
            <h3 className="text-xl text-white font-bold">Standard Chartered Bank (TCS)</h3>
            <p className="text-xs text-cyan-600 mb-4">OCT 2022 - PRESENT</p>
            <ul className="text-sm space-y-2 opacity-80">
                <li>• Managed 10+ data pipelines (10TB+ scale)</li>
                <li>• Migration: Hive to PySpark & Azure Cloud</li>
                <li>• 40% improvement in query performance</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest border-b border-cyan-900">Awards</h2>
                <ul className="text-xs space-y-2">
                    <li className="p-2 bg-cyan-950/30 border-r-2 border-cyan-500">3x Star of the Month (TCS)</li>
                    <li className="p-2 bg-cyan-950/30 border-r-2 border-cyan-500">GEM Award for Excellence</li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest border-b border-cyan-900">Education</h2>
                <div className="p-3 border border-cyan-800">
                    <p className="text-white font-bold">B.Tech in Information Technology</p>
                    <p className="text-[10px]">JEPPIAAR SRR College // CGPA: 7.01</p>
                </div>
            </div>
        </section>

        <footer className="mt-40 text-center text-[10px] opacity-40 uppercase tracking-[1em]">
            Connection Established // 8939285953
        </footer>
      </main>
    </div>
  );
}