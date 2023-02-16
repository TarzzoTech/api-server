# API Server

    An opensource api with multiple API data provider built on top of json-server.

### Guide:

    Below example is written with using Javascript [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

### Usage:

```js
fetch('https://api-server-y4qj.onrender.com/products/eb7969b8-fa39-5a1d-a473-558f8e20ce52')
        .then((response) =&gt; response.json())
        .then((json) =&gt; console.log(json));
```

#### Output:

```json
{
  "id": "017f132c-c5cf-5151-bf84-60622c43af9b",
  "name": "Baby shower shirts",
  "eCommerce": "eBay",
  "price": "$157.09",
  "description": "Wuk haof wo etdavu vedzote iboadulo suuv.",
  "discount": {
    "cardType": "Solo"
  }
}
```

---

---

## Available API's:

`/user-logins`

`/cards`

`/employees`

`/profiles`

`/locations`

`/products`

`/reviews`

`/quotes`

`/sea-animals`

`/desert-animals`

`/grassland-animas`

`/forest-animals`

`/farm-animals`

`/pet-animals`

`/zoo-animals`

`/posts`

`/todos`

To access and modify resources, you can use any **HTTP method**:

`GET`

`POST`

`PUT`

`PATCH`

`DELETE`

`OPTIONS`

---

---

Powered by `json-server` with **Tarzzo Tech**
