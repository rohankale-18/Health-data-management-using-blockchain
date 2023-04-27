import React, { useState } from "react";
import './Appointment.css';
import Sidebar from './Sidebar';
import { ethers } from "ethers";
import contract from "./contract";

function Appointment() {
  // State variables for input fields and updated notes
  const [doctorAddress, setDoctorAddress] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [updatedNotes, setUpdatedNotes] = useState("");

  // Function to handle booking the appointment
  async function handleBooking() {
    
      const tx = await contract.bookTelemedicineAppointment(
        date,
        duration,
        notes,
        doctorAddress
      );

      await tx.wait();
      alert("Appointment booked!");
     
  }

  // Function to handle updating the appointment notes
  async function handleUpdate() {
    
      const tx = await contract.updateTelemedicineAppointment(
        date,
        duration,
        notes
      );

      await tx.wait();
      alert("Appointment updated!");
     
  }
  async function Cancel() {
    
    const tx = await contract.cancelTelemedicineAppointment(
      
    );

    await tx.wait();
    alert("Appointment Canceled");
   
}

  // Render form with input fields and submit buttons
  return (
    <div>
      <Sidebar />
      <div className="backimg">
      <div className='appoint'>
        <h1 className="head">Schedule an Appointment</h1>
        <div className='appblock'>
          <div className='doc'>Doctor Address  <input type="text" className="area" value={doctorAddress} onChange={(event) => setDoctorAddress(event.target.value)} /></div>
          <div className='dat'>Date  <input type="text" className="area" placeholder='DDMMYY' value={date} onChange={(event) => setDate(event.target.value)} /></div>
          <div className='dur'>Duration  <input type="text" className="area" value={duration} onChange={(event) => setDuration(event.target.value)} /></div>
          <div className='not'>Notes <input type="text" className="area" value={notes} onChange={(event) => setNotes(event.target.value)} /></div>
        </div>
        <div className='buttonap'>
          <button className='appbutton1' type='button' onClick={handleBooking}><span>Book</span></button>
          
            
            <button className='appbutton2' type='button' onClick={handleUpdate}><span>Update</span></button>
            <button className='appbutton3' type='button' onClick={Cancel}><span>Cancel</span></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
