import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free";
import { AuthContext } from "../Store/AuthContextProvider";

export default function Navbar() {
  let { token, setToken } = useContext(AuthContext);

  function logout() {
    setToken(null);
    localStorage.removeItem("Token");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="">
          Noxe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {token && (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">
                    People
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tv">
                    TV
                  </Link>
                </li>
              </ul>
            </>
          )}
          <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
            {token && (
              <div className="d-flex ">
                <li className="nav-item me-4 me-lg-0">
                  <Link className="nav-link" to="">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li className="nav-item me-4 me-md-0">
                  <Link className="nav-link" to="">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li className="nav-item me-4 me-md-0">
                  <Link className="nav-link" to="">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li className="nav-item me-4 me-md-0">
                  <Link className="nav-link" to="">
                    <i className="fa-brands fa-spotify"></i>
                  </Link>
                </li>
              </div>
            )}
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={logout}>
                  LogOut
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
