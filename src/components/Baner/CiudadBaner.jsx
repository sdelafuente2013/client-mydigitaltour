import React from "react";

export const CiudadBaner = (props) =>{
    console.log(props)

    return(   
        <div className="hero h-64" style={{ backgroundImage: `url(${props.image})` }}>
              <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-neutral-50">Tours Gratis en {props.name}</h1>
      <p className="mb-5 text-neutral-50">Encuentra entre cientos de tours en {props.name} .</p>
    </div>
  </div>
</div>)
}