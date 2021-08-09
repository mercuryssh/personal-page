import React from "react";
import Link from "next/link";
import { titleToUrl } from "../utils/convertLink";

interface CardProps {
  title: String;
  content: String;
  date: String;
  url: String;
}

const Calendar = (props: { date?: String }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5em",
        margin: "0.5em 0",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 24 24"
      >
        <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
      </svg>
      <span>{props.date}</span>
    </div>
  );
};

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
