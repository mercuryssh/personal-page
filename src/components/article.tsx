import Prism from "prismjs";
import { useEffect } from "react";


const ArticleContainer = (props) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return <article>{props.children}</article>;
};

export { ArticleContainer };
