# これは何か

- クリーンアーキテクチャのサンプルコードです。。
- app/src 配下が特に対象になります。
- 各ファイルの役割などは右記の記事で紹介しています： https://qiita.com/o-y/items/74a9e553c01054ac3623

```
├── Dockerfile
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── domain ← Enterprise Business Rules層
│   │   ├── gateway
│   │   │   └── user
│   │   │       └── UserGateway.ts
│   │   └── model
│   │       └── user
│   │           ├── User.ts
│   │           ├── UserId.ts
│   │           └── UserName.ts
│   ├── errors
│   │   └── InvalidArgumentError.ts
│   ├── infra ← Frameworks & Drivers層
│   │   ├── db
│   │   │   └── mysql
│   │   │       └── database.js
│   │   ├── http
│   │   │   └── express
│   │   │       ├── adapters
│   │   │       │   └── request
│   │   │       │       └── user
│   │   │       │           └── UserCreateRequestAdapter.ts
│   │   │       ├── app.ts
│   │   │       ├── bin
│   │   │       │   └── www
│   │   │       ├── routes
│   │   │       │   └── users.ts
│   │   │       └── validators
│   │   │           └── user
│   │   │               └── UserCreateValidator.ts
│   │   ├── injectors
│   │   │   └── UserInjector.ts
│   │   └── repositories
│   │       └── user
│   │           └── UserRepository.ts
│   ├── interface ← Interface Adapters層
│   │   ├── adapters
│   │   │   └── user
│   │   │       └── IUserCreateRequestAdapter.ts
│   │   ├── controllers
│   │   │   └── user
│   │   │       └── UserCreateController.ts
│   │   ├── presenters
│   │   │   └── user
│   │   │       ├── IUserCreatePresenter.ts
│   │   │       └── UserCreatePresenter.ts
│   │   ├── requests
│   │   │   └── user
│   │   │       └── UserCreateRequest.ts
│   │   └── responses
│   │       └── user
│   │           └── UserCreateResponse.ts
│   └── usecase ← Application Business Rules層
│       └── user
│           └── create
│               ├── UserCreate.ts
│               ├── UserCreateInputDTO.ts
│               └── UserCreateOutputDTO.ts
└── tsconfig.json

```

// 下記をターミナルで実行して、動作確認できます
curl -X POST -H "Content-Type: application/json" \
-d '{
"name": "太郎"
}' \
http://localhost:3000/users
