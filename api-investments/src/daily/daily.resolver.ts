import { Args, Query, Resolver } from '@nestjs/graphql';
import { DailyService } from './daily.service';
import { DailyArgs } from './dto/daily.args';
import { DailyType } from './dto/daily.type';

@Resolver(() => DailyType)
export class DailyResolver {
  constructor(private readonly dailyService: DailyService) {}

  @Query(() => [DailyType])
  async daily(@Args() dailyArgs: DailyArgs) {
    return this.dailyService.findAll(dailyArgs);
  }
}
