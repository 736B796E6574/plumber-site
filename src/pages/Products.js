import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "../styles/Products.module.css"

const ProductList = () => {
    const products = [
        {
          id: 1,
          name: 'Flexible Waste Pipe',
          price: 12.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/floplast-black-flexible-waste-pipe-l-25m-dia-80mm~5055149925689_02c?wid=284&hei=284' },
          category: { name: 'Category1', friendly_name: 'Pipes' },
          rating: 4.5,
        },
        {
          id: 2,
          name: 'Cooke & Lewis 1.5/2 bowl Pack B waste, overflow & plumbing kit',
          price: 25.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/cooke-lewis-1-5-2-bowl-pack-b-waste-overflow-plumbing-kit~3663602608479_01c_bq?wid=284&hei=284' },
          category: { name: 'Category2', friendly_name: 'Drains' },
          rating: 3.8,
        },
        {
          id: 3,
          name: 'Grohe even white cistern',
          price: 15.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/grohe-even-alpine-white-cistern-h-455mm-w-415mm-d-140mm~3663602387947_01c?wid=284&hei=284' },
          category: { name: 'Category3', friendly_name: 'Toilet' },
          rating: 5.0,
        },
        {
          id: 4,
          name: 'Drain rods',
          price: 18.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/bailey-12-piece-drain-rod-set~5016729030490_01c_BQ?wid=284&hei=284' },
          category: { name: 'Category1', friendly_name: 'Pipes' },
          rating: 4.2,
        },
        {
          id: 5,
          name: 'Grohe even dial flushing  plate',
          price: 22.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/grohe-even-dual-flushing-plate-h-156mm-w-197mm~4005176914539_03c_BQ?wid=284&hei=284' },
          category: { name: 'Category2', friendly_name: 'Drains' },
          rating: 3.5,
        },
        {
          id: 6,
          name: 'Brass effect plug',
          price: 19.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/cooke-lewis-brass-effect-stainless-steel-replacement-basket-waste~5059340139050_07c?wid=284&hei=284' },
          category: { name: 'Category3', friendly_name: 'Repairs' },
          rating: 4.7,
        },
        {
          id: 7,
          name: 'Climaflex pipe cover',
          price: 29.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/climaflex-polyethylene-foam-pipe-lagging-l-1m-dia-15mm~5413257001143_01bq?wid=284&hei=284' },
          category: { name: 'Category1', friendly_name: 'Pipes' },
          rating: 4.0,
        },
        {
          id: 8,
          name: 'Blue pipe',
          price: 9.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/pipelife-blue-polyethylene-pe-push-fit-barrier-pipe-l-25m-dia-25mm~5391536810528_01c?wid=284&hei=284' },
          category: { name: 'Category2', friendly_name: 'Drains' },
          rating: 3.2,
        },
        {
          id: 9,
          name: 'Salt softener',
          price: 32.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/bwt-tablet-water-softener-salt-10kg~5060009330947_08c?wid=284&hei=284' },
          category: { name: 'Category3', friendly_name: 'Repairs' },
          rating: 5.0,
        },
        {
          id: 10,
          name: 'Dual flush ciphon',
          price: 19.99,
          image: { url: 'https://media.diy.com/is/image/Kingfisher/thomas-dudley-dual-flush-syphon~5013241049368_10c?wid=284&hei=284' },
          category: { name: 'Category1', friendly_name: 'Pipes' },
          rating: 4.2,
        },
      ];

      
      

  return (
      <div>
          <div>
              <h1 className={styles.Heading1}>Plumbing Supplies</h1>
          </div>
    <Container>
      <Row className={styles.ProductCard}>
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <Col sm={6} md={6} lg={3} xl={3} className="mb-5">
              <Card className="h-100 border-0 {styles.ProductCard}">
                <Link to="#">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={product.image ? product.image.url : `https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/ZTA2YjQwMmUt/ZTA2YjQwMmUt-NzM5MDdjMTIt-w379._SY304_CB594723446_.jpg`}
                    alt={product.name}
                  />
                </Link>
                <Card.Body className="pb-0">
                  <Card.Text className="mb-0">{product.name}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white pt-0 border-0 text-left">
                  <Row>
                    <Col>
                      <p className="lead mb-0 text-left font-weight-bold">
                      €{product.price}
                      </p>
                      {product.category && (
                        <p className="small mt-1 mb-0">
                          <Link className="text-muted" to={`/products?category=${product.category.name}`}>
                            <i className="fas fa-tag mr-1">
                              {product.category.friendly_name}
                            </i>
                          </Link>
                        </p>
                      )}
                      {product.rating ? (
                        <small className="text-muted">
                          <i className="fas fa-star mr-1"></i>
                          {product.rating} /5
                        </small>
                      ) : (
                        <small className="text-muted">No Rating</small>
                      )}
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
    </div>
  );
};

export default ProductList;
