import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTheme } from '../../hooks/useTheme';

export default function CollaborateCTA() {
  const ref = useScrollReveal();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="section" ref={ref}>
      <div className="container-content">
        <div
          className={`reveal rounded-xl border p-10 md:p-14 ${
            isLight
              ? 'bg-light-surface border-light-border'
              : 'bg-surface border-border'
          }`}
        >
          <div className="max-w-lg">
            <p className="label mb-4">Open to opportunities</p>
            <h2
              className={`font-serif text-4xl md:text-5xl leading-tight mb-4 ${
                isLight ? 'text-light-text' : 'text-text'
              }`}
            >
              Let's build
              <br />
              <span className="text-accent">something useful.</span>
            </h2>
            <p
              className={`text-base leading-relaxed mb-8 ${
                isLight ? 'text-light-text-muted' : 'text-text-muted'
              }`}
            >
              I'm currently available for internships, freelance projects, and open-source
              collaborations. If you're building something interesting, reach out.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:mohammadhaider7864@gmail.com"
                className="btn-primary"
              >
                Send Email
                <ArrowUpRight size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-haider-2b1154290/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
