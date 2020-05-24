import React from "react";
import "./App.css";
import { Row, Col } from "antd";
import MainPage from "./components/MainPage/MainPage";
import LoginArea from "./components/LoginArea/LoginArea";

function App() {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={16}>
        <MainPage />
      </Col>
      <Col xs={24} sm={24} md={24} lg={8}>
        <LoginArea />
      </Col>
    </Row>
  );
}

export default App;
