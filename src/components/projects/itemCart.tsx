import Tag from "./tag";

type ItemCardProps = {
  title: string;
  cover: string;
  description: string;
};

export default function ItemCard(props: ItemCardProps) {
  return (
    <div className="item-card">
      <figure>
        <img src={props.cover} alt="" />
      </figure>
      <div className="content">
        <p className="title">{props.title}</p>
        <p>{props.description}</p>
        <hr />
        <div className="tag-list">
          <Tag title={"project tag"} />
        </div>
      </div>
    </div>
  );
}
