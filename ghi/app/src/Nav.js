import { NavLink, Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                List
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/list/manufacturers/">Manufacturers</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/list/models/">Vehicle Models</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/list/automobiles/">Automobiles</Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="/list/technicians/">Technicians</Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="/list/salespeople/">Salespeople</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/list/customers/">Customers</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Create
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/new/manufacturer/">Manufacturer</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/new/model/">Model</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/new/auto/">Car</Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="/new/salesperson/">Salesperson</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/new/customer/">Customer</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="list/appointments">Appointment List</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
