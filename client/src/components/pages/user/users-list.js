import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch, faCheck } from '@fortawesome/free-solid-svg-icons'


const UsersList = () => {

    return (
        <section class="section">
            <div className="columns">
                <div className="column">
                    <h3 class="title is-4">Manage users</h3>
                </div>
                <div className="column">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="" />
                        <span class="icon is-medium is-left">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span class="icon is-medium is-right">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </div>
                </div>
            </div>

            <div class="card events-card">
                <header class="card-header">
                    <p className="card-header-title">
                        Users list
                    </p>
                    <Link to="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <FontAwesomeIcon icon={faAngleDown} />
                            {/* <i class="fa fa-angle-down" aria-hidden="true"></i> */}
                        </span>
                    </Link>
                </header>
                <div class="card-table">
                    <div class="content">
                        <table class="table is-fullwidth is-striped">
                            <tbody>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                                <tr>
                                    <td width="5%"><i class="fa fa-bell-o"></i></td>
                                    <td>Lorum ipsum dolem aire</td>
                                    <td class="level-right"><a class="button is-small is-primary" href="#">Action</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">View All</a>
                </footer>
            </div>

        </section>

    )
}


export default UsersList