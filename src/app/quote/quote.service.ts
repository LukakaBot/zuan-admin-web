import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class QuoteService {
  constructor(private readonly prisma: PrismaService) { }

  async findOne(id: number) {
    if (!id) {
      throw new HttpException('param id is required', HttpStatus.NOT_FOUND);
    }
    const quote = await this.prisma.main.findUnique({
      where: { id },
    });
    return quote;
  }
}
