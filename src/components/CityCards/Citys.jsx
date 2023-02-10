import React, { useEffect } from "react";
import { useState } from "react";
import { CiCards } from "./CiCards";

const citys = require("./City.json")
 const Citys = () =>{

    const [city, setCity] = useState()

    useEffect(async ()=>{
        setCity(citys)
    })
    console.log(city)
return(
<div class="container ">
    <div class="flex flex-wrap -mx-2 flex justify-center">
        {city?.map((ele) =>   <div class="w-full md:w-1/3 px-2 py-4"> <CiCards id={ele.id} name={ele.name} country={ele.country} image={ele.image}/></div>)}
    </div>
    </div>

)
}
export default Citys