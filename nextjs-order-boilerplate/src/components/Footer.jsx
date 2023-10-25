import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <section id="footer" className={`${styles.footer}`}>
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
            <div className="fw-bold d-flex flex-column gap-2">
              <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
              <div>binarcarrental@gmail.com</div>
              <div>081-233-334-808</div>
            </div>
            <div className="menu">
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li>Our Services</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <div className="fw-bold mb-2">Connect with us</div>
              <div className="d-flex gap-2">
                <span className={`${styles.icon}`}>
                  <img src="/images/logo/fb-logo.png" alt="" />
                </span>
                <span className={`${styles.icon}`}>
                  <img src="/images/logo/ig-logo.png" alt="" />
                </span>
                <span className={`${styles.icon}`}>
                  <img src="/images/logo/tw-logo.png" alt="" />
                </span>
                <span className={`${styles.icon}`}>
                  <img src="/images/logo/mail-logo.png" alt="" />
                </span>
                <span className={`${styles.icon}`}>
                  <img src="/images/logo/tt-logo.png" alt="" />
                </span>
              </div>
            </div>
            <div>
              <div className="fw-bold mb-2">Copyright Binar 2023</div>
              <div>
                <span className={`${styles.logo}`}></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
