import React from 'react';
import Contact from './components/Contact';
import './App.css';
import './components/contact.css';

function App() {
  return (
    <div className="App">
      <Contact avatar="https://randomuser.me/api/portraits/men/35.jpg" 
      name="Logan Barnett"
      online />
      <Contact avatar="https://randomuser.me/api/portraits/women/48.jpg" 
      name="Andrea Berry"
      online />
      <Contact avatar="https://randomuser.me/api/portraits/men/0.jpg" 
      name="Dale Arnold"
      />
    </div>
  );
}

export default App;
