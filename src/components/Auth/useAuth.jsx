import react, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { success } from "daisyui/src/colors"
import { useLocation } from "react-router-dom"
export const useAuth = () =>{

const history = useHistory()
const location = useLocation()
const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    type: location.pathname === "/" ? "user" : "guia",
    about: "",
    active: location.pathname === "/" ? true : false,
})
const [registro, setRegistro] = useState(false)
const [url, setUrl] = useState("/users/sign_in")

const changeInput = (e) =>{
  setUser({...user,
    [e.target.name]: e.target.value,})
}


  const handleLogin = async (e) => {
    try {
      const response = await axios.post(
        `https://api-mydigitaltour.herokuapp.com${url}`,
        
        {
          user
        },
      );
        localStorage.setItem("accessToken", response.headers.authorization.split(" ")[1])
     
        setUser({
          email: "",
          password: "",
          name: "",
          type: location.pathname === "/" ? "user" : "guia",
          about: "",
          active: location.pathname === "/" ? true : false,
      });
      history.push("/userPanel")
    } catch (error) {
      console.error(error);
    }
  };
return{
  user, setUser, changeInput, handleLogin, setRegistro, registro, setUrl
}
}