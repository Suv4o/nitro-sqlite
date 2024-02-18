import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: false,
  logging: false,
  subscribers: [],
  entities: ["entity/**/*{.js,.ts}"],
  migrations: ["migrations/**/*{.js,.ts}"],
});

export default dataSource;
