import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import styles from "../styles/Products.module.css";
import { CartContext } from "../contexts/CartContext";
import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image_url
    }
  }
`;

const ProductCard = () => {
  const { addToCart } = useContext(CartContext);
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products.map((product) => ({
    ...product,
    image: { url: product.image_url },
  }));

  return (
    <Container>
      <Row className={styles.ProductCard}>
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <Col sm={6} md={6} lg={3} xl={3} className={styles.ProductCardContainer}>
              <Card className={`h-100 border-0 ${styles.ProductCard}`}>
                <Link to="#">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={
                      product.image
                        ? product.image.url
                        : `https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZTA2YjQwMmUt/ZTA2YjQwMmUt-NzM5MDdjMTIt-w379._SY304_CB594723446_.jpg`
                    }
                    alt={product.name}
                  />
                </Link>
                <Card.Body className="pb-0">
                  <Card.Text className="mb-0">{product.name}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white pt-0 border-0 text-left">
                  <button
                    className={styles.AddToCartButton}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <Row>
                    <Col>
                      <p className="lead mb-0 text-left font-weight-bold">
                        €{product.price}
                      </p>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
            {(index + 1) % 2 === 0 && (
              <Col sm={12} className="d-sm-none mb-5">
                <hr />
              </Col>
            )}
            {(index + 1) % 2 === 0 && (
              <Col md={12} className="d-none d-sm-block d-md-block d-lg-none mb-5">
                <hr />
              </Col>
            )}
            {(index + 1) % 3 === 0 && (
              <Col lg={12} className="d-none d-lg-block d-xl-none mb-5">
              <hr />
            </Col>
          )}
          {(index + 1) % 4 === 0 && (
            <Col xl={12} className="d-none d-xl-block mb-5">
              <hr />
            </Col>
          )}
        </React.Fragment>
      ))}
    </Row>
  </Container>
);
};

export default ProductCard;
