"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require('puppeteer');
exports.screenshot = async (url) => {
    console.log(`shoting ${url}`);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: path() });
    await browser.close();
};
const path = () => {
    return 'example.png';
};
//# sourceMappingURL=index.js.map