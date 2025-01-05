'use client';

import { useState, useEffect, useRef } from 'react';
import { Slider } from '../../components/ui/slider';
import { Switch } from '../../components/ui/switch';
import { clsx } from 'clsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import { Play, Pause } from 'lucide-react';
import { soundOptions } from './sounds';

const MIN_BEAT_VOLUME = 0.5;
const MAX_BEAT_VOLUME = 0.8;

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(40);
  const [beats, setBeats] = useState(4);
  const [subdivisions, setSubdivisions] = useState(2);
  const [selectedSound, setSelectedSound] = useState(soundOptions[0]);
  const [isFrequency440, setIsFrequency440] = useState(true);
  const [beatIndex, setBeatIndex] = useState(0);

  const audioContext = useRef<AudioContext | null>(null);
  const nextNoteTime = useRef(0);
  const timerID = useRef<number | null>(null);
  const currentBeat = useRef(0);

  // Initialize AudioContext
  useEffect(() => {
    audioContext.current = new window.AudioContext();
    return () => {
      if (audioContext.current) {
        audioContext.current.close();
        audioContext.current = null;
      }
    };
  }, []);

  // React to changes in settings when playing
  useEffect(() => {
    if (isPlaying) {
      cancelAnimationFrame(timerID.current!);
      startScheduler();
    }
  }, [bpm, selectedSound, beats, subdivisions]);

  const playSound = (
    time: number,
    isDownbeat: boolean,
    isSubdivision: boolean
  ) => {
    const osc = audioContext.current!.createOscillator();
    const gainNode = audioContext.current!.createGain();

    const frequency = isFrequency440
      ? selectedSound.frequency
      : selectedSound.frequency432;
    osc.frequency.value = isDownbeat
      ? frequency
      : frequency * (isSubdivision ? MIN_BEAT_VOLUME : MAX_BEAT_VOLUME);

    gainNode.gain.setValueAtTime(0, time);
    gainNode.gain.linearRampToValueAtTime(1, time + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, time + selectedSound.duration);

    osc.connect(gainNode);
    gainNode.connect(audioContext.current!.destination);

    osc.start(time);
    osc.stop(time + selectedSound.duration);
  };

  const scheduleNote = (time: number) => {
    const isDownbeat = currentBeat.current === 0;
    const isSubdivision = currentBeat.current % subdivisions !== 0;

    playSound(time, isDownbeat, isSubdivision);

    // Update beat UI
    setBeatIndex(Math.floor(currentBeat.current / subdivisions));

    // Move to the next beat
    currentBeat.current = (currentBeat.current + 1) % (subdivisions * beats);
  };

  const startScheduler = () => {
    const interval = 60 / bpm / subdivisions;

    while (nextNoteTime.current < audioContext.current!.currentTime + 0.1) {
      scheduleNote(nextNoteTime.current);
      nextNoteTime.current += interval;
    }

    timerID.current = requestAnimationFrame(startScheduler);
  };

  const toggleMetronome = () => {
    if (isPlaying) {
      cancelAnimationFrame(timerID.current!);
    } else {
      nextNoteTime.current = audioContext.current!.currentTime;
      currentBeat.current = 0;
      startScheduler();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return (value: number[]) => setter(value[0]);
  };

  const handleSoundChange = (value: string) => {
    const sound = soundOptions.find((s) => s.name === value);
    if (sound) setSelectedSound(sound);
  };

  const handleFrequencyChange = () => {
    console.log('Chaning frequency. You know what it is.');
    console.log(isFrequency440);
    setIsFrequency440((prevIsFrequency440) => !prevIsFrequency440);
  };

  const subdivisionLabel =
    ['Quarter Notes', 'Eighth Notes', 'Custom', 'Sixteenth Notes'][
      subdivisions - 1
    ] || 'Custom';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      {/* Top Section - Main Controls */}
      <div className="flex items-center justify-between mb-8 border-b pb-6">
        {/* Play/Stop Button and BPM */}
        <div className="flex items-center gap-8">
          <button
            onClick={toggleMetronome}
            className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white"
            aria-label={isPlaying ? 'Stop metronome' : 'Start metronome'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>
          <div>
            <div className="text-4xl font-bold mb-2">{bpm}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">BPM</div>
          </div>
        </div>

        {/* Sound Selection and Frequency Toggle */}
        <div className="flex flex-col gap-4">
          <Select
            onValueChange={handleSoundChange}
            defaultValue={selectedSound.name}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a sound" />
            </SelectTrigger>
            <SelectContent>
              {soundOptions.map((sound) => (
                <SelectItem key={sound.name} value={sound.name}>
                  {sound.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-3">
            <span className="text-sm">432Hz</span>
            <Switch
              isToggled={isFrequency440}
              handleFrequencyChange={handleFrequencyChange}
            />
            <span className="text-sm">440Hz</span>
          </div>
        </div>
      </div>

      {/* Middle Section - Tempo Control */}
      <div className="mb-8">
        <div className="text-sm font-medium mb-2">Tempo</div>
        <Slider
          value={[bpm]}
          onValueChange={handleSliderChange(setBpm)}
          min={40}
          max={220}
          step={1}
          aria-label="Adjust tempo"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>40</span>
          <span>220</span>
        </div>
      </div>

      {/* Bottom Section - Time Signature and Subdivisions */}
      <div className="grid grid-cols-2 gap-8">
        {/* Beats */}
        <div>
          <div className="text-sm font-medium mb-2">Beats per measure</div>
          <Slider
            value={[beats]}
            onValueChange={handleSliderChange(setBeats)}
            min={1}
            max={8}
            step={1}
            aria-label="Adjust beats"
          />
          <div className="text-center mt-2">{beats} beats</div>
        </div>

        {/* Subdivisions */}
        <div>
          <div className="text-sm font-medium mb-2">Subdivisions</div>
          <Slider
            value={[subdivisions]}
            onValueChange={handleSliderChange(setSubdivisions)}
            min={1}
            max={4}
            step={1}
            aria-label="Adjust subdivisions"
          />
          <div className="text-center mt-2">{subdivisionLabel}</div>
        </div>
      </div>

      {/* Beat Indicators */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: beats }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              'w-4 h-4 mx-1 rounded-full transition-colors',
              beatIndex === i
                ? 'bg-blue-500'
                : 'bg-gray-200 dark:bg-gray-600'
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Metronome;
