
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
### Custom Migrations
I used TypeOrm migrations and custom scripts on package.json to create migrations files.
First one will check diferences between entities and database and create migration file with timestamp

second one is for migration to database.

The configuration for the database is in a ts file called ormconfig.ts

```bash
 $ npm run typeorm:migrate migration name
 $ npm run typeorm:run             
```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
