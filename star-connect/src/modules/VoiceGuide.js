import { VOICE_CONTENT } from '../data/familyMode'

export class VoiceGuide {
  constructor() {
    this.synth = null
    this.currentUtterance = null
    this.isSpeaking = false
    this.voiceEnabled = true
    this.voiceVolume = 0.8
    this.voiceRate = 0.9
    this.voicePitch = 1.0
    this.selectedVoice = null
    this.initialized = false
  }

  init() {
    if (this.initialized) return
    
    if ('speechSynthesis' in window) {
      this.synth = window.speechSynthesis
      this.loadVoices()
      
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices()
      }
      
      this.initialized = true
    } else {
      console.warn('Speech synthesis not supported')
    }
  }

  loadVoices() {
    if (!this.synth) return
    
    const voices = this.synth.getVoices()
    const chineseVoices = voices.filter(v => v.lang.includes('zh'))
    
    if (chineseVoices.length > 0) {
      this.selectedVoice = chineseVoices.find(v => v.name.includes('Female')) ||
                           chineseVoices.find(v => v.name.includes('female')) ||
                           chineseVoices[0]
    } else if (voices.length > 0) {
      this.selectedVoice = voices[0]
    }
  }

  setVoicePreferences({ volume, rate, pitch }) {
    if (volume !== undefined) this.voiceVolume = Math.max(0, Math.min(1, volume))
    if (rate !== undefined) this.voiceRate = Math.max(0.5, Math.min(2, rate))
    if (pitch !== undefined) this.voicePitch = Math.max(0.5, Math.min(2, pitch))
  }

  toggleVoice(enabled) {
    this.voiceEnabled = enabled
    if (!enabled && this.isSpeaking) {
      this.stop()
    }
  }

  speak(text, options = {}) {
    return new Promise((resolve, reject) => {
      if (!this.voiceEnabled || !this.synth) {
        resolve(false)
        return
      }

      this.stop()

      const utterance = new SpeechSynthesisUtterance(text)
      
      if (this.selectedVoice) utterance.voice = this.selectedVoice
      utterance.volume = options.volume ?? this.voiceVolume
      utterance.rate = options.rate ?? this.voiceRate
      utterance.pitch = options.pitch ?? this.voicePitch
      utterance.lang = options.lang || 'zh-CN'

      utterance.onstart = () => {
        this.isSpeaking = true
        this.currentUtterance = utterance
        if (options.onStart) options.onStart()
      }

      utterance.onend = () => {
        this.isSpeaking = false
        this.currentUtterance = null
        if (options.onEnd) options.onEnd()
        resolve(true)
      }

      utterance.onerror = (event) => {
        this.isSpeaking = false
        this.currentUtterance = null
        if (options.onError) options.onError(event)
        reject(event)
      }

      this.synth.speak(utterance)
    })
  }

  stop() {
    if (this.synth) {
      this.synth.cancel()
      this.isSpeaking = false
      this.currentUtterance = null
    }
  }

  pause() {
    if (this.synth && this.isSpeaking) {
      this.synth.pause()
    }
  }

  resume() {
    if (this.synth) {
      this.synth.resume()
    }
  }

  async welcome(role) {
    const text = VOICE_CONTENT.welcome[role]
    if (text) {
      return this.speak(text)
    }
  }

  async tellStory(constellationId) {
    const content = VOICE_CONTENT.constellations[constellationId]
    if (content?.story) {
      return this.speak(content.story, { rate: 0.85 })
    }
  }

  async explainScience(constellationId) {
    const content = VOICE_CONTENT.constellations[constellationId]
    if (content?.science) {
      return this.speak(content.science, { rate: 0.9 })
    }
  }

  async giveTips(constellationId) {
    const content = VOICE_CONTENT.constellations[constellationId]
    if (content?.tips) {
      return this.speak(content.tips, { rate: 0.9 })
    }
  }

  async encourage(role) {
    const encouragements = VOICE_CONTENT.encouragement[role]
    if (encouragements && encouragements.length > 0) {
      const text = encouragements[Math.floor(Math.random() * encouragements.length)]
      return this.speak(text, { pitch: role === 'child' ? 1.2 : 1.0 })
    }
  }

  async readInstruction(text) {
    return this.speak(text, { rate: 0.85 })
  }

  async announceAchievement(achievementName) {
    const text = `恭喜！获得成就：${achievementName}`
    return this.speak(text, { rate: 0.9, pitch: 1.1 })
  }

  async askQuestion(question) {
    return this.speak(question, { rate: 0.85 })
  }

  async readQuizQuestion(question) {
    return this.speak(`题目：${question}`, { rate: 0.85 })
  }

  async correctAnswer() {
    return this.speak('回答正确！太棒了！', { pitch: 1.2, rate: 1.0 })
  }

  async wrongAnswer(correctAnswer) {
    return this.speak(`没关系，正确答案是：${correctAnswer}。继续加油！`, { rate: 0.9 })
  }

  get isSupported() {
    return 'speechSynthesis' in window
  }

  get availableVoices() {
    return this.synth ? this.synth.getVoices() : []
  }
}

export class VoiceRecorder {
  constructor() {
    this.recognition = null
    this.isListening = false
    this.initialized = false
    this.onResult = null
    this.onError = null
  }

  init() {
    if (this.initialized) return
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition()
      this.recognition.continuous = false
      this.recognition.interimResults = false
      this.recognition.lang = 'zh-CN'
      
      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        if (this.onResult) this.onResult(transcript)
      }
      
      this.recognition.onerror = (event) => {
        if (this.onError) this.onError(event.error)
      }
      
      this.recognition.onend = () => {
        this.isListening = false
      }
      
      this.initialized = true
    }
  }

  start() {
    return new Promise((resolve, reject) => {
      if (!this.recognition) {
        reject(new Error('Speech recognition not supported'))
        return
      }
      
      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        resolve(transcript)
      }
      
      this.recognition.onerror = (event) => {
        reject(new Error(event.error))
      }
      
      this.recognition.start()
      this.isListening = true
    })
  }

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop()
      this.isListening = false
    }
  }

  get isSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition)
  }
}

export const voiceGuide = new VoiceGuide()
export const voiceRecorder = new VoiceRecorder()
