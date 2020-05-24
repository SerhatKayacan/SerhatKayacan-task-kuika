import React from "react";
import { Form, Input, Button } from "antd";
import { MailFilled, LockFilled } from "@ant-design/icons";
import "./LoginArea.css";

function LoginArea() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login-container">
      <div>
        <span className="span1">Sign In</span>{" "}
        <span className="span2">
          <a href="/#">Sign up</a>
        </span>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<MailFilled className="site-form-item-icon" />}
            placeholder="e-mail address..."
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockFilled className="site-form-item-icon" />}
            type="password"
            placeholder="password..."
          />
        </Form.Item>
        <Form.Item className="forgot-password">
          <a className="login-form-forgot" href="/#">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item className="sign-in">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginArea;
