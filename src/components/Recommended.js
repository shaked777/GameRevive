import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listProducts, listRecommendedProducts } from "../actions/productActions";

function Recommended() {
  const dispatch = useDispatch();
  const productRecommendedList = useSelector((state) => state.productRecommendedList);
  const { error, loading, products } = productRecommendedList;
  const { id } = useParams();


  useEffect(() => {
    dispatch(listRecommendedProducts(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Recommended Products</h1>
      {loading ? (
        <Loader />
      ) : error ? 
        <Message variant='danger'>{error}</Message>
       : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Recommended;