import {
  Controller,
  Delete,
  Get,
  HttpException, Param, ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters
} from "@nestjs/common";
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../http-exception.filter';
import { PositiveIntPipe } from "../common/positiveInt.pipe";

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): string {
    throw new HttpException('api is broken', 401);
    return 'all cats';
  }
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number): string {
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
