import {API_URL, public_api} from './base'
const BOOKING_URL = `${API_URL}booking`

export function getAll(){
    return new Promise((resolve, reject) => {
        public_api.get(BOOKING_URL).then(response => {
            resolve(response.data)
        }).catch(error => { reject(error) })
    })
}

export default { getAll }