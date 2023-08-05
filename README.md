# Condobot_API

## Descrição
API destinada ao aplicativo Condobot.


## Base URL
A URL base para todas as solicitações de API é:
```http
https://condobot-api.onrender.com
```


## Endpoints

<!-- EMPLOYEES -->
### Employees
---

```http
GET /employees
```
 Retorna uma lista de todos os funcionários do condomínio.

* ### Response
    Retorna uma lista de objetos JSON com as seguintes propriedades:

    * `id`: o identificador único do funcionário.
    * `name`: o nome do funcionário.
    * `email`: o e-mail do funcionário.
    * `phone`: o número de telefone do funcionário.
    * `password`: a senha do funcionário.
    * `category`: a categoria de funcionário.

* ### Exemplo
    Request:
    ```http
    GET /employees
    ```

    Response:
    ```json
    {
        {
            "id": "fyrfQ23j434Zg3vkvhjvb",
            "name": "José",
            "email": "jose@email.com",
            "phone": "(99) 9 9999-9999",
            "password": "12345",
            "category": 1
        },
        ...
    }
    ```
---


```http
GET /employees/id
```
Retorna o funcionário que possui o `id` informado.

* ### Response
    Retorna um objeto JSON com as seguintes propriedades:

    * `id`: o identificador único do funcionário.
    * `name`: o nome do funcionário.
    * `email`: o e-mail do funcionário.
    * `phone`: o número de telefone do funcionário.
    * `password`: a senha do funcionário.
    * `category`: a categoria de funcionário.

* ### Exemplo
    Request:
    ```http
    GET /employees/fyrfQ23j434Zg3vkvhjvb
    ```

    Response:
    ```json
    {
        "id": "fyrfQ23j434Zg3vkvhjvb",
        "name": "José",
        "email": "jose@email.com",
        "phone": "(99) 9 9999-9999",
        "password": "12345",
        "category": 1
    }
    ```
---


```
POST /employees/create
```
Cria um novo funcionário.

* ### Response
    Retorna o `id` do funcionário criado.

* ### Exemplo
    Request:
    ```json
    {
        "name": "José",
        "email": "jose@email.com",
        "phone": "(99) 9 9999-9999",
        "password": "12345",
        "category": 1
    }
    ```

    Response:
    ```json
    {
        "id": "fyrfQ23j434Zg3vkvhjvb"
    }
    ```
---


```
PUT /employees/update/id
```
Atualiza o funcionário que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    PUT /employees/update/fyrfQ23j434Zg3vkvhjvb
    ```
    ```json
    {
        "name": "José",
        "email": "jose@email.com",
        "phone": "(99) 9 9999-9999",
        "password": "12345"
    }
    ```

    Response:
    ```json
    {}
    ```
---


```
DELETE /employees/delete/id
```
Deleta o funcionário que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    DELETE /employees/delete/fyrfQ23j434Zg3vkvhjvb
    ```

    Response:
    ```json
    {}
    ```
---




<!-- RESIDENTS -->
### Residents
---

```http
GET /residents
```
 Retorna uma lista de todos os moradores do condomínio.

* ### Response
    Retorna uma lista de objetos JSON com as seguintes propriedades:

    * `id`: o identificador único do morador.
    * `name`: o nome do morador.
    * `email`: o e-mail do morador.
    * `phone`: o número de telefone do morador.
    * `password`: a senha do morador.
    * `id_house`: o `id` da casa do morador.
    * `category`: a categoria de morador.

* ### Exemplo
    Request:
    ```http
    GET /residents
    ```

    Response:
    ```json
    {
        {
            "id": "fyrfQ23j434Zg3vkvhjvb",
            "name": "José",
            "email": "jose@email.com",
            "phone": "(99) 9 9999-9999",
            "password": "12345",
            "id_house": "edw2e5DjdUZ7yfup67",
            "category": 2
        },
        ...
    }
    ```
---


```http
GET /residents/id
```
Retorna o morador que possui o `id` informado.

* ### Response
    Retorna um objeto JSON com as seguintes propriedades:

    * `id`: o identificador único do morador.
    * `name`: o nome do morador.
    * `email`: o e-mail do morador.
    * `phone`: o número de telefone do morador.
    * `password`: a senha do morador.
    * `id_house`: o `id` da casa do morador.
    * `category`: a categoria de morador.

* ### Exemplo
    Request:
    ```http
    GET /residents/fyrfQ23j434Zg3vkvhjvb
    ```

    Response:
    ```json
    {
        "id": "fyrfQ23j434Zg3vkvhjvb",
        "name": "José",
        "email": "jose@email.com",
        "phone": "(99) 9 9999-9999",
        "password": "12345",
        "id_house": "edw2e5DjdUZ7yfup67",
        "category": 2
    }
    ```
