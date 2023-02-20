import React, { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import axios from "axios"
export const Login = () => {

  const { login, setLogin, changeInput, handleLogin, handleRegister  } = useAuth();
  const [registro, setRegistro] = useState(false)

useEffect( async ()=>{
  let datos = await axios.get("https://api-mydigitaltour.herokuapp.com/movies", localStorage.getItem('accessToken'), {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });
  // console.log(datos)
})

  return (
    <header>
      <div className="h-screen bg-whrite flex justify-center">
          <div >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-bold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => changeInput(e)}
                value={login.email}
                id="name"
                placeholder="hola@tuemail.com"
                className="w-full"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-800 font-bold"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => changeInput(e)}
                value={login.password}
                id="password"
                placeholder="********"
                className="w-full"
              />
            </div>
            <div className="text-center">
              {!registro ?
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-full w-full"
                onClick={() => handleLogin()}>
                Login
              </button>
              :
              <button
              className="bg-green-500 text-white px-4 py-2 rounded-full w-full"
              onClick={() => handleRegister()}>
              Crear cuenta
            </button>
              }
              <div>
              {!registro ?
              <button onClick={() =>setRegistro(true)}>¿Quieres crear una cuenta?</button>
              :
              <button onClick={() =>setRegistro(false)}>¿Ya tienes cuenta?</button>
              }
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};