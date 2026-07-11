import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/ui/GithubIcon';
import { getProjectById } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTheme } from '../hooks/useTheme';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const ref = useScrollReveal();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Mohammad Haider`;
    }
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className="pt-14" ref={ref}>
      <article>
        {/* Hero */}
        <section className="section pb-0">
          <div className="container-content">
            {/* Back */}
            <Link
              to="/projects"
              className={`reveal inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest mb-10 transition-colors ${
                isLight
                  ? 'text-light-text-muted hover:text-light-text'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              <ArrowLeft size={12} />
              All Projects
            </Link>

            {/* Status + type */}
            <div className="reveal flex items-center gap-3 mb-4">
              <span className={`font-mono text-2xs uppercase tracking-widest ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                {project.status === 'completed' ? 'Completed' : 'Ongoing'}
              </span>
              <span className={`w-1 h-1 rounded-full ${isLight ? 'bg-light-text-muted' : 'bg-text-subtle'}`} />
              <span className={`font-mono text-2xs uppercase tracking-widest ${
                project.status === 'completed' ? 'text-emerald-500' : 'text-amber-400'
              }`}>
                {project.status === 'completed' ? '● Shipped' : '● In Progress'}
              </span>
            </div>

            {/* Title */}
            <h1 className={`reveal font-serif text-5xl md:text-6xl leading-tight mb-4 ${isLight ? 'text-light-text' : 'text-text'}`}>
              {project.title}
            </h1>

            {/* Tagline */}
            <p className={`reveal text-lg md:text-xl leading-relaxed max-w-2xl mb-8 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
              {project.tagline}
            </p>

            {/* Links */}
            <div className="reveal flex flex-wrap items-center gap-3 mb-12">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Site
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <GithubIcon size={15} />
                  Source Code
                </a>
              )}
              {!project.liveUrl && project.note && (
                <span className={`font-mono text-xs italic ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                  {project.note}
                </span>
              )}
            </div>

            <div className={`divider ${isLight ? 'border-light-border' : ''}`} />
          </div>
        </section>

        {/* Case Study Body */}
        <section className="section">
          <div className="container-content">
            <div className="space-y-14">

              {/* Overview */}
              <div className="reveal">
                <p className="label mb-4">Overview</p>
                <p className={`text-base md:text-lg leading-relaxed ${isLight ? 'text-light-text' : 'text-text'}`}>
                  {project.description}
                </p>
              </div>

              <div className={`divider ${isLight ? 'border-light-border' : ''}`} />

              {/* The Problem */}
              <div className="reveal">
                <p className="label mb-4">The Problem</p>
                <p className={`text-base leading-relaxed ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  {project.problem}
                </p>
              </div>

              <div className={`divider ${isLight ? 'border-light-border' : ''}`} />

              {/* Approach */}
              <div className="reveal">
                <p className="label mb-4">Approach</p>
                <p className={`text-base leading-relaxed ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  {project.approach}
                </p>
              </div>

              <div className={`divider ${isLight ? 'border-light-border' : ''}`} />

              {/* Implementation */}
              <div className="reveal">
                <p className="label mb-6">Implementation</p>
                <ul className="space-y-5">
                  {project.implementation.map((point, i) => (
                    <li
                      key={i}
                      className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex gap-4 items-start`}
                    >
                      <span className={`font-mono text-2xs mt-1 w-5 flex-shrink-0 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className={`text-base leading-relaxed ${isLight ? 'text-light-text' : 'text-text'}`}>
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`divider ${isLight ? 'border-light-border' : ''}`} />

              {/* Outcome */}
              <div className="reveal">
                <p className="label mb-4">Outcome</p>
                <p className={`text-base leading-relaxed ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
                  {project.outcome}
                </p>
              </div>

              <div className={`divider ${isLight ? 'border-light-border' : ''}`} />

              {/* Tech Stack */}
              <div className="reveal">
                <p className="label mb-5">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`font-mono text-xs px-3 py-1.5 rounded border ${
                        isLight
                          ? 'border-light-border text-light-text-muted bg-light-surface'
                          : 'border-border text-text-muted bg-surface'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
