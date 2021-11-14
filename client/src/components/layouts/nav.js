import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item title" href="/">
                PINPONG.co
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/about" className="navbar-item">
                  I'am
                </Link>
                <Link to="/gallery" className="navbar-item">
                  Gallery
                </Link>
                <Link to="/note" className="navbar-item">
                  Note
                </Link>
                <Link to="/project" className="navbar-item">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </nav>
    )
}


export default Nav

