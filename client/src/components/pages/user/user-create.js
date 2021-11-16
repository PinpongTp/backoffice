import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faLock,
    faUser,
    faUserPlus,
    faEnvelope
    // faCheck,
    // faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
//
import Axios from 'axios'
import { useState } from 'react'



const UserCreate = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const createUser = () => {
        console.log(name, username, email, password);
        
        const params = new URLSearchParams()
        params.append('name', name)
        params.append('username', username)
        params.append('email', email)
        params.append('password', password)

        //TODO validation after post to api
        Axios.post('http://localhost:3001/user/create', params, config ).then((res) => {

            if(res.status === 201){
                window.location.href = "/user/list";
            } else {
                console.log(res)
            }
            
        })

    }


    return (
        <section className="section">
            <div className="columns">
                <div className="column">
                    <h3 className="title is-4">Create user</h3>
                </div>
            </div>

            <div className="card events-card">
                <header className="card-header">
                    <p className="card-header-title">
                        Users list
                    </p>
                    <Link to="#" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleDown} />
                            {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                        </span>
                    </Link>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Name input"
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Username input"
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="email"
                                    placeholder="Email input"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card-footer ">
                    <div className="card-footer-item buttons flex-end">
                        <button className="button is-primary" onClick={createUser}>
                            <FontAwesomeIcon icon={faUserPlus} />
                            <p className="pad">Create</p>
                        </button>
                    </div>
                    {/* <Link to="#" className="card-footer-item">View All</Link> */}
                </footer>
            </div>

        </section>

    )
}


export default UserCreate