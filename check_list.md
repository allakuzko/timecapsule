# 📦 TimeCapsule — Шпаргалка з навчання та розробки

> ✅ — виконано, ⬜ — ще ні

---

## 🔹 1. JavaScript (📁 js-ui/)
### 🎯 Мета: Створити веб-форму для збереження повідомлення та дати

- ⬜ Створити HTML-форму з `<textarea>` і `<input type="date">`
- ⬜ Обробка події submit через `addEventListener`
- ⬜ Отримати значення з полів через `getElementById()`
- ⬜ Надіслати POST-запит через `fetch()`
- ⬜ Вивести повідомлення про успішне збереження
- ⬜ Стилізувати через CSS (базово)

---

## 🔸 2. Go (📁 go-api/)
### 🎯 Мета: API для прийому капсули і повернення при настанні дати

- ⬜ Встановити Go та Gin
- ⬜ Створити структуру Capsule (`id`, `message`, `openAt`)
- ⬜ Написати POST /capsule (прийом повідомлення)
- ⬜ Згенерувати унікальний ID (через uuid)
- ⬜ Зберегти капсулу у JSON (або пам'ять)
- ⬜ Написати GET /capsule/:id (перевірка часу)

---

## 🔸 3. Python (📁 py-crypto/)
### 🎯 Мета: Шифрувати та дешифрувати повідомлення

- ⬜ Встановити бібліотеку `cryptography`
- ⬜ Написати `encrypt(text)` → base64 string
- ⬜ Написати `decrypt(encrypted)` → text
- ⬜ (Опціонально) FastAPI з `/encrypt`, `/decrypt`
- ⬜ Інтегрувати з Go API (через subprocess або HTTP)

---

## 🔸 4. Rust (📁 rust-cli/)
### 🎯 Мета: CLI для перевірки чи капсулу можна відкрити

- ⬜ Основи: `fn main()`, аргументи
- ⬜ Читання JSON файлу (`serde_json`)
- ⬜ Парсинг дати (`chrono`)
- ⬜ Порівняння з поточною датою
- ⬜ Вивід результату (відкрити / зарано)

---

## 🔸 5. TypeScript (📁 ts-frontend/)
### 🎯 Мета: UI з таймером і візуалізацією капсули

- ⬜ Основи TypeScript: типи, об'єкти, функції
- ⬜ Робота з датами: `Date`, різниця
- ⬜ Отримання капсули через fetch()
- ⬜ Таймер зворотного відліку
- ⬜ Анімація відкриття капсули

---

## ⚙️ Інтеграція та DevOps

- ⬜ Ініціалізація git-репозиторію
- ⬜ Пуш на GitHub
- ⬜ Зберігання ключів у `.env`
- ⬜ (Опціонально) Docker для сервісів

---
