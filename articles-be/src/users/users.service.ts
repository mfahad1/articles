import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './users.entity';

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

type FindParam = RequireAtLeastOne<{
  id?: string;
  name?: string;
  email?: string;
}>;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(param: FindParam): Promise<User | null> {
    return this.repository.findOneBy(param);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async create(name: string, email: string, password: string) {
    return this.repository.save({ name, email, password });
  }

  async getArticles(id: string) {
    return this.repository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.articles', 'articles')
      .where({ id })
      .getOne();
  }
}
