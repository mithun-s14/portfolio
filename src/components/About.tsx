'use client';

import { useRef, useEffect } from 'react';

const WORDS_1 = [
  'A', 'computer', 'science', 'graduate', 'with', 'a', 'passion',
  'for', 'building', 'clean,', 'performant', 'software.',
];

const WORDS_2 = [
  'Interested', 'in', 'full-stack', 'development,', 'machine learning,', 'and',
  'the', 'intersection', 'of', 'great', 'engineering', 'and', 'great', 'design.',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('words-entered');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="px-8 py-24 sm:px-20">
      {/* Section label */}
      <div className="mb-16 flex items-center gap-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">About</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="flex flex-col gap-12 sm:flex-row">
        {/* Left — word-reveal paragraphs */}
        <div className="flex-1 space-y-6">
          <p className="m-0 gap-2 leading-snug sm:text-4xl">
            {WORDS_1.map((w, i) => (
              <span key={i} className="word-reveal" style={{ transitionDelay: `${i * 35}ms` }}>
                <span>{w}</span>
              </span>
            ))}
          </p>
          <p className="m-0 gap-2 leading-snug sm:text-4xl">
            {WORDS_2.map((w, i) => (
              <span key={i} className="word-reveal" style={{ transitionDelay: `${(i + 12) * 35}ms` }}>
                <span>{w}</span>
              </span>
            ))}
          </p>
        </div>

        {/* Right — supplementary details */}
        <div className="flex shrink-0 flex-col gap-8 sm:w-64">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">Based in</p>
            <p className="font-light">Toronto, ON</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">Education</p>
            <p className="font-light">BSc Computer Science @</p>
            <p className="font-light">Toronto Metropolitan University</p>
            <p className="text-sm font-light text-gray-500">Graduated · 2026</p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">Looking for</p>
            <p className="font-light">2026 New Grad Roles</p>
          </div>
          <a
            href="mailto:mithunsivapathasundram@gmail.com"
            className="hover-fill group relative inline-flex w-fit cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium"
            style={{ overflow: 'hidden' }}
          >
            <span className="hf-text transition-colors group-hover:text-background">Get in touch</span>
            <span className="hf-layer bg-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
