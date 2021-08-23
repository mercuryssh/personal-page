import ItemCard from "../../components/projects/itemCart";
import Layout from "../../components/structure/layout";

const Index = (props) => {
  return (
    <Layout title="Proyects">
      <div className="project-container">
        <ItemCard
          title="proyect name"
          description="project template"
          cover={"ryoko matoi.png"}
        />
      </div>
    </Layout>
  );
};

export default Index;
