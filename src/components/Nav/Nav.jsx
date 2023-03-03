import react, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Login } from "../Auth/Login"
export const Nav = () =>{

const [login, SetLogin] = useState(false)  
  const location = useLocation()

  const logout = () =>{
    localStorage.removeItem("accessToken")
    SetLogin(!login)
  }

    return(
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900  container flex justify-between ">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MyDigitalTour</span>
    </a>
    {/* <button class="flex flex-row items-center w-full md:w-auto px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-orange-500 rounded-lg md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <Link to="/guia/register"><span class="text-white font-semibold py-2 px-4">Convierte en guia</span></Link>
      </button> */}
    <div class="relative group w-full md:mt-0 sm:max-w-md xl:p-0">

      <button class="flex flex-row items-center w-full md:w-auto px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-white rounded-lg md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">Login</span>
      </button>
      <div class="absolute z-10 hidden bg-grey-200 group-hover:block overflow-y-auto">
          <Login />
      </div>

  </div>
</nav>


    )
}