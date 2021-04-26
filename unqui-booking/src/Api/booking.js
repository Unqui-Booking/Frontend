import {API_URL, public_api} from './base'
const BOOKING_URL = `${API_URL}booking`

export function getAll(){
    return new Promise((resolve, reject) => {
        public_api.get(BOOKING_URL).then(response => {
            resolve(response.data)
        }).catch(error => { reject(error) })
    })
}

export function registerBooking(date, endTime, startTime, desk) {
    const payload = {
      date,
      endTime,
      startTime,
      desk_id: desk
    }
    return new Promise((resolve, reject) => {
      public_api.post(BOOKING_URL, payload).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  }

export default { getAll, registerBooking }