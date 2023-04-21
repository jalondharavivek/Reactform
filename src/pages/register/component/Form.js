import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./form.css";
 import Validationform from "./formvaidation";
import { useState } from "react";
const Register1 = () => {
  const [values, setValues] = useState({
    name: "",
    lastname:"",
    mail:"",

  });
  const [error, setErrors] = useState({});

  function handleInput(event) {
    const dataForm = { ...values, [event.target.name]: event.target.value };
  
    setValues(dataForm);

  }

 
  function formvalidation(event) {
    event.preventDefault();
    
    setErrors(Validationform(values));
    
  }

  return (
    <div>
      <div className="form-container r">
        <div className="form-center">
          <form className="formtag" onSubmit={formvalidation}   >
            <div className="regsternamehead">
              <span className="formhead">Register Form</span>
            </div>
            <div className="name">
              <label for="name"> First Name : </label>
            </div>

            <div>
              <input
                type="text"
                name="name"
                onInput={handleInput}
                placeholder="First name"
              ></input>
              <div> {error.name && <p className="valicolor">{error.name}</p>} </div>
            </div>
            
            <div>
              <label>Last Name</label>
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"  onInput={handleInput}
              ></input>
               <div> {error.lastname && <p className="valicolor">{error.lastname}</p>} </div>
            </div>
            <div>
              <label>Email :</label>
            </div>
            <div>
              <input type="text" name="mail" placeholder="Email"></input>
              <div> {error.mail && <p className="valicolor">{error.mail}</p>} </div>
            </div>
            <div>
              <label>Gender :</label>
            </div>
            <div>
              <label>Male</label>
              <input type="radio" name="gender" value="male" id="male"></input>
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="male"
              ></input>
              <label>Other</label>
              <input type="radio" name="gender" value="Other" id="male"></input>
            </div>
            <div>
              <label>Date Of Birth :</label>
              <input type="date" name="dateofbirth" id="dob"></input>
            </div>

            <div>
              <label>State :</label>
            </div>
            <div>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="State"
              ></input>
            </div>
            <div>
              <label>City :</label>
            </div>
            <div>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="city"
              ></input>
            </div>
            <div>
              <labell>Address :</labell>
            </div>
            <div>
              <textarea
                name="address"
                id="address"
                placeholder="Address"
              ></textarea>
            </div>
            <div>
              <label>Interest :</label>
            </div>
            <div>
              <input
                type="text"
                name="interest"
                id="interest"
                placeholder="Interest"
              ></input>
            </div>
            <div>
              <label>Achievement</label>
            </div>
            <div>
              <input type="text" placeholder="Achievement Title"></input>
            </div>
            <div>
              <input type="submit"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register1;
