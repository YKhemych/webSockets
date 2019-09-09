import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() userDto: UserDto): Promise<IUser> {
    return this.usersService.createUser(userDto);
  }
  @Put(':id')
  updateUser(@Param('id') id, @Body() userDto: UserDto): Promise<IUser> {
    return this.usersService.updateUser(id, userDto);
  }
  @Delete(':id')
  deleteUser(@Param('id') id): Promise<string> {
    return this.usersService.deleteUser(id);
  }
  @Get()
  findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }
}
