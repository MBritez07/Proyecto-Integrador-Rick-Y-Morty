import { useState } from "react";
import styles from './forms.module.css';
import validate from "./validate";

const Forms=({login}) =>{

const [passwordVisible, setPasswordVisible] = useState(false);

const [userData, setUserData]=useState({
    username:"",
    password:"",
})

const [errors, setErrors] = useState({
  username:"",
  password:"",
})

const handleOnchange = (event) => {
const property= event.target.name;
const value= event.target.value;
setUserData({...userData, [property]: value});
validate({...userData, [property]: value},errors, setErrors);
};

const handleOnSubmit = (event) =>{
    event.preventDefault();
    login (userData);
}

return (
    <form  onSubmit={handleOnSubmit} className={styles.form}>
    <h1f className={styles.title}>Welcome to Rick And Morty App</h1f>
    <labelf className={styles.label} htmlFor="username">Email </labelf>

    <input className={styles.input}
     name="username" 
     type="email" 
     placeholder="Ingresa Email"
      value={userData.username} 
      onChange={handleOnchange}/>
    {errors.username && <p className={styles.error}>{errors.username}</p>}

    <labelf className={styles.label} htmlFor="password">Password </labelf>
    <div className={styles.password}>
      <input className={styles.input} 
      name="password" 
      type={passwordVisible ? "text" : "password"} 
      placeholder="Ingrese Password" 
      value={userData.password} 
      onChange={handleOnchange}/>
      </div>

    <buttonf className={styles['show-password']} onClick={() => setPasswordVisible(!passwordVisible)}>
        {passwordVisible ? "Hide-Password" : "Show-Password"}
      </buttonf>
    {errors.password&&  <p className={styles.error}>{errors.password}</p>}
    <pf className={styles.recommendation}>We recommend using a password that includes a combination of uppercase and lowercase letters, numbers, and special characters for added security.  </pf>
    <button className={styles['buttonf']} disabled={!userData.username||!userData.password||errors.username||errors.password}>Submit</button>
    <hr /> </form>
    )
}
export default Forms; 