import {
  validateOrReject,
  Max,
  IsString,
  IsNotEmpty,
  IsAlpha,
  IsNumber,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  lastName: string;

  @IsNumber()
  @IsNotEmpty()
  @Max(99)
  age: number;
}

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

export default createUserDto;
