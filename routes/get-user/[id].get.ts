export default defineEventHandler(async (event) => {
  const userId = Number(getRouterParam(event, "id"));
  return await getUser(userId);
});
