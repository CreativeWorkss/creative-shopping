import React, { Fragment } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Footer from "../Coponents/Footer/Footer";
import TopNavbar from "../Coponents/Header/TopNavbar";

function Buy() {
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <div className="w-50 mx-auto my-5">
          <Card>
            <h1>Buy now under progress</h1>
          </Card>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Buy;
