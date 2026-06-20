export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

export function lerp(start, end, t) {
  return start + (end - start) * t
}

export function distance2D(x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}

export function distance3D(p1, p2) {
  const dx = p2.x - p1.x
  const dy = p2.y - p1.y
  const dz = (p2.z || 0) - (p1.z || 0)
  return Math.sqrt(dx * dx + dy * dy + dz * dz)
}

export function generateId() {
  return Math.random().toString(36).substring(2, 10)
}

export function formatDate(timestamp) {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}.${month}.${day} ${hours}:${minutes}`
}

export function randomRange(min, max) {
  return Math.random() * (max - min) + min
}

export function sphericalToCartesian(theta, phi, radius) {
  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.sin(phi) * Math.sin(theta),
    z: radius * Math.cos(phi)
  }
}

export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function throttle(func, limit) {
  let inThrottle
  return function throttledFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
