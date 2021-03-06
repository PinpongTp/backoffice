import Axios from "axios";
// import { useLayoutEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// config
import configData from "../config/config.json";
const MySwal = withReactContent(Swal)
const API_URL = configData.API_URL + '/user';
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class AuthService {

    login = (username, password) => {  

        const params = new URLSearchParams()
        params.append('username', username)
        params.append('password', password)

        Axios.post(`${API_URL}/login`, params, config).then((res) => {
            

            if (res.status === 200) {

                localStorage.setItem("user", JSON.stringify(res.data));
                window.location.href = "/";
                
            } else {
                //! show error code
                console.log(res)

            }

        }).catch((error) => {

            let text = 'error';
            console.log(error.response)
            if(typeof error.response !== 'undefined'){
                text = error.response.data.message
            }else if(typeof error !== 'undefined') {
                text = error
            }
            
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text:text,
            })

        });

    };

    logout() {
        localStorage.removeItem("user");

    }

    getCurrentUser() {
        if(JSON.parse(localStorage.getItem('user'))) {
            console.log('if', JSON.parse(localStorage.getItem('user')))
            //todo check token expire
        }else  {
            window.location.href = "/login";
        }
        return JSON.parse(localStorage.getItem('user'));
    }

    loggedIn() {
        if(JSON.parse(localStorage.getItem('user'))) {
            //todo check token expire
            return true
        }else  {
            return false
        }
    }

}

export default new AuthService();