
// export default function Validationform(values,inputAchie,formValues) {

//   let error = {};

// let currentDate = new Date()
// console.log(currentDate.toISOString().substring(0, 10),"curr date");
// let dateofbirth = new Date(values.dateofbirth)



//   if (values.name.trim() === "") {
//     error.name = "Name is required*";
//   }else if(!/^[a-zA-Z]*$/g.test(values.name.trim())){
//     error.name = "*Enter a Valid  First Name*"
//   }

//   if (values.lastname.trim() === "") {
//     error.lastname = "Last Name is required*";
//   }else if(!/^[a-zA-Z]*$/g.test(values.lastname.trim())){
//     error.lastname = "*Enter a Valid  Last Name*"
//   }

//   if (values.mail.trim() === "") {
//     error.mail = "Email is required*";
//   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail.trim())){
//     error.mail = "*Enter a Valid Email Address "
//   }

//   if (values.state.trim() === "") {
//     error.state = "*State is required*";
//   }else if(!/^[a-zA-Z]*$/g.test(values.state.trim())){
//     error.state = "*Enter a Valid  State"
//   }
//   if (values.city.trim() === "") {
//     error.city = "*City is required";
//   }else if(!/^[a-zA-Z]*$/g.test(values.city.trim())){
//     error.city = "*Enter a Valid City"
//   }

//   if (values.gender === "") {
//     error.gender = "Gender is required*";
//   }
//   if (values.dateofbirth === "") {
//     error.dateofbirth = "*dob is required";
//   }
//   else if (dateofbirth.getFullYear() < 1980  || dateofbirth > currentDate.toISOString().substring(0, 10)) {
//     error.dateofbirth = "*You Are Not Eligible for this Form";

//   }
//   if (values.address.trim() === "") {
//     error.address = "Address is required";
//   }
//  const data = [...inputAchie]
//   for (let i = 0; i < data.length; i++) {
   
//     console.log(data[i],"vivek plas");
  
//   if (data[i].achiev === "" || data[i].achievd === "" ||  data[i].achievd  >= currentDate.toISOString().substring(0, 10)) {
//     data[i].achiev = "Achievemnt and date  is required";
//   }
  
//   }
  // for (let j = 0; j < formValues.length; j++) {
   
  //   console.log(formValues[j],"vivek ++++");
  
  // if (formValues[j].interest === "") {
  //   error.interest = "interest is required";
  // }
  // }


//   return error,data;
// }
