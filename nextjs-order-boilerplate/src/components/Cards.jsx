import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
// import { useSearchParams } from "react-router-dom";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

function Cards() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const router = useRouter();
  const { name, kategori, harga, status } = router.query;
  const [data, setData] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const numberBeRp = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const goToDetail = (id) => {
    router.push(`/detail/${id}`);
  };

  useEffect(() => {
    const fetchCarsData = async () => {
      try {
        const response = await axios.get(
          process.env.host + "/customer/v2/car",
          {
            params: {
              name: name,
              category: kategori === "undefined" ? "" : kategori,
              isRented: status === "undefined" ? "" : status,
              minPrice: harga === "undefined" ? "" : minPrice,
              maxPrice: harga === "undefined" ? "" : maxPrice,
            },
          }
        );
        setData(response.data.cars);
      } catch (error) {
        console.log("error > ", error);
      }
    };
    if (harga === "0-399999") {
      setMinPrice(0);
      setMaxPrice(399999);
    } else if (harga === "400000-600000") {
      setMinPrice(400000);
      setMaxPrice(600000);
    } else if (harga === "600001-99999999999") {
      setMinPrice(600001);
      setMaxPrice(99999999999);
    } else {
      setMinPrice(0);
      setMaxPrice(0);
    }
    fetchCarsData();
  }, [harga, kategori, maxPrice, minPrice, name, status]);

  return (
    <Container className={`pt-5 ${styles.cardCarDetail}`}>
      <Row>
        {data?.length > 0 ? (
          data.map((car, index) => {
            return (
              <Col lg={4} key={index}>
                <Card>
                  {car && car.image ? (
                    <Card.Img variant="top" src={car.image}></Card.Img>
                  ) : (
                    <div
                      style={{
                        minHeight: "5rem",
                        background: "gray",
                        borderRadius: "10px",
                      }}
                    >
                      Default Background
                    </div>
                  )}
                  <Card.Body>
                    <Card.Title>{car.name}</Card.Title>
                    <Card.Text>{numberBeRp.format(car.price)} / hari</Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae inventore natus voluptate nobis vitae odit
                      accusamus neque! Vero similique praesentium ullam iste in,
                      laboriosam ut laborum commodi maiores odit ea.
                    </Card.Text>
                    <Button
                      type="button"
                      variant="success"
                      // className="d-block"
                      style={{ width: "100%" }}
                      onClick={() => goToDetail(car.id)}
                    >
                      Pilih Mobil
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <>Kata kunci {name} tidak ada</>
        )}
      </Row>
    </Container>
  );
}

export default Cards;
