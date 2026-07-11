import { useRef, useEffect } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/GithubIcon';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const ref = useRef(null);

  // Simple typewriter for the role
  useEffect(() => {
    const el = ref.current?.querySelector('[data-typewriter]');
    if (!el) return;
    const text = el.dataset.typewriter;
    el.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Haider786x', icon: GithubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammad-haider-2b1154290/', icon: LinkedinIcon },
    { label: 'Email', href: 'mailto:mohammadhaider7864@gmail.com', icon: Mail },
  ];

  return (
    <section ref={ref} className="section pt-32 md:pt-40">
      <div className="container-content">

        {/* Greeting + Name */}
        <p className={`font-mono text-xs uppercase tracking-widest mb-3 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
          Hello, I'm
        </p>
        <h1
          className={`font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-5 ${
            isLight ? 'text-light-text' : 'text-text'
          }`}
        >
          Mohammad
          <br />
          <span className="text-accent">Haider</span>
        </h1>

        {/* Role — typewriter */}
        <p className={`font-mono text-sm uppercase tracking-widest mb-8 h-5 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
          <span data-typewriter="Full Stack Software Engineer" />
          <span className="animate-cursor-blink">|</span>
        </p>

        {/* Bio */}
        <p
          className={`text-base md:text-lg leading-relaxed max-w-xl mb-3 ${
            isLight ? 'text-light-text-muted' : 'text-text-muted'
          }`}
        >
          I design and build full-stack software that combines modern web technologies
          with practical AI to solve real-world problems.
        </p>
        <p
          className={`text-base leading-relaxed max-w-xl mb-10 ${
            isLight ? 'text-light-text-muted' : 'text-text-muted'
          }`}
        >
          From intelligent dashboards to backend systems and developer tools, I enjoy
          creating products that are reliable, intuitive, and built to last.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <Link to="/projects" className="btn-primary">
            Selected Work
            <ArrowUpRight size={15} />
          </Link>
          <a
            href="mailto:mohammadhaider7864@gmail.com"
            className="btn-ghost"
          >
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 transition-colors ${
                isLight
                  ? 'text-light-text-muted hover:text-light-text'
                  : 'text-text-muted hover:text-text'
              }`}
              aria-label={label}
            >
              <Icon size={16} />
              <span className="font-mono text-2xs uppercase tracking-widest hidden sm:inline">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
