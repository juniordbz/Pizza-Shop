import { expect, test } from '@playwright/test'

test('display month revenue amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 200,00')).toBeVisible()
  expect(page.getByText('+10% em relação ao mês')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200').nth(1)).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({
        hasText: /^Pedidos do \(mês\)200\+7% em relação ao mês anterior$/,
      })
      .getByRole('paragraph'),
  ).toBeVisible()
})

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200').nth(2)).toBeVisible()
  expect(
    page
      .locator('div')
      .filter({
        hasText: /^Cancelamentos do \(mês\)200\+7% em relação ao mês anterior$/,
      })
      .getByRole('paragraph'),
  ).toBeVisible()
})
