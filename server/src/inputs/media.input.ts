import { ObjectType } from "type-graphql";
import { InputType, Field } from "type-graphql";

@ObjectType()
@InputType()
export class MediaInput {
  @Field()
  name: string;
}
