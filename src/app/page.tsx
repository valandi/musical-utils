import { Clock, Mic2 } from 'lucide-react';
import Hero from './components/hero';
import LinkButton from './components/LinkButton';

export default function LandingPage() {
  return (
    <main className="flex-1 container mx-auto px-4 pb-8">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LinkButton link="/metronome" text="METRONOME" Icon={Clock} />
        <LinkButton link="/tuner" text="TUNER" Icon={Mic2} />
      </div>
    </main>
  );
}
