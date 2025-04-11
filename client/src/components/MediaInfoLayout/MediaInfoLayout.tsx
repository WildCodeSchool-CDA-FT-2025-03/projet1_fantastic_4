import { ReactNode, Children } from "react";
import { Category } from "@/types/category.type";
import "./MediaInfoLayout.css";
import GamesAddFav from "@/pages/games/GamesAddFav";

type PropsMediaInfoLayout = {
  category: Category;
  title: string;
  summary: string;
  subtitle: string;
  slug?: string;
  addFav?: boolean;
  url?: string;
  children?: ReactNode;
};

const MediaInfoLayout = ({
  category,
  title,
  summary,
  subtitle,
  slug,
  addFav,
  url,
  children = [],
}: PropsMediaInfoLayout) => {
  const backgroundColor = `media-info-color-${category}`;
  children = children === children ? children : [];

  return (
    <div className="media-info-layout">
      <section className={`media-info-layout-top ${backgroundColor}`}>
        <h2>{title}</h2>
        {addFav && slug && <GamesAddFav user="user-1" slug={slug} />}
      </section>
      <section className={`media-info-layout-main ${backgroundColor}`}>
        <div className="media-info-layout-main-left">
          <div
            title={`cover: ${title}`}
            className={`media-info-cover media-cover-${category}`}
          >
            {url && (
              <img
                title={`cover: ${title}`}
                className="media-info-cover-img"
                src={url}
              />
            )}
          </div>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className={"media-info-layout-description "}>{summary}</div>
      </section>
      {Children.toArray(children).map((child, index) => (
        <section key={`media-info-extra-${index}`} className={backgroundColor}>
          {child}
        </section>
      ))}
    </div>
  );
};

export default MediaInfoLayout;
