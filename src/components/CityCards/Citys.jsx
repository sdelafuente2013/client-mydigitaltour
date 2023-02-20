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
  <div class="flex flex-wrap justify-center ">
    {city?.map((ele) => (
      <div class="m2:w-1/2 xl:w-1/3 px-2 py-4 flex flex-wrap justify-center mx-auto">
        <CiCards id={ele.id} name={ele.name} country={ele.country} image={ele.image} />
      </div>
    ))}
  </div>
</div>
)
}
export default Citys





