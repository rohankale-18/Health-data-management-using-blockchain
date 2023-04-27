
import React from 'react';
import { useState } from 'react';
import './components/glassmorphism.css'; 
import {Route, Routes,Link} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Image from'./components/Image';
import Appointment from './components/Appointment';
import Payment from './components/Payment';
import Docfirst from './components/Docfirst';
import Docsecond from './components/Docsecond';
const MyComponent = () => {
  const [account, setAccount] = useState('');

  async function getAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    setAccount(account);
    return account;
  }

  const ConnectButtonOnClick = () => {
    if (typeof window !== 'undefined') {
      if (window.ethereum && window.ethereum.selectedAddress) {
        setAccount(window.ethereum.selectedAddress);
        
      } else {
        getAccount().then((response) => {
          console.log(response);
          
        });
      }
    }
  };
  

  return (
    <div className='Bok'>
    <Routes>
      <Route path="/" element={
        <div className="glassmorphism" style={{ width: '400px', height: '500px' }}>
          <h1 className="Title">What is your self-identity?</h1>
          <Link to="/image">
            <button type="submitN" className="submit-buttonPatient" onClick={ConnectButtonOnClick}> Patient </button>
          </Link>
          <Link to='/docapp'>
          <button type="OK" className="submit-buttonDoctor" onClick={ConnectButtonOnClick}>Doctor</button>
          </Link>
        </div>
      } />
      <Route path="/image" element={<Image />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/appointment' element={<Appointment/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/docapp' element={<Docfirst/>}/>
      <Route path='/doctor' element={<Docsecond/>}/> 
    </Routes>
  </div>
     
    
    
  );
};

export default MyComponent;
