import { Resolver, Query } from "type-graphql";
import { MusicsEntity } from "@/entities/musics.entity";

@Resolver()
class MusicsResolver {
  @Query(() => [MusicsEntity])
  async getAllMusics() {
    return await MusicsEntity.find();
  }
}

export default MusicsResolver;
