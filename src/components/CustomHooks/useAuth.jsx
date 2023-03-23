import react, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { validate } from "../Functions/validate"
import { getInfo } from "../../redux/actions"
import Cookies from 'js-cookie';

export const useAuth = (dispatch) =>{

const history = useHistory()
const location = useLocation()
const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    role: location.pathname === "/" ? "user" : "guia",
    status: location.pathname === "/" ? true : true,
})
const [error, setError] = useState({})
const [failLogin, setFailLogin] = useState(false)
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
      if(response?.data?.role === "user"){
        localStorage.setItem("accessToken", response?.headers?.authorization)
        const token = response?.headers?.jti;
        Cookies.set('access_token', token, { expires: 7 }); // la cookie expira en 7 días

        setFailLogin(false)
        setUser({
          email: "",
          password: "",
          name: "",
          lastname: "",
          role: location.pathname === "/" ? "user" : "guia",
          status: location.pathname === "/" ? true : false,
      });
      dispatch(getInfo(response.data))
      history.push("/")
      } 
      else if(response?.data?.role === "guia" && response?.data?.status === true){
        localStorage.setItem("accessToken", response?.headers?.authorization)
        const token = response?.data?.jti;
        const cookieValue = document.cookie.match('(^|;)\\s*_interslice_session\\s*=\\s*([^;]+)')?.pop() || '';

        Cookies.set('access_token', token, { expires: 7 }); // la cookie expira en 7 días
        dispatch(getInfo(response?.data))
        // console.log(cookieValue)
        history.push("/guia/profile")
      }
      else{
        setUser({
          email: "",
          password: "",
          name: "",
          lastname: "",
          role: location.pathname === "/" ? "user" : "guia",
          status: location.pathname === "/" ? true : false,
      });
      alert("Se a enviado su solicitud para ser guia")
    }
    } catch (error) {
      if(error?.response.data?.error === "Invalid Email or password.") setFailLogin(true)
      if(location.pathname === "/guia/register") {
        setUser({
          email: "",
          password: "",
          name: "",
          lastname: "",
          role: location.pathname === "/" ? "user" : "guia",
          status: location.pathname === "/" ? true : false,
      });
      alert("Se a enviado su solicitud para ser guia")  
      history.push("/")

        }
    }
  };
return{
  user, setUser, changeInput, handleLogin, setRegistro, registro, setUrl, error, failLogin
}
}