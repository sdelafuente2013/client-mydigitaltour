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
    console.log(datos.data)
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

<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">¿Tienes algun sitio para mostrar?</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Comienza a generar ingresos mostrando tu ciudad</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" class="w-full sm:w-auto bg-orange-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div class="text-left">
                <div class="-mt-1 font-sans text-sm font-semibold">Registrarme como guia</div>
            </div>
        </a>
       
    </div>
</div>

    </div>
)
}