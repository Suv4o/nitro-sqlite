import dataSource from "../config/typeorm.config";

const destroyDatabase = defineEventHandler(async () => {
  await dataSource.destroy();
});

export default destroyDatabase;
