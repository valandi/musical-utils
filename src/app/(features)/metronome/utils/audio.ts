export const createOscillator = (
  audioContext: AudioContext,
  gainNode: GainNode,
  isAccent: boolean
) => {
  const osc = audioContext.createOscillator();
  const oscGain = audioContext.createGain();
  
  osc.connect(oscGain);
  oscGain.connect(gainNode);
  
  osc.frequency.value = isAccent ? 1000 : 800;
  oscGain.gain.value = isAccent ? 1 : 0.7;
  
  return osc;
}; 