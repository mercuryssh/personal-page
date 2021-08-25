import ItemCard from "../../components/projects/itemCart";
import Layout from "../../components/structure/layout";

export const getStaticProps = async () => {
  const projects = await (await fetch("https://mashu-blog.herokuapp.com/projects")).json();

  return {
    props: { projects },
  };
};

const Index = (props) => {
  return (
    <Layout title="Proyects">
      <div className="project-container">
        {props.projects.map((item, index) => (
          <ItemCard
            title={item.name}
            description={item.description}
            cover={item.cover_url}
            url={item.url_name}
            key={index}
            tags={item.tags}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
