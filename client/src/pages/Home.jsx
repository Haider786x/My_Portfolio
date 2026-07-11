import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import SelectedWork from '../components/sections/SelectedWork';
import EngineeringPhilosophy from '../components/sections/EngineeringPhilosophy';
import ExperienceTimeline from '../components/sections/ExperienceTimeline';
import CollaborateCTA from '../components/sections/CollaborateCTA';

export default function Home() {
  useEffect(() => {
    document.title = 'Mohammad Haider — Full Stack Software Engineer';
  }, []);

  return (
    <main>
      <Hero />
      <SelectedWork />
      <EngineeringPhilosophy />
      <ExperienceTimeline />
      <CollaborateCTA />
    </main>
  );
}
