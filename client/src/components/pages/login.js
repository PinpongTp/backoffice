// import React from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const storedJwt = localStorage.getItem('token');
    // const [jwt, setJwt] = useState(storedJwt || null);

    const apiUrl = 'http://localhost:3001'


    const onsubmit = () => {
        console.log('-- login --')
        console.log(username);
        console.log(password);
        login(username, password)
    }

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const login = (username, password) => { // getJwt 

        console.log('login function');
        const params = new URLSearchParams()
        params.append('username', username)
        params.append('password', password)

        Axios.post(`${apiUrl}/user/login`, params, config).then((res) => {
            

            if (res.status === 200) { // if login
                localStorage.setItem('token', res.data.token);
                window.location.href = "/";
            } else { // if not
                //! show error code
                console.log(res)

            }

        }).catch((error) => {
            // Handle error.
            console.log('An error occurred:', error.response);
            MySwal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
            })

        });

        // console.log(data)
        // localStorage.setItem('token', data.token);
        // setJwt(data.token);
    };

    return (
        <section className="section is-medium fit">
            <div className="container is-max-desktop">
                <div className="columns">
                    <div style={{ padding: "50px" }} className="column left" >
                        <h1 className="title is-1">Backoffice Login</h1>
                        <h2 className="subtitle colored is-4"><Link to="/"><i>Pinpong.co</i></Link> content management system login.</h2>
                        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ex deleniti aliquam tempora libero excepturi vero soluta odio optio sed.</p> */}
                    </div>
                    <div style={{ padding: "50px" }} className="column right has-text-centered">
                        {/* <h1 className="title is-4">Backoffice Login</h1> */}
                        {/* <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p> */}
                        {/* <br/> */}
                        {/* <form action=""> */}
                        <div className="field">
                            <div className="control">
                                <input className="input is-medium" type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input is-medium" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                        </div>
                        <button className="button is-block is-primary is-fullwidth is-medium" onClick={onsubmit} >Login</button>
                        <br />
                        {/* <small><em>Lorem ipsum dolor sit amet consectetur.</em></small> */}
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Login