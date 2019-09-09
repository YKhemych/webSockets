import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../core/database.module';
import { EventsGateway } from '../users/events.gateway';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UsersService, EventsGateway],
  controllers: [UsersController],
})
export class UsersModule {}
