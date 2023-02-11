import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiudadBaner } from "../Baner/CiudadBaner";
const citys = require("../CityCards/City.json")

export const Ciudades = () =>{

const {id} = useParams()   

const [ciudad, setCiudad] = useState()

useEffect( ()=>{
    setCiudad(citys)
}, [])

const select  = ciudad?.filter((ele) => parseInt(ele.id) == parseInt(id))

    return(
<div>
<CiudadBaner  image={select?.map((ele) => ele.baner)} name={select?.map((ele) => ele.name)}/>
<div>
<div className="flex w-full">
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center"> Tours en {select?.map((ele) => ele.country)}</div>
  <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
  <select className="select select-warning w-full max-w-xs">
  <option disabled selected>Filtrar</option>
  <option>sad</option>
  <option>asd</option>
  <option>asd</option>
  <option>das</option>
  <option>asd</option>
</select>
  </div>
</div>
</div>
</div>
        )
}