import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from "./container/Main";
import WebtoonHome from "./container/WebtoonHome";
import Viewer from "./container/Viewer";


class App extends Component
{
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}></Route> 
          <Route exact path="/webtoon/:webtoonId" component={WebtoonHome}></Route>
          <Route exact path="/viewer/:episodeId" component={Viewer}></Route>
          
          {/* <Route exact path="/myportal" component = {() => {
            window.open('https://my.hnu.kr/html/main/sso.html', '_blank');
            return null;
          }}></Route> */}
        </div>
      </Router>
    )
  }
}

export default App;
