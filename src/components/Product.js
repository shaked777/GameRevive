import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import Rating from './Rating'


function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
    <Link to={`/product/${product._id}`}>
      <center>
      <Card.Img style={{ width: '17rem', height:'22rem'}} src={product.image} />
      </center>
    </Link>
    
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'#f8e825'}/>
          </div>
        </Card.Text>
        <Card.Text as="h3">
            ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
