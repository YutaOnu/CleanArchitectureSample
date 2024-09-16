# これは何か

- クリーンアーキテクチャのディレクトリ構成の例です。
- api/src 配下が対象になります。
- 各ファイルの役割などは右記の記事で紹介しています： https://qiita.com/o-y/items/74a9e553c01054ac3623

```
.
├── README.md
├── api
│   ├── Dockerfile
│   ├── node_modules
│   ├── nodemon.json
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── application ← Application Business Rules層
│   │   │   └── usecases
│   │   │       └── users
│   │   │           └── CreateUser.ts
│   │   ├── domain ← Enterprise Business Rules層
│   │   │   ├── gateways
│   │   │   │   └── UserGateway.ts
│   │   │   └── models
│   │   │       └── users
│   │   │           ├── User.ts
│   │   │           ├── UserId.ts
│   │   │           └── UserName.ts
│   │   ├── infra ← Frameworks & Drivers層
│   │   │   ├── db
│   │   │   │   └── mysql
│   │   │   │       ├── database.js
│   │   │   │       └── repositories
│   │   │   │           └── UserRepository.ts
│   │   │   └── http
│   │   │       └── express
│   │   │           ├── adapters
│   │   │           │   └── user
│   │   │           │       └── toCreateRequest.ts
│   │   │           ├── app.ts
│   │   │           ├── bin
│   │   │           │   └── www
│   │   │           ├── injector
│   │   │           │   └── UserInjector.ts
│   │   │           ├── public
│   │   │           │   ├── index.html
│   │   │           │   └── stylesheets
│   │   │           │       └── style.css
│   │   │           └── routes
│   │   │               └── user.ts
│   │   └── interfaces ← Interface Adapters層
│   │       ├── controllers
│   │       │   └── api
│   │       │       └── v1
│   │       │           └── user
│   │       │               └── UserCreateController.ts
│   │       └── requests
│   │           └── api
│   │               └── vi
│   │                   └── user
│   │                       └── UserCreateRequest.ts
│   └── tsconfig.json
└── docker-compose.yml

```

https://izumisy.work/entry/2019/12/12/000521

// https://github.com/little-hands/ddd-q-and-a/issues/34

// 下記をターミナルで実行して、動作確認できます
curl -X POST -H "Content-Type: application/json" \
-d '{
"name": "太郎"
}' \
http://localhost:3000/users
