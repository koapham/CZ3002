import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import CourseInformation from "./pages/CourseInformation";
import CourseRating from "./pages/CourseRating";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF7A00',
      contrastText: '#fff'
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#FF7A00'
    },
  }
});

class App extends Component {
  render() {
      return (
        <MuiThemeProvider theme={theme}>
          <div className="App">
              <Router>
                <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/courseInformation" component={CourseInformation} />
                  <Route exact path="/courseRating" component={CourseRating} />
                </Switch>
              </Router>
          </div>
        </MuiThemeProvider>
          
      );
  }
}

export default App;
