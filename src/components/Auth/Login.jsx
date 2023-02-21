import React, { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import axios from "axios"
export const Login = () => {

  const { user, setUser, changeInput, handleLogin, setUrl  } = useAuth();
  const [registro, setRegistro] = useState(false)

  useEffect(() =>{
    if(registro) setUrl("/users/sign_in")
    else  setUrl("/users")
  },[registro])

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
                value={user.email}
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
                value={user.password}
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
              onClick={() => handleLogin()}>
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