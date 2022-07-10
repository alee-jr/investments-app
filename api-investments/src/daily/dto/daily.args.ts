import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class DailyArgs {
  @Field()
  function: string;

  @Field()
  symbol: string;

  @Field({ nullable: true })
  outputsize?: string;

  @Field({ nullable: true })
  datatype?: string;

  @Field()
  apikey: string;
}
