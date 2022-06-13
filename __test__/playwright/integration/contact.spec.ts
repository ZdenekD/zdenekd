import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/en/contact');
});

test.describe('Contact', () => {
    test('Load with proper title', async ({page}) => {
        await expect(page).toHaveTitle('Contact | ZdenekD');
    });
});
