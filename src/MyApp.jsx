import './Components/App.css';
import React from 'react'
import Header from "./Components/Header";
import Navigation from './Components/Navigation';
import Content from './Components/Content';

const MyApp = () => {
    return (
       <div className='page'>
            <div className='app-page'>
                <Header/>
               <div className='main-content'>
                   <Navigation/>
                   <Content/>
               </div>
            </div>
       </div>
    )
}

export default MyApp;
