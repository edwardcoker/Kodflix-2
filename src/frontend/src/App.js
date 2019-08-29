import React from './node_modules/react';
import { BrowserRouter as Router, Route, Switch } from './node_modules/react-router-dom';
import Gallery from './Gallery';
import Details from './Details/Details';
import NotFound from './NotFound';
import "./App.css";

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Gallery} />
                    <Route exact path='/not-found'component={NotFound} />
                    <Route exact path='/:galleryId' component={Details} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
