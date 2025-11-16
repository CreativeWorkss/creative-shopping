import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import Footer from "../Coponents/Footer/Footer";
import TopNavbar from "../Coponents/Header/TopNavbar";
import Accordion from "react-bootstrap/Accordion";

function Buy() {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((res) => {
      setProduct({ ...res.data });
    });
  }, []);

  console.log("i have cart item", product);
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="w-50 mx-auto my-5">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Information</Accordion.Header>
              <Accordion.Body>
                <div className="product-body">
                  <img className="buy-product-image" src={product.image} />
                  <h3>{product.title}</h3>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <h1>Buy now page in progress</h1>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Buy;
