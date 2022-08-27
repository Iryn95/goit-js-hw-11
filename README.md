# goit-js-hw-11
# Задание - поиск изображений
Создай фронтенд часть приложения поиска и просмотра изображений по ключевому слову. Добавь оформление элементов интерфейса. Посмотри демо видео работы приложения.

https://user-images.githubusercontent.com/17479434/125040406-49a6f600-e0a0-11eb-975d-e7d8eaf2af6b.mp4
## Форма поиска
Форма изначально есть в HTML документе. Пользователь будет вводить строку для поиска в текстовое поле, а при сабмите формы необходимо выполнять HTTP-запрос.

```<form class="search-form" id="search-form">
  <input
    type="text"
    name="searchQuery"
    autocomplete="off"
    placeholder="Search images..."
  />
  <button type="submit">Search</button>
</form>
```
## HTTP-запросы
В качестве бэкенда используй публичный API сервиса [Pixabay](https://pixabay.com/api/docs/). Зарегистрируйся, получи свой уникальный ключ доступа и ознакомься с документацией.

Список параметров строки запроса которые тебе обязательно необходимо указать:

- ```key``` - твой уникальный ключ доступа к API.
- ```q``` - термин для поиска. То, что будет вводить пользователь.
- ```image_type``` - тип изображения. Мы хотим только фотографии, поэтому задай значение ```photo```.
- ```orientation``` - ориентация фотографии. Задай значение ```horizontal```.
- ```safesearch``` - фильтр по возрасту. Задай значение ```true```.

В ответе будет массив изображений удовлетворивших критериям параметров запроса. Каждое изображение описывается объектом, из которого тебе интересны только следующие свойства:

- ```webformatURL``` - ссылка на маленькое изображение для списка карточек.
- ```largeImageURL``` - ссылка на большое изображение.
- ```tags``` - строка с описанием изображения. Подойдет для атрибута ```alt```.
- ```likes``` - количество лайков.
- ```views``` - количество просмотров.
- ```comments``` - количество комментариев.
- ```downloads``` - количество загрузок.
- 
Если бэкенд возвращает пустой массив, значит ничего подходящего найдено небыло. В таком случае показывай уведомление с текстом ```"Sorry, there are no images matching your search query. Please try again."```. Для уведомлений используй библиотеку [notiflix](https://github.com/notiflix/Notiflix#readme).
## Галерея и карточка изображения
Элемент ```div.gallery``` изначально есть в HTML документе, и в него необходимо рендерить разметку карточек изображений. При поиске по новому ключевому слову необходимо полностью очищать содержимое галереи, чтобы не смешивать результаты.

```<div class="gallery">
  <!-- Карточки изображений -->
</div>
```

Шаблон разметки карточки одного изображения для галереи.

```<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>
```


