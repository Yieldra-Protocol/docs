import {
  MAINTENANCE_HEADERS,
  MAINTENANCE_HTML,
  shouldServeMaintenance,
} from '../utils/maintenance'

export default defineEventHandler((event) => {
  const pathname = getRequestURL(event).pathname
  if (!shouldServeMaintenance(event.method, pathname)) return

  setResponseStatus(event, 503, 'Service Unavailable')

  for (const [name, value] of Object.entries(MAINTENANCE_HEADERS)) {
    setResponseHeader(event, name, value)
  }

  return MAINTENANCE_HTML
})
