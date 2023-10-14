import { Entity, Column, ManyToMany, PrimaryColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ArticlesDto } from './articles.dto';
import { User } from '../users/users.entity';

@Entity({ name: 'Articles' })
export class Articles extends ArticlesDto {
  @PrimaryColumn()
  id!: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  description: string;

  @ManyToMany(() => User, (user) => user.articles, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  users?: User[];
}
