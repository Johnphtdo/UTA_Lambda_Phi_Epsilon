import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
// import Navbutton from './components/Navbutton';
import Footer from './components/Footer';
import About from "./pages/About";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruitment";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
        <Router >
            <ScrollToTop />
                <div>
                <Navbar />
                {/* <Navbutton /> */}
                    <Switch>
                        <Route exact path ="/" component= {About} />
                        <Route exact path ="/events" component={Events} />
                        <Route exact path ="/recruitment" component={Recruitment} />
                    </Switch>    
                <Footer />
                </div>
        </Router>
    );
};

export default App;