import initializeDatabase from "../middleware/1-initialize-database";
import destroyDatabase from "../middleware/2-destroy-database";

export default defineEventHandler({
  onRequest: [initializeDatabase],
  onBeforeResponse: [destroyDatabase],
  async handler(event) {
    const body = await readBody(event);
    return await createUser(body);
  },
});
