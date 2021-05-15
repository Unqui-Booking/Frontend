import http from "../Api/base";

class DataService {
    
  get(requestUrl) {
    return http.get(requestUrl);
  }

  register(requestUrl, data) {
    return http.post(`${requestUrl}`, data);
  }

}

export default new DataService();