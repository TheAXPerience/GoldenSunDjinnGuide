import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';
import GuidePage from './pages/guidepage.js';

function App() {
  return (
    <Router>
        <Switch>
            <Route
                path='/' exact
                render={(props) => (
                    <Home {...props} />
                )}
            />
            <Route
                path='/goldensun'
                render={(props) => (
                    <GuidePage {...props} game='goldensun' />
                )}
            />
            <Route
                path='/thelostage'
                render={(props) => (
                    <GuidePage {...props} game='thelostage' />
                )}
            />
            <Route
                path='/darkdawn'
                render={(props) => (
                    <GuidePage {...props} game='darkdawn' />
                )}
            />
        </Switch>
    </Router>
  );
}

export default App;
