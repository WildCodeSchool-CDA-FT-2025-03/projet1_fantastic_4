import { UsersEntity } from "@/entities/users.entity";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class UsersResolver {
  @Query(() => [UsersEntity])
  async getAllUsers() {
    return await UsersEntity.find();
  }
}
