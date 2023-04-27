import React from 'react'
import './Docsecond.css'
import Sidebar from './Sidebar'
import Sidebardoc from './Sidebardoc'
import contract from './contract'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

function DoctorAppointments() {
  const [appointmentNumber, setAppointmentNumber] = useState(0);
  const [patientNumber, setPatientNumber] = useState(0);
  const [patientName, setPatientName] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [data, setData] = useState("");
  const [account, setAccount] = useState(null);

  const fetchData = async () => {
    const appointmentData = await contract.getDoctorAppointments(account);
    console.log(appointmentData)
    setAppointmentNumber(parseInt(appointmentData[0].toString()));
    setPatientNumber(parseInt(appointmentData[0][1].toString()));
setPatientName(appointmentData[0][2].toString());
setIsEmergency(appointmentData[0][3]);
setHospitalAddress(appointmentData[0][4]);
//setData(`Appointment Number: ${appointmentNumber}\nPatient Number: ${patientNumber}\nPatient Name: ${patientName}\nIs Emergency: ${isEmergency ? "Yes" : "No"}\nHospital Address: ${hospitalAddress}`);
  };

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

  useEffect(() => {
    fetchData();
  }, [account]);

  const handleDisplayData = () => {
    fetchData();
    
  }

  return (
    
      <div className='bg'>
      <Sidebardoc/>
    <div className='doctor' >
    <h2 className="heading1" style={{marginLeft:"250px", marginTop:"-40px"}}>APPOINTMENT INFORMATION</h2>

      <div style={{ marginLeft: "250px" }}>
  <p style={{textAlign: "center"}}>Date: {appointmentNumber}</p></div>
  <div style={{ marginLeft: "250px" }}>
  <p style={{textAlign: "center"}}>Duration: {patientNumber}</p></div>
  <div style={{ marginLeft: "250px" }}>
  <p style={{textAlign: "center"}}>Notes: {patientName}</p></div>
  <div style={{ marginLeft: "250px" }}>
  <p style={{textAlign: "center"}}>Is Emergency: {isEmergency ? "Yes" : "No"}</p></div>
  <div style={{ marginLeft: "250px" }}>
  <p style={{textAlign: "center"}}>Patient Address: {hospitalAddress}</p></div>


    </div>
    </div>
  );
}

export default DoctorAppointments;
