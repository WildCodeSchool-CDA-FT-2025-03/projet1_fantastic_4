import { Resolver, Query, Arg } from "type-graphql";
import { MusicsEntity } from "@/entities/musics.entity";
import { MoreThan } from "typeorm";

@Resolver()
class MusicsResolver {
  @Query(() => [MusicsEntity])
  async getAllMusics() {
    return await MusicsEntity.find({ relations: ["category"], take: 8 });
  }

  @Query(() => [MusicsEntity])
  async getNewInMusics() {
    return await MusicsEntity.find({
      where: { releaseDate: MoreThan(new Date("2020-01-01")) },
      relations: ["category"],
      order: { releaseDate: "DESC" },
      take: 8,
    });
  }

  @Query(() => MusicsEntity, { nullable: true })
  async getOneMusic(@Arg("id") id: string): Promise<MusicsEntity | null> {
    const music = await MusicsEntity.findOne({
      where: { id: +id },
      relations: ["category"],
    });

    if (!music) {
      throw new Error(`Music with id ${id} not found`);
    }

    return music;
  }
}

export default MusicsResolver;
