import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { CreateUserTable1708245318068 } from "../migrations/1708245318068-create-user-table";

const dataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: false,
  logging: false,
  subscribers: [],
  entities: [User],
  migrations: [CreateUserTable1708245318068],
});

export default dataSource;
