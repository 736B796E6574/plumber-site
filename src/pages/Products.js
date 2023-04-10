import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Form,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faArrowUp, faStar } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  // Replace this with the actual data from your React state or props
  const currentCategories = []; // Dummy data
  const products = []; // Dummy data
  const currentSorting = ''; // Dummy data
  const search_term = ''; // Dummy data

  return (
    <>
      <div className="overlay"></div>
      <Container fluid>
        <Row>
          <Col className="text-center mt-3">
            <h2 className="logo-font">Products</h2>
            {currentCategories.map((c) => (
              <Link
                key={c.name}
                className="category-badge text-decoration-none"
                to={`/products?category=${c.name}`}
              >
                <Badge className="p-2 badge-white text-black rounded-0 border border-dark">
                  {c.friendly_name}
                </Badge>
              </Link>
            ))}
            <hr className="w-50 mb-1" />
          </Col>
        </Row>
        {/* Add the rest of the content similar to the example provided above */}
        {/* ... */}
      </Container>
      <Button className="btt-button shadow-sm rounded-0 border border-black">
        <FontAwesomeIcon icon={faArrowUp} className="text-black mx-auto my-auto" />
      </Button>
    </>
  );
};

export default Products;
