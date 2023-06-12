import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): string {
    return 'all cats';
  }
  @Get(':id')
  getOneCat(): string {
    return 'one cat';
  }
  @Post()
  createCat(): string {
    return 'create cat';
  }
  @Put(':id')
  updateCat(): string {
    return 'update cat';
  }
  @Patch(':id')
  updatePartialCat(): string {
    return 'update partial cat';
  }
  @Delete(':id')
  deleteCat(): string {
    return 'delete cat';
  }
}
