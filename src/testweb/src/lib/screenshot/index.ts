const puppeteer = require('puppeteer')

export const screenshot = async (url) => {
  console.log(`shoting ${url}`)
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  await page.screenshot({ path: path() })
  await browser.close()
}

const path = () => {
  return 'example.png'
}