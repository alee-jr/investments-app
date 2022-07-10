import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TopicsType {
  @Field({ nullable: true })
  topic?: string;

  @Field({ nullable: true })
  relevance_score?: string;
}
