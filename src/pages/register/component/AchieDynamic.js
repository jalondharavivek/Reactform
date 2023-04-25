// import { useState } from "react";
// import "./form.css";
// import Validationform from "./formvaidation";
// const AchievementDynamic = () => {
//   const [values, setValues] = useState({
//     achiev : ""
   

//   });
//   const [inputAchie, setInputAchie] = useState([{ achiev: "" }]);
//   const [error, setErrors] = useState({});

//   function formvalidation(event) {
//     event.preventDefault();
    
//     setErrors(Validationform(values));
   
//   }
//   // validation function
//   function handleInput(event) {
//     const dataForm = { ...values, [event.target.name]: event.target.value };
//     console.log("vivek2");

//     setValues(dataForm);
//   }
//   let handleChangeachie = (i, e) => {
//     let newFormValuesac = [...inputAchie];
//     newFormValuesac[i][e.target.name] = e.target.value;
//     setInputAchie(newFormValuesac);
//   };

//   let addAchievmentfields = () => {
//     setInputAchie([...inputAchie, { achiev: "" }]);
//   };

//   let removeFormFieldsachi = (i) => {
//     let newFormValuesac = [...inputAchie];
//     newFormValuesac.splice(i, 1);
//     setInputAchie(newFormValuesac);
//   };

//   return (
//     <div>
//       <div>
//         <label>Achievement</label>
//       </div>
//       {inputAchie.map((element, index) => {
//         return (
//           <div>
//             <div className="interestdiv">
//               <div className="insterestaddbutton">
//                 <input
//                    onInput={handleInput}
//                   type="text"
//                   placeholder="Achievement Title"
//                   name="achiev"
//                   value={element.achiev || ""}
//                   onChange={(e) => handleChangeachie(index, e)}
//                 ></input>
//               </div>
//               <div className="insterestaddbutton dateach">
//                 <input
//                   type="date"
//                   name="achievd"
//                   value={element.achievd || ""}
//                   onChange={(e) => handleChangeachie(index, e)}
//                 ></input>
//               </div>
//               <div className="col">
//                 {index ? (
//                   <button
//                     type="button"
//                     className="button remove"
//                     onClick={() => removeFormFieldsachi(index)}
//                   >
//                     -
//                   </button>
//                 ) : null}
//               </div>
              
//             </div>
//           </div>
//         );
//       })}
//       <div className="insterestaddbutton">
//         <p className="addinterestbutton" onClick={() => addAchievmentfields()}>
//           +
//         </p>
//       </div>
//     </div>
//   );
// };
// export default AchievementDynamic;