---


```
POST /residents/create
```
Cria um novo morador.

* ### Response
    Retorna o `id` do morador criado.

* ### Exemplo
    Request:
    ```http
    POST /residents/create
    ```
    ```json
    {
        "name": "José",
        "email": "jose@email.com",
        "phone": "(99) 9 9999-9999",
        "password": "12345",
        "id_house": "edw2e5DjdUZ7yfup67",
        "category": 2
    }
    ```

    Response:
    ```json
    {
        "id": "fyrfQ23j434Zg3vkvhjvb"
    }
    ```
---


```
PUT /residents/update/id
```
Atualiza o morador que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    PUT /residents/update/fyrfQ23j434Zg3vkvhjvb
    ```
    ```json
    {
        "name": "José",
        "email": "jose@email.com",
        "phone": "(99) 9 9999-9999",
        "password": "12345",
        "id_house": "edw2e5DjdUZ7yfup67"
    }
    ```

    Response:
    ```json
    {}
    ```
---


```
DELETE /residents/delete/id
```
Deleta o morador que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    DELETE /residents/delete/fyrfQ23j434Zg3vkvhjvb
    ```

    Response:
    ```json
    {}
    ```
---




<!-- HOUSES -->
### Houses
---

```http
GET /houses
```
 Retorna uma lista de todas as casas do condomínio.

* ### Response
    Retorna uma lista de objetos JSON com as seguintes propriedades:

    * `id`: o identificador único da casa.
    * `number`: o número da casa.
    * `description`: a descrição da casa.
    * `lat_waypoints`: a latitude dos pontos do caminho da casa.
    * `lng_waypoints`: a longitude dos pontos do caminho da casa.

* ### Exemplo
    Request:
    ```http
    GET /houses
    ```

    Response:
    ```json
    {
        {
            "id": "dStes564ew4e3udtyfZ",
            "number": 304,
            "description": "Quadra B",
            "lat_waypoints": "-122.08399783819915 -122.08389859646559 ... ",
            "lng_waypoints": "37.4219992542594 37.42202268601999 ... "
        },
        ...
    }
    ```
---


```http
GET /houses/id
```
Retorna a casa que possui o `id` informado.

* ### Response
    Retorna um objeto JSON com as seguintes propriedades:

    * `id`: o identificador único da casa.
    * `number`: o número da casa.
    * `description`: a descrição da casa.
    * `lat_waypoints`: a latitude dos pontos do caminho da casa.
    * `lng_waypoints`: a longitude dos pontos do caminho da casa.

* ### Exemplo
    Request:
    ```http
    GET /houses/dStes564ew4e3udtyfZ
    ```

    Response:
    ```json
    {
        "id": "dStes564ew4e3udtyfZ",
        "number": 304,
        "description": "Quadra B",
        "lat_waypoints": "-122.08399783819915 -122.08389859646559 ... ",
        "lng_waypoints": "37.4219992542594 37.42202268601999 ... "
    },
    ```
---


```
POST /houses/create
```
Cria uma nova casa.

* ### Response
    Retorna o `id` da casa criada.

* ### Exemplo
    Request:
    ```http
    POST /houses/create
    ```
    ```json
    {
        "number": 304,
        "description": "Quadra B",
        "lat_waypoints": "-122.08399783819915 -122.08389859646559 ... ",
        "lng_waypoints": "37.4219992542594 37.42202268601999 ... "
    }
    ```

    Response:
    ```json
    {
        "id": "dStes564ew4e3udtyfZ"
    }
    ```
---


```
PUT /houses/update/id
```
Atualiza a casa que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    PUT /houses/update/dStes564ew4e3udtyfZ
    ```
    ```json
    {
        "number": 304,
        "description": "Quadra B",
        "lat_waypoints": "-122.08399783819915 -122.08389859646559 ... ",
        "lng_waypoints": "37.4219992542594 37.42202268601999 ... "
    }
    ```

    Response:
    ```json
    {}
    ```
---


```
DELETE /houses/delete/id
```
Deleta a casa que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    DELETE /houses/delete/dStes564ew4e3udtyfZ
    ```

    Response:
    ```json
    {}
    ```
---


### Deliveries
---

```http
GET /deliveries
```
Retorna uma lista de todas as entregas do condomínio.

* ### Response
    Retorna uma lista de objetos JSON com as seguintes propriedades:

    * `id`: o identificador único da entrega.
    * `description`: a descrição da encomenda.
    * `sender`: o remetente da encomenda.
    * `id_employee`: o `id` do funcionário que registrou a encomenda.
    * `id_resident`: o `id` do morador que receberá a encomenda (destinatário).
    * `date_condo_reception`: a data que a encomenda foi recebida na portaria do condomínio.
    * `accepted`: o status da entrega.
    * `date_accepted`: a data que a entrega foi aceita pelo morador.

