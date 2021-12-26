# car-parts-store

## Начало разработки

#### Начало работы

```
git clone https://github.com/Zmiterr/car-parts-store.git
```

#### Локальная разработка

Установите все зависимости
```
npm i
```

Поднимите локальный сервер для разработки
```
npm run start
```

Сайт станет доступен по адресу http://127.0.0.1:3000/

#### Проверка стиля для JS

```
npm run js:check
```

#### Исправление стиля для JS

```
npm run js:fix
```

## Разработка

### Структура проекта

```
- src
  |-- api          // общие api 
  |-- assets       // общие статические файлы
  |-- fonts        // общие шрифты
  |-- styles       // общие стили
  |-- helpers      // общие хэлперы
  |-- interfaces   // общие TS-интерфейсы и TS-типы
  |-- components   // общие компоненты
      |-- app
              |-- App.ts       // логика компонента
              |-- index.scss   // стили компонента
              |-- index.ts     // экспорт компонента (только export страницы без логики)
  |-- pages      // страницы или разделы сайта
      |-- PageName         // имя раздела
          |-- components   // компоненты раздела
              |-- Component.ts // логика компонента
          |-- interfaces  // локальные TS-интерфейсы и TS-типы, если нужно
              |-- IComponent.ts
          |-- styles      // стили для компонентов раздела, если их больше одного
              |-- component.ts
          |-- helpers     // локальные хэлперы для компонентов раздела
          |-- api.ts      // все запросы к серверу для данного раздела
          |-- index.tsx   // сборка страницы из компонентов и экспорт
  |-- hooks      // hooks
  |-- router      // роутер приложения
  |-- shared      // общие styled компоненты
  |-- store      // redux store
  |-- theme      //  styled тема

```

### F.A.Q.

### WebStorm не понимает пути от корня (cannot resolve directory)

Открываем ```File > Settings > Directories``` нажимаем в дереве на ```src``` и ставим метку ```Resource Root```

### Как настроить авто-форматирование кода в WebStorm?

Устанавливаем плагин ```JavaScript and TypeScript```. Открываем ```Setting > Keymap > Plugins > JavaScript and TypeScript > Fix ESLint Problems``` двойным кликом на ```Fix ESLint Problems``` назначаем комбинацию (например ```Ctrl + Alt + ;```).

### Как настроить авто-форматирование кода в VSCode?

Устанавливаем плагин ```ESLint```. Открываем ```Setting > Workspace > Extensions > ESLint```. Включаем галочки про "включить". Возможно перезагружаем VSCode (а может и так заработает). Используем комбинацию ```Alt + Shift + F``` для форматирования кода.
