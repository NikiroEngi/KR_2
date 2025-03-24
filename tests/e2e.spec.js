const { chromium } = require("playwright");
global.setImmediate = setTimeout;
describe("Тестирование формы регистрации", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Успешная отправка формы", async () => {
    await page.goto("http://localhost:3000");

    await page.fill("#username", "Nikiro");

    await page.fill("#email", "test@example.com");

    await page.fill("#password", "Password1");
    await page.fill("#confirmPassword", "Password1");

    await page.check("#terms");

    await page.click("#submitButton");

    expect(page.url()).toBe("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  });
});
