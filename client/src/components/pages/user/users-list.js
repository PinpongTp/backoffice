import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch, faCheck, faUser, faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'


const UsersList = () => {

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
                                <tr>
                                    <td width="5%">
                                        <FontAwesomeIcon icon={faUser} />
                                    </td>
                                    <td>Pinpong Tongpat</td>
                                    <td>Admin</td>
                                    <td className="level-right">
                                        <Link className="button is-small is-primary" to="#">
                                            <FontAwesomeIcon icon={faUserEdit} />
                                        </Link>
                                        <Link className="button is-small is-primary" to="#">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="5%">
                                        <FontAwesomeIcon icon={faUser} />
                                    </td>
                                    <td>Pinpong Tongpat</td>
                                    <td>Admin</td>
                                    <td className="level-right">
                                        <Link className="button is-small is-primary" to="#">
                                            <FontAwesomeIcon icon={faUserEdit} />
                                        </Link>
                                        <Link className="button is-small is-primary" to="#">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">View All</a>
                </footer>
            </div>

        </section>

    )
}


export default UsersList