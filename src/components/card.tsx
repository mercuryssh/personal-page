import React from "react";
import Link from "next/link";
import Calendar from "./calendar";

interface CardProps {
  title: String;
  content: String;
  date: String;
  url: String;
}

const CardList = (props) => {
  return <div className={"card-list"}>{props.children}</div>;
};

export default class Card extends React.Component<CardProps> {
  private readonly direction;

  constructor(props: CardProps) {
    super(props);
    //this.direction = titleToUrl(props.title);
    this.direction = props.url;
  }

  render() {
    return (
      <Link href={"/article/" + this.direction}>
        <section className={"card-container"}>
          <p className={"title"}>{this.props.title}</p>
          <div style={{ display: "flex", alignContent: "center" }}>
            <Calendar date={this.props.date} />
          </div>
          <hr />
          <p className={"resume"}>{this.props.content}</p>
        </section>
      </Link>
    );
  }
}

export { CardList };
