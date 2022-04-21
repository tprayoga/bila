import React from "react";

const navbarsec = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              <strong>BLOGS</strong>
            </a>
            <a className="nav-link" href="#">
              <strong>COMUNITY</strong>
            </a>
            <a className="nav-link" href="#">
              <strong>EXPERT CLASS</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbarsec;
