import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Navbar
    </Link>
    <button
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="/navbarSupportedContent"
      data-bs-toggle="collapse"
      type="button">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link aria-current="page" className="nav-link active" to="/Home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">
            About
          </Link>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search">
      <div className={`form-check form-switch me-5 text-${props.mode==="light"?"dark":"light"} me-2`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable to {props.mode==="dark"?"light":"dark"}Mode</label>
            </div>
        <input
          aria-label="Search"
          className="form-control me-2"
          placeholder="Search"
          type="search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
