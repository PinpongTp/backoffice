import { Link } from 'react-router-dom'

const Aside = () => {

    return (
        <aside
            className="sidebar menu is-hidden-mobile"
        >
            <p className="menu-label">
                General
            </p>
            <ul className="menu-list">
                <li>
                    <Link to="/home" className="navbar-item is-active">
                        Dashboard
                    </Link>
                </li>
            </ul>
            <p className="menu-label">
                Website
            </p>
            <ul className="menu-list">
                <li>
                    <Link to="/home" className="navbar-item is-active">
                        information
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="navbar-item is-active">
                        theme
                    </Link>
                </li>
            </ul>
            <p className="menu-label">
                Content
            </p>
            <ul className="menu-list">
                <li>
                    <Link to="/projects-list" className="navbar-item is-active">
                        Projects
                    </Link>
                    <Link to="/notes-list" className="navbar-item is-active">
                        Notes
                    </Link>
                    <Link to="/gallerys-list" className="navbar-item is-active">
                        Gallerys
                    </Link>
                </li>
            </ul>
            <p className="menu-label">
                Profile
            </p>
            <ul className="menu-list">
                <li>
                    <Link to="/profile-edit" >
                        Edit profile
                    </Link>
                    <ul>
                        <li>
                            <Link to="/profile-edit" className="navbar-item">
                                Edit profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile-change-password" className="navbar-item">
                                Change password
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile-delete" className="navbar-item">
                                Delete profile
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/login" className="navbar-item">
                        Logout
                    </Link>
                </li>
            </ul>
        </aside>
    )
}


export default Aside

