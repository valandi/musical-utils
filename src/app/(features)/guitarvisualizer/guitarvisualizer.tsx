'use client';

import React from 'react';
import Guitar from 'react-guitar';
import { useMemo } from 'react';
import dark from 'react-guitar-theme-dark';
import { standard } from 'react-guitar-tunings';
import useSound, { withSamples } from 'react-guitar-sound';

const flamencoGuitar = withSamples({
  E2: 'https://react-guitar.com/samples/E2.mp3',
  D3: 'https://react-guitar.com/samples/D3.mp3',
  G3: 'https://react-guitar.com/samples/G3.mp3',
  E4: 'https://react-guitar.com/samples/E4.mp3',
});

const GuitarVisualizer = () => {
  const strings = useMemo(() => [0, 1, 2, 2, 0, -1], []);
  const { play, strum } = useSound({
    instrument: flamencoGuitar,
    fretting: strings,
    tuning: standard,
  });

  return (
    <div className="flex flex-col justify-center items-center  text-white">
      Start Analyzer
      <Guitar strings={strings} onPlay={play} theme={dark} />
    </div>
  );
};

export default GuitarVisualizer;
