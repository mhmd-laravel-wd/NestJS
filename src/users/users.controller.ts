import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  // Req,
} from '@nestjs/common';
import { CreateUserInput } from './dtos/create-user.dto';
import { UpdateUserInput } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import UserService from './users.service';
@Controller('users')
export default class UsersController {
  constructor(private readonly userService: UserService) {}

  private users: UserEntity[] = [];
  @Get()
  index(): UserEntity[] {
    return this.users;
  }
  @Get(':id')
  show(@Param('id') id: string) {
    return this.users.find((user) => user.id === id);
  }

  @Post()
  store(@Body() createUserInput: CreateUserInput) {
    const newUser = { ...createUserInput, id: uuid() };
    this.users.push(newUser);
    return newUser;
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() updateUserInput: UpdateUserInput) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...updateUserInput };
    return this.users[index];
  }

  @Delete(':id')
  @HttpCode(204)
  destroy(@Param('id') id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
