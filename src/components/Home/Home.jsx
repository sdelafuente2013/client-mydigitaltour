import React, { useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";
export const Home = () =>{

    const [datos, setDatos] = React.useState()
// const [datos, setDatos] = React.useState([
//     {
//     id: 1,
//     name: "Titanic",
//     rating: 5,
//     created_at: "2023-02-08T13:00:10.068Z",
//     updated_at: "2023-02-08T13:00:10.068Z"
//     },
//     {
//     id: 2,
//     name: "We were soldiers",
//     rating: 4,
//     created_at: "2023-02-08T13:00:10.074Z",
//     updated_at: "2023-02-08T13:00:10.074Z"
//     },
//     {
//     "id": 3,
//     "name": "L’amour quand elle nous tient",
//     "rating": 5,
//     "created_at": "2023-02-08T13:00:10.076Z",
//     "updated_at": "2023-02-08T13:00:10.076Z"
//     },
//     {
//     id: 4,
//     name: "Nobody's Fool",
//     rating: 2,
//     created_at: "2023-02-08T13:00:10.079Z",
//     updated_at: "2023-02-08T13:00:10.079Z"
//     }
//     ])    
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
{datos?.map((ele) => <Card id={ele.id} name={ele.name} rating={ele.rating} />)}
    </div>
)
}