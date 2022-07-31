import {devices} from '@playwright/test';
import type {PlaywrightTestConfig} from '@playwright/test';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const config: PlaywrightTestConfig = {
    testDir: './__test__/playwright/integration',
    timeout: 30 * 1000,
    expect: {timeout: 5000},
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html', {outputFolder: './__test__/playwright/report'}]],
    use: {
        actionTimeout: 0,
        baseURL: 'http://localhost:8000',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        }, {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
        },
    ],
    outputDir: 'results/',
    webServer: {
        command: 'yarn dev',
        port: 8000,
    },
};

export default config;
