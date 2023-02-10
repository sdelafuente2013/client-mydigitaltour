import React from "react";
import { Link } from "react-router-dom";
export const CiCards = (props) =>{
console.log(props)
    return(
<div className="card w-96 bg-base-100 ">
 
 <Link to={`/ciudad/${props.id}`}> <figure><img src={props.image} alt="Shoes" /></figure>
  <h2 className="card-title">{props.name}</h2></Link>

</div>
    )
}