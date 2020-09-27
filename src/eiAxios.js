import axios from "axios"
import Global from "./global"
import router from './router'

let request = axios.create({
    baseURL:Global.base,
    timeout:60000
})

let eiAxios = request

export default eiAxios