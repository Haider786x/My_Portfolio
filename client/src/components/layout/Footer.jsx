import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/GithubIcon';
import { useTheme } from '../../hooks/useTheme';

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const socials = [
    { label: 'GitHub', href: 'https://github.com/Haider786x', icon: GithubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammad-haider-2b1154290/', icon: LinkedinIcon },
    { label: 'Email', href: 'mailto:mohammadhaider7864@gmail.com', icon: Mail },
  ];

  return (
    <footer
      className={`border-t ${isLight ? 'border-light-border' : 'border-border'}`}
    >
      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link
              to="/"
              className={`font-serif text-base ${
                isLight ? 'text-light-text' : 'text-text'
              }`}
            >
              Mohammad Haider
            </Link>
            <p className={`text-sm mt-1 ${isLight ? 'text-light-text-muted' : 'text-text-muted'}`}>
              Full Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-sm transition-colors ${
                  isLight
                    ? 'text-light-text-muted hover:text-light-text'
                    : 'text-text-muted hover:text-text'
                }`}
                aria-label={label}
              >
                <Icon size={15} />
                <span className="hidden sm:inline font-mono text-2xs uppercase tracking-widest">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
            isLight ? 'border-light-border' : 'border-border'
          }`}
        >
          <p className={`font-mono text-2xs ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
            © {new Date().getFullYear()} Mohammad Haider. Built with React & Tailwind CSS.
          </p>
          <a
            href="mailto:mohammadhaider7864@gmail.com"
            className="flex items-center gap-1 font-mono text-2xs uppercase tracking-widest text-accent hover:text-accent-dim transition-colors"
          >
            mohammadhaider7864@gmail.com
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
