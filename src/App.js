import React from 'react';
import './Css/App.css';

import Projects from './Components/Projects.js';
import Home from './Components/Home.js';
import Header from './Components/Header.js';
import Education from './Components/Education.js';
import Footer from './Components/Footer.js'
import Connect from'./Components/Connect.js'

function App() {

  


  return (
    <div style={{position: 'relative'}}>
      <div className='test-sticky'>

        <Header/>
      </div>
      <Home/>

     <div id='Projects'>
      <Projects/>
     </div>

     <div id='Education'>
      <Education/>
     </div>
     <div id='Connect'>
      <Connect/>

     </div>

    
     <div id='Footer'>
      <Footer/>
              
    </div>
     
     
    </div>
  );
}

export default App;
