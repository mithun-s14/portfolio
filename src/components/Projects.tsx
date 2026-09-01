'use client';

import { useRef, useEffect } from 'react';

const PROJECTS = [
  {
    index: '01',
    name: 'Fantasy Basketball Companion',
    year: '2026',
    summary: 'An LLM coaching app that recommends fantasy basketball roster moves, built solo end to end.',
    highlights: [
      'Designed and built the full stack solo in Next.js and TypeScript: an LLM coaching app that recommends fantasy basketball roster moves',
      'Split the original Next.js/Supabase monolith into three independently deployable services on GKE Autopilot using Docker multi-stage builds, with a HorizontalPodAutoscaler scaling the AI inference service 1 to 5 replicas on CPU load so inference cost scales separately from the stateless frontend',
      'Backed the app with REST endpoints over JSON, a PostgreSQL data model, and Redis caching for repeated queries, with tests gated by GitHub Actions',
      'Wired LangChain.js with ConversationBufferMemory so the coaching engine keeps context across roster questions, streamed to the client',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'LangChain', 'Docker', 'Kubernetes', 'GKE'],
    github: 'https://github.com/mithun-s14/Fantasy-Basketball-Companion',
    live: 'https://fantasy-basketball-companion.vercel.app/',
  },
  {
    index: '02',
    name: 'NBA Predictive Analytics Platform',
    year: '2025\u20132026',
    summary: 'End-to-end ML pipeline predicting per-game stat lines for 500+ active NBA players.',
    highlights: [
      'Built an end-to-end ML pipeline that predicts per-game stat lines for 500+ active NBA players, combining six ensemble models with automated daily retraining on fresh season data',
      'Built a leakage-free walk-forward eval harness over 3 backfilled seasons (79k player-games); trained it on real outcomes to beat the baseline by 2.9% MAE (4.59 vs 4.73, p < 0.001) across three validation protocols',
      'Built a Python ETL job on GitHub Actions that scrapes and normalizes Basketball Reference statistics daily into a clean, versioned dataset, no manual steps',
    ],
    tags: ['Python', 'scikit-learn', 'Flask', 'pytest', 'GitHub Actions'],
    github: 'https://github.com/mithun-s14/prop_model',
    live: 'https://huggingface.co/spaces/mithun14/prop-model',
  },
  {
    index: '03',
    name: 'SimpleBL',
    year: '2026',
    summary: 'Retrieval-augmented research assistant that grounds every answer in live PubMed literature.',
    highlights: [
      'Built and deployed a retrieval-augmented research assistant that pulls matching PubMed articles per query and grounds every answer in those sources via LangChain and the Groq API',
      'Wrote a 340ms inter-request limiter to stay under NCBI\'s 3 req/s policy, with graceful degradation so PubMed outages surface as a clear message rather than an unhandled error',
      'Rendered each answer beside its source articles in a typed React client with centralized state, so users can trace any claim to a citation',
    ],
    tags: ['TypeScript', 'React', 'Node.js', 'Express.js', 'LangChain', 'Groq API', 'PubMed / NCBI'],
    github: 'https://github.com/mithun-s14/SimpleBL',
    live: 'https://mithun-s14.github.io/SimpleBL/',
  },
  {
    index: '04',
    name: 'VetConnect',
    year: '2025',
    summary: 'School Project: Full-stack veterinary management system connecting pet owners and clinics.',
    highlights: [
      'Collaborated with 4 developers to design and ship a secure, real-time patient management platform handling appointments, records, and messaging.',
      'Implemented role-based access control via Supabase Row-Level Security, ensuring strict data privacy between pet owners and veterinary staff.',
    ],
    tags: ['TypeScript', 'React', 'Supabase', 'PostgreSQL', 'HTML & CSS'],
    github: '',
    live: '',
  },
  {
    index: '05',
    name: 'Smart Recruiter',
    year: '2024',
    summary: 'AI-powered recruitment platform. Placed 2nd at the OPS Phenomenal Hackathon.',
    highlights: [
      'Reduced manual screening time by integrating Microsoft\'s Category Classification Model to flag AI-generated job applications.',
      'Delivered a full end-to-end platform within a tight hackathon timeline using Microsoft Power Apps and REST APIs.',
    ],
    tags: ['Microsoft Power Apps', 'JavaScript', 'REST APIs', 'Machine Learning'],
    github: '',
    live: '',
  },
  {
    index: '06',
    name: 'Olympic Medal Predictor',
    year: '2024',
    summary: 'Linear regression model forecasting Olympic medal counts from 100+ years of historical data.',
    highlights: [
      'Trained and evaluated the model across multiple Olympic Games, achieving strong predictive accuracy for country-level medal outcomes.',
      'Built end-to-end data cleaning, feature engineering, and interactive visualisations using pandas, seaborn, and scikit-learn.',
    ],
    tags: ['Python', 'pandas', 'scikit-learn', 'seaborn', 'Jupyter Notebook'],
    github: 'https://github.com/mithun-s14/Olympic-Medal-Predictor',
    live: '',
  },
  {
    index: '07',
    name: 'Soccer League Database System',
    year: '2024',
    summary: 'School Project: Relational database system managing all data for a competitive soccer league.',
    highlights: [
      'Designed a normalised Oracle DB schema covering teams, players, fixtures, results, and standings with full referential integrity.',
      'Conducted end-to-end testing to verify data consistency and reliability across concurrent read/write operations.',
    ],
    tags: ['SQL', 'Oracle DB', 'Java'],
    github: '',
    live: '',
  },
  {
    index: '08',
    name: 'Java Stock Market System',
    year: '2023',
    summary: 'School Project: OOP stock market simulator with real-time data, built by a team of 6.',
    highlights: [
      'Engineered comprehensive UML models to drive a clean, extensible OOP architecture across a 6-person team.',
      'Integrated the Alpha Vantage API for live stock data and achieved full unit test coverage with JUnit.',
    ],
    tags: ['Java', 'JUnit', 'Alpha Vantage API'],
    github: '',
    live: '',
  },
  
];

