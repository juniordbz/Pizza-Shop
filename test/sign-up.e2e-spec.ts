import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.locator('#restaurantName').fill('Pizza Shop')
  await page.locator('#managerName').fill('Francisco Bezerra')
  await page.locator('#email').fill('teste@teste.com.br')
  await page.locator('#phone').fill('11111111111')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.locator('#restaurantName').fill('Invalid Name')
  await page.locator('#managerName').fill('Francisco Bezerra')
  await page.locator('#email').fill('teste@teste.com.br')
  await page.locator('#phone').fill('11111111111')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
