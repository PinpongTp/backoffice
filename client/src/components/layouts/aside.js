import { NavLink, Link } from 'react-router-dom'
// service 
import AuthService from '../../service/auth-service'

const Logout = () => {
    AuthService.logout()
    console.log('logout')
}

const Aside = () => {

    return (
        <aside
            className="sidebar menu pad"
        >
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink to="/home" activeClassName="is-active">
                        Dashboard
                    </NavLink>
                </li>
            </ul>
            <p className="menu-label">
                Website
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink activeClassName="is-active" to="/information">
                        information
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/theme">
                        theme
                    </NavLink>
                </li>
            </ul>
            <p className="menu-label">
                Content
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink activeClassName="is-active" to="/projects-list">
                        Projects
                    </NavLink>
                    <NavLink activeClassName="is-active" to="/notes-list">
                        Notes
                    </NavLink>
                    <NavLink activeClassName="is-active" to="/gallerys-list">
                        Gallerys
                    </NavLink>
                </li>
            </ul>
            <p className="menu-label">
                Administer
            </p>
            <ul className="menu-list">
                <li>
                    <NavLink activeClassName="is-active" to="/user/list">
                        Manage users
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="is-active" to="/user/create">
                        Create user
                    </NavLink>
                </li>
            </ul>
            <p className="menu-label">
                Profile
            </p>
            <ul className="menu-list">
                <li>
                    <Link to="/profile-edit"  >
                        Edit profile
                    </Link>
                    <ul>
                        <li>
                            <NavLink activeClassName="is-active" to="/profile-edit" >
                                Edit profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="is-active" to="/profile-change-password" >
                                Change password
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="is-active" to="/profile-delete" >
                                Delete profile
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/login" onClick={Logout}>
                        Logout
                    </Link>
                </li>
            </ul>
        </aside>
    )
}


export default Aside

