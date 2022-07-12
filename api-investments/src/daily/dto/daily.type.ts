import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DailyType {
  @Field({ nullable: true })
  open?: string;

  @Field({ nullable: true })
  high?: string;

  @Field({ nullable: true })
  low?: string;

  @Field({ nullable: true })
  close?: string;

  @Field({ nullable: true })
  volume?: string;

  @Field({ nullable: true })
  date?: string;
}
