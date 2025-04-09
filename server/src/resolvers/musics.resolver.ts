import { Resolver, Query } from "type-graphql";
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
}

export default MusicsResolver;
