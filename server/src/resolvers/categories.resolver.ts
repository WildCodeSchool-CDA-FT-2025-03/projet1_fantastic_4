import { Resolver, Query, Arg } from "type-graphql";
import { CategoriesEntity } from "@/entities/categories.entity";

@Resolver()
class CategoriesResolver {
  @Query(() => [CategoriesEntity])
  async getAllCategories() {
    return await CategoriesEntity.find();
  }

  @Query(() => CategoriesEntity)
  async getCategoriesById(@Arg("id") id: number): Promise<CategoriesEntity> {
    const category = await CategoriesEntity.findOneBy({ id: id });
    if (!category) {
      throw new Error("Category not found");
    }
    return category;
  }
}

export default CategoriesResolver;
