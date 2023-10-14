import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Articles } from './articles.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Articles)
    private repository: Repository<Articles>,
    private userService: UsersService,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async findAndAddToUser(id: string, userId: string) {
    const article = await this.repository.findOneBy({ id });
    const user = await this.userService.findOne({ id: userId });

    if (!article || !user) {
      throw new NotFoundException();
    }
    article.users = [user];

    await this.repository.save(article);
    return article;
  }

  async findByUser(userId: string) {
    const user = await this.userService.findOne({ id: userId });

    if (!user) {
      throw new NotFoundException();
    }

    const articles = await this.userService.getArticles(userId);

    return articles;
  }
}
