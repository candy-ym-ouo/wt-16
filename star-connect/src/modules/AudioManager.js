export class AudioManager {
  constructor() {
    this.audioContext = null
    this.masterGain = null
    this.sfxGain = null
    this.volume = 0.7
    this.sfxVolume = 0.8
    this.initialized = false
  }

  init() {
    if (this.initialized) return
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (!AudioContext) return

      this.audioContext = new AudioContext()
      this.masterGain = this.audioContext.createGain()
      this.sfxGain = this.audioContext.createGain()

      this.masterGain.connect(this.audioContext.destination)
      this.sfxGain.connect(this.masterGain)

      this.masterGain.gain.value = this.volume
      this.sfxGain.gain.value = this.sfxVolume

      this.initialized = true
    } catch (e) {
      console.warn('Web Audio API not supported')
    }
  }

  ensureContext() {
    if (!this.audioContext) {
      this.init()
    }
    if (this.audioContext?.state === 'suspended') {
      this.audioContext.resume()
    }
  }

  setVolume(value) {
    this.volume = value
    if (this.masterGain) {
      this.masterGain.gain.value = value
    }
  }

  setSfxVolume(value) {
    this.sfxVolume = value
    if (this.sfxGain) {
      this.sfxGain.gain.value = value
    }
  }

  playTone(frequency, duration, type = 'sine', volume = 0.3) {
    this.ensureContext()
    if (!this.audioContext || !this.sfxGain) return

    const osc = this.audioContext.createOscillator()
    const gain = this.audioContext.createGain()

    osc.type = type
    osc.frequency.value = frequency

    gain.gain.setValueAtTime(0, this.audioContext.currentTime)
    gain.gain.linearRampToValueAtTime(volume, this.audioContext.currentTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration)

    osc.connect(gain)
    gain.connect(this.sfxGain)

    osc.start()
    osc.stop(this.audioContext.currentTime + duration)
  }

  playConnectSuccess() {
    this.playTone(523.25, 0.08, 'sine', 0.25)
    setTimeout(() => this.playTone(659.25, 0.1, 'sine', 0.2), 60)
    setTimeout(() => this.playTone(783.99, 0.12, 'sine', 0.15), 140)
  }

  playConnectFail() {
    this.playTone(200, 0.12, 'sawtooth', 0.15)
    setTimeout(() => this.playTone(150, 0.15, 'sawtooth', 0.1), 80)
  }

  playConstellationComplete() {
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]
    notes.forEach((note, i) => {
      setTimeout(() => this.playTone(note, 0.15, 'sine', 0.2), i * 100)
    })
  }

  playAchievement() {
    const notes = [783.99, 1046.50, 1318.51, 1567.98, 2093.00]
    notes.forEach((note, i) => {
      setTimeout(() => this.playTone(note, 0.18, 'triangle', 0.22), i * 80)
    })
    setTimeout(() => this.playTone(2637.02, 0.4, 'sine', 0.25), 450)
  }

  playClick() {
    this.playTone(880, 0.04, 'sine', 0.15)
  }

  playHover() {
    this.playTone(440, 0.03, 'sine', 0.08)
  }

  playPanelOpen() {
    this.playTone(330, 0.05, 'sine', 0.12)
    setTimeout(() => this.playTone(440, 0.05, 'sine', 0.1), 30)
  }

  playPanelClose() {
    this.playTone(440, 0.05, 'sine', 0.12)
    setTimeout(() => this.playTone(330, 0.05, 'sine', 0.1), 30)
  }

  playStarHover() {
    this.playTone(587.33, 0.04, 'triangle', 0.06)
  }

  playZoom() {
    this.playTone(220, 0.02, 'sine', 0.05)
  }

  playReset() {
    const notes = [392, 349.23, 311.13, 261.63]
    notes.forEach((note, i) => {
      setTimeout(() => this.playTone(note, 0.1, 'sawtooth', 0.1), i * 70)
    })
  }
}

export const audioManager = new AudioManager()
