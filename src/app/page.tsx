import { Clock, Mic2, Guitar, Music, Music3, GuitarIcon } from 'lucide-react';
import Hero from './components/hero';
import LinkButton from './components/LinkButton';
import ChordFinder from './(features)/chordfinder/page';

export default function LandingPage() {
  return (
    <main className="flex-1 container mx-auto px-4 pb-8 ">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LinkButton link="/metronome" text="METRONOME" Icon={Clock} />
        <LinkButton link="/tuner" text="TUNER" Icon={Mic2} />
        <LinkButton link="/chordfinder" text="CHORD FINDER" Icon={Guitar} />
        <LinkButton link="/scalefinder" text="SCALE FINDER" Icon={Music} />
        <LinkButton
          link="/chordprogressions"
          text="CHORD PROGRESSIONS"
          Icon={Music3}
        />
        <LinkButton
          link="/guitarvisualizer"
          text="GUITAR VISUALIZER"
          Icon={GuitarIcon}
        />
      </div>
    </main>
  );
}
