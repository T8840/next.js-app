import auth from "@/utils/auth";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
function SideBar(props) {
  const { user } = useSelector((state) => state.login);
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div>
      <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5 className="offcanvas-title fw-bold">BCR</h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="menu">
            <ul>
              <li>Our Services</li>
              <li>Why Us</li>
              <li>Testimonial</li>
              <li>FAQ</li>
              {user && user?.email ? (
                <li className="nav-item me-3" onClick={() => handleLogout()}>
                  Logout
                </li>
              ) : (
                <li>
                  <button type="button" className="btn btn-success">
                    Register
                  </button>
                </li>
              )}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SideBar;
