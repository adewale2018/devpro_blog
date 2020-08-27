import React from "react";

import Articles from "./ArticleContent";
import ArticlesList from "./ArticlesList";
import NotFoundPage from "./NotFoundPage";

function ArticlePage({ match }) {
  const name = match.params.name;
  const article = Articles.find((article) => article.name === name);

  if (!article) return <NotFoundPage />;

  const otherArticles = Articles.filter((article) => article.name !== name);

  return (
    <>
      <h1>{article.title} </h1>
      {article.content.map((para, key) => (
        <p key={key}>{para}</p>
      ))}
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;
