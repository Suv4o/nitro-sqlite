import dataSource from "../config/typeorm.config";

const initializeDatabase = defineEventHandler(async () => {
  await dataSource.initialize();
});

export default initializeDatabase;
