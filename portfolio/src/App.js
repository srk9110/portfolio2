import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

//layout
import Header from './layouts/Header';
import Up from './layouts/Up';

//component
import Main from './components/Main';

function App(){

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="mainWrap">
            <Header/>
            <Up/>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </div>
    )
}

export default App;