import { _ as __decorate, a as __metadata, d as defineEventHandler, r as readBody } from './nitro/node-server.mjs';
import { c as createUser } from './user.mjs';
import { IsString, IsNotEmpty, IsAlpha, IsNumber, Max, validateOrReject } from 'class-validator';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'typeorm';
import 'node:fs';
import 'node:url';

class CreateUserDto {
}
__decorate([
  IsString(),
  IsNotEmpty(),
  IsAlpha(),
  __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
  IsString(),
  IsNotEmpty(),
  IsAlpha(),
  __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
  IsNumber(),
  IsNotEmpty(),
  Max(99),
  __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
const createUserDto = defineEventHandler(async (event) => {
  const userRequestBody = await readBody(event);
  const user = new CreateUserDto();
  user.firstName = userRequestBody.firstName;
  user.lastName = userRequestBody.lastName;
  user.age = userRequestBody.age;
  try {
    await validateOrReject(user);
  } catch (errors) {
    const res = event.node.res;
    res.statusCode = 400;
    res.end(JSON.stringify(errors, null, 2));
  }
});
const createUserDto$1 = createUserDto;

const createUser_post = defineEventHandler({
  onRequest: [createUserDto$1],
  async handler(event) {
    const body = await readBody(event);
    return await createUser(body);
  }
});

export { createUser_post as default };
//# sourceMappingURL=create-user.post.mjs.map
