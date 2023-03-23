import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"
export const NavPanel = (props) =>{

const history = useHistory()
const token = localStorage.getItem("accessToken")

    const logout = async() =>{
      try{
        axios.delete("/users/sign_out", {
         headers: {
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json'
         }
       })
       .then((succes) => localStorage.removeItem("accessToken"),  history.push("/"))
   }
   catch(err){
       console.log(err)
   }
      }
    return(
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
    <div class="flex items-center">
      <img src={props?.profilePic} class="h-9 mr-5 sm:h-9" alt="ProfilePic" />
      <div>
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{`${props?.nombre} ${props?.apellido}  `}</span>
        <br></br>
        {!props.verificado ? 
        <span class="text-green-500 text-sm font-medium"> Usuario Verificado</span>
        :
        <span class="text-red-500 text-sm font-medium"> Verificar cuenta </span>
        }
      </div>
    </div>
    <div class="flex items-center">
      <button href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500">Centro de ayuda</button>
      <button onClick={() => logout()} class="text-sm font-medium text-orange-400">Cerrar sesion</button>
    </div>
  </div>
</nav>
    )
}