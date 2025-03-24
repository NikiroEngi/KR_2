const { chromium } = require("playwright");
global.setImmediate = setTimeout;
describe("Тестирование формы регистрации", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch(); // Запускаем браузер
    page = await browser.newPage(); // Открываем новую страницу
  });

  afterAll(async () => {
    await browser.close(); // Закрываем браузер после тестов
  });

  test("Успешная отправка формы", async () => {
    await page.goto("http://localhost:3000"); // Укажите URL вашего приложения

    // Вводим имя пользователя
    await page.fill("#username", "Nikiro");

    // Вводим e-mail
    await page.fill("#email", "test@example.com");

    // Вводим пароль и подтверждение пароля
    await page.fill("#password", "Password1");
    await page.fill("#confirmPassword", "Password1");

    // Отмечаем чекбокс "Согласен"
    await page.check("#terms");

    // Нажимаем кнопку "Отправить"
    await page.click("#submitButton");

    // Проверяем перенаправление на страницу успеха
    expect(page.url()).toBe("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  });
});
