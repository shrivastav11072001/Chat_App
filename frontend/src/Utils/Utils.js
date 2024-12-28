import axios from "axios";

const API=axios.create({baseURL:"https://chat-app-zhmd.onrender.com/",})

export {axios,API}