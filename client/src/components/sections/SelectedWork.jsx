import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTheme } from '../../hooks/useTheme';

export default function SelectedWork() {
  const ref = useScrollReveal();
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const projects = getFeaturedProjects();

  return (
    <section className="section" ref={ref}>
      <div className="container-content">
        {/* Header */}
        <div className="reveal flex items-end justify-between mb-10">
          <div>
            <p className="label mb-2">Engineering Work</p>
            <h2 className={`font-serif text-4xl ${isLight ? 'text-light-text' : 'text-text'}`}>
              Selected Work
            </h2>
          </div>
          <Link
            to="/projects"
            className={`hidden sm:flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest transition-colors ${
              isLight
                ? 'text-light-text-muted hover:text-light-text'
                : 'text-text-muted hover:text-text'
            }`}
          >
            All Projects
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Divider */}
        <div className={`reveal divider mb-10 ${isLight ? 'border-light-border' : ''}`} />

        {/* Project grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="reveal mt-8 sm:hidden">
          <Link
            to="/projects"
            className={`flex items-center gap-1.5 font-mono text-2xs uppercase tracking-widest ${
              isLight ? 'text-light-text-muted' : 'text-text-muted'
            }`}
          >
            View All Projects
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
