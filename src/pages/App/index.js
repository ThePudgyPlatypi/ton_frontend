import React from 'react';
import '../../styles/App.scss';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from '../Home';
// bring in pages here

function App() {
    return (
        <Router>
            <div className="body">
                <Switch>
                    <Route path="/" component={Home} exact/>
                </Switch>
            </div>
        </Router> 
    );
  }

export default App;