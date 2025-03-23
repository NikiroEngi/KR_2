const validatePassword = require("../client/app");

test("Проверка короткого пароля", () => {
  expect(validatePassword("123")).toBe(
    "Пароль должен быть не менее 5 символов"
  );
});

test("Проверка пароля без заглавной буквы", () => {
  expect(validatePassword("password1")).toBe(
    "Пароль должен содержать как минимум одну заглавную букву и одну цифру"
  );
});

test("Проверка корректного пароля", () => {
  expect(validatePassword("Password1")).toBe("OK");
});
