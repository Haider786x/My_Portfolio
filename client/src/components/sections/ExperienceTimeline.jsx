import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTheme } from '../../hooks/useTheme';
import { experience } from '../../data/experience';

export default function ExperienceTimeline() {
  const ref = useScrollReveal();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="section" ref={ref}>
      <div className="container-content">
        <div className="reveal mb-10">
          <p className="label mb-2">Background</p>
          <h2 className={`font-serif text-4xl ${isLight ? 'text-light-text' : 'text-text'}`}>
            Experience
          </h2>
        </div>

        <div className={`reveal divider mb-10 ${isLight ? 'border-light-border' : ''}`} />

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className={`reveal reveal-delay-${i + 1} flex flex-col sm:flex-row gap-6 py-8 ${
                i < experience.length - 1
                  ? isLight
                    ? 'border-b border-light-border'
                    : 'border-b border-border'
                  : ''
              }`}
            >
              {/* Left — meta */}
              <div className="sm:w-48 flex-shrink-0">
                <p className={`font-mono text-2xs uppercase tracking-widest mb-1 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                  {exp.type}
                </p>
                <p className={`font-mono text-xs ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  {exp.period}
                </p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 mt-2 font-mono text-2xs uppercase tracking-widest text-emerald-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Current
                  </span>
                )}
              </div>

              {/* Right — content */}
              <div className="flex-1">
                <h3 className={`font-serif text-2xl mb-0.5 ${isLight ? 'text-light-text' : 'text-text'}`}>
                  {exp.company}
                </h3>
                <p className={`font-mono text-xs uppercase tracking-widest mb-4 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  {exp.role}
                </p>
                <p className={`text-sm leading-relaxed mb-4 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((r, ri) => (
                    <li
                      key={ri}
                      className={`flex items-start gap-2.5 text-sm ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
