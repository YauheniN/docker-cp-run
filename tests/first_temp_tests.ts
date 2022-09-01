import { expect, test } from '@playwright/test';

        
test('First_test_spec', async ({ page }) => {
        await page.goto('https://playwright.dev/docs/cli')
        await page.click('text="Generate PDF"')
        await expect(page.locator(".markdown.theme-doc-markdown > p:nth-of-type(20)")).toHaveText('PDF generation only works in Headless Chromium.')
        })