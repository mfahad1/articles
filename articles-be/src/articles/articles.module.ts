import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.entity';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Articles, User])],
  providers: [ArticlesService, UsersService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
