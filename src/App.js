import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/Home';
import Board from './containers/Board';
import Header from './components/Header';

function App() {
    return (
        <Router >
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/board/:id" component={Board} />
        </Router>
    );
}

export default App;
