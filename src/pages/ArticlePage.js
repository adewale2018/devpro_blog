import React from "react";

import Articles from "./ArtcleContent";

function ArticlePage({ match }) {
  const name = match.params.name;
  const article = Articles.find((article) => article.name === name);
  
  if (!article) return <h1>Sorry, the article does not exist!</h1>;

  return (
    <>
      <h1>{article.title} </h1>
      {article.content.map((para, key) => (
        <p key={key}>{para}</p>
      ))}
    </>
  );
}

export default ArticlePage;
