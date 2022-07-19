import { Button } from "react-bootstrap";
import React from "react";
import { Router, Route, Link } from 'react-router-dom'


export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">CRUD APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="navbar-brand">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="navbar-brand">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="navbar-brand">Contat</Link>
        </li>
      </ul>
    </div>
    <Link to="/users/add" className="btn btn-outline-light">Add user</Link>
  </div>
</nav>
    )
}