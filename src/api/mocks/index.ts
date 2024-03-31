import { setupWorker } from 'msw/browser'

import { env } from '@/env'

export const worker = setupWorker()

export async function enableMSW() {
  if (env.MODE !== 'mock') {
    return
  }
  await worker.start()
}
