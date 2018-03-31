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

## `POST /rooms`

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
request body
    longitude: 126.705208
    latitude: 37.456257
```

### response

- on success

```json
{
    "success": true,
    "message": "룸 생성 완료",
    "room": {
        "spot": {
            "longitude": 126.705208,
            "latitude": 37.456257
        },
        "users": [
            "5abfdd421a7bf64ca3c32ea1"
        ],
        "_id": "5abfe0d75c26f3fa48e0e9a9",
        "createdAt": "2018-03-31T19:26:15.197Z",
        "updatedAt": "2018-03-31T19:26:15.703Z",
        "__v": 1
    }
}
```

- on failure

```json
{
    "success": false,
    "message": "need body.longitude & body.latitude"
}
```

## `PUT /rooms/join/{user_id}`

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
request params
    user_id: 5abfdd421a7bf64c...
```

### response

- on success

```json
{
    "success": true,
    "message": "참여 완료"
}
```

- on failure

```json
{
    "success": false,
    "message": "룸을 찾을 수 없음."
}
```

## `GET /rooms`

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
    "message": "로드 완료",
    "rooms": [
        {
            "spot": {
                "longitude": 126.705208,
                "latitude": 37.456257
            },
            "users": [
                {
                    "lastLocation": {
                        "latitude": 37.5326,
                        "longitude": 127.024612
                    },
                    "_id": "5abfdd421a7bf64ca3c32ea1",
                    "username": "testid1",
                    "realname": "유동호",
                    "createdAt": "2018-03-31T19:10:58.179Z",
                    "updatedAt": "2018-03-31T19:10:58.179Z",
                    "distance": 29.429796484470515
                }
            ],
            "_id": "5abfe0d75c26f3fa48e0e9a9",
            "createdAt": "2018-03-31T19:26:15.197Z",
            "updatedAt": "2018-03-31T19:26:15.703Z",
            "__v": 1
        }
    ]
}
```

- on failure

```json
{
    "success": false,
    "message": "존재하지 않는 계정."
}
```

## `DELETE /rooms/{room_id}`

### request

```http
request params
    room_id: 5abfe0d75c26f3fa...
```

### response

- on success

```json
{
    "success": false,
    "message": "룸 삭제 완료."
}
```

## `PUT /location`

### request

```http
request headers
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
request body
    longitude: 126.705208
    latitude: 37.456257
```

### response

- on success

```json
{
    "success": true,
    "message": "업데이트 완료",
    "user": {
        "lastLocation": {
            "longitude": 126.705208,
            "latitude": 37.456257
        },
        "_id": "5abfdd421a7bf64ca3c32ea1",
        "username": "testid1",
        "realname": "유동호",
        "createdAt": "2018-03-31T19:10:58.179Z",
        "updatedAt": "2018-03-31T19:45:57.335Z"
    }
}
```

- on failure

```json
{
    "success": true,
    "message": "존재하지 않는 계정"
}
```