import React, { useEffect } from "react";
import axios from "axios";
import { HomeBaner } from "../Baner/HomeBaner";
import  Citys  from "../CityCards/Citys";
export const Home = () =>{

    const [datos, setDatos] = React.useState()  
let obj = {
    name: "ejemplo"
}
React.useEffect(async () => {
 
 
    try{
       
     let datos = await axios.get("https://api-mydigitaltour.herokuapp.com/movies", {
    // let datos = await axios.get("https://cors-anywhere.herokuapp.com/https://api-mydigitaltour.herokuapp.com/movies", {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    setDatos(datos.data);
}
catch(err){
    console.log(err)
}
  }, []);



  console.log(datos);
return(
    <div>
<HomeBaner/>
<article class="prose">
  <h3 class="font-bold m-10 text-2xl truncate">Free tours mas populares</h3>
  <p class="normal-case">Unete a los Free tours mas populares, en ciudades como Barcelona, Amsterdam, Berlin o Praga</p>
</article>
<div class="flex  justify-center">
<Citys/>
</div>
    </div>
)
}