import { useState, useRef } from 'react';

export function useMetronome(audioContext: AudioContext | null, gainNode: GainNode | null) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(40);
  const [beats, setBeats] = useState(4);
  const [subdivisions, setSubdivisions] = useState(2);
  const [beatIndex, setBeatIndex] = useState(0);
  
  const timerRef = useRef<number | null>(null);

  const start = () => {
    setIsPlaying(true);
    // Add metronome logic here
  };

  const stop = () => {
    setIsPlaying(false);
    if (timerRef.current) {
      cancelAnimationFrame(timerRef.current);
    }
  };

  return {
    isPlaying,
    bpm,
    setBpm,
    beats,
    setBeats,
    subdivisions,
    setSubdivisions,
    beatIndex,
    start,
    stop,
  };
}