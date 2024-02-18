import dataSource from "../config/typeorm.config";
import { User } from "../entity/User";

export async function createUser(body: User) {
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

export async function getUsers() {
  try {
    const users = await dataSource.manager.find(User);
    return { users };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to get users" };
  }
}

export async function getUser(id: number) {
  try {
    const user = await dataSource.manager.findOne(User, {
      where: { id },
    });
    return { user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to get users" };
  }
}
