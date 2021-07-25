import React from "react";
import Layout from '../components/structure/layout';
import Card, {CardList} from "../components/card";

class Index extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <div>
          <CardList><Card/></CardList>
        </div>
      </Layout>
    )
  }
}

export default Index;