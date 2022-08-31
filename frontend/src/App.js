import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    const interval = setInterval(()=>{
      fetch("/timestamp").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
        }
      )
    },1000)
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Time Zone</h1>
        {data.time} 
      </header>
    
    </div>
  );
}
export default App;
