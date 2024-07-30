import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { setUser } from '../../redux/authSlice';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(setUser(null));
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Cosmos Connect</Link>
      <div className="navbar-menu">
        {isAuthenticated ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/create-post">Create Post</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;