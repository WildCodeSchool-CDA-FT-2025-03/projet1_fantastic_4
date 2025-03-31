import { Resolver, Query } from "type-graphql";
import { MediaEntity } from "../entities/media.entity";
import { MediaInput } from "../inputs/media.input";

@Resolver(MediaEntity)
class MediaResolver {
  @Query(() => [MediaInput])
  async getAllMedias(): Promise<MediaInput[]> {
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
