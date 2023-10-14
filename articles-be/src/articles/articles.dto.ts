import { IsNotEmpty } from 'class-validator';

export class ArticlesDto {
  @IsNotEmpty()
  link: string;

  @IsNotEmpty()
  name: string;
}
