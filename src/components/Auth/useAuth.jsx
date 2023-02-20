import react, { useState } from "react"
import axios from "axios"
import { success } from "daisyui/src/colors"
export const useAuth = () =>{

const [login, setLogin] = useState({
    email: "",
    password: "",
})
const [registro, setRegistro] = useState(false)
const changeInput = (e) =>{
setLogin({...login,
    [e.target.name]: e.target.value,})
}

const handleRegister =  async (e) => {
    try {
      const response = await axios.post(
        'https://api-mydigitaltour.herokuapp.com/users',
       
				{
					user :{
					     email: login.email,
					 password: login.password,
				}
       
          }
      )
      .then((succes) => console.log(succes) )
      console.log(response)
      console.log(response);
      setLogin({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };


   let user= {
    email: login.email,
    password: login.contraseña
  }
  
  const handleLogin = async (e) => {
    try {
      const response = await axios.post(
        'https://api-mydigitaltour.herokuapp.com/users/sign_in',
        {
          user: {
            email: login.email,
            password: login.password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
        }
      )
  .then((suces) =>console.log(suces))        
      setLogin({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };


return{
    login, setLogin, changeInput, handleLogin, setRegistro, registro, handleRegister
}
}