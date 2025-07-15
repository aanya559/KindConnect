// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Make sure this matches your backend base URL
});

export default API;
