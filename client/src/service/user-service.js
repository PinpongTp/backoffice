import Axios from "axios";

const API_URL = "http://localhost:3001";
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class UserService {

    userData = (id) => {
        return Axios.get(`${API_URL}/user/userdata/${id}`, config)
    }

    userUpdate = (id, params) => {
        return Axios.post(`${API_URL}/user/edit/${id}`, params, config)
    }

    userDelete = (id) => {
        return Axios.delete(`${API_URL}/user/delete/${id}`)
    }

}

export default new UserService();