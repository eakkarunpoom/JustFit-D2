import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarHeader.css";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import ButtonSignup from "../ButtonSignup/ButtonSignup";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const NavbarHeader = ({ user, userLoaded }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(function() {
        // Sign-out successful.
        window.location.reload(false);
      })
      .catch(function(error) {
        // An error happened.
        console.log("error: ", error);
      });
  };

  return (
    <Navbar expand="md">
      <Container>
        <div className="logo">
          <Navbar.Brand href="/">
            Just<span>Fit</span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="menu-bar">
            <Nav>
              <Nav.Link href="/workout-videos">Workout videos</Nav.Link>
              <Nav.Link href="/recipes">Recipes</Nav.Link>
              <Nav.Link href="/dashboard">Dash board</Nav.Link>
            </Nav>
          </div>
          <div className="btn-join">
            <Nav>
              {userLoaded && (
                <>
                  {!user && (
                    <>
                      <ButtonLogin />
                      <ButtonSignup />
                    </>
                  )}
                  {user && <ButtonLogout handleLogout={handleLogout} />}
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
