export default defineEventHandler({
  async handler(event) {
    const userId = Number(getRouterParam(event, "id"));
    return await getUser(userId);
  },
});
