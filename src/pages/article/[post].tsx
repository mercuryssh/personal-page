import React, { useEffect } from "react";
import { useRemark } from "react-remark";
// Components
import Layout from "../../components/structure/layout";
import { ArticleContainer } from "../../components/article";

// get static path from list
export const getStaticPaths = async () => {
  const post = await fetch("http://127.0.0.1:8000/articles/");
  const path = await post.json();

  const paths = path.map((post) => {
    return {
      params: {
        post: post.url,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  let data = await fetch(
    "http://127.0.0.1:8000/articles/" + context.params.post
  );
  data = await data.json();
  return {
    props: {
      article: {
        post: data,
      },
    },
  };
};

export default function Article({ article }) {
  const [reactContent, setMarkdownSource] = useRemark(article.content);
  useEffect(() => {
    setMarkdownSource(article.post.content);
  });

  return (
    <Layout title={article.post.title} picture_url={article.post.picture_url}>
      <ArticleContainer>{reactContent}</ArticleContainer>
    </Layout>
  );
}
