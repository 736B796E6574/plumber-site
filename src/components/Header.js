import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/Header.module.css"
import Button from 'react-bootstrap/Button'
import PlumbingIcon from '@mui/icons-material/Plumbing';

function Header() {
  return (
    <Navbar className={styles.Navvywavvy} collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand className={styles.NavBrand} href="#home">Michael Daly PHE  <PlumbingIcon /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className={styles.Nav}>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Plumbing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Heating
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Electric</NavDropdown.Item>
              
            </NavDropdown>
          <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Button variant="outline-light">Pay</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;