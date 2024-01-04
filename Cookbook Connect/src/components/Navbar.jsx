import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid header">
        <a className="navbar-brand" href="#" >
        <h1>Cookbook Connect</h1>
        </ a>
        <a className="navbar-brand" href="#">
        <h2><i>Discover some recipes!</i></h2>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuthenticated && ( // Render the "Home" link if authenticated
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            )}
          </ul>
          {isAuthenticated && <LogoutButton />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;