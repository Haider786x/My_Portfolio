import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { useTheme } from '../../hooks/useTheme';

export default function ProjectCard({ project, index }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <article
      className={`reveal reveal-delay-${Math.min(index + 1, 4)} group flex flex-col ${
        isLight
          ? 'bg-light-surface border border-light-border hover:border-light-text-muted'
          : 'bg-surface border border-border hover:border-border-light'
      } rounded-lg transition-all duration-200`}
    >
      {/* Status bar */}
      <div className={`flex items-center justify-between px-5 py-3 border-b ${isLight ? 'border-light-border' : 'border-border'}`}>
        <span className="font-mono text-2xs uppercase tracking-widest text-text-subtle">
          {project.type || 'Project'}
        </span>
        <span
          className={`font-mono text-2xs uppercase tracking-widest flex items-center gap-1.5 ${
            project.status === 'completed' ? 'text-emerald-500' : 'text-amber-400'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className={`font-serif text-2xl mb-2 group-hover:text-accent transition-colors ${
              isLight ? 'text-light-text' : 'text-text'
            }`}
          >
            {project.title}
          </h3>
          <p className={`text-sm leading-relaxed ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
            {project.tagline}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={`font-mono text-2xs px-2 py-1 rounded border ${
                isLight
                  ? 'border-light-border text-light-text-muted bg-light-surface-2'
                  : 'border-border text-text-subtle bg-surface-2'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className={`font-mono text-2xs px-2 py-1 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        {/* Links row */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <Link
            to={`/projects/${project.id}`}
            className="font-mono text-2xs uppercase tracking-widest text-accent hover:text-accent-dim transition-colors flex items-center gap-1"
          >
            Case Study
            <ArrowUpRight size={12} />
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isLight ? 'text-light-text-muted hover:text-light-text' : 'text-text-muted hover:text-text'}`}
                aria-label={`${project.title} GitHub`}
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-2xs transition-colors flex items-center gap-1 ${
                  isLight ? 'text-light-text-muted hover:text-light-text' : 'text-text-muted hover:text-text'
                }`}
                aria-label={`${project.title} live site`}
              >
                Live
                <ArrowUpRight size={11} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
