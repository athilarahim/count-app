import React from 'react'
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <RowPost />
    </div>
  );
}
export default App;
