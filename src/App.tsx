import React from 'react';
import './App.css';
import {Accordion} from "./component/Accordion";
import {Rating} from "./component/Rating";

function App() {
    return (
        <div className="App">
            Article 1
            <Rating/>
            Article 2
            <Rating/>
            <Accordion title={'Menu 1'}/>
            <Accordion title={'Menu 2'}/>
        </div>
    );
}


export default App;
