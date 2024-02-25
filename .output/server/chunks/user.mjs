import { c as dataSource, U as User } from './nitro/node-server.mjs';

async function createUser(body) {
  const user = new User();
  user.firstName = body.firstName;
  user.lastName = body.lastName;
  user.age = body.age;
  try {
    await dataSource.manager.save(user);
    return { success: true, message: "User created" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to create user" };
  }
}
async function getUsers() {
  try {
    const users = await dataSource.manager.find(User);
    return { users };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to get users" };
  }
}
async function getUser(id) {
  try {
    const user = await dataSource.manager.findOne(User, {
      where: { id }
    });
    return { user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to get users" };
  }
}

export { getUsers as a, createUser as c, getUser as g };
//# sourceMappingURL=user.mjs.map
