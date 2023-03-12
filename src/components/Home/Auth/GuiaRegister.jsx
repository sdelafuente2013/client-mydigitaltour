import React from "react";
import { useAuth } from "../../CustomHooks/useAuth";

export const GuiaRegister = () =>{
    const { user, setUser, changeInput, handleLogin, setUrl  } = useAuth();

    return(
<div class="h-full bg-gradient-to-tl from-orange-900 to-orange-400 w-full py-16 px-4">
            <div class="flex flex-col items-center justify-center">

                <div class="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabindex="0" class="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Registrate como guia</p>
                    <div class="w-full flex items-center justify-between py-5">
                         <hr class="w-full bg-gray-400"/>
                        </div>
                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Nombre
                            </label>
                            <input onChange={(e) => changeInput(e)} value={user.name} aria-labelledby="email" name="name" type="text" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                        </div>
                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Apellido
                            </label>
                            <input onChange={(e) => changeInput(e)} value={user.lastname} name="lastname" aria-labelledby="email" type="text" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                        </div>
                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                ¿Por que te gustaria ser guia?
                            </label>
                            <textarea onChange={(e) => changeInput(e)} value={user.about} name="about" aria-labelledby="email" type="text" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                        </div>
                        <div>
                            <label id="email" class="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input onChange={(e) => changeInput(e)} value={user.email} name="email" aria-labelledby="email" type="email" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                        </div>
                        <div class="mt-6  w-full">
                            <label for="pass" class="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                           <div class="relative flex items-center justify-center">
                            <input id="pass" onChange={(e) => changeInput(e)} value={user.password} name="password" type="password" class="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
                            <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
                              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg" alt="viewport/"/>                                    
                            </div>
                           </div>
                        </div>
                        <div class="mt-8">
                            <button onClick={() =>handleLogin()} role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Solicitar cuenta</button>
                        </div>
                </div>
            </div>
        </div>
    
    )
}