import React, { useEffect } from "react";
import { useRemark } from "react-remark";
// Components
import Layout from "../../components/layout";
import { ArticleContainer } from "../../components/articles";

// get static path from list
export const getStaticPaths = async () => {
  const post = await fetch("https://mashu-blog.herokuapp.com/articles");
  const path = await post.json();

  const paths = path.map((post) => {
    return {
      params: {
        post: post.url_name,
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
    "https://mashu-blog.herokuapp.com/articles/" + context.params.post
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
    <Layout title={article.post.title} picture_url={article.post.cover_url}>
      <ArticleContainer>{reactContent}</ArticleContainer>
    </Layout>
  );
}
