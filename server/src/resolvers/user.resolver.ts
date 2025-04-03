import { UsersEntity, UserInput } from "@/entities/users.entity";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => [UsersEntity])
  async getAllUsersEntity() {
    return await UsersEntity.find();
  }

  @Query(() => UsersEntity)
  async getUserById(@Arg("id") id: number) {
    return await UsersEntity.findOneBy({ id });
  }

  @Mutation(() => Int)
  async createUser(@Arg("user") user: UserInput) {
    const newUser = new UsersEntity();
    newUser.name = user.name;

    await newUser.save();

    return newUser.id;
  }

  @Mutation(() => String)
  async deleteUser(@Arg("id") id: number) {
    const userExiste = await UsersEntity.findOneBy({ id });

    if (!userExiste) {
      return `user ${id} not found`;
    }
    userExiste.remove();
    return `user ${id} deleted`;
  }
}
