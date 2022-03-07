import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:5001/clone-by-harsh/us-central1/api" // here will be api
});

export default instance;