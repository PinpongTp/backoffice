import Axios from "axios";
// config
import configData from "../config/config.json";
const API_URL = configData.API_URL + '/user';
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class UserService {

    userData = (id) => {
        return Axios.get(`${API_URL}/userdata/${id}`, config)
    }

    userUpdate = (id, params) => {
        return Axios.post(`${API_URL}/edit/${id}`, params, config)
    }

    userDelete = (id) => {
        return Axios.delete(`${API_URL}/delete/${id}`)
    }

}

export default new UserService();