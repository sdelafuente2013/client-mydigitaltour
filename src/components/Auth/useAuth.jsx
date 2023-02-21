import react, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { success } from "daisyui/src/colors"
export const useAuth = () =>{

const history = useHistory()

const [user, setUser] = useState({
    email: "",
    password: "",
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
        email: '',
        password: '',
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