import { Resolver, Query } from "type-graphql";
import { CategoriesEntity } from "@/entities/categories.entity";

@Resolver()
class CategoriesResolver {
  @Query(() => [CategoriesEntity])
  async getAllCategories() {
    return await CategoriesEntity.find();
  }
}

export default CategoriesResolver;
