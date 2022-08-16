import React from "react";
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import Home from './component/home';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route path = "/" component = {Home}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;