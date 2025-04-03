import { Field, InputType, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("users")
export class UsersEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field()
  name: string;
}

@InputType()
export class UserInput {
  @Field()
  name: string;
}
