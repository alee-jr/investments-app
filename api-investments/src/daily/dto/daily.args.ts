import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class DailyArgs {
  @Field()
  symbol: string;

  @Field({ nullable: true })
  outputsize?: string;

  @Field({ nullable: true })
  datatype?: string;
}
