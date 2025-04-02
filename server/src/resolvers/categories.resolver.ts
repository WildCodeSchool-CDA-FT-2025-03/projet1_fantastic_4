import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { CategoriesEntity, CategoryInput } from "@/entities/categories.entity";
import { log } from "console";

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

  @Mutation(() => Int)
  async createCategory(
    @Arg("category") category: CategoryInput,
  ): Promise<number> {
    const newCategory = new CategoriesEntity();
    newCategory.name = category.name;
    await newCategory.save();
    log(newCategory);
    return newCategory.id;
  }

  @Mutation(() => Int)
  async editCategory(
    @Arg("id", () => Int) id: number,
    @Arg("category") category: CategoryInput,
  ): Promise<number> {
    const existingCategory = await CategoriesEntity.findOne({ where: { id } });
    if (!existingCategory) {
      throw new Error("Category not found");
    }

    existingCategory.name = category.name;
    await existingCategory.save();
    log(existingCategory);
    return existingCategory.id;
  }

  @Query(() => Boolean)
  async deleteCategory(@Arg("id") id: number): Promise<boolean> {
    const category = await CategoriesEntity.findOneBy({ id: id });
    if (!category) {
      throw new Error("Category not found");
    }
    await category.remove();
    return true;
  }
}

export default CategoriesResolver;
