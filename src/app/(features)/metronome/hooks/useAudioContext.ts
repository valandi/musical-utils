import { useEffect, useRef, useCallback } from 'react';

export const useAudioContext = () => {
  const audioContext = useRef<AudioContext | null>(null);
  const gainNode = useRef<GainNode | null>(null);

  const initAudio = useCallback(() => {
    if (!audioContext.current) {
      audioContext.current = new AudioContext();
      gainNode.current = audioContext.current.createGain();
      gainNode.current.connect(audioContext.current.destination);
    }
  }, []);

  useEffect(() => {
    return () => {
      audioContext.current?.close();
    };
  }, []);

  return {
    audioContext: audioContext.current,
    gainNode: gainNode.current,
    initAudio,
  };
};
