import { http, HttpResponse } from 'msw'

import { getProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, getProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'teste@teste.com.br',
      phone: '81237127123',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
