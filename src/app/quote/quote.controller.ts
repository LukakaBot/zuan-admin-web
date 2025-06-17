import { Controller, Get, Query } from '@nestjs/common';
import { QuoteService } from './quote.service';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) { }

  @Get()
  findOne(@Query('id') id: string) {
    return this.quoteService.findOne(+id);
  }

  @Get('all')
  findAll() {
    return this.quoteService.findAll();
  }
}
