import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import '../../styles/App.scss';
import 'jquery/dist/jquery';

//pages
import Home from '../Home';
import Music from '../Music';
import Store from '../Store';
import News from '../News';

// components
import HeaderContainer from '../../components/containers/header';
import FooterContainer from '../../components/containers/footer';

function App() {
    return (
        <>
            <HeaderContainer />
            <Router>
                <div className="body">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/music" component={Music}/>
                        <Route path="/store" component={Store}/>
                        <Route path="/news" component={News}/>
                    </Switch>
                </div>
            </Router> 
            <FooterContainer />
        </>
    );
  }

export default App;