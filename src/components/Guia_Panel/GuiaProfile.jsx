import React from "react"
import { NavPanel } from "./NavPanel";
import { GuiaMenu } from "./GuiaMenu";
import { useSelector } from "react-redux";

export const GuiaProfile = () =>{
  
const profile = useSelector(state => state.profile)
console.log(profile)
 return(
<div>
  <NavPanel nombre={profile?.name} apellido={profile?.lastname} profilePic={profile?.profilePic} verificacion={profile?.status}/>
  <GuiaMenu/>
</div>
    )
}