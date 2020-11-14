import React from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header-portal">
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
