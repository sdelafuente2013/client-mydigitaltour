import  { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Login } from "../Auth/Login"
import { useHistory } from "react-router-dom"
import { cleanInfo } from "../../../redux/actions"
export const Nav = () =>{

const [login, SetLogin] = useState(false)  
const [movile, setMovile] = useState(false) 
const history = useHistory()
const dispatch = useDispatch()
  const logout = () =>{
    localStorage.removeItem("accessToken")
    SetLogin(!login)
    dispatch(cleanInfo([]))
    history.push("/")
  }
const profile = useSelector(state => state.profile)

console.log(profile)
    return(
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900  container  ">
  <div class="flex justify-between">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MyDigitalTour</span>

        {!profile?.role?.length ? 
 
    <div class="relative group w-full md:mt-0 sm:max-w-md xl:p-0">
    <button class="flex flex-row items-center w-full md:w-auto px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-white rounded-lg md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat hidden md:inline">
          <span class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">Login</span>
      </button>
  

      <div class="absolute z-10 hidden bg-grey-200 group-hover:block overflow-y-auto">
          <Login />
      </div>

  </div>
  :
  <div class="relative group w-full md:mt-0 sm:max-w-md xl:p-0">
  <button onClick={() => logout()} class="flex flex-row items-center w-full md:w-auto px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-white rounded-lg md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat hidden md:inline">
        <span class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow" >Salir</span>
    </button>
    </div> 
    }
  <div class="flex justify-between">
    {!profile?.role?.length ? 
  <button class=" w-full md:invisible mx-20" onClick={() => setMovile(!movile)}>
          <span class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">Login</span>
      </button>
      : 
      <button class=" w-full md:invisible mx-20" onClick={() => logout()}>
      <span class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border rounded shadow">Salir</span>
  </button> }
      </div>
      <div class="">
        {movile ? 
        <div className="fixed inset-0 w-screen h-screen bg-grey-200 group-hover:block overflow-y-auto center bg-white z-10">
          <button onClick={() => setMovile(!movile)}>x</button>
        <Login/> 
        </div>: 
        null}
      </div>
      </div>
</nav>


    )
}