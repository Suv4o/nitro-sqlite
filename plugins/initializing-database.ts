import dataSource from "../config/typeorm.config";

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook("request", async () => {
    await dataSource.initialize();
  });
  nitro.hooks.hook("beforeResponse", async () => {
    await dataSource.destroy();
  });
});
