import axios from "axios";


const axiosCall = axios.create({
    baseURL:"http://localhost:8080/api",
    headers:{
        'Access-Control-Allow-Origin' : '*'
    }
})

export default axiosCall