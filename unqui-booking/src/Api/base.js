import axios from 'axios';

export const API_URL     = "http://localhost:8080/"
export const BOOKING_URL = `${API_URL}booking`
export const DESK_URL    = `${API_URL}desk`
export const CHAIR_URL   = `${API_URL}seat`


export default axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json"
    }
  });