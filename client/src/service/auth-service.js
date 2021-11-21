import Axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const API_URL = "http://localhost:3001";
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

        Axios.post(`${API_URL}/user/login`, params, config).then((res) => {
            

            if (res.status === 200) {

                localStorage.setItem("user", JSON.stringify(res.data));
                window.location.href = "/";
                
            } else {
                //! show error code
                console.log(res)

            }

        }).catch((error) => {
            
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
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