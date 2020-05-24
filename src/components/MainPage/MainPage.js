import React from "react";
import { Row, Col } from "antd";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage-container">
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Support</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
        <Row className="new-features">
          <Col xs={24} sm={24} md={24} lg={12}>
            <h1>
              <span className="span1">
                New Features <br></br>in
              </span>{" "}
              <span className="span2">Designer</span>
            </h1>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12}>
                <p className="new-features-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada molestie congue. Integer sed neque a
                  erat porttitor varius consectetur nec.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className="big-box"></div>
            <div className="smallbox1"></div>
            <div className="smallbox2"></div>
            <div className="smallbox3"></div>
            <div className="mediumbox"></div>
          </Col>
        </Row>
        <div className="main-bottom">
          <p className="bold-text">12 May 2020</p>
          <Row>
            <Col xs={24} sm={24} md={8} lg={8}>
              <div className="lorem1">
                <p className="bold-text">Lorem ipsum dolor sit amet</p>
              </div>
              <div className="lorem2">
                <p className="bold-text">Lorem ipsum dolor</p>
              </div>
              <div className="lorem3">
                <p className="bold-text">Lorem ipsum</p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16}>
              <div className="lorem1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ornare orci et tincidunt lobortis. Maecenas sed
                  fringilla erat. Proin ultricies, elit eu venenatis porttitor,
                  dolor risus tempus orci, a mattis dui ex eu nulla. Aliquam eu
                </p>
              </div>
              <div className="lorem2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ornare orci et tincidunt lobos ul lobortis ut a nunc.
                  Fusce at interdum elit.
                </p>
              </div>
              <div className="lorem3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ornare orci et tincidunt lobos ul lobortis ut a nunc.
                  Fusce at interdum elit.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
