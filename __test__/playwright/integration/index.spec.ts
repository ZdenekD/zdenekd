import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/');
});

test.describe('Homepage', () => {
    test('Load with proper title', async ({page}) => {
        await expect(page).toHaveTitle('Vítejte | ZdenekD');
    });
});
