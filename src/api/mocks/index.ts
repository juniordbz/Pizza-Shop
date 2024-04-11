import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { registerRestaurantMock } from './register-restaurant-mocks'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock, registerRestaurantMock)

export async function enableMSW() {
  if (env.MODE !== 'mock') {
    return
  }
  await worker.start()
}
