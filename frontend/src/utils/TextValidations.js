import { toast } from "react-toastify";

function validateText(input){
  const alphabetPattern = /^[a-zA-Z\s]+$/;
  if (input.match(alphabetPattern) || input===" ") {
    // do nothing
  } else {
    event.target.value = input.replace(/[^a-zA-Z\s]/g, ""); // Remove non-alphabet characters
    toast.error("Only Alphabets are allowed.", {position:"top-center"})
    
  }
}

export function validateNumber(input){
  const alphabetPattern = /^[0-9\s]*$/;
  if (input.match(alphabetPattern) || input===" ") {
    // do nothing
  } else {
    event.target.value = input.replace(/[^0-9\s]/g, ""); // Remove non-alphabet characters
    toast.error("Only Numbers are allowed.", {position:"top-center"})
    
  }
}

export default validateText