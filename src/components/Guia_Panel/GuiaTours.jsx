import React, { useEffect } from "react";
import { GuiaMenu } from "./GuiaMenu";
import { NavPanel } from "./NavPanel";
import axios from "axios";
import { success } from "daisyui/src/colors";
import Cookies from 'js-cookie';

export const GuiaTours = (props) =>{



useEffect(()=>{
  const token = Cookies.get('access_token');

  const headers = {Authorization: `Bearer ${token}` };

axios.get('/api/v1/user/current', { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
})

    // useEffect(() => {
    //   const token = cookieValue;
    //     // const token = localStorage.getItem("accessToken")
    //   console.log("cookie", token)
    //     axios.get("/api/v1/user/current", {
    //       headers: {
    //         'Authorization': `${token}`,
    //         'Content-Type': 'application/json'

    //       }
    //     }).then((response) => {
    //       console.log("este", response)
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    //   })
      
    return(
        <div>
            <NavPanel/>
  <GuiaMenu/>

        </div>
    )
}