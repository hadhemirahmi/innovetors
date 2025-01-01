import 'bootstrap/dist/css/bootstrap.min.css';
import '../pejes/styles.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../App'; 

function Nav() {
  const context = useContext(MyContext);
  if (!context) {
    console.error('MyContext is null or undefined in Nav component');
    return <div>Error: Context not found</div>;
  }
  const { basename } = context;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <img src="logo.png" alt="Logo" style={{ height: '40px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={`${basename}/about`}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${basename}/why`}>Why Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`${basename}/contact`}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary" href="#join">Join Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;