import axios from 'axios';

export const API_URL = "http://localhost:8080/"
export const BOOKING_URL = `${API_URL}booking`


export default axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json"
    }
  });