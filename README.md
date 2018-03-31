# gidal-server

## `POST /users`

### response

```http
request body
    username: testid
    realname: 김이름
    password: Lo8wffwQ@
```

### response

- on success

```json
{
    "status": true,
    "message": "계정생성 완료",
    "user": {
        "lastLocation": {
            "latitude": 37.5326,
            "longitude": 127.024612
        },
        "_id": "5abfdd421a7bf64ca3c32ea1",
        "username": "testid1",
        "realname": "유동호",
        "createdAt": "2018-03-31T19:10:58.179Z",
        "updatedAt": "2018-03-31T19:10:58.179Z",
        "__v": 0
    }
}
```

- on failure

```json
{
    "success": false,
    "message": "user validation failed: password: Path `password` is required."
}
```

## `GET /users/{user_id}`

### request

```http
request params
    user_id: 5abfdd421a7bf64ca3c...
```

### response

- on success

```json
{
    "success": true,
    "message": "로드 완료",
    "user": {
        "lastLocation": {
            "latitude": 37.5326,
            "longitude": 127.024612
        },
        "_id": "5abfdd421a7bf64ca3c32ea1",
        "username": "testid1",
        "realname": "유동호",
        "createdAt": "2018-03-31T19:10:58.179Z",
        "updatedAt": "2018-03-31T19:10:58.179Z"
    }
}
```

- on failure

```json
{
    "success": false,
    "message": "존재하지 않는 계정"
}
```

## `POST /sign`

### request

```http
request body
    username: testid1
    password: lAudilsF&A
```

### response

- on success

```json
{
    "status": true,
    "message": "로그인 완료",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...8"
}
```

- on failure

```json
{
    "success": false,
    "message": "존재하지 않는 계정"
}
```

## `GET /sign`

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
```

### response

- on success

```json
{
    "success": true,
    "message": "불러오기 완료",
    "user": {
        "lastLocation": {
            "latitude": 37.5326,
            "longitude": 127.024612
        },
        "_id": "5abfdd421a7bf64ca3c32ea1",
        "username": "testid1",
        "realname": "유동호",
        "createdAt": "2018-03-31T19:10:58.179Z",
        "updatedAt": "2018-03-31T19:10:58.179Z"
    }
}
```

- on failure

```json
{
    "success": false,
    "message": "존재하지 않는 계정"
}
```

## 