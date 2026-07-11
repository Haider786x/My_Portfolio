import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';
import { experience, education, certifications, skills, philosophy } from '../data/experience';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export default function About() {
  const ref = useScrollReveal();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    document.title = 'About — Mohammad Haider';
    window.scrollTo(0, 0);
  }, []);

  const skillBg = isLight
    ? 'bg-light-surface border-light-border text-light-text'
    : 'bg-surface border-border text-text';

  return (
    <main className="pt-14" ref={ref}>
      {/* ── Bio ── */}
      <section className="section pb-0">
        <div className="container-content">
          <div className="reveal mb-10">
            <p className="label mb-2">Who I am</p>
            <h1 className={`font-serif text-5xl md:text-6xl mb-8 ${isLight ? 'text-light-text' : 'text-text'}`}>
              About
            </h1>
          </div>
          <div className="reveal flex flex-col sm:flex-row gap-8 sm:gap-12 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative inline-block">
                <div className={`w-40 h-40 rounded-full overflow-hidden border-2 ${
                  isLight ? 'border-light-border' : 'border-border'
                }`}>
                  <img
                    src="/avatar.jpg"
                    alt=""
                    aria-label="Mohammad Haider"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-bg" />
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4 flex-1">
              <p className={`text-base md:text-lg leading-relaxed ${isLight ? 'text-light-text' : 'text-text'}`}>
                I'm currently pursuing a Bachelor of Technology in Computer Science and Engineering
                at Amity University, Lucknow, while working as a Graduate Engineer Trainee at Solarwiser.
              </p>
              <p className={`text-base leading-relaxed ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                I enjoy building software that solves practical problems — from AI-powered football
                analytics and solar intelligence platforms to secure full-stack web applications.
              </p>
              <p className={`text-base leading-relaxed ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                My primary interests include backend engineering, REST API development, database
                architecture, AI integration, and creating products with clean, maintainable code.
              </p>
            </div>
          </div>

          {/* Current Status */}
          <div className={`reveal mt-10 p-6 rounded-lg border ${
            isLight ? 'bg-light-surface border-light-border' : 'bg-surface border-border'
          }`}>
            <p className="label mb-4">Currently</p>
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="flex-1">
                <h3 className={`font-serif text-2xl mb-0.5 ${isLight ? 'text-light-text' : 'text-text'}`}>
                  Graduate Engineer Trainee
                </h3>
                <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  Solarwiser
                </p>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  Building software for renewable energy and intelligent monitoring systems.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className={`flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Lucknow, India
                </span>
              </div>
            </div>
          </div>
          <div className={`mt-12 divider ${isLight ? 'border-light-border' : ''}`} />
        </div>
      </section>

      {/* ── Education ── */}
      <section className="section pb-0">
        <div className="container-content">
          <div className="reveal mb-8">
            <p className="label mb-2">
              <GraduationCap size={12} className="inline mr-1.5" />
              Education
            </p>
          </div>
          {education.map((edu, i) => (
            <div key={edu.id} className={`reveal flex flex-col sm:flex-row gap-6 py-6 ${i < education.length - 1 ? 'border-b' : ''} ${isLight ? 'border-light-border' : 'border-border'}`}>
              <div className="sm:w-48 flex-shrink-0">
                <p className={`font-mono text-xs ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>{edu.period}</p>
                {edu.current && (
                  <span className="inline-flex items-center gap-1 mt-1.5 font-mono text-2xs uppercase tracking-widest text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>
              <div>
                <h2 className={`font-serif text-2xl mb-1 ${isLight ? 'text-light-text' : 'text-text'}`}>{edu.institution}</h2>
                <p className={`font-mono text-xs uppercase tracking-widest mb-2 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>{edu.degree}</p>
                {edu.cgpa && (
                  <p className={`text-sm ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                    CGPA <span className="text-accent font-mono font-medium">{edu.cgpa}</span> / 10
                  </p>
                )}
                {edu.percentage && (
                  <p className={`text-sm ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                    Percentage <span className="text-accent font-mono font-medium">{edu.percentage}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className={`mt-6 divider ${isLight ? 'border-light-border' : ''}`} />
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="section pb-0">
        <div className="container-content">
          <div className="reveal mb-8">
            <p className="label mb-2">
              <Briefcase size={12} className="inline mr-1.5" />
              Experience
            </p>
          </div>
          {experience.map((exp, i) => (
            <div key={exp.id} className={`reveal flex flex-col sm:flex-row gap-6 py-6 ${i < experience.length - 1 ? 'border-b' : ''} ${isLight ? 'border-light-border' : 'border-border'}`}>
              <div className="sm:w-48 flex-shrink-0">
                <p className={`font-mono text-2xs uppercase tracking-widest mb-1 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>{exp.type}</p>
                <p className={`font-mono text-xs ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>{exp.period}</p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 mt-1.5 font-mono text-2xs uppercase tracking-widest text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h2 className={`font-serif text-2xl mb-0.5 ${isLight ? 'text-light-text' : 'text-text'}`}>{exp.company}</h2>
                <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>{exp.role}</p>
                <p className={`text-sm leading-relaxed mb-4 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>{exp.description}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className={`flex items-start gap-2.5 text-sm ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className={`mt-6 divider ${isLight ? 'border-light-border' : ''}`} />
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="section pb-0">
        <div className="container-content">
          <div className="reveal mb-8">
            <p className="label mb-2">Technical skills</p>
            <h2 className={`font-serif text-3xl ${isLight ? 'text-light-text' : 'text-text'}`}>Skills</h2>
          </div>
          <div className="reveal space-y-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className={`font-mono text-2xs uppercase tracking-widest mb-3 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1.5 rounded border ${skillBg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="reveal mt-12">
            <p className={`font-mono text-2xs uppercase tracking-widest mb-6 flex items-center gap-1.5 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
              <Award size={11} />
              Certifications
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-4 rounded border transition-colors flex flex-col justify-between ${
                    isLight ? 'bg-light-surface border-light-border hover:border-light-text-muted' : 'bg-surface border-border hover:border-border-light'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <p className={`font-mono text-3xs uppercase tracking-widest ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                        {cert.issuer}
                      </p>
                      {cert.year && (
                        <span className={`font-mono text-2xs ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                          {cert.year}
                        </span>
                      )}
                    </div>
                    <h3 className={`text-base font-serif font-medium mb-1 ${isLight ? 'text-light-text' : 'text-text'}`}>
                      {cert.title}
                    </h3>
                  </div>
                  {cert.details && (
                    <p className={`text-xs mt-2 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                      {cert.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-10 divider ${isLight ? 'border-light-border' : ''}`} />
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section">
        <div className="container-content">
          <div className="reveal mb-8">
            <p className="label mb-2">How I think</p>
            <h2 className={`font-serif text-3xl ${isLight ? 'text-light-text' : 'text-text'}`}>Engineering Philosophy</h2>
          </div>
          <ol className="space-y-0">
            {philosophy.map((principle, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex gap-5 items-start py-5 ${
                  i < philosophy.length - 1
                    ? isLight
                      ? 'border-b border-light-border'
                      : 'border-b border-border'
                    : ''
                }`}
              >
                <span className={`font-mono text-2xs mt-1 w-5 flex-shrink-0 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`font-serif text-xl md:text-2xl leading-snug ${isLight ? 'text-light-text' : 'text-text'}`}>
                  {principle}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
