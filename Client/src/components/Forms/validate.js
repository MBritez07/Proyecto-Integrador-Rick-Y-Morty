const validate = (userData, errors, setErrors) => {
    let newErrors = { ...errors };
  
    if (!userData.username) {
      newErrors.username = "Email is required";
    } else if (userData.username.length > 35) {
      newErrors.username = "Email is too long (maximum is 35 characters)";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        userData.username
      )
    ) {
      newErrors.username = "Invalid email";
    } else {
      newErrors.username = "";
    }
  
    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (!/^(?=.*\d).{6,10}$/.test(userData.password)) {
      newErrors.password =
        "Password must be between 6 and 10 characters and contain at least one number";
    } else {
      newErrors.password = "";
    }
  
    setErrors(newErrors);
  };
  
  export default validate;
  