import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Navbutton from './components/Navbutton';
import Footer from './components/Footer';
import About from "./pages/About";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruitment";

function App () {
    return (
        <Router>
            <div>
            <Navbar />
            <Navbutton />
                <Switch>
                    <Route exact path ="/UTA_Lambda_Phi_Epsilon/" component= {About} />
                    <Route exact path ="/UTA_Lambda_Phi_Epsilon/events" component={Events} />
                    <Route exact path ="/UTA_Lambda_Phi_Epsilon/recruitment" component={Recruitment} />
                </Switch>    
            <Footer />
            </div>
        </Router>
    );
};

export default App;