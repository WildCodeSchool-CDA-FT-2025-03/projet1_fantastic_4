import { GET_GAMES } from "@/schemas/games.schema";
import { Game } from "@/types/game.type";
import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect, useRef, useState } from "react";
import CardMedia from "../Carousel/CardMedia";
import "./InfiniteCardScroll.css";
import { Category } from "@/types/category.type";

type GameCard = Pick<Game, "slug" | "coverUrl" | "category" | "title">;

type GetGameRecoType = {
  getGames: GameCard[];
};

const ITEM_COUNT = 10;

const InfinitCardScroll = () => {
  const [datas, setDatas] = useState([] as GameCard[]);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const observerInstance = useRef<IntersectionObserver | null>(null);
  const finished = useRef(false);
  const page = useRef(1);

  const [loadGames, { loading }] = useLazyQuery<GetGameRecoType>(GET_GAMES, {
    onCompleted: (data) => {
      const count = data.getGames.length;
      if (count < ITEM_COUNT) {
        finished.current = true;
      }
      setDatas((prevData) => [...prevData, ...data.getGames]);
      page.current += 1;
    },
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !loading && !finished.current) {
        loadGames({
          variables: {
            page: page.current,
            limit: ITEM_COUNT,
            order: "name",
            dir: "asc",
          },
        });
      }
    },
    [loadGames, loading],
  );

  useEffect(() => {
    observerInstance.current = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 1.0,
    });

    const currentRef = observerRef.current;
    if (currentRef && observerInstance.current) {
      observerInstance.current.observe(currentRef);
    }

    return () => {
      if (currentRef && observerInstance.current) {
        observerInstance.current.unobserve(currentRef);
      }
      observerInstance.current?.disconnect();
    };
  }, [handleObserver]);

  return (
    <>
      <div className="infinite-scroll">
        {datas &&
          datas.map((e) => {
            return (
              <CardMedia
                key={`infinite-cardmedia-${e.slug}`}
                title={e.title}
                id={e.slug}
                genre={e.category.name}
                coverUrl={e.coverUrl}
                category_name={Category.Games}
              />
            );
          })}
      </div>

      <div ref={observerRef} style={{ height: "10px" }}>
        LA
      </div>
    </>
  );
};

export default InfinitCardScroll;
