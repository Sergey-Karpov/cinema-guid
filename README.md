# Ru

## Описание

### CinemaGuide — это бета-версия стримингового сервиса, созданная по предоставленным макетам.

## Приложение предоставляет пользователям возможность:

<ol>
<li>Искать фильмы.</li>
<li>Добавлять фильмы в избранное.</li>
<li>Просматривать категории фильмов и трейлеры.</li>
<li>Получать рекомендации случайных фильмов.</li>
<li>Управлять избранным списком фильмов (доступно для авторизованных пользователей).</li>
</ol>

Главная страница:
Отображение случайного фильма с информацией о нём.

![main-hero](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/main-hero.png)

Список топ-10 фильмов по IMDb-рейтингу.

![main-top](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/main-top.png)

Страница жанров:
Список доступных жанров в виде карточек.

![genres](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/genres.png)

Страница фильмов по жанру:
Карточки фильмов, отфильтрованные по жанру.
Пагинация с подгрузкой фильмов.

![genres-movies](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/genres-movies.png)

Страница фильма:
Полное описание фильма.

![movie](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/movie.png)

Просмотр трейлера в модальном окне.
Добавление/удаление фильма из избранного.

![movie-trailer](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/movie-trailer.png)

Авторизация:
Регистрация/вход через модальное окно.
Доступ к личному кабинету после авторизации.

![register](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/register.png)

Личный кабинет:
Информация о пользователе.

![user-page](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/user-page.png)

Список избранных фильмов.
Возможность выхода из аккаунта.

![user-page-data](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/user-page-data.png)

Поиск фильмов:
Поиск по названию с результатами в модальном окне.

![main-search](https://github.com/Sergey-Karpov/cinema-guid/blob/main/screens/main-search.png)

## Стек технологий:

React (17-18)
TypeScript
ReduxToolkit
React Router
SCSS

## Инструкции по запуску:

скачайте проект - перейдите в корень проекта - установите зависимости (npm install) - запустите проект (npm run dev) - откройте локально в браузере по предложенному адресу (например http://localhost:5173/)

## Структура проекта:

src/api: Логика для работы с API.<br>
src/assets: Статичные файлы.<br>
src/components: Повторно используемые компоненты.<br>
src/hooks: Повторно хуки проекта.<br>
src/mock: Моковые данные проекта.<br>
src/pages: Страницы приложения.<br>
src/store: Хранилице глобальных store приложения.<br>
src/styles: Файлы стилей.<br>
src/types: Переиспользуемые типы проекта.<br>
src/utils: Переиспользуемые функции.<br>

# En

### Description

CinemaGuide is a beta version of a streaming service created based on the provided mockups.

## The application allows users to:

Search for movies.
Add movies to favorites.
Browse movie categories and trailers.
Receive random movie recommendations.
Manage the favorite movie list (available to authorized users).

### Main Features:

Home Page:
Displays a random movie with its information.
Top-10 movies list based on IMDb ratings.

Genres Page:
A list of available genres displayed as cards.

Movies by Genre Page:
Movie cards filtered by genre.
Pagination with movie loading.

Movie Page:
Full description of the movie.
Watch the trailer in a modal window.
Add/remove movie from favorites.

Authorization:
Registration/login via a modal window.
Access to the personal account after authorization.

Personal Account:
User information.
List of favorite movies.
Option to log out.

Movie Search:
Search by title with results displayed in a modal window.

## Technical Requirements:

React (17-18)
TypeScript
Redux Toolkit
React Router
SCSS

## Setup Instructions:

1. Download the project.
2. Navigate to the project root directory.
3. Install dependencies (npm install).
4. Run the project (npm run dev).
5. Open the project in the browser at the provided address (e.g., http://localhost:5173/).

## Project Structure::

src/api: Logic for working with the API.<br>
src/assets: Static files.<br>
src/components: Reusable components.<br>
src/hooks: Reusable hooks.<br>
src/mock: Mock data for the project.<br>
src/pages: Pages of the application.<br>
src/store: Global store of the application.<br>
src/styles: Style files.<br>
src/types: Reusable project types.<br>
src/utils: Reusable functions.<br>
