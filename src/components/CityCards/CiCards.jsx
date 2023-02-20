import React from "react";
import { Link } from "react-router-dom";
import style from "./CiCards.module.css"
export const CiCards = (props) =>{
console.log(props)
    return(

<div class="card max-w-md bg-base-100 shadow-xl image-full">
  <figure><img className={style.img} src={props.image} alt="Shoes" /></figure>
  <div class="card-body">
    <Link to={`/ciudad/${props.id}`}><h2 class="card-title">{props.name}</h2></Link>
  </div>
</div>
    )
}