/* eslint-disable @next/next/no-img-element */
import useLogin from "@/containers/Login/hooks/useLogin";
import Link from "next/link";
import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

function Login() {
  const { formValue, setFormValue, handleSubmit, loading } = useLogin();

  return (
    <Container fluid style={{ minHeight: "100vh", margin: "0" }}>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-center align-items-center p-0"
        >
          <Form
            className="mb-3"
            onSubmit={handleSubmit}
            style={{ width: "50%" }}
          >
            <img src="/images/Logo.svg" alt="Logo" className="mb-3" />
            <h3>Welcome Back!</h3>
            <div className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                htmlFor="email"
                id="email"
                placeholder="Contoh: johndee@gmail.com"
                onChange={(e) => {
                  setFormValue({ ...formValue, email: e.target.value });
                }}
                value={formValue.email ?? ""}
              />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                htmlFor="password"
                id="password"
                placeholder="6+ karakter"
                onChange={(e) => {
                  setFormValue({ ...formValue, password: e.target.value });
                }}
                value={formValue.password ?? ""}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="primary"
                className="d-block"
                style={{
                  width: "100%",
                  borderRadius: "1",
                  backgroundColor: "#0D28A6",
                  borderColor: "0D28A6",
                }}
                disabled={loading}
              >
                {loading ? "Please wait ..." : "Sign In"}
              </Button>
            </div>
            <div className="text-center mt-3">
              {`Don't have an account?`}{" "}
              <Link href="/signup">Sign Up for free</Link>{" "}
            </div>
          </Form>
        </Col>
        <Col lg={6} className="d-none d-lg-block p-0">
          <img
            src="/images/sideImage.svg"
            style={{ width: "100%", height: "100%" }}
            alt="Image"
          />
        </Col>
        <Col xs={12} className="d-lg-none text-center"></Col>
      </Row>
    </Container>
  );
}

export default Login;
