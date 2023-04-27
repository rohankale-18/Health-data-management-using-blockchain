import React from 'react';
import './Image.css';
import Sidebar from './Sidebar';
import Healthdata from "../artifacts/contracts/Healthdata.sol/Healthdata.json";
import { useState,useEffect } from 'react';
import {ethers} from "ethers";
import FileUpload from './FileUpload';
import Display from './Display';
import Modal from './Modal';
import Appointment from './Appointment';
import Docfirst from './Docfirst';
function Image() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xE0b31d025fcE916650926c9F3FeeD97053163AF2";
        const contract = new ethers.Contract(
          contractAddress,
          Healthdata.abi,
          signer
        );
       console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <>
    <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
    <div>
      <Sidebar />
     
      <div className='image' style={{ height: '100vh', width:'100vw' }}>
          <div className='upload'>
          <p style={{ color: "white" ,height:200}}>
          Account : {account ? account : "Not connected"}
        </p>
        
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display
        account={account}
        contract={contract}></Display>
        
        
              
           
          </div>
      </div>
      
    </div>
    </>
  );
}

export default Image;

