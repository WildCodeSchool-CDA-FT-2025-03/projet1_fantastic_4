import "./mediaPanel.css";

type panelType = {
  title: string;
  class: string;
};

const MediaPanel = (panel: panelType) => {
  return (
    <section className={`${panel.class} panel-section`}>
      <h1 className="">{panel.title}</h1>
    </section>
  );
};

export default MediaPanel;
