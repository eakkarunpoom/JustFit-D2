import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarHeader.css';
import ButtonLogin from '../ButtonLogin/ButtonLogin';
import ButtonSignup from '../ButtonSignup/ButtonSignup';

const NavbarHeader = () => {
  return (
      <Navbar expand="md">
        <Container>
          <div className='logo'>
            <Navbar.Brand href="/">Just<span>Fit</span></Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <div className='menu-bar'>
            <Nav>
              <Nav.Link href="/workout-videos">Workout videos</Nav.Link>
              <Nav.Link href="#link">Recipes</Nav.Link>
              <Nav.Link href="/dashboard">Dash board</Nav.Link>
            </Nav>
          </div>
          <div className='btn-join'>
            <Nav>
              <ButtonLogin />
              <ButtonSignup />
            </Nav>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavbarHeader;