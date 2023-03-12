import axios from "axios";

const token = localStorage.getItem("accessToken")

let url = "http://[::1]:3000"


export const getInfo = (payload) => {

   return{
    type: "SETPROFILE",
    payload,
   }

}