# Vue Cocktails

Приложение для просмотра коктейлей по категориям с использованием данных с API [TheCocktailDB](https://www.thecocktaildb.com/api.php).
Развернуто и доступно по адресу:
https://vue-cocktails-black.vercel.app

## Описание проекта

Это SPA-приложение на Vue 3 + TypeScript, реализующее вывод списка коктейлей по категориям (margarita, mojito, a1, kir), полученных через API. Для каждой категории выводятся все коктейли из API.  

## Технологии и стек

- Vue 3 + TypeScript
- Vite (сборщик и дев-сервер)
- Pinia (менеджер состояния)
- ESLint + Prettier (линтинг и форматирование)
- SCSS (стили)
- Адаптивная верстка (под Chrome, Safari)
- Unit-тесты на Vitest
- Husky для pre-commit хуков

## Запуск проекта

Клонируйте репозиторий и установите зависимости:
```bash
npm install
npm run dev
```
