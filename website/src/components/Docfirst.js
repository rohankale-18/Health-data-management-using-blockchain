import React from 'react'
import './Docfirst.css'
import Sidebardoc from './Sidebardoc'
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import contract from "./contract";

function Docfirst(){
  const [data, setData] = useState("");
  const [account, setAccount] = useState(null);
  useEffect(() => {
    const getAccount = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const account = await signer.getAddress();
      setAccount(account);
    };
  
    if (window.ethereum) {
      getAccount();
    }
  
  }, []);

  const getdata = async () => {
    let dataArray = [];
    const Otheraddress = document.querySelector(".address").value;

 
      if (Otheraddress) {
        console.log('data array')
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        console.log("Hello")
        dataArray = await contract.display(account);
        console.log(dataArray);
      }
  
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("You don't have the Access");
    }
  };

  return (
    <>
    <body class="docfirst-body">

    <div className='Log'><Sidebardoc></Sidebardoc>
     
      <input
        type="text"
        placeholder="Enter Patient's Address"
        className="address"
      ></input>
      <button className="centerbutton" onClick={getdata}>
        Display
      </button>
      <div className="image-list">{data}</div>
      </div>
      </body>
    </>
  );
};
export default Docfirst;
