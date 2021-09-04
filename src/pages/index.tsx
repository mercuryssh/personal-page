import React from "react";
import Layout from "../components/layout";
import Card, { CardList } from "../components/home/card";

class Index extends React.Component<any, any> {
  private readonly article: Array<any>;
  
  constructor(props: any) {
    super(props);
    this.article = props.post.reverse();
  }
  render() {
    return (
      <Layout title={"Last Content"}>
        <div>
          <CardList>
            {this.article.map((item, index) => {
              return (
                <Card
                  title={item.title}
                  content={item.description}
                  date={item.date}
                  key={index}
                  url={item.url_name}
                />
              );
            })}
          </CardList>
        </div>
      </Layout>
    );
  }
}

export async function getStaticProps() {
  const data = await fetch("https://mashu-blog.herokuapp.com/articles");
  const post = await data.json();
  return {
    props: { post },
  };
}

export default Index;
