import React from "react";

import ArticleContent from "./ArticleContent";
import ArticlesList from "./ArticlesList";

function ArticleListPage() {
  return (
    <>
      <h1>list of Articles</h1>
      <ArticlesList articles={ArticleContent} />
    </>
  );
}

export default ArticleListPage;
