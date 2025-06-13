import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class QuoteService {
  constructor(private readonly prisma: PrismaService) { }

  async findOne(id: number) {
    const quote = await this.prisma.main.findUnique({
      where: { id },
    });
    return quote;
  }
}
