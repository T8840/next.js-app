import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

function Testimonial() {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [index, setIndex] = useState(0);
  const slideCount = 3;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const onClickBtn = (status) => {
    if (status === "prev") {
      const prevIndex = index > 0 ? index - 1 : slideCount - 1;
      setIndex(prevIndex);
      setPrev(true);
      setNext(false);
    } else if (status === "next") {
      const nextIndex = index < slideCount - 1 ? index + 1 : 0;
      setIndex(nextIndex);
      setPrev(false);
      setNext(true);
    }
  };
  return (
    <div>
      <section id={`${styles.testimonial}`} className="mb-3">
        <div className="container my-5">
          <div className="text-center">
            <h1>Testimonial</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              doloremque iure ullam.
            </p>
          </div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
          >
            <Carousel.Item>
              <div className="row">
                <div className="col-sm-12">
                  <div className={`card p-5 border-0 rounded ${styles.card}`}>
                    <div className="d-flex flex-column flex-lg-row justify-content-center">
                      <div>
                        <div className="text-center text-lg-start mt-3 mx-4">
                          <img src="/images/person1.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="text-center text-lg-start">
                          <img src="/images/rate.png" alt="" />
                        </div>
                        <div className="my-2">
                          <p className="fw-bold">
                            `Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!`
                          </p>
                        </div>
                        <div>
                          <span>John Dee 32, Bromo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-sm-12">
                  <div className={`card p-5 border-0 rounded ${styles.card}`}>
                    <div className="d-flex flex-column flex-lg-row justify-content-center">
                      <div>
                        <div className="text-center text-lg-start mt-3 mx-4">
                          <img src="/images/person2.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="text-center text-lg-start">
                          <img src="/images/rate.png" alt="" />
                        </div>
                        <div className="my-2">
                          <p className="fw-bold">
                            `Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!`
                          </p>
                        </div>
                        <div>
                          <span>John Dee 32, Bromo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row">
                <div className="col-sm-12">
                  <div className={`card p-5 border-0 rounded ${styles.card}`}>
                    <div className="d-flex flex-column flex-lg-row justify-content-center">
                      <div>
                        <div className="text-center text-lg-start mt-3 mx-4">
                          <img src="/images/person1.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="text-center text-lg-start">
                          <img src="/images/rate.png" alt="" />
                        </div>
                        <div className="my-2">
                          <p className="fw-bold">
                            `Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!`
                          </p>
                        </div>
                        <div>
                          <span>John Dee 32, Bromo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="my-3 d-flex justify-content-center align-items-center gap-2">
            <button
              type="button"
              className={`rounded-circle ${
                prev && !next ? "btn btn-success" : "btn btn-outline-dark"
              }`}
              onClick={() => onClickBtn("prev")}
            >
              {`<`}
            </button>
            <button
              type="button"
              className={`rounded-circle ${
                !prev && next ? "btn btn-success" : "btn btn-outline-dark"
              }`}
              onClick={() => onClickBtn("next")}
            >
              {`>`}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
