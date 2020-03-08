import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import CourseEvaluation from './pages/CourseEvaluation';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Router>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/course" component={CourseEvaluation}/>
                </Switch>
              </Router>
          </div>
      );
  }
}

export default App;
