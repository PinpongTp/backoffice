import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch, faCheck, faUser, faTrashAlt, faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons'
//
import Axios from 'axios'
import { useState } from 'react'

const apiUrl = 'http://localhost:3001'

const UserList = () => {

    const [userList, setUserList] = useState([]);
    const getUsers = () => {
        Axios.get(`${apiUrl}/user/list`).then((res) => {
            setUserList(res.data)
        })
    }

    const deleteUser = (id) => {
        Axios.delete(`${apiUrl}/user/delete/${id}`).then((res) => {

            console.log('deleted')
            console.log(res)
            // setUserList(res.data)
        })
    }

    getUsers()

    return (
        <section className="section">
            <div className="columns">
                <div className="column">
                    <h3 className="title is-4">Manage users</h3>
                </div>
                <div className="column">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="" />
                        <span className="icon is-medium is-left">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span className="icon is-medium is-right">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </div>
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
                <div className="card-table">
                    <div className="content">
                        <table className="table is-fullwidth is-striped">
                            <tbody>

                                {userList.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td width="5%">
                                                <FontAwesomeIcon icon={faUser} />
                                            </td>
                                            <td>{val.name}</td>
                                            <td>{val.email}</td>
                                            <td>Admin</td>
                                            <td >
                                                <div className="level-right buttons" >
                                                    <Link className="button is-small is-info" to="#">
                                                        <FontAwesomeIcon icon={faUserEdit} />
                                                    </Link>

                                                    <Link 
                                                        className="button is-small is-danger" 
                                                        to="#"
                                                        onClick={() => {deleteUser(val.id)}}
                                                        >
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </Link>
                                                </div>
                                                
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
                <footer className="card-footer ">
                    <div className="card-footer-item buttons flex-end">
                        <Link className="button is-small is-primary" to="#">
                            <FontAwesomeIcon icon={faUserPlus} />
                        </Link>
                    </div>
                    {/* <Link to="#" className="card-footer-item">View All</Link> */}
                </footer>
            </div>

        </section>

    )
}


export default UserList