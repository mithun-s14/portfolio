'use client';

import { useState, useEffect } from 'react';
import BlobCursor from '@/components/BlobCursor';
import Navbar from '@/components/Navbar';
import NameSection from '@/components/NameSection';
import About from '@/components/About';
import Work from '@/components/Work';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Hero from '@/components/Hero';

export default function Home() {
  const [cursorColor, setCursorColor] = useState('#3b82f6');
  const [cursorOpacities, setCursorOpacities] = useState([0.9, 0.6, 0.75]);

  /* Cursor: blue/opaque normally, orange/translucent over clickable elements */
  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      const clickable = !!el.closest("a, button, [role='button'], input, select, label");
      setCursorColor(clickable ? '#f97316' : '#3b82f6');
      setCursorOpacities(clickable ? [0.25, 0.15, 0.2] : [0.9, 0.6, 0.75]);
    };
    window.addEventListener('mouseover', onOver);
    return () => window.removeEventListener('mouseover', onOver);
  }, []);

  return (
    <>
      {/* Blob cursor — global fixed overlay */}
      <BlobCursor
        useGlobal
        fillColor={cursorColor}
        blobType="circle"
        trailCount={3}
        sizes={[40, 70, 50]}
        innerSizes={[10, 18, 13]}
        innerColor="rgba(255,255,255,0.6)"
        opacities={cursorOpacities}
        shadowColor="rgba(0,0,0,0)"
        filterStdDeviation={12}
        filterColorMatrixValues="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 25 -8"
        fastDuration={0.08}
        slowDuration={0.35}
        zIndex={999}
      />

      {/* Loading overlay */}
      <div
        className="loading-out fixed inset-0 z-[998] flex items-center justify-center bg-foreground"
        aria-hidden
      />

      <div className="flex flex-col bg-background text-foreground">
        <Navbar />
        <NameSection />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Hero />
      </div>
    </>
  );
}
