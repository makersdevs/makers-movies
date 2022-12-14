# Добро пожаловать в документацию по API!

## Ресурсы
- `/items` -> https://makers-movies.herokuapp.com/items

Для доступа и изменения ресурсов вы можете использовать любой HTTP метод:

`GET` `POST` `PUT` `PATCH` `DELETE` `OPTIONS`


## Маршруты

- `GET /items`
- `GET /items/1`
- `POST /items`
- `PUT /items/1`
- `PATCH /items/1`
- `DELETE /items/1`

## Пагинация

Используйте `_page` для пагинации и, при необходимости, `_limit` для лимитрования возвращаемых данных в одной странице.

В header `link` вы получите ссылки на первую, предыдущую, следующую и последнюю страницы. В header `x-total-count` общее кол-во элементов

- `GET /items?_page=7` // [возратит 7 страницу с 10 элементами](https://makers-movies.herokuapp.com/items?_page=7)
- `GET /items?_page=7&_limit=20` // [возратит 7 страницу с 20 элементами](https://makers-movies.herokuapp.com/items?_page=7&_limit=20)

## Полная документация от json-server

[Readme](https://github.com/typicode/json-server)

# Предупреждения
*Данные фильмов взято с IMDb API, не использовать для коммерческих проектов. Для коммерческих целей можете использовать [IMDb API](https://imdb-api.com/)



