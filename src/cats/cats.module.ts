import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers:[CatsController],
  providers:[CatsService],
  imports:[],
  exports:[CatsService],
})
export class CatsModule {}
