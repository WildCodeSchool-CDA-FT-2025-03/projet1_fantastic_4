import { Resolver, Query } from "type-graphql";
import { MediaEntity } from "@/entities/media.entity";

@Resolver(MediaEntity)
class MediaResolver {
  @Query(() => [MediaEntity])
  async getAllMedias(): Promise<MediaEntity[]> {
    return ["Blade runner", "Hyperion", "Factorio", "La Danse des canards"].map(
      (e) => {
        return {
          name: e,
        };
      },
    );
  }
}

export default MediaResolver;
