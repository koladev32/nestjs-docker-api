# A simple REST API with NestJS, Docker and MongoDB

To start the project, create an `.env` file at the root of the project. If you are using Docker, use the following configurations.

```bash
APP_PORT=3000
MONGODB_URL=mongodb://mongodb:27017/Restaurant
```

If you directly using your working machine and MongoDB installed on your machine

```bash
APP_PORT=3000
MONGODB_URL=mongodb://localhost:27017/Restaurant
```

You can start the project using the following command

```bash
yarn start:dev
```

or just spin the Docker containers:

```bash
docker-compose up --build -d
```
