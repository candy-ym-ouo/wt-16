import { useOffline, OfflineContext } from './useOffline.js'

export function OfflineProvider({ children, options }) {
  const offline = useOffline(options)
  return (
    <OfflineContext.Provider value={offline}>
      {children}
    </OfflineContext.Provider>
  )
}

export default OfflineProvider
