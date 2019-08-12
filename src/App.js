import React from 'react';
import escape from './images/escape.jpg';
import exposed from './images/exposed.jpg';
import lastKingdom from './images/last-kingdom.jpg';
import newMoon from './images/new-moon.jpg';
import oath from './images/oath.jpg';
import rampage from './images/rampage.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='item'>
          <img src={escape} alt='escape movie cover' />
          <div className='overlay'>
            <h1>Escape</h1>
          </div>
        </div>
        <div className='item'>
          <img src={exposed} alt='exposed movie cover' />
          <div className='overlay'>
            <h1>Exposed</h1>
          </div>
          </div>
        <div className='item'>
          <img src={lastKingdom} alt='last kingdom movie cover' />
          <div className='overlay'>
            <h1>Last kingdom</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='item'>
          <img src={newMoon} alt='new moon movie cover' />
          <div className='overlay'>
            <h1>New Moon</h1>
          </div>
          </div>
        <div className='item'>
          <img src={oath} alt='oath movie cover' />
          <div className='overlay'>
            <h1>Oath</h1>
          </div>
          </div>
        <div className='item'>
          <img src={rampage} alt='rampage movie cover' />
          <div className='overlay'>
            <h1>Rampage</h1>
          </div>
          </div>

      </div>
    </div>



  );
}

export default App;
