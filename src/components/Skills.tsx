'use client';

import { useRef, useEffect } from 'react';

const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C#', 'SQL', 'Bash', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks/Libraries',
    skills: ['React.js', 'Next.js', '.NET 8', 'Entity Framework', 'Flask', 'Tailwind CSS', 'pandas', 'scikit-learn', 'Requests', 'Selenium', 'Redis', 'LangChain'],
  },
  {
    label: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Docker','Azure', 'Hugging Face Spaces', 'Vercel'],
  },
  {
    label: 'Tools & Workflows',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Test-Driven Development', 'Agile Methodologies', 'REST APIs', 'MLOps'],
  },
  {
    label: 'Testing',
    skills: ['Vitest', 'React Testing Library', 'Playwright', 'pytest'],
  }
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="px-8 py-24 sm:px-20">
      {/* Section label */}
      <div className="mb-16 flex items-center gap-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Skills</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      <div>
        {SKILL_CATEGORIES.map((cat, i) => (
          <div
            key={cat.label}
            className="reveal-item flex flex-col gap-4 border-t border-gray-200 py-8 last:border-b sm:flex-row sm:items-start sm:gap-16"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Category label */}
            <p className="w-48 shrink-0 text-sm font-medium text-gray-500">{cat.label}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-300 px-3 py-1.5 text-sm font-medium transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
