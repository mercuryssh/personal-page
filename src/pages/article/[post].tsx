//import {titleToUrl} from "../../utils/convertLink";
import Layout from "../../components/structure/layout";
import {ArticleContainer} from "../../components/article";

export const getStaticPaths = async () => {
  const post = await fetch("http://127.0.0.1:8000/articles/");
  const path = await post.json();
  //console.log(path)

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
  const data = await fetch(
    "http://127.0.0.1:8000/articles/" + context.params.post
  );
  const content = await data.json();
  return {
    props: {
      article: {
        content: content,
      },
    },
  };
};

export default function Article({ article }) {
  return (
    <Layout title={article.content.title} picture_url={article.content.picture_url}>
      <ArticleContainer>{article.content.content}</ArticleContainer>
    </Layout>
  );
}
