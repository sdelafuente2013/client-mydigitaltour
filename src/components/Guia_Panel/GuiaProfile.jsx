import React, { useEffect, useState } from "react"
import axios from "axios"
import { NavPanel } from "./NavPanel";
const perfil = require("./perfil.json")

export const GuiaProfile = () =>{

const [test, setTest] = useState()    
const [profile, setProfile] = useState()    

React.useEffect(async () => {
 
    const token = localStorage.getItem("accessToken")
setProfile(perfil)
    try{
       
     let datos = await axios.get("https://api-mydigitaltour.herokuapp.com/movies", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,

      }
    });
    console.log(datos.data)
    console.log(profile)

}
catch(err){
    console.log(err)
}
  }, []);
   



    return(
<div>
  <NavPanel nombre={profile?.nombre} apellido={profile?.apellido} profilePic={profile?.profilePic} verificacion={profile?.verificado}/>
  <ul class="flex justify-center mx-auto flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 orange-400 dark:text-gray-400">
    <li class="mr-2">
            <a href="#" aria-current="page" class="inline-block p-4 text-orange-400 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Perfil</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-orange-400 dark:hover:text-gray-300">Tours</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:orange-400 dark:hover:text-gray-300">Mi cuenta</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:orange-400 dark:hover:text-gray-300">Balance</a>
    </li>

</ul>
</div>
    )
}