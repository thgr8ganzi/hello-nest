import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService,CatsService],
})
export class AppModule {}
