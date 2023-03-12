import React from "react";
import { Link, useLocation } from "react-router-dom";

export const GuiaMenu = () =>{
    const location = useLocation()
    return(

    <ul class="flex justify-center mx-auto flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 orange-400 dark:text-gray-400">
    <li class="mr-2">
            <Link to="/guia/profile"><a href="#" aria-current="page" class={`inline-block p-4 ${location.pathname==="/guia/profile" ? "text-orange-400" : "text-gray-600"} inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:orange-400 dark:hover:text-gray-300`}>Resumen</a></Link>
    </li>
    <li class="mr-2">
    <Link to="/guia/tours"><a href="#" class={`inline-block p-4 ${location.pathname==="/guia/tours" ? "text-orange-400" : "text-gray-600"}  inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:orange-400 dark:hover:text-gray-300`}>Tours</a> </Link> 
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:orange-400 dark:hover:text-gray-300">Mi cuenta</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:orange-400 dark:hover:text-gray-300">Balance</a>
    </li>

</ul>
)
}