import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ALL_STACKS = ['All', 'React', 'Node.js', 'MongoDB', 'Python', 'Tailwind CSS'];

export default function Projects() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [filter, setFilter] = useState('All');
  const ref = useScrollReveal();

  useEffect(() => {
    document.title = 'Projects — Mohammad Haider';
  }, []);

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) =>
        p.stack.some((s) => s.toLowerCase().replace(/\s+/g, '') === filter.toLowerCase().replace(/\s+/g, ''))
      );

  return (
    <main className="pt-14">
      <section ref={ref} className="section">
        <div className="container-content">
          {/* Header */}
          <div className="reveal mb-10">
            <p className="label mb-2">All work</p>
            <h1 className={`font-serif text-5xl md:text-6xl mb-4 ${isLight ? 'text-light-text' : 'text-text'}`}>
              Projects
            </h1>
            <p className={`text-base leading-relaxed max-w-lg ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
              A collection of products I've built — from AI-powered platforms to focused
              utilities. Each includes a full case study.
            </p>
          </div>

          {/* Filters */}
          <div className={`reveal divider mb-8 ${isLight ? 'border-light-border' : ''}`} />
          <div className="reveal flex flex-wrap gap-2 mb-10">
            {ALL_STACKS.map((stack) => (
              <button
                key={stack}
                onClick={() => setFilter(stack)}
                className={`font-mono text-2xs uppercase tracking-widest px-3 py-1.5 rounded border transition-all duration-150 ${
                  filter === stack
                    ? 'bg-accent text-bg border-accent'
                    : isLight
                    ? 'border-light-border text-light-text-muted hover:border-light-text-muted'
                    : 'border-border text-text-muted hover:border-border-light'
                }`}
              >
                {stack}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              const originalIndex = projects.findIndex((p) => p.id === project.id);
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={originalIndex !== -1 ? originalIndex : 0}
                />
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className={`text-center py-16 font-mono text-sm ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
              No projects match this filter.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
