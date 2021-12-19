import configData from "../config/config.json";
import Axios from "axios";

const API_URL = configData.API_URL + '/note';
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class NoteService {

    Data = (id) => {
        return Axios.get(`${API_URL}/data/${id}`, config)
    }

    DataList = () => {
        return Axios.get(`${API_URL}/list`, config)
    }

    Update = (id, params) => {
        return Axios.post(`${API_URL}/edit/${id}`, params, config)
    }

    Delete = (id) => {
        return Axios.delete(`${API_URL}/delete/${id}`)
    }

    Create = (params) => {
        return Axios.post(`${API_URL}/create`, params, {
            headers: {
                // ? config this for upload file with form data.
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    Upload = (params) => {
        return Axios.post(`${API_URL}/upload`, params, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export default new NoteService();