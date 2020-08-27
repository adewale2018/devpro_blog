import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleList from "./pages/ArticleList";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div id='page-body'>
      <Router>
        <NavBar />
        <Route path='/' component={HomePage} exact />
        <Route path='/about' component={AboutPage} exact />
        <Route path='/article/:name' component={ArticlePage} exact />
        <Route path='/article-list' component={ArticleList} exact />
      </Router>
    </div>
  );
}

export default App;
