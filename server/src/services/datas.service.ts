import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [],
  synchronize: true, //pas en prod
});

export default dataSource;
