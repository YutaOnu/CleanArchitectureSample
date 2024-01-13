# これは何か

- クリーンアーキテクチャのディレクトリ構成の例です。
- api/src 配下が対象になります。
- 各ファイルの役割などは右記の記事で紹介しています： https://qiita.com/o-y/items/74a9e553c01054ac3623

```
.
├── Dockerfile
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── domain ← Enterprise Business Rules層
│   │   ├── gateways
│   │   │   └── RoadmapGateway.ts
│   │   └── models
│   │       └── Roadmap.ts
│   ├── infra ← Frameworks & Drivers層
│   │   ├── db
│   │   │   └── mysql
│   │   │       ├── database.js
│   │   │       └── repositories
│   │   │           └── RoadmapRepository.ts
│   │   └── http
│   │       └── express
│   │           ├── adapters
│   │           │   └── roadmap
│   │           │       └── toCreateRequest.ts
│   │           ├── app.ts
│   │           ├── bin
│   │           │   └── www
│   │           ├── injector
│   │           │   └── RoadmapInjector.ts
│   │           ├── public
│   │           │   ├── index.html
│   │           │   └── stylesheets
│   │           │       └── style.css
│   │           └── routes
│   │               └── roadmaps.ts
│   ├── interfaces ← Interface Adapters層
│   │   ├── controllers
│   │   │   └── api
│   │   │       └── v1
│   │   │           └── roadmap
│   │   │               └── RoadmapCreateController.ts
│   │   └── requests
│   │       └── api
│   │           └── v1
│   │               └── roadmap
│   │                   └── RoadmapCreateRequest.ts
│   └── usecases ← Application Business Rules層
│       └── roadmap
│           └── CreateRoadmap.ts
└── tsconfig.json

```
