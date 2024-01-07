import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <navbar className="d-flex gap-2">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/books">Book</Link>
    </navbar>
  );
}

export default Navbar;
