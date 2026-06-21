import * as THREE from 'three'
import { getConstellationById } from '../data/constellations'
import { GRAPHICS_OPTIONS } from '../data/constants'
import { clamp, randomRange } from '../utils/math'
import { audioManager } from './AudioManager'

export class NightSkyRenderer {
  constructor(container, settings, onStarClick, onCanvasEvent, onConnectResult) {
    this.container = container
    this.settings = settings
    this.onStarClick = onStarClick
    this.onCanvasEvent = onCanvasEvent
    this.onConnectResult = onConnectResult

    this.scene = null
    this.camera = null
    this.renderer = null
    this.animationId = null
    this.starField = null
    this.constellationMeshes = new Map()
    this.connectionLines = new Map()
    this.tempLine = null
    this.nebulas = []
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.hoveredStar = null
    this.starLabelEl = null

    this.targetConstellationId = null
    this.connectionPath = []

    this.cameraZ = 8
    this.minCameraZ = 3
    this.maxCameraZ = 20
    this.cameraTargetX = 0
    this.cameraTargetY = 0
    this.cameraCurrentX = 0
    this.cameraCurrentY = 0

    this.isDragging = false
    this.dragStartX = 0
    this.dragStartY = 0
    this.cameraStartX = 0
    this.cameraStartY = 0
    this.dragMoved = false
    this.dragThreshold = 5

    this.isPinching = false
    this.initialPinchDistance = 0
    this.initialCameraZ = 8

    this.starMeshes = []

    this.time = 0

    this.nebulasCreated = false

    this.init()
  }

  init() {
    const width = this.container.clientWidth
    const height = this.container.clientHeight
    const quality = GRAPHICS_OPTIONS[this.settings.graphicsQuality] || GRAPHICS_OPTIONS.high

    this.scene = new THREE.Scene()
    this.scene.background = this.createBackgroundGradient()
    this.scene.fog = new THREE.FogExp2(0x05060f, 0.015)

    this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    this.camera.position.set(0, 0, this.cameraZ)
    this.camera.lookAt(0, 0, 0)

    this.renderer = new THREE.WebGLRenderer({
      antialias: quality.antialias,
      alpha: true
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(width, height)
    this.renderer.setClearColor(0x05060f, 1)
    this.container.appendChild(this.renderer.domElement)

    this.createStarLabel()

    const baseCount = quality.starCount
    const adjustedCount = Math.round(baseCount * this.settings.starDensity)
    this.createStarField(adjustedCount, quality.particleSize)

    if (this.settings.showNebula) {
      this.createNebulae()
      this.nebulasCreated = true
    }

    audioManager.setVolume(this.settings.volume)
    audioManager.setSfxVolume(this.settings.sfxVolume)

    this.animate()
    this.bindEvents()
  }

  createStarLabel() {
    this.starLabelEl = document.createElement('div')
    this.starLabelEl.className = 'star-label'
    this.starLabelEl.style.cssText = `
      position: absolute;
      pointer-events: none;
      z-index: 10;
      padding: 4px 10px;
      background: rgba(10, 14, 31, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 215, 0, 0.4);
      border-radius: 8px;
      color: #ffd700;
      font-family: Georgia, serif;
      font-size: 12px;
      white-space: nowrap;
      transform: translate(-50%, -140%);
      opacity: 0;
      transition: opacity 0.2s ease;
      box-shadow: 0 2px 12px rgba(255, 215, 0, 0.2);
    `
    this.container.appendChild(this.starLabelEl)
  }

  updateStarLabel(show, starData, clientX, clientY) {
    if (!this.starLabelEl || !this.settings.showLabels) {
      if (this.starLabelEl) this.starLabelEl.style.opacity = '0'
      return
    }

    if (show && starData) {
      const rect = this.container.getBoundingClientRect()
      this.starLabelEl.innerHTML = `
        <div style="font-weight: bold; color: #ffd700;">${starData.starName || '未知'}</div>
        ${starData.starId ? `<div style="font-size: 10px; color: rgba(255,255,255,0.5); margin-top: 2px;">${starData.starId}</div>` : ''}
      `
      this.starLabelEl.style.left = `${clientX - rect.left}px`
      this.starLabelEl.style.top = `${clientY - rect.top}px`
      this.starLabelEl.style.opacity = '1'
    } else {
      this.starLabelEl.style.opacity = '0'
    }
  }

  createBackgroundGradient() {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const ctx = canvas.getContext('2d')

    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 512)
    gradient.addColorStop(0, '#0f1530')
    gradient.addColorStop(0.4, '#0a0e1f')
    gradient.addColorStop(1, '#05060f')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 512, 512)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }

