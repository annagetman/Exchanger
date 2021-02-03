import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Rate from "./Rate/Rate";
import About from "./About/About";
import Points from "./Points/Points";

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    Prompt  = () => {
        prompt('You are agree?')
    }
    render() {
        return (
            <div className="site">
                <Header />

                <div className="container">
                    <main>
                        <Router>
                        <switch>
                            <Route exact path="/" component={Rate}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/points" component={Points}/>
                        </switch>
                        </Router>
                    </main>

                </div>
                <div className="container" id="cookie_info">
                    <div className="site-content">
                        <div className="well">На нашем сайте мы исползуем cookie для сбора
                            информации технического характера
                            &nbsp;<button className="btn btn-primary btn-sm" onClick={this.Prompt}>Ok</button>
                        </div>
                        </div>
                    </div>

                    <Footer />
            </div>
        );
    }
}

export default App;
