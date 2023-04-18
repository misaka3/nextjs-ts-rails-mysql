// import axios from "../../lib/axiosInstance";
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
});

export default axiosInstance;
