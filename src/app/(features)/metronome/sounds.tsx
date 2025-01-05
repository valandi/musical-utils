const FREQUENCY_FACTOR = 0.98181818181;

export const soundOptions = [
  {
    name: 'Beep',
    frequency: 1000,
    frequency432: 1000 * FREQUENCY_FACTOR,
    duration: 0.1,
  },
  {
    name: 'Click',
    frequency: 2000,
    frequency432: 2000 * FREQUENCY_FACTOR,
    duration: 0.05,
  },
  {
    name: 'Marimba',
    frequency: 800,
    frequency432: 800 * FREQUENCY_FACTOR,
    duration: 0.7,
  },
  {
    name: 'Cowbell',
    frequency: 600,
    frequency432: 600 * FREQUENCY_FACTOR,
    duration: 0.15,
  },
  {
    name: 'Wood Block',
    frequency: 600,
    frequency432: 600 * FREQUENCY_FACTOR,
    duration: 0.02,
  },
];
