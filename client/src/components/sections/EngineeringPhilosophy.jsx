import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useTheme } from '../../hooks/useTheme';
import { philosophy } from '../../data/experience';

export default function EngineeringPhilosophy() {
  const ref = useScrollReveal();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className="section" ref={ref}>
      <div className="container-content">
        {/* Header */}
        <div className="reveal mb-10">
          <p className="label mb-2">How I think</p>
          <h2 className={`font-serif text-4xl ${isLight ? 'text-light-text' : 'text-text'}`}>
            Engineering Philosophy
          </h2>
        </div>

        <div className={`reveal divider mb-10 ${isLight ? 'border-light-border' : ''}`} />

        {/* Philosophy list */}
        <ol className="space-y-0">
          {philosophy.map((principle, i) => (
            <li
              key={i}
              className={`reveal reveal-delay-${i + 1} flex gap-5 items-start py-6 ${
                i < philosophy.length - 1
                  ? isLight
                    ? 'border-b border-light-border'
                    : 'border-b border-border'
                  : ''
              }`}
            >
              {/* Number */}
              <span className={`font-mono text-2xs mt-1 w-5 flex-shrink-0 ${isLight ? 'text-light-text-muted' : 'text-text-subtle'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {/* Text */}
              <p
                className={`font-serif text-xl md:text-2xl leading-snug ${
                  isLight ? 'text-light-text' : 'text-text'
                }`}
              >
                {principle}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
