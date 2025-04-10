import { GET_GAMES } from "@/schemas/games.schema";
import { Game } from "@/types/game.type";
import { useLazyQuery } from "@apollo/client";
import { useCallback, useEffect, useRef, useState } from "react";
import "./InfiniteCardScroll.css";

type GameCard = Pick<Game, "slug" | "coverUrl" | "category" | "title">;

type GetGameRecoType = {
  getGames: GameCard[];
};

const InfinitCardScroll = () => {
  const [datas, setDatas] = useState([] as GameCard[]);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const observerInstance = useRef<IntersectionObserver | null>(null);
  const finished = useRef(false);
  const page = useRef(1);

  const [loadGames, { loading }] = useLazyQuery<GetGameRecoType>(GET_GAMES, {
    // variables: { page: page.current, limit: 10, order: "name", dir: "asc" },
    onCompleted: (data) => {
      const count = data.getGames.length;
      if (count < 10) {
        finished.current = true;
      }
      setDatas((prevData) => [...prevData, ...data.getGames]);
      page.current += 1;

      if (
        observerRef.current &&
        observerInstance.current &&
        !finished.current
      ) {
        observerInstance.current.observe(observerRef.current);
      }
    },
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const [entry] = entries;
      if (entry.isIntersecting && !loading && !finished.current) {
        observer.unobserve(entry.target);
        loadGames({
          variables: {
            page: page.current,
            limit: 10,
            order: "name",
            dir: "asc",
          },
        });
      }
    },
    [loadGames, loading],
  );
  useEffect(() => {
    // Créer un observer qu'une seule fois au montage
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
      <div className="test-test">
        {datas &&
          datas.map((e) => {
            return (
              <div key={`iii ${e.title}`} className="test-b">
                {e.title}
              </div>
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
