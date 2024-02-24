export default defineEventHandler({
  async handler() {
    return await getUsers();
  },
});
