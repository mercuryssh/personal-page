import CardFace from "./cardFace";
import Tag from "./tag";

type ItemCardProps = {
  title: string;
  cover: string;
  description: string;
  url: string;
  tags: Array<any>;
};

export default function ItemCard(props: ItemCardProps) {
  const tags = Object.keys(props.tags)
  return (
    <div className="item-card">
      <CardFace links={[props.url]}>
        <figure>
          <img src={props.cover} alt="" />
        </figure>
        <p>
          <a className="title" href="" >{props.title}</a>
        </p>
        <hr />
        <p>{props.description}</p>
        <div className="tag-list">
          {tags.map((item, index) => (
            <Tag title={item} key={index} />
          ))}
        </div>
      </CardFace>
    </div>
  );
}
