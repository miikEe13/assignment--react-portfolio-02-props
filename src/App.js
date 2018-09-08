import React, { Component } from 'react';
import logo from './logo.svg';
import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';
import {skills, eduList, jobsList} from './data/datasource.js';

class App extends Component {
  render() {
    /*console.log(skills);
    console.log(eduList)
    console.log(jobsList)*/
    return (
      <div className="App" id="app-container">
        <PortfolioFixed/>
        <PortfolioContent skills={skills} eduList={eduList} jobList={jobsList}/>
      </div>
    );
  }
}

export default App;
