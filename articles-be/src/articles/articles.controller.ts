import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('articles')
export class ArticlesController {
  constructor(private service: ArticlesService) {}

  @UseGuards(AuthGuard)
  @Get('')
  async findAll() {
    return this.service.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async find(@Param() params: { id: string }, @Request() req) {
    return this.service.findAndAddToUser(params.id, req.user.id);
  }

  @UseGuards(AuthGuard)
  @Get('user/visited')
  async visited(@Request() req) {
    return this.service.findByUser(req.user.id);
  }
}
