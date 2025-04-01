import { Field, InputType, ObjectType } from "type-graphql";

@ObjectType()
@InputType()
export class MediaEntity {
  @Field()
  name: string;
}
