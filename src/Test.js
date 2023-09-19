import React, { useState } from 'react'
import './Test.css'
import ScheduleReminder from './Images/ScheduleReminder.png'
import consultation from './Images/consultation1.png'
import report from './Images/report2.png'
import AllinOne from './Images/AllinOne.png'

export default function SignUp() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("");
    const [dob,setDOB] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handelSubmit = (e) => {
      if (password === confirmPassword) {
        console.log("Name :", name);
        console.log("Email :", email);
        console.log("Age :", age);
        console.log("Gender :", gender);
        console.log("Date-of-Birth :", dob);
        console.log("Password matched ...");
        window.redirect('./slider.html');
      }
      else {
        e.preventDefault();
        alert("Passwords do not match")
      }
    }
  
    return (
      <>
        <div id="Register"> 
          <div id="signup">
              <form onSubmit={handelSubmit} id="myForm">
                  <h1 id="siteName">Sign Up</h1>
                  <div id='userInputs'>
                      <label htmlFor="fullName" className="input-label">Full Name</label>
                      <input type="text" id="fullName" className="input-field" placeholder="Full Name" 
                      value={name} onChange={(e)=>{
                        setName(e.target.value)
                      }} required/>
              
                      <label htmlFor="email" className="input-label">Email Address</label>
                      <input type="email" id="email" className="input-field" placeholder="Email Address" 
                      value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                      }} required/>

                      <div id="AgeGender">
                        <div id="ageContainer">
                            <label htmlFor="age" className="input-label" id='ageLabel'>Age</label>
                            <input type="number" className='input-field' id="age" min="0" max="150"
                            value={age} onChange={(e)=>{
                              setAge(e.target.value)
                            }} required/>
                        </div>
                        <div id="genderContainer">
                            <label htmlFor="gender" className="input-label" id="genderLabel">Gender</label>
                            <select name="edu" id="edu" onChange={(e)=> {setGender(e.target.value)}} required>
                                <option value="">--- Select ---</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Preferred not to say">Prefer not to say</option>
                            </select>
                        </div>
                      </div>

                      <label htmlFor="dob" className="input-label">Date of Birth</label>
                      <input type="date" className='date-of-birth' id="dob" 
                      value={dob} onChange={(e)=>{
                        setDOB(e.target.value)
                      }} required/>
              
                      <label htmlFor="password" className="input-label">Set Password</label>
                      <input type="password" id="password" className="input-field" placeholder="Password" 
                      value={password} onChange={(e) => {
                        setPassword(e.target.value)
                      }} required/>
              
                      <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
                      <input type="password" id="confirmPassword" className="input-field" placeholder="Confirm Password" 
                      value={confirmPassword} onChange={(e) => {
                        setConfirmPassword(e.target.value)
                      }} required/>
              
                      <input type="submit" id="submit" value="Sign Up" />
                  </div>
              </form>
              
          </div>
          <div className="right">
            <div className="slider-container">
                <div className="slider">
                    <img id='ScheduleReminder' src={ScheduleReminder} alt="Schedule and remainder" />
                    <img id='consultation' src={consultation} alt="Consultation" />
                    <img id ='report' src={report} alt="Report" />
                    <img id='AllinOne' src={AllinOne} alt="All in One" />
                </div>
                <div className="nav-buttons">
                    <a href="#ScheduleReminder"> 1 
                    </a><a href="#consultation"> 2 </a>
                    <a href="#report">3 </a>
                    <a href="#AllinOne"> 4 </a>
                </div>
            </div>
          </div>
        </div>
      </>
    )
}
