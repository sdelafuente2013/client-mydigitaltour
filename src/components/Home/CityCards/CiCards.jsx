import React from "react";
import { Link } from "react-router-dom";
import style from "./CiCards.module.css"
export const CiCards = ({img, image, name, id}) =>{
    return(

<div>
    
    <img src={image} alt={name} class=" object-cover h-48 w-96 w-full  object-center rounded-lg shadow-md"/>    
    
 <div class="relative px-4 -mt-16  ">
   <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex items-baseline">
      <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        ¡Tours!
      </span>
      <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>  
    </div>
    
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>
 
  <div class="mt-1">
    $1800
    <span class="text-gray-600 text-sm">   /wk</span>
  </div>
  <div class="mt-4">
    <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
    <span class="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
    )
}