* ### Exemplo
    Request:
    ```http
    GET /deliveries
    ```

    Response:
    ```json
    {
        {
            "id": "hgdf7qwq6tyr78Azhjb",
            "description": "Compras semanais",
            "sender": "Mercadinho",
            "id_employee": "irY8l9erF1uy79gZkAfhb",
            "id_resident": "jh6idg7qTervbjhb8e3tX",
            "date_condo_reception": 1691262669086,
            "accepted": false,
            "date_accepted": 0
        },
        ...
    }
    ```
---


```http
GET /deliveries/accepted
```
Retorna uma lista de todas as entregas aceitas do condomínio.

* ### Response
    Retorna uma lista de objetos JSON com as seguintes propriedades:

    * `id`: o identificador único da entrega.
    * `description`: a descrição da encomenda.
    * `sender`: o remetente da encomenda.
    * `id_employee`: o `id` do funcionário que registrou a encomenda.
    * `id_resident`: o `id` do morador que receberá a encomenda (destinatário).
    * `date_condo_reception`: a data que a encomenda foi recebida na portaria do condomínio.
    * `accepted`: o status da entrega.
    * `date_accepted`: a data que a entrega foi aceita pelo morador.

* ### Exemplo
    Request:
    ```http
    GET /deliveries/accepted
    ```

    Response:
    ```json
    {
        {
            "id": "hgdf7qwq6tyr78Azhjb",
            "description": "Compras semanais",
            "sender": "Mercadinho",
            "id_employee": "irY8l9erF1uy79gZkAfhb",
            "id_resident": "jh6idg7qTervbjhb8e3tX",
            "date_condo_reception": 1691262669086,
            "accepted": true,
            "date_accepted": 1691263121254
        },
        ...
    }
    ```
---


```http
GET /deliveries/id
```
Retorna a entrega que possui o `id` informado.

* ### Response
    Retorna um objeto JSON com as seguintes propriedades:

    * `id`: o identificador único da entrega.
    * `description`: a descrição da encomenda.
    * `sender`: o remetente da encomenda.
    * `id_employee`: o `id` do funcionário que registrou a encomenda.
    * `id_resident`: o `id` do morador que receberá a encomenda (destinatário).
    * `date_condo_reception`: a data que a encomenda foi recebida na portaria do condomínio.
    * `accepted`: o status da entrega.
    * `date_accepted`: a data que a entrega foi aceita pelo morador.

* ### Exemplo
    Request:
    ```http
    GET /deliveries/hgdf7qwq6tyr78Azhjb
    ```

    Response:
    ```json
    {
        "id": "hgdf7qwq6tyr78Azhjb",
        "description": "Compras semanais",
        "sender": "Mercadinho",
        "id_employee": "irY8l9erF1uy79gZkAfhb",
        "id_resident": "jh6idg7qTervbjhb8e3tX",
        "date_condo_reception": 1691262669086,
        "accepted": false,
        "date_accepted": 0
    },
    ```
---


```
POST /deliveries/create
```
Cria uma nova entrega.

* ### Response
    Retorna o `id` da entrega criada.

* ### Exemplo
    Request:
    ```http
    POST /deliveries/create
    ```
    ```json
    {
        "description": "Compras semanais",
        "sender": "Mercadinho",
        "id_employee": "irY8l9erF1uy79gZkAfhb",
        "id_resident": "jh6idg7qTervbjhb8e3tX",
        "date_condo_reception": 1691262669086,
        "accepted": false,
        "date_accepted": 0
    }
    ```

    Response:
    ```json
    {
        "id": "hgdf7qwq6tyr78Azhjb"
    }
    ```
---


```
PUT /deliveries/update/id
```
Atualiza a entrega que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    PUT /deliveries/update/hgdf7qwq6tyr78Azhjb
    ```
    ```json
    {
        "description": "Compras semanais",
        "sender": "Mercadinho",
        "id_employee": "irY8l9erF1uy79gZkAfhb",
        "id_resident": "jh6idg7qTervbjhb8e3tX",
        "date_condo_reception": 1691262669086,
        "accepted": true,
        "date_accepted": 1691263121254
    }
    ```

    Response:
    ```json
    {}
    ```
---


```
DELETE /deliveries/delete/id
```
Deleta a entrega que possui o `id` informado.

* ### Response
    Possui retorno vazio.

* ### Exemplo
    Request:
    ```http
    DELETE /deliveries/delete/hgdf7qwq6tyr78Azhjb
    ```

    Response:
    ```json
    {}
    ```
---