// col-span per card — rows must sum to 3 to avoid gaps
const CARD_SPANS = [
  'md:col-span-2', // 01
  'md:row-span-2', // 02
  'md:col-span-2', // 03
  'md:col-span-1', // 04
  'md:col-span-2', // 05
  'md:col-span-1', // 06
  'md:col-span-1', // 07
  'md:col-span-1', // 08
];

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
    </svg>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-entered');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="px-8 py-24 sm:px-20">
      {/* Section label */}
      <div className="mb-16 flex items-center gap-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Projects</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Bento grid — 1px hairline borders via gap + bg trick */}
      <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 md:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <div
            key={project.index}
            className={`${CARD_SPANS[i]} reveal-item group relative min-h-[280px] overflow-hidden bg-white first:min-h-[340px]`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >

            {/* Static card content */}
            <div className="relative z-10 flex h-full flex-col p-7">
              {/* Year */}
              <span className="text-xs font-light tracking-wide text-gray-400">{project.year}</span>

              {/* Push name/summary/tags to bottom */}
              <div className="mt-auto">
                <h3 className="text-lg font-semibold leading-snug sm:text-xl">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide-up overlay — reveals highlights + links on hover */}
            <div className="absolute inset-0 z-20 flex translate-y-full flex-col justify-start bg-white p-7 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-semibold">{project.name}</h3>
                <div className="flex shrink-0 gap-4 text-xs font-medium">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-opacity hover:opacity-50">
                      GitHub <ExternalIcon />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 transition-opacity hover:opacity-50">
                      Live <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-2.5 overflow-y-auto">
                {project.highlights.map((point, j) => (
                  <li key={j} className="flex gap-2.5 text-left text-xs leading-relaxed text-gray-600">
                    <span className="mt-0.5 shrink-0 text-gray-300">→</span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
