import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" href=".">
          Rick and Morty
        </span>

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
          <ul className="navbar-nav d-flex ">
            <li className="nav-item mr-5 ">
              <Link
                className="text-decoration-none text-dark"
                to="/rick-and-morty-app"
              >
                <button className="btn btn-light">Home</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-decoration-none text-dark" to="/personajes">
                <button className="btn btn-light">Personajes</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
