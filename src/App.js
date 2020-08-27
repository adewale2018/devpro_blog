import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleListPage from "./pages/ArticleListPage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <div id='page-body'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/about' component={AboutPage} exact />
          <Route path='/article/:name' component={ArticlePage} exact />
          <Route path='/article-list' component={ArticleListPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
