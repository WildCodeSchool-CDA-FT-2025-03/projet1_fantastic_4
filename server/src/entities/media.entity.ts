import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class MediaEntity {
  @Field()
  name: string;
}
