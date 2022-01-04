import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faLock,
    faUser,
    faUserEdit,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
//
import { useEffect, useState } from 'react'
// service
import userService from '../../../service/user-service'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



const UserEdit = () => {

    let { id } = useParams();

    const [init, setInit] = useState(true)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const updateUser = () => {
        
        console.log(name, username, email, password);

        const params = new URLSearchParams()
        params.append('name', name)
        params.append('username', username)
        params.append('email', email)

        console.log(name, username, email)
        
        userService.userUpdate(id, params).then((res) => {

            if(res.status === 200) {
                console.log('200', res)

                MySwal.fire({
                    icon: 'success',
                    title: 'Update success'
                }).then(() => {
                    console.log('then')
                    window.location.href = "/user/list";
                })

            }else {
                console.log(res)
            }
        })
    }

    const getUserData = () => {
        console.log('get user data')
        console.log('id', id)

        userService.userData(id).then((res) => {
            setName(res.data.name)
            setUsername(res.data.username)
            setEmail(res.data.email)
            setInit(false)
        })

    }

    useEffect(() => {
        if(init){
            getUserData();
        }
    })

    return (
        <section className="section">
            <div className="columns">
                <div className="column">
                    <h3 className="title is-4">Edit user</h3>
                </div>
            </div>

            <div className="card events-card">
                <header className="card-header">
                    <p className="card-header-title">
                        Users data
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
                                    defaultValue={name}
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
                                    defaultValue={username}
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
                                    defaultValue={email}
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
                    <div className="card-footer-item buttons flex-between">
                        <Link className="button is-light" to="/user/list">
                            <p className="pad">Cancel</p>
                        </Link>
                        <button className="button is-primary" onClick={updateUser}>
                            <FontAwesomeIcon icon={faUserEdit} />
                            <p className="pad">Update</p>
                        </button>
                    </div>
                    {/* <Link to="#" className="card-footer-item">View All</Link> */}
                </footer>
            </div>

        </section>

    )
}


export default UserEdit