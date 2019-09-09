import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: IUser): Promise<IUser> {
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = user.password;
    return this.userRepository.save(newUser);
  }

  async findAll(): Promise<IUser[]> {
    return this.userRepository.find();
  }
  async updateUser(id: number, user: IUser): Promise<IUser> {
    await this.userRepository.update({ id }, user);
    return await this.userRepository.findOne(id);
  }
  async deleteUser(id: number): Promise<string> {
    const result = await this.userRepository.delete(id);
    return (result.affected === 1) ? 'Delete was successful' : 'Error in deleting';
  }
}
