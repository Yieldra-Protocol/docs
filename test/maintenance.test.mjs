import assert from 'node:assert/strict'
import test from 'node:test'

import {
  MAINTENANCE_HEADERS,
  MAINTENANCE_HTML,
  shouldServeMaintenance,
} from '../server/utils/maintenance.ts'

test('serves maintenance mode for documentation routes', () => {
  assert.equal(shouldServeMaintenance('GET', '/'), true)
  assert.equal(shouldServeMaintenance('HEAD', '/getting-started/welcome'), true)
  assert.equal(shouldServeMaintenance('GET', '/products/yieldra-amm?ref=nav'), true)
})

test('allows only required static assets through', () => {
  assert.equal(shouldServeMaintenance('GET', '/_nuxt/app.js'), false)
  assert.equal(shouldServeMaintenance('GET', '/favicon.ico'), false)
  assert.equal(shouldServeMaintenance('GET', '/android-chrome-192x192.png'), false)
  assert.equal(shouldServeMaintenance('POST', '/'), true)
})

test('renders an accessible Yieldra maintenance document', () => {
  assert.match(MAINTENANCE_HTML, /<html lang="en">/)
  assert.match(MAINTENANCE_HTML, /<title>Documentation under construction \| Yieldra<\/title>/)
  assert.match(MAINTENANCE_HTML, /<h1[^>]*>Documentation under construction\.<\/h1>/)
  assert.match(MAINTENANCE_HTML, /href="https:\/\/yieldra\.io"/)
  assert.doesNotMatch(MAINTENANCE_HTML, /[—–]/)
})

test('prevents stale maintenance responses and unsafe embedding', () => {
  assert.equal(MAINTENANCE_HEADERS['Cache-Control'], 'no-store, max-age=0')
  assert.equal(MAINTENANCE_HEADERS['Retry-After'], '3600')
  assert.match(MAINTENANCE_HEADERS['Content-Security-Policy'], /frame-ancestors 'none'/)
  assert.equal(MAINTENANCE_HEADERS['X-Frame-Options'], 'DENY')
})
