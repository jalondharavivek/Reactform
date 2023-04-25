import React from "react";
import "./form.css";
// import Validationform from "./formvaidation";
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
  const [inputAchie, setInputAchie] = useState([{ achiev: "", achievd: "" }]);
  const [formValues, setFormValues] = useState([{ interest: "" }]);
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

  function validation(values) {
    const error = {};

    let currentDate = new Date();
    console.log(currentDate,"curr datwe");
    console.log(currentDate.toISOString().substring(0, 10), "curr date");
    let dateofbirth = new Date(values.dateofbirth);

    if (values.name.trim() === "") {
      error.name = "Name is required*";
    } else if (!/^[a-zA-Z]*$/g.test(values.name.trim())) {
      error.name = "*Enter a Valid  First Name*";
    }

    if (values.lastname.trim() === "") {
      error.lastname = "Last Name is required*";
    } else if (!/^[a-zA-Z]*$/g.test(values.lastname.trim())) {
      error.lastname = "*Enter a Valid  Last Name*";
    }

    if (values.mail.trim() === "") {
      error.mail = "Email is required*";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail.trim())
    ) {
      error.mail = "*Enter a Valid Email Address ";
    }

    if (values.state.trim() === "") {
      error.state = "*State is required*";
    } else if (!/^[a-zA-Z]*$/g.test(values.state.trim())) {
      error.state = "*Enter a Valid  State";
    }
    if (values.city.trim() === "") {
      error.city = "*City is required";
    } else if (!/^[a-zA-Z]*$/g.test(values.city.trim())) {
      error.city = "*Enter a Valid City";
    }

    if (values.gender === "") {
      error.gender = "Gender is required*";
    }
    if (values.dateofbirth === "") {
      error.dateofbirth = "*dob is required";
    } else if (
      dateofbirth.getFullYear() < 1980 ||
      dateofbirth > currentDate.toISOString().substring(0, 10)
    ) {
      error.dateofbirth = "*You Are Not Eligible for this Form";
    }
    if (values.address.trim() === "") {
      error.address = "Address is required";
    }

    const data = [...inputAchie];
    for (let i = 0; i < data.length; i++) {
      console.log(data[i], "vivek plas");

      if (data[i].achiev === "" || data[i].achievd === ""  ) {
        data[i].achievcheck = "Achievemnt and date  is required";
      }else if( data[i].achievd  >= currentDate.toISOString().substring(0, 10)){
        data[i].achievcheck = "Enter A valid Date";
      }
      
      else {
        data[i].achievcheck = "";
      }
      setInputAchie(data);
    }
const interestdata = [...formValues]

console.log(interestdata,"interest data vivek");
    for (let j = 0; j < interestdata.length; j++) {
   
      console.log(interestdata[j],"vivek ++++");
    
    if (interestdata[j].interest === "") {
      interestdata[j].errorinterest = "interest is required";
    }else{
      interestdata[j].errorinterest = "";
    }
    setFormValues(interestdata)
    }

    return error;

    // setInputAchie(Validationform(inputAchie))
    // console.log(values,"12");
  }

  function formvalidation(event) {
    event.preventDefault();

    setErrors(validation(values));
  }

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    console.log(newFormValues, "vivek0000");
  };
  let addFormFields = () => {
    setFormValues([...formValues, { interest: ""}]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleChangeachie = (i, e) => {
 
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
                  <div>
                    <div className="interestdiv">
                      <div className="insterestaddbutton">
                        <input
                          type="text"
                          name="interest"
                          id="interest"
                          placeholder="Interest"
                          value={element.interest || ""}
                          onChange={(e) => handleChange(index, e)}
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
                    <div>
                      {element.errorinterest && (
                        <p className="valicolor">{element.errorinterest}</p>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="insterestaddbutton">
                <p
                  className="addinterestbutton"
                  onClick={() => addFormFields()}
                >
                  +
                </p>
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
                  <div>
                    {element.achievcheck && (
                      <p className="valicolor">{element.achievcheck}</p>
                    )}
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
