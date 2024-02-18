import initializeDatabase from "../middleware/1-initialize-database";
import destroyDatabase from "../middleware/2-destroy-database";

export default defineEventHandler({
  onRequest: [initializeDatabase],
  onBeforeResponse: [destroyDatabase],
  async handler() {
    return await getUsers();
  },
});
