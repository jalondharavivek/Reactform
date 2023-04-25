// import { useState } from "react";
// import "./form.css";

// const AddInputf = () => {
//   const [formValues, setFormValues] = useState([{ name: "", email: "" }]);

//   let handleChange = (i, e) => {
//     let newFormValues = [...formValues];
//     newFormValues[i][e.target.name] = e.target.value;
//     setFormValues(newFormValues);
//   };
//   let addFormFields = () => {
//     setFormValues([...formValues, { name: "", email: "" }]);
//   };

//   let removeFormFields = (i) => {
//     let newFormValues = [...formValues];
//     newFormValues.splice(i, 1);
//     setFormValues(newFormValues);
//   };
//   return (
//     // <div>
//     //   {" "}
//     //   {formValues.map((element, index) => {
//     //     return (
//     //       <div key={index}>
//     //         <div className="interestdiv">
//     //           <div className="insterestaddbutton">
//     //             <input
//     //               type="text"
//     //               name="interest"
//     //               id="interest"
//     //               placeholder="Interest"
//     //               value={element.interest || ""}
//     //               onChange={(e) => handleChange(index, e)}
//     //             ></input>
//     //           </div>

//     //           <div className="col">
//     //             {index ? (
//     //               <button
//     //                 type="button"
//     //                 className="button remove"
//     //                 onClick={() => removeFormFields(index)}
//     //               >
//     //                 -
//     //               </button>
//     //             ) : null}
//     //           </div>
//     //         </div>
//     //       </div>
//     //     );
//     //   })}
//     //   <div className="insterestaddbutton">
//     //     <p className="addinterestbutton" onClick={() => addFormFields()}>
//     //       +
//     //     </p>
//     //   </div>
//     // </div>
//   );
// };

// export default AddInputf;
