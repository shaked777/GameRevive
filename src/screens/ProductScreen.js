import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

function ProductScreen({ match }) {
  const { id } = useParams();
  const product = products.find((p) => String(p._id) === id);
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Continue Shopping</Link>
      <Row>
        <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
          <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>            
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'} />
            </ListGroup.Item>            
            <ListGroup.Item>
              <strong>Price: ${product.price}</strong>
            </ListGroup.Item>            
            <ListGroup.Item>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>price:</Col>
                  <Col>
                  <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In stock" : "Out of stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='d-grid gap-2'>
                <Button className='btn-block' size="lg" disabled={product.countInStock == 0} type='button'>Add to cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
