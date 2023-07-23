import axios from "axios";
import Homescreen from "./Components/Homescreen";


const  instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;