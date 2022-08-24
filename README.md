`# Добро пожаловать в документацию по API!

## Ресурсы
/items -> https://makers-movies.herokuapp.com/items

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

В headers Link вы получите ссылки на первую, предыдущую, следующую и последнюю страницы.

- `GET /items?_page=7` //возратит 7 страницу с 10 элементами
- `GET /items?_page=7&_limit=20` //возратит 7 страницу с 20 элементами

## Полная документация от json-server

[Readme](https://github.com/typicode/json-server)


