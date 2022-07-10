import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DailyResolver } from './daily.resolver';
import { DailyService } from './daily.service';

@Module({
  imports: [HttpModule],
  providers: [DailyResolver, DailyService],
})
export class DailyModule {}
