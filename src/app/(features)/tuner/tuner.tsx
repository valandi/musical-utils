'use client';

import React, { useEffect, useRef } from 'react';

const FrequencyAnalyzer = () => {
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  const fftSize = 8192;

  // Initialize Audio Analyzer
  const initAudioAnalyzer = async () => {
    try {
      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = fftSize;

      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      analyserRef.current = analyser;
      audioContextRef.current = audioContext;
      dataArrayRef.current = dataArray;

      console.log('Microphone access granted. Analyzing frequencies...');
      logDominantFrequency();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  // Calculate and log dominant frequency
  const logDominantFrequency = () => {
    if (!analyserRef.current || !dataArrayRef.current) return;

    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;
    console.log('dataArray: ' + dataArray);

    const sampleRate = audioContextRef.current?.sampleRate || 44100;

    const getDominantFrequency = () => {
      analyser.getByteFrequencyData(dataArray);

      // Find the index of the highest amplitude
      const maxIndex = dataArray.reduce(
        (maxIdx, value, idx, arr) => (value > arr[maxIdx] ? idx : maxIdx),
        0
      );

      // Convert index to frequency
      const frequency = (maxIndex * sampleRate) / analyser.frequencyBinCount;

      console.log(`Dominant Frequency: ${frequency.toFixed(2)} Hz`);

      requestAnimationFrame(getDominantFrequency);
    };

    getDominantFrequency();
  };

  // Start audio analysis
  const handleStart = () => {
    if (!audioContextRef.current) {
      initAudioAnalyzer();
    } else {
      audioContextRef.current.resume();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <button
        onClick={handleStart}
        className="px-5 py-2 bg-green-600 hover:bg-green-500 rounded text-white text-lg cursor-pointer"
      >
        Start Analyzer
      </button>
    </div>
  );
};

export default FrequencyAnalyzer;
