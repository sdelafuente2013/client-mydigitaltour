import react, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { success } from "daisyui/src/colors"
import { useLocation } from "react-router-dom"
import { validate } from "../Functions/validate"
import { getInfo } from "../../redux/actions"
export const useAuth = (dispatch) =>{

const history = useHistory()
const location = useLocation()
const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    role: location.pathname === "/" ? "user" : "guia",
    about: location.pathname === "/" ? "es un usuario" : "",
    status: location.pathname === "/" ? true : false,
})
const [error, setError] = useState({})

const [registro, setRegistro] = useState(false)
const [url, setUrl] = useState("/users/sign_in")

const changeInput = (e) => {
  const { name, value } = e.target
  const newInput = { ...user, [name]: value }
  const newError = validate(newInput) 
  setUser(newInput)
  setError(newError)
}


  const handleLogin = async (e) => {
    try {
      const response = await axios.post(
        `${url}`,
        
        {
          user
        },
      );
        localStorage.setItem("accessToken", response.headers.authorization.split(" ")[1])
     
        setUser({
          email: "",
          password: "",
          name: "",
          lastname: "",
          role: location.pathname === "/" ? "user" : "guia",
          about: "",
          status: location.pathname === "/" ? true : false,
      });
      dispatch(getInfo(response.data))
      history.push("/guia/profile")
    } catch (error) {
      console.error(error);
    }
  };
return{
  user, setUser, changeInput, handleLogin, setRegistro, registro, setUrl, error
}
}