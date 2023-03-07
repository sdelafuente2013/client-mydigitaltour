import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./useAuth";
export const Login = () => {

  const { user, setUser, changeInput, handleLogin, setUrl, error  } = useAuth();
  const [registro, setRegistro] = useState(false)

  useEffect(() =>{
    if(!registro) setUrl("/users/sign_in")
    else  setUrl("/users")
  },[registro])

  return (
    <div class=" w-full bg-white border flex flex-col items-center justify-center rounded-lg uppercase">
        <div class=" ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
               
               {registro ? 
               <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Registrate
                </h1>
               :
               <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Inicia Sesion
                </h1> }
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input 
  type="email" 
  value={user.email} 
  onChange={(e) => changeInput(e)} 
  name="email" 
  id="email" 
  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
    ${error.email ? 'focus:ring-red-600 focus:border-red-600' : ' focus:border-green-600'} 
    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white 
    dark:focus:ring-orange-500 dark:focus:border-orange-500`} 
  placeholder="name@company.com" 
/>
{error.email ? <p>{error.email}</p> : <p></p>}

         </div>

                    {registro ? 
                    <div>
                     
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input type="text" value={user.name} onChange={(e) => changeInput(e)} name="name" id="name"
                         placeholder="Pedro Gomez" 
                         className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                         ${error.name ? 'focus:ring-red-600 focus:border-red-600' : ' focus:border-green-600'} 
                         block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white 
                         dark:focus:ring-orange-500 dark:focus:border-orange-500`}                         />
                         {error.name ? <p>{error.name}</p> : <p></p>}
                       
                    
                        </div>
                         : null
                        }
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input type="password" value={user.password} onChange={(e) => changeInput(e)} name="password" id="password" placeholder="••••••••" 
  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
  ${error.password ? 'focus:ring-red-600 focus:border-red-600' : ' focus:border-green-600'} 
  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white 
  dark:focus:ring-orange-500 dark:focus:border-orange-500`}                         />
  {error.password ? <p>{error.password}</p> : <p></p>}

                    </div>
                    {registro ? 
                    <><div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">Aceptas <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Los terminos y condiciones</a></label>
                  </div>
                </div></>
                                            : null}
                    {
                      registro ?
                      <button onClick={() => handleLogin()} class="w-full sm:w-auto bg-orange-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">Crear cuenta</button>
:                
    <button onClick={() => handleLogin()} class="w-full sm:w-auto bg-orange-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">Iniciar sesion</button>

                    }
                   {registro ? 
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        ¿Ya tienes cuenta? <a onClick={() => setRegistro(!registro)} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Ingresa aqui</a>
                    </p>
                  :
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  ¿Aun no tienes cuenta? <a onClick={() => setRegistro(!registro)} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Ingresa aqui</a>
              </p>  
                  }
                              <div class="text-left">

            </div>
            </div>
            <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">¿Tienes algun sitio para mostrar?</h5>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" class="w-full sm:w-auto bg-orange-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div class="text-left">
                <Link to="/guia/register"><span class="text-white font-semibold py-2 px-4">Convierte en guia</span></Link>

            </div>
        </a>
       
    </div>
    </div>

        </div>
        
    </div>
  );
};