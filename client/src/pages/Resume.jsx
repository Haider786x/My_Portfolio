import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Printer, Download, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/GithubIcon';
import { experience, education, certifications, skills, contactInfo } from '../data/experience';

export default function Resume() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    document.title = 'Resume — Mohammad Haider';
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="pt-24 pb-20 print:pt-0 print:pb-0">
      <div className="container-content max-w-4xl">
        {/* Controls */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <p className="label">Resume / CV</p>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className={`flex items-center gap-2 font-mono text-2xs uppercase tracking-widest px-4 py-2 rounded border transition-all duration-150 ${
                isLight
                  ? 'border-light-border text-light-text-muted hover:border-light-text hover:text-light-text'
                  : 'border-border text-text-muted hover:border-border-light hover:text-text'
              }`}
            >
              <Printer size={12} />
              Print / Save PDF
            </button>
          </div>
        </div>

        {/* Paper sheet */}
        <div
          className={`p-8 md:p-12 rounded-xl shadow-sm border print:border-none print:shadow-none print:p-0 ${
            isLight
              ? 'bg-light-surface border-light-border text-[#1c1c1e] print:bg-white print:text-black'
              : 'bg-[#111111] border-[#222] text-[#e0e0e0] print:bg-white print:text-black'
          }`}
        >
          {/* Header */}
          <div className="text-center border-b pb-6 mb-6 print:border-black/10 border-border">
            <h1 className={`font-serif text-4xl font-medium tracking-tight mb-2 ${isLight ? 'text-light-text' : 'text-text'} print:text-black`}>
              {contactInfo.name}
            </h1>
            
            {/* Contact Grid */}
            <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-xs font-mono text-[#777] print:text-black">
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {contactInfo.location}
              </span>
              <span className="hidden sm:inline">•</span>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1 hover:text-accent print:text-black print:no-underline">
                <Mail size={12} />
                {contactInfo.email}
              </a>
              <span className="hidden sm:inline">•</span>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1 hover:text-accent print:text-black print:no-underline">
                <Phone size={12} />
                {contactInfo.phone}
              </a>
              <span className="hidden sm:inline">•</span>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent print:text-black print:no-underline">
                <LinkedinIcon size={12} />
                LinkedIn
              </a>
              <span className="hidden sm:inline">•</span>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent print:text-black print:no-underline">
                <GithubIcon size={12} />
                GitHub
              </a>
            </div>
          </div>

          {/* Section: Education */}
          <section className="mb-6">
            <h2 className="font-serif text-lg font-bold border-b pb-1 mb-3 uppercase tracking-wider print:border-black/20 border-border text-accent print:text-black">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-sm font-bold print:text-black">
                      {edu.institution}
                      <span className="font-normal text-xs font-mono text-[#777] print:text-black/60 ml-2">
                        {edu.location}
                      </span>
                    </h3>
                    <p className="text-xs text-[#888] print:text-black/80 italic mt-0.5">
                      {edu.degree}
                    </p>
                    {edu.cgpa && (
                      <p className="text-2xs font-mono mt-1 text-[#666] print:text-black">
                        • CGPA: <span className="font-bold">{edu.cgpa}</span>
                      </p>
                    )}
                    {edu.percentage && (
                      <p className="text-2xs font-mono mt-1 text-[#666] print:text-black">
                        • Percentage: <span className="font-bold">{edu.percentage}</span>
                      </p>
                    )}
                  </div>
                  <span className="font-mono text-2xs text-[#777] print:text-black whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Experience */}
          <section className="mb-6">
            <h2 className="font-serif text-lg font-bold border-b pb-1 mb-3 uppercase tracking-wider print:border-black/20 border-border text-accent print:text-black">
              Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start gap-4 mb-1.5">
                    <div>
                      <h3 className="text-sm font-bold print:text-black">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-[#999] print:text-black/70">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-2xs text-[#777] print:text-black whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-[#888] print:text-black/80">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Projects */}
          <section className="mb-6">
            <h2 className="font-serif text-lg font-bold border-b pb-1 mb-3 uppercase tracking-wider print:border-black/20 border-border text-accent print:text-black">
              Projects
            </h2>
            <div className="space-y-5">
              {/* project list matching resume */}
              <div>
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="text-sm font-bold print:text-black">
                    Gaffer Desk
                  </h3>
                  <span className="font-mono text-2xs text-[#777] print:text-black">2026</span>
                </div>
                <p className="text-2xs font-mono text-[#999] print:text-black/70 mb-2">
                  Tech Stack: MERN, Gemini API, Tailwind CSS, MongoDB, Recharts
                </p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-[#888] print:text-black/80">
                  <li>Built an AI-powered football operations platform for FIFA/EA FC Career Mode focused on squad analysis, player development, and tactical planning.</li>
                  <li>Integrated Google Gemini Vision API to extract player names, positions, and ratings from uploaded in-game screenshots.</li>
                  <li>Developed a tactical pitch visualization system with dynamic formation mapping using React and CSS grid layouts.</li>
                  <li>Implemented squad analytics including player growth tracking, tactical alerts, and AI-generated squad recommendations.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start gap-4 mb-1">
                  <h3 className="text-sm font-bold print:text-black">
                    My-Day
                  </h3>
                  <span className="font-mono text-2xs text-[#777] print:text-black">2026</span>
                </div>
                <p className="text-2xs font-mono text-[#999] print:text-black/70 mb-2">
                  Tech Stack: MERN, Redux Toolkit, JWT, Tailwind CSS, MongoDB
                </p>
                <ul className="list-disc pl-4 space-y-1 text-xs text-[#888] print:text-black/80">
                  <li>Developed a secure digital journaling platform for creating, editing, and organizing personal journal entries.</li>
                  <li>Implemented JWT authentication with secure HTTP-only cookies, protected routes, and server-side validation.</li>
                  <li>Built responsive user interfaces using React, Tailwind CSS, DaisyUI, and Redux Toolkit with RTK Query.</li>
                  <li>Designed RESTful backend APIs using Node.js, Express.js, and MongoDB for scalable journal management.</li>
                  <li>Optimized user experience with clean UI architecture and seamless CRUD functionality across authenticated sessions.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Technical Skills */}
          <section className="mb-6">
            <h2 className="font-serif text-lg font-bold border-b pb-1 mb-3 uppercase tracking-wider print:border-black/20 border-border text-accent print:text-black">
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs text-[#888] print:text-black/80">
              {Object.entries(skills).map(([category, items]) => (
                <p key={category}>
                  <strong className={`font-mono text-2xs uppercase tracking-widest ${isLight ? 'text-light-text' : 'text-text'} print:text-black inline-block w-48`}>
                    {category}:
                  </strong>
                  <span>{items.join(', ')}</span>
                </p>
              ))}
            </div>
          </section>

          {/* Section: Certifications */}
          <section className="print:break-inside-avoid">
            <h2 className="font-serif text-lg font-bold border-b pb-1 mb-3 uppercase tracking-wider print:border-black/20 border-border text-accent print:text-black">
              Certifications
            </h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-sm font-bold print:text-black">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[#888] print:text-black/80">
                      {cert.issuer}
                      {cert.details && <span className="text-2xs font-mono ml-2 text-[#999] print:text-black/60">• {cert.details}</span>}
                    </p>
                  </div>
                  <span className="font-mono text-2xs text-[#777] print:text-black">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
