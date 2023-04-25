import React from "react";
import "./form.css";
import Validationform from "./formvaidation";
import { useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";

const Register1 = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    mail: "",
    state: "",
    city: "",
    gender: "",
    dateofbirth: "",
    address: "",
    
  });
  const [inputAchie, setInputAchie] = useState([{ achiev: "" , achievd :""}]);
  const [formValues, setFormValues] = useState([{ interest:"" }]);
  // const [achi, setAchie] = useState([{ achiev : "",achievd:""}])

  console.log(values, "efef");
  //use state
  console.log("vivek");
  const [error, setErrors] = useState({});

  // validation function
  function handleInput(event) {
    const dataForm = { ...values, [event.target.name]: event.target.value };
 
    setValues(dataForm);

    // let val = [{...values}];
    // val[index][event.target.name] = event.target.value;
    // setValues(val)
  }
  // function handleInputac(e,index) {
  //   // const dataForm = { ...values, [event.target.name]: [event.target.value] };
 
  //   // setValues(dataForm);

  //   let val = [...achi];
  //   val[index][e.target.name] = e.target.value;
  //   setAchie(val)
  // }


  // function for

  function formvalidation(event) {
    event.preventDefault();

    setErrors(Validationform(values,inputAchie,formValues));
    console.log(values,"12");
  }

  let handleChange = (i,e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    console.log( newFormValues,"vivek0000");
  };
  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleChangeachie = (i, e) => {
    let newFormValuesac = [...inputAchie];
    newFormValuesac[i][e.target.name] = e.target.value;
    setInputAchie(newFormValuesac);
    console.log(newFormValuesac,"fsfsfsfs");
  };

  let addAchievmentfields = () => {
    setInputAchie([...inputAchie, { achiev: "" }]);
  };

  let removeFormFieldsachi = (i) => {
    let newFormValuesac = [...inputAchie];
    newFormValuesac.splice(i, 1);
    setInputAchie(newFormValuesac);
  };

  return (
    <div>
      <div className="form-container r">
        <div className="form-center">
          <form className="formtag" onSubmit={formvalidation}>
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
              <div>
                {error.name && <p className="valicolor">{error.name}</p>}
              </div>
            </div>

            <div>
              <label>Last Name</label>
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                onInput={handleInput}
              ></input>
              <div>
                {error.lastname && (
                  <p className="valicolor">{error.lastname}</p>
                )}
              </div>
            </div>
            <div>
              <label>Email :</label>
            </div>
            <div>
              <input
                type="text"
                onInput={handleInput}
                name="mail"
                placeholder="Email"
              ></input>
              <div>
                {error.mail && <p className="valicolor">{error.mail}</p>}
              </div>
            </div>
            <div>
              <label>Gender :</label>
            </div>
            <div>
              <label>Male</label>
              <input
                type="radio"
                onInput={handleInput}
                name="gender"
                value="male"
                id="male"
              ></input>
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="male"
                onInput={handleInput}
              ></input>
              <label>Other</label>
              <input
                type="radio"
                name="gender"
                onInput={handleInput}
                value="Other"
                id="male"
              ></input>
              <div>
                {error.gender && <p className="valicolor">{error.gender}</p>}
              </div>
            </div>
            <div>
              <label>Date Of Birth :</label>
              <input
                type="date"
                onInput={handleInput}
                name="dateofbirth"
                id="dob"
              ></input>
              <div>
                {error.dateofbirth && (
                  <p className="valicolor">{error.dateofbirth}</p>
                )}
              </div>
            </div>

            <div>
              <label>State :</label>
            </div>
            <div>
              <input
                type="text"
                name="state"
                id="state"
                onInput={handleInput}
                placeholder="State"
              ></input>
              <div>
                {error.state && <p className="valicolor">{error.state}</p>}
              </div>
            </div>
            <div>
              <label>City :</label>
            </div>
            <div>
              <input
                type="text"
                name="city"
                id="city"
                onInput={handleInput}
                placeholder="city"
              ></input>
              <div>
                {error.city && <p className="valicolor">{error.city}</p>}
              </div>
            </div>
            <div>
              <label>Address :</label>
            </div>
            <div>
              <textarea
                name="address"
                id="address"
                onInput={handleInput}
                placeholder="Address"
              ></textarea>
              <div>
                {error.address && <p className="valicolor">{error.address}</p>}
              </div>
            </div>
            <div>
              <label>Interest :</label>
             
            </div>
           
            <div>
      {" "}
      {formValues.map((element, index) => {
        
        return (
          <div >
            <div className="interestdiv">
              <div className="insterestaddbutton">
                <input
                
                  type="text"
                  name="interest"
                  id="interest"
                  placeholder="Interest"
                  value={element.interest || ""}
                  onChange={(e) => handleChange(index,e)}
                ></input>
              </div>

              <div className="col">
                {index ? (
                  <button
                    type="button"
                    className="button remove"
                    onClick={() => removeFormFields(index)}
                  >
                    -
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
      <div className="insterestaddbutton">
        <p className="addinterestbutton" onClick={() => addFormFields()}>
          +
        </p>
      </div>
      <div>
              {error.interest && <p className="valicolor">{error.interest}</p>}
            </div>
    </div>


            <div>
              <label>Achievement</label>
            </div>

            {inputAchie.map((element, index) => {
            
              return (
                <div>
                  <div className="interestdiv">
                    <div className="insterestaddbutton">
                      <input
                       
                        type="text"
                        placeholder="Achievement Title"
                        name="achiev"
                        value={element.achiev || ""}
                        onChange={(e) => handleChangeachie(index, e)}
                      ></input>
                    </div>
                    <div className="insterestaddbutton dateach">
                      <input
                         type="date"
                        name="achievd"
                        value={element.achievd || ""}
                        onChange={(e) => handleChangeachie(index, e)}
                      ></input>
                    </div>
                    <div className="col">
                      {index ? (
                        <button
                          type="button"
                          className="button remove"
                          onClick={() => removeFormFieldsachi(index)}
                        >
                          -
                        </button>
                      ) : null}
                
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="insterestaddbutton">
              <p
                className="addinterestbutton"
                onClick={() => addAchievmentfields()}
              >
                +
              </p>
              <div>
              {error.achiev && <p className="valicolor">{error.achiev}</p>}
            </div>
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
