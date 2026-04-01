'use client';

import { useRef, useEffect } from 'react';

const PROJECTS = [
  {
    index: '01',
    name: 'Fantasy Basketball Companion',
    year: '2026',
    summary: 'Full-stack sports analytics platform with a real-time AI coaching chatbot.',
    highlights: [
      'Shipped a full-stack fantasy basketball platform with live stats, matchup analysis, and AI-powered roster recommendations, deployed on Vercel and serving real-time analytics to active users',
      'Integrated LangChain.js into the AI coaching engine with ConversationBufferMemory, enabling persistent conversational context across roster recommendations with low-latency streaming',
      'Implemented Redis-backed distributed rate limiter using Upstash, enforcing a 3 req/min cap across concurrent Next.js serverless instances',
      '92% statement coverage across unit, component, and E2E test suites using Vitest, React Testing Library, and Playwright',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Google Gemini API', 'Vitest', 'Playwright', 'React Testing Library', 'Redis', 'LangChain'],
    github: 'https://github.com/mithun-s14/Fantasy-Basketball-Companion',
    live: 'https://fantasy-basketball-companion.vercel.app/',
  },
  {
    index: '02',
    name: 'NBA Predictive Analytics Platform',
    year: '2025–2026',
    summary: 'End-to-end ML pipeline predicting per-game NBA player stats at 75%+ accuracy.',
    highlights: [
      '6 ensemble models covering 500+ active players with automated daily retraining on fresh season data',
      'GitHub Actions ETL pipeline scraping and normalising 10,000+ player stats daily from Basketball Reference — zero manual intervention',
      'MLOps infrastructure on Hugging Face Spaces (16 GB RAM) with CI/CD pipelines serving real-time predictions 24/7',
    ],
    tags: ['Python', 'scikit-learn', 'Flask', 'pytest', 'GitHub Actions'],
    github: 'https://github.com/mithun-s14/prop_model',
    live: 'https://huggingface.co/spaces/mithun14/prop-model',
  },
  {
    index: '03',
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
    index: '04',
    name: 'Smart Recruiter',
    year: '2024',
    summary: 'AI-powered recruitment platform — 2nd place at the OPS Phenomenal Hackathon.',
    highlights: [
      'Reduced manual screening time by integrating Microsoft\'s Category Classification Model to flag AI-generated job applications.',
      'Delivered a full end-to-end platform within a tight hackathon timeline using Microsoft Power Apps and REST APIs.',
    ],
    tags: ['Microsoft Power Apps', 'JavaScript', 'REST APIs', 'Machine Learning'],
    github: '',
    live: '',
  },
  {
    index: '05',
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
    index: '06',
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
    index: '07',
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

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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

      <div>
        {PROJECTS.map((project, i) => (
          <div
            key={project.index}
            className="reveal-item group border-t border-gray-200 py-10 last:border-b"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
              {/* Index + year */}
              <div className="flex flex-row gap-4 sm:w-8 sm:flex-col sm:gap-1">
                <span className="text-xs font-light text-gray-400">{project.index}</span>
                <span className="text-xs font-light text-gray-400">{project.year}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold transition-opacity group-hover:opacity-60 sm:text-2xl">
                    {project.name}
                  </h3>
                  {/* Links */}
                  <div className="flex items-center gap-4 text-sm font-medium">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 transition-opacity hover:opacity-60"
                      >
                        GitHub <ExternalIcon />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 transition-opacity hover:opacity-60"
                      >
                        Live <ExternalIcon />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed">
                  {project.summary}
                </p>
                {project.highlights.length > 0 && (
                  <ul className="mt-3 max-w-2xl space-y-1.5">
                    {project.highlights.map((point, j) => (
                      <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-600">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
