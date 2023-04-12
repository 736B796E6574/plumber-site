import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from "../styles/Header.module.css"
import Button from 'react-bootstrap/Button'
import PlumbingIcon from '@mui/icons-material/Plumbing';
import LoginButton from './LoginButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import React, { useContext }  from 'react';
import { CartContext } from "../contexts/CartContext";

function Header() {
  const { cart } = useContext(CartContext);
  const totalItemsInCart = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <Navbar className={styles.Navvywavvy} collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className={styles.NavBrand} href="#home"><Link className={styles.RouteLink} to="/">John Smith PHE  </Link><PlumbingIcon className={styles.NavBrandIcon} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className={styles.Nav} >
          <Nav.Link href="#shop"><Link className={styles.RouteLink} to="/products">Shop</Link></Nav.Link>
            <NavDropdown bg="primary" title="Services" id="collasible-nav-dropdown" >
              <NavDropdown.Item style={{ color: "#212121", fontWeight: "500" }} href="#action/3.1">Plumbing</NavDropdown.Item>
              <NavDropdown.Item style={{ color: "#212121", fontWeight: "500" }} href="#action/3.2">
                Heating
              </NavDropdown.Item>
              <NavDropdown.Item style={{ color: "#212121", fontWeight: "500" }} href="#action/3.3">Electric</NavDropdown.Item>
              
            </NavDropdown>
          <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <LoginButton />{' '}
            <Nav.Link href="#cart"><ShoppingCartIcon /><span className={styles.NavSpan}> {totalItemsInCart}</span></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
}

export default Header;