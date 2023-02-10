import React from "react";

export const HomeBaner = () =>{

    return (

        <div className="hero  p-10 bg-base-300 text-base-content">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold">Reserva Tours!</h1>
      <p className="py-6">Con guias locales en mas de 120 paises.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ciudad</span>
          </label>
          <input type="text" placeholder="¿En que ciudad te gustaria?" className="input input-bordered" />
        </div>
        <div className="form-control">
        <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>Todas las categorias</option>
        <option>asd</option>
        <option>asd</option>
        </select>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-orange-400 text-neutral-50	">Buscar</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}