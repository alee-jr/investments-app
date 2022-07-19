import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DailyResolver } from './daily.resolver';
import { DailyService } from './daily.service';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [DailyResolver, DailyService],
})
export class DailyModule {}
