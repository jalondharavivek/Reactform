export default function Validationform(values) {
  const error = {};
  //const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (values.name.trim() === "") {
    error.name = "Name is required*";
  }

  if (values.lastname.trim() === "") {
    error.lastname = "Last Name is required*";
  }

  if (values.mail === "") {
    error.mail = "Email is required*";
  }else{
    error.mail = ""
  }

  return error;
}
