/* eslint-disable newline-after-var */
import React, {useEffect, useState} from 'react';
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
    let [music, setMusic] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        let response = async () => {
            let result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/songs`, {
                method: 'GET',
            }).then(res => res.json())
            .then(setIsLoading(false));  

            setMusic(result);
        };

        response();
    }, []);

    return (
        <>
            <HeaderContainer songs={music} loading={isLoading} />
            <Router>
                <div className="body">
                    <Switch>
                        <Route path="/" render={() => <Home songs={music} loading={isLoading} />} exact/>
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