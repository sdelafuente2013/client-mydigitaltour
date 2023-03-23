import React, { useEffect } from "react";
import { useState } from "react";
import { CiCards } from "./CiCards";
const citys = require("./City.json")
 const Citys = () =>{

    const [city, setCity] = useState()

    useEffect(()=>{
        setCity(citys)
    },[])
return(
<div className="md:grid grid-cols-3  gap-4 ms:grid-cols-1 my-3" >
  {city?.map((ele) => (
    <div className="col-span-1">
      <CiCards id={ele.id} name={ele.name} country={ele.country} image={ele.image} />
    </div>
  ))}
</div>
)
}
export default Citys





