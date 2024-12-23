import axios from "axios";

const API=axios.create({baseURL:"https://chat-app-rgbm.vercel.app/",})

export {axios,API}