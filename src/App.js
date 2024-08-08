import React from 'react';
import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  const [amount, setAmount] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  function handleCartClick(amount) {
    setAmount(amount);
    if(amount<0){
      setAmount(0);
    }   
  }
  function handleImageIndex(index) {
    setImageIndex(index);
  }

  return (
    <>
      <div className="container">
        <Header amount={amount} handleCartClick={handleCartClick} index={imageIndex} />
        <Main amount={amount} handleCartClick={handleCartClick} index={imageIndex} handleImageIndex={handleImageIndex}/>
      </div>      
    </>
  );
}

export default App;
