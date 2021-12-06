import configData from "../config/config.json";
import Axios from "axios";

const API_URL = configData.API_URL;
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class NoteService {

    Data = (id) => {
        return Axios.get(`${API_URL}/user/data/${id}`, config)
    }

    Update = (id, params) => {
        return Axios.post(`${API_URL}/user/edit/${id}`, params, config)
    }

    Delete = (id) => {
        return Axios.delete(`${API_URL}/user/delete/${id}`)
    }

}

export default new NoteService();