export default class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.enabled) return;

    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  beep(freq = 440, duration = 0.1, type = "sine", volume = 0.05) {
    if (!this.enabled) return;

    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      this.ctx.currentTime + duration,
    );

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  click() {
    this.beep(720, 0.045, "square", 0.035);
  }

  spinTick() {
    this.beep(120, 0.025, "sawtooth", 0.018);
  }

  reelStop() {
    this.beep(220, 0.06, "triangle", 0.05);
    setTimeout(() => this.beep(420, 0.06, "triangle", 0.035), 55);
  }

  smallWin() {
    this.beep(520, 0.09, "sine", 0.06);
    setTimeout(() => this.beep(720, 0.09, "sine", 0.06), 110);
    setTimeout(() => this.beep(920, 0.12, "sine", 0.07), 220);
  }

  bigWin() {
    [392, 523, 659, 784, 1046, 1318].forEach((note, i) => {
      setTimeout(() => this.beep(note, 0.18, "triangle", 0.08), i * 115);
    });
  }

  jackpot() {
    [523, 659, 784, 1046, 1318, 1568, 2093].forEach((note, i) => {
      setTimeout(() => this.beep(note, 0.22, "triangle", 0.09), i * 120);
    });
  }

  lose() {
    this.beep(180, 0.08, "sawtooth", 0.025);
  }
}
