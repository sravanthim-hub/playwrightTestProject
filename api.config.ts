import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: 'tests/Api',
    use: {
        headless: true,
        viewport: {width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Chromium',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },
        {
            name: 'Webkit',
            use: {browserName: 'webkit'}
        }
    ]
}

export default config