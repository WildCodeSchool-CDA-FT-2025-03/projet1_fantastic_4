import React, { ReactNode } from "react";
import { Category } from "@/types/category.type";
import "./MediaInfoLayout.css";

type PropsMediaInfoLayout = {
  category: Category;
  title: string;
  summary: string;
  subtitle: string;
  children?: ReactNode;
};

const MediaInfoLayout = ({
  category,
  title,
  summary,
  subtitle,
  children,
}: PropsMediaInfoLayout) => {
  const backgroundColor = `media-info-color-${category}`;
  children = children === children ? children : [];
  return (
    <div className="media-info-layout">
      <section className={`media-info-layout-top ${backgroundColor}`}>
        <h2>{title}</h2>
      </section>
      <section className={`media-info-layout-main ${backgroundColor}`}>
        <div className="media-info-layout-main-left">
          <div className={`media-info-cover media-cover-${category}`}></div>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className={"media-info-layout-description "}>{summary}</div>
      </section>
      {React.Children.toArray(children).map((child, index) => (
        <section key={`media-info-extra-${index}`} className={backgroundColor}>
          {child}
        </section>
      ))}
    </div>
  );
};

export default MediaInfoLayout;