  createStarField(count, particleSize) {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorChoices = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#8ec5ff'),
      new THREE.Color('#ffddaa'),
      new THREE.Color('#ffccaa'),
      new THREE.Color('#cce4ff')
    ]

    for (let i = 0; i < count; i++) {
      const radius = randomRange(12, 40)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi) - 15

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = particleSize * randomRange(0.5, 2.0)
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      size: particleSize,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    this.starField = new THREE.Points(geometry, material)
    this.scene.add(this.starField)
  }

  rebuildStarField() {
    if (this.starField) {
      this.scene.remove(this.starField)
      if (this.starField.geometry) this.starField.geometry.dispose()
      if (this.starField.material) this.starField.material.dispose()
      this.starField = null
    }

    const quality = GRAPHICS_OPTIONS[this.settings.graphicsQuality] || GRAPHICS_OPTIONS.high
    const baseCount = quality.starCount
    const adjustedCount = Math.round(baseCount * this.settings.starDensity)
    this.createStarField(adjustedCount, quality.particleSize)
  }

  createNebulae() {
    const nebulaConfigs = [
      { x: -8, y: 5, z: -10, color: 0x6b5bff, scale: 6, opacity: 0.08 },
      { x: 7, y: -4, z: -8, color: 0x4ff0d9, scale: 5, opacity: 0.06 },
      { x: 2, y: 8, z: -12, color: 0xff8a5b, scale: 7, opacity: 0.05 },
      { x: -5, y: -7, z: -6, color: 0xff6b9d, scale: 4, opacity: 0.07 }
    ]

    nebulaConfigs.forEach((config) => {
      const geometry = new THREE.SphereGeometry(config.scale, 32, 32)
      const material = new THREE.MeshBasicMaterial({
        color: config.color,
        transparent: true,
        opacity: config.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
      const nebula = new THREE.Mesh(geometry, material)
      nebula.position.set(config.x, config.y, config.z)
      this.scene.add(nebula)
      this.nebulas.push(nebula)
    })
  }

  removeNebulae() {
    this.nebulas.forEach((nebula) => {
      this.scene.remove(nebula)
      if (nebula.geometry) nebula.geometry.dispose()
      if (nebula.material) nebula.material.dispose()
    })
    this.nebulas = []
    this.nebulasCreated = false
  }

  setNebulaeVisible(show) {
    if (show && !this.nebulasCreated) {
      this.createNebulae()
      this.nebulasCreated = true
    } else if (!show && this.nebulasCreated) {
      this.removeNebulae()
    }
  }

  loadConstellation(constellationId) {
    this.clearConstellation()
    this.targetConstellationId = constellationId
    this.connectionPath = []

    const constellation = getConstellationById(constellationId)
    if (!constellation) return

    const group = new THREE.Group()
    group.name = 'constellation_group'

    const starObj = []
    constellation.stars.forEach((star) => {
      const mesh = this.createStarMesh(star)
      mesh.position.set(star.x, star.y, star.z || 0)
      mesh.userData = { starId: star.id, starName: star.name, isConstellationStar: true }
      group.add(mesh)
      starObj.push(mesh)
      this.starMeshes.push(mesh)
    })

    this.constellationMeshes.set(constellationId, { group, stars: starObj })
    this.scene.add(group)

    this.cameraTargetX = constellation.center.x
    this.cameraTargetY = constellation.center.y
  }

  createStarMesh(star) {
    const brightness = Math.max(0.2, 1 - (star.mag / 6) * 0.8)
    const size = 0.12 + (1 - star.mag / 6) * 0.15

    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    const center = 32

    const gradient = ctx.createRadialGradient(center, center, 0, center, center, 32)
    gradient.addColorStop(0, star.color || '#ffffff')
    gradient.addColorStop(0.3, star.color || '#ffffff')
    gradient.addColorStop(0.6, (star.color || '#ffffff') + '88')
    gradient.addColorStop(1, 'transparent')

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(center, center, 32, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(center, center, 3 + brightness * 4, 0, Math.PI * 2)
    ctx.fill()

    const texture = new THREE.CanvasTexture(canvas)
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const sprite = new THREE.Sprite(material)
    sprite.scale.set(size * 2, size * 2, 1)
    sprite.userData.baseScale = size * 2
    sprite.userData.brightness = brightness

    return sprite
  }

  updateConnectionPath(path) {
    this.connectionPath = [...path]

    if (this.targetConstellationId) {
      const data = this.constellationMeshes.get(this.targetConstellationId)
      if (!data) return

      this.connectionLines.forEach((line) => this.scene.remove(line))
      this.connectionLines.clear()

      for (let i = 0; i < path.length - 1; i++) {
        const starA = data.stars.find((s) => s.userData.starId === path[i])
        const starB = data.stars.find((s) => s.userData.starId === path[i + 1])
        if (starA && starB) {
          const line = this.createConnectionLine(starA.position, starB.position, 0xffd700)
          this.scene.add(line)
          this.connectionLines.set(`${path[i]}-${path[i + 1]}`, line)
        }
      }

      data.stars.forEach((star) => {
        const connected = path.includes(star.userData.starId)
        const scale = star.userData.baseScale * (connected ? 1.8 : 1)
        star.scale.set(scale, scale, 1)
      })
    }
  }

  createConnectionLine(start, end, color = 0xffd700) {
    const points = [start.clone(), end.clone()]
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.85,
      linewidth: 2,
      blending: THREE.AdditiveBlending
    })
    return new THREE.Line(geometry, material)
  }

  setTempLine(fromStarId, toWorldPos) {
    if (this.tempLine) {
      this.scene.remove(this.tempLine)
      this.tempLine = null
    }

    if (!this.targetConstellationId || !fromStarId) return

    const data = this.constellationMeshes.get(this.targetConstellationId)
    if (!data) return

    const fromStar = data.stars.find((s) => s.userData.starId === fromStarId)
    if (!fromStar || !toWorldPos) return

    this.tempLine = this.createConnectionLine(fromStar.position, toWorldPos, 0x88aaff)
    this.tempLine.material.opacity = 0.5
    this.scene.add(this.tempLine)
  }

  clearTempLine() {
    if (this.tempLine) {
      this.scene.remove(this.tempLine)
      this.tempLine = null
    }
  }

  clearConstellation() {
    this.constellationMeshes.forEach(({ group }) => {
      this.scene.remove(group)
    })
    this.constellationMeshes.clear()
    this.connectionLines.forEach((line) => this.scene.remove(line))
    this.connectionLines.clear()
    this.clearTempLine()
    this.starMeshes = []
    this.targetConstellationId = null
    this.connectionPath = []
  }

  bindEvents() {
    const canvas = this.renderer.domElement

    canvas.addEventListener('pointerdown', (e) => this.onPointerDown(e))
    canvas.addEventListener('pointermove', (e) => this.onPointerMove(e))
    canvas.addEventListener('pointerup', (e) => this.onPointerUp(e))
    canvas.addEventListener('pointercancel', () => this.onPointerCancel())
    canvas.addEventListener('wheel', (e) => this.onWheel(e), { passive: false })

    window.addEventListener('resize', () => this.onResize())
  }

  onPointerDown(e) {
    if (e.pointerType === 'touch') {
      if (!this.isPinching) {
        this.isDragging = true
        this.dragStartX = e.clientX
        this.dragStartY = e.clientY
        this.cameraStartX = this.cameraTargetX
        this.cameraStartY = this.cameraTargetY
        this.dragMoved = false
      }
    } else {
      this.isDragging = true
      this.dragStartX = e.clientX
      this.dragStartY = e.clientY
      this.cameraStartX = this.cameraTargetX
      this.cameraStartY = this.cameraTargetY
      this.dragMoved = false
    }

    if (e.pointerType === 'mouse') {
      this.updateMouse(e)
    }
  }

  onPointerMove(e) {
    if (e.pointerType === 'mouse') {
      this.updateMouse(e)
      this.checkHover(e.clientX, e.clientY)
    }

    if (this.isDragging && !this.isPinching) {
      const dx = e.clientX - this.dragStartX
      const dy = e.clientY - this.dragStartY

      if (Math.abs(dx) > this.dragThreshold || Math.abs(dy) > this.dragThreshold) {
        this.dragMoved = true
      }

      const zFactor = this.cameraZ / 8
      this.cameraTargetX = this.cameraStartX - (dx / this.container.clientWidth) * 10 * zFactor
      this.cameraTargetY = this.cameraStartY + (dy / this.container.clientHeight) * 7 * zFactor

      this.cameraTargetX = clamp(this.cameraTargetX, -15, 15)
      this.cameraTargetY = clamp(this.cameraTargetY, -12, 12)

      this.onCanvasEvent && this.onCanvasEvent({ type: 'pan' })
    }

    if (e.pointerType === 'mouse' && this.connectionPath.length > 0) {
      const worldPos = this.screenToWorld(e.clientX, e.clientY)
      if (worldPos) {
        this.setTempLine(this.connectionPath[this.connectionPath.length - 1], worldPos)
      }
    }
  }

  onPointerUp(e) {
    if (!this.dragMoved && !this.isPinching) {
      this.updateMouse(e)
      const star = this.pickStar()
      if (star) {
        audioManager.playClick()
        this.onStarClick && this.onStarClick(star.userData.starId)
      }
    }

    this.isDragging = false
    this.clearTempLine()
  }

  notifyConnectResult(success, isComplete = false) {
    if (success) {
      if (isComplete) {
        audioManager.playConstellationComplete()
      } else {
        audioManager.playConnectSuccess()
      }
    } else {
      audioManager.playConnectFail()
    }
  }

  onPointerCancel() {
    this.isDragging = false
    this.isPinching = false
    this.clearTempLine()
  }

  onWheel(e) {
    e.preventDefault()
    const delta = e.deltaY * 0.01
    this.cameraZ = clamp(this.cameraZ + delta, this.minCameraZ, this.maxCameraZ)
    this.onCanvasEvent && this.onCanvasEvent({ type: 'zoom', zoom: this.cameraZ })
  }

  handlePinchStart(e) {
    if (e.touches && e.touches.length === 2) {
      this.isPinching = true
      this.isDragging = false
      const t1 = e.touches[0]
      const t2 = e.touches[1]
      this.initialPinchDistance = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY)
      this.initialCameraZ = this.cameraZ
    }
  }

  handlePinchMove(e) {
    if (e.touches && e.touches.length === 2 && this.isPinching) {
      e.preventDefault()
      const t1 = e.touches[0]
      const t2 = e.touches[1]
      const currentDistance = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY)
      const scale = this.initialPinchDistance / currentDistance
      this.cameraZ = clamp(this.initialCameraZ * scale, this.minCameraZ, this.maxCameraZ)
      this.onCanvasEvent && this.onCanvasEvent({ type: 'zoom', zoom: this.cameraZ })
    }
  }

  handlePinchEnd() {
    this.isPinching = false
  }

  updateMouse(e) {
    const rect = this.container.getBoundingClientRect()
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  screenToWorld(clientX, clientY) {
    const rect = this.container.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 2 - 1
    const y = -((clientY - rect.top) / rect.height) * 2 + 1

    const vector = new THREE.Vector3(x, y, 0.5)
    vector.unproject(this.camera)
    const dir = vector.sub(this.camera.position).normalize()
    const distance = -this.camera.position.z / dir.z
    return this.camera.position.clone().add(dir.multiplyScalar(distance))
  }

  pickStar() {
    this.raycaster.setFromCamera(this.mouse, this.camera)
    const intersects = this.raycaster.intersectObjects(this.starMeshes)
    if (intersects.length > 0) {
      return intersects[0].object
    }
    return null
  }

  checkHover(clientX, clientY) {
    const star = this.pickStar()
    if (star !== this.hoveredStar) {
      if (this.hoveredStar) {
        const s = this.hoveredStar
        const connected = this.connectionPath.includes(s.userData.starId)
        const scale = s.userData.baseScale * (connected ? 1.8 : 1)
        s.scale.set(scale, scale, 1)
      }
      if (star) {
        const connected = this.connectionPath.includes(star.userData.starId)
        const scale = star.userData.baseScale * (connected ? 2.2 : 1.6)
        star.scale.set(scale, scale, 1)
        audioManager.playStarHover()
        this.updateStarLabel(true, star.userData, clientX, clientY)
      } else {
        this.updateStarLabel(false)
      }
      this.hoveredStar = star
      this.onCanvasEvent && this.onCanvasEvent({ type: 'hover', star: star ? star.userData : null })
    } else if (star && clientX && clientY) {
      this.updateStarLabel(true, star.userData, clientX, clientY)
    }
  }

  onResize() {
    const width = this.container.clientWidth
    const height = this.container.clientHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  animate = () => {
    this.animationId = requestAnimationFrame(this.animate)
    this.time += 0.01 * this.settings.animationSpeed

    this.cameraCurrentX += (this.cameraTargetX - this.cameraCurrentX) * 0.05
    this.cameraCurrentY += (this.cameraTargetY - this.cameraCurrentY) * 0.05
    this.camera.position.x = this.cameraCurrentX
    this.camera.position.y = this.cameraCurrentY
    this.camera.position.z += (this.cameraZ - this.camera.position.z) * 0.05
    this.camera.lookAt(this.cameraCurrentX, this.cameraCurrentY, 0)

    if (this.starField) {
      this.starField.rotation.y = this.time * 0.01
      this.starField.rotation.x = Math.sin(this.time * 0.005) * 0.05
    }

    this.nebulas.forEach((nebula, i) => {
      nebula.rotation.y = this.time * (0.01 + i * 0.003)
    })

    this.starMeshes.forEach((star, i) => {
      const pulse = 1 + Math.sin(this.time * 2 + i * 0.7) * 0.08
      const connected = this.connectionPath.includes(star.userData.starId)
      const isHovered = star === this.hoveredStar
      const baseScale = star.userData.baseScale
      let scale = baseScale
      if (connected) scale *= 1.8
      if (isHovered) scale *= isHovered === connected ? 1.1 : (connected ? 1.2 : 1.5)
      star.scale.set(scale * pulse, scale * pulse, 1)
    })

    this.renderer.render(this.scene, this.camera)
  }

  setZoom(level) {
    this.cameraZ = clamp(level, this.minCameraZ, this.maxCameraZ)
  }

  focusOnConstellation(constellationId) {
    const constellation = getConstellationById(constellationId)
    if (constellation) {
      this.cameraTargetX = constellation.center.x
      this.cameraTargetY = constellation.center.y
      this.cameraZ = 6
    }
  }

  updateSettings(newSettings) {
    const oldSettings = { ...this.settings }
    this.settings = { ...this.settings, ...newSettings }

    if (newSettings.volume !== undefined) {
      audioManager.setVolume(newSettings.volume)
    }

    if (newSettings.sfxVolume !== undefined) {
      audioManager.setSfxVolume(newSettings.sfxVolume)
    }

    if (newSettings.starDensity !== undefined &&
        newSettings.starDensity !== oldSettings.starDensity) {
      this.rebuildStarField()
    }

    if (newSettings.showNebula !== undefined &&
        newSettings.showNebula !== oldSettings.showNebula) {
      this.setNebulaeVisible(newSettings.showNebula)
    }

    if (newSettings.showLabels !== undefined) {
      if (!newSettings.showLabels && this.starLabelEl) {
        this.starLabelEl.style.opacity = '0'
      }
    }

    if (newSettings.animationSpeed !== undefined) {
    }

    if (newSettings.graphicsQuality !== undefined &&
        newSettings.graphicsQuality !== oldSettings.graphicsQuality) {
      const quality = GRAPHICS_OPTIONS[newSettings.graphicsQuality] || GRAPHICS_OPTIONS.high
      if (this.renderer) {
        this.renderer.setPixelRatio(quality.antialias
          ? Math.min(window.devicePixelRatio, 2)
          : 1)
      }
      this.rebuildStarField()
    }
  }

  dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }

    if (this.starLabelEl && this.starLabelEl.parentNode) {
      this.starLabelEl.parentNode.removeChild(this.starLabelEl)
      this.starLabelEl = null
    }

    window.removeEventListener('resize', () => this.onResize())

    if (this.renderer) {
      this.renderer.dispose()
      if (this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)
      }
    }

    this.clearConstellation()

    if (this.scene) {
      this.scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose())
          } else {
            obj.material.dispose()
          }
        }
      })
    }
  }
}
