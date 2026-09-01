'use client';

import { useRef, useEffect } from 'react';

const EXPERIENCES = [
  {
    index: '01',
    role: 'Software Engineer Intern',
    company: 'Environment and Climate Change Canada',
    location: 'Toronto, ON',
    period: 'May 2025 \u2013 Dec 2025',
    summary: 'Built features and hardened data integrity on the Environmental Emergency Regulations reporting system, where 12,000+ facilities across Canada report hazardous substance holdings.',
    highlights: [
      'Built 15+ features on a 3-developer team for the Environmental Emergency Regulations reporting system, a C#/.NET 8 platform where 12,000+ facilities across Canada report hazardous substance holdings: facility transfer workflows, bulk import tooling, automated notifications',
      'Wrote the MS SQL stored procedures that detect and repair corrupted facility records, fixing 4,000+ records and retiring a weekly manual validation check',
      'Added .NET validation rules and MS SQL constraints across the reporting intake path so malformed submissions are rejected at entry rather than downstream',
      'Diagnosed and fixed production defects across the frontend and .NET services, raising Azure DevOps-reported test coverage from 65% to 85%',
    ],
    tags: ['C#', '.NET 8', 'Entity Framework', 'MS SQL', 'Azure DevOps', 'XML'],
  },
  {
    index: '02',
    role: 'Software Engineer Intern',
    company: 'Ontario Treasury Board Secretariat',
    location: 'Toronto, ON',
    period: 'Jan 2024 \u2013 Sep 2024',
    summary: 'Shipped full-stack features and data automation for the legacy web applications that guide Ontario Ministry of Finance staff through tax appeal workflows.',
    highlights: [
      'Shipped full-stack features across two legacy web applications that guide Ontario Ministry of Finance staff through tax appeal workflows: required steps, deadlines, and the parties to notify at each stage',
      'Added client-side validation and REST API integrations to those applications, standardizing how appeal data was entered and cutting downstream processing errors',
      'Designed the relational schema and query layer behind an automated ETL pipeline that replaced a weekly manual appeals report with same-day delivery to Ministry of Finance analysts',
      'Built a library of reusable, responsive front-end components in custom CSS from Figma specs, working with UI/UX designers from wireframe to production',
      'Built and documented the REST APIs behind the appeals applications, gated behind automated tests in CI/CD before merge',
      'Built a classifier on Power Automate\'s AI Builder that flagged AI-written job applications, placing 2nd of 30+ teams at an internal hackathon',
    ],
    tags: ['JavaScript', 'HTML & CSS', 'SQL', 'Power BI', 'REST APIs', 'Azure DevOps'],
  },
];

export default function Work() {
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
    <section id="work" ref={sectionRef} className="px-8 py-24 sm:px-20">
      {/* Section label */}
      <div className="mb-16 flex items-center gap-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Experience</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={exp.index}
            className="reveal-item border-t border-gray-200 py-10 last:border-b"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
              {/* Index */}
              <span className="pt-1 text-xs font-light text-gray-400 sm:w-8">{exp.index}</span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-semibold sm:text-2xl">{exp.role}</h3>
                  <span className="text-sm font-light text-gray-500">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  {exp.company} · {exp.location}
                </p>
                <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed">
                  {exp.summary}
                </p>
                <ul className="mt-3 max-w-2xl space-y-1.5">
                  {exp.highlights.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-gray-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
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
