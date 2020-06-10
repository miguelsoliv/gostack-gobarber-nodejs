## Where to Start: File Creation

Examples shown using [TypeORM](https://github.com/typeorm/typeorm) (another alternative is to use [Mongoose](https://github.com/Automattic/mongoose) for example)

* Create module folders, e.g.:
  - notifications: dtos, infra (typeorm [schemas]), repositories, services
  - Final structure:
  ```
  notifications
  └───dtos
  └───infra
  |   └───typeorm
  |         └───repositories
  |         └───schemas
  └───repositories
  └───services
  ```
* Create entity/schema file, e.g.:
  - In `modules/notifications/infra/typeorm/schemas/`
  - Notifications.ts
* Create repository interface, e.g.:
  - In `modules/notifications/repositories/`
  - INotificationsRepository.ts
* Create DTO (if your repository receives more than 1 data), e.g.:
  - In `modules/notifications/dtos/`
  - ICreateNotificationDTO.ts
* Create service, e.g.:
  - In `modules/appointments/services/`
  - ListProvidersService.ts
* Create TypeORM repository, e.g.:
  - In `modules/notifications/infra/typeorm/repositories/`
  - NotificationsRepository.ts
* Register NotificationsRepository.ts in `shared/container/index.ts` for dependency injection

## Using MongoDB with Docker

* `docker run --name mongodb -p 27017:27017 -d -t mongo`
* [MongoDB Compass Community]:
  - "New connection"
  - `mongodb://localhost:27017` OR
  - `mongodb://192.168.99.100:27017` (using docker with Windows)
* `yarn add mongodb`

## Installing Library for Route Data Validation

* `yarn add celebrate` [`yarn add -D @types/hapi__joi`]

## Using Redis (to cache Queries) with Docker

* `docker run --name redis -p 6379:6379 -d -t redis:alpine`
* `yarn add ioredis` [`@types/ioredis`]

## Before Production

* Create `.env` and `.env.example`
* Ignore `ormconfig.json` and `.env` in `.gitignore`

## Security: Avoiding Brute Force/DDoS Attack

* [node-rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible): `yarn add rate-limiter-flexible`
* Using redis to save IP and number of requests in db (default save behavior: saved in memory): `yarn add redis` [@types/redis]

## Troubleshooting

* Error in Test Files:
  - Remember to change the dates (if necessary) in test files
* Couldn't download `redis:alpine`:
  - Run:
  ```
  docker-machine ssh default
  sudo vi /etc/resolv.conf
  ```
  - Press `Insert` to edit file
  - Change nameserver to 8.8.8.8
  - Hit `ESC` and `Shift + Z` to save file
  - Restart docker service: `docker-machine restart`
