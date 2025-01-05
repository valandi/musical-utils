import { useMetronome } from '@/app/(features)/metronome/hooks/useMetronome';
import { useAudioContext } from '@/app/(features)/metronome/hooks/useAudioContext';

export function Metronome() {
  const { audioContext, gainNode, initAudio } = useAudioContext();
  const {
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
  } = useMetronome(audioContext, gainNode);

  const toggleMetronome = () => {
    if (!audioContext) {
      initAudio();
    }
    
    if (isPlaying) {
      stop();
    } else {
      start();
    }
  };

  // ... rest of your component code ...
} 