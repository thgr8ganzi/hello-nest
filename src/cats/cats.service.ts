import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatServiceProduct(): string {
    return 'hi cat service product';
  }
}
