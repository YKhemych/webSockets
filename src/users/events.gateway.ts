import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

@WebSocketGateway()
export class EventsGateway {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('users')
  async findAll() {
    const users = await this.userRepository.find();
    this.server.emit('users', users);
  }

}
