import React from 'react'
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import './styles/app.css';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Info />
    </div>
  );
}

export default App;
