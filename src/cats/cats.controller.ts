import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { PositiveIntPipe } from '../common/positiveInt.pipe';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    console.log('ing.....');
    return { cats: 'all cats' };
  }
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    return { id: param };
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
