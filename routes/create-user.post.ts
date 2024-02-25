import createUserDto from "../dtos/create-user.dto";

export default defineEventHandler({
  onRequest: [createUserDto],
  async handler(event) {
    const body = await readBody(event);
    return await createUser(body);
  },
});
