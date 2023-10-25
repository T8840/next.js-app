import React from "react";
import { Row, Col, Card, Container, Button, ListGroup } from "react-bootstrap";
function StepOne(props) {
  const {
    styles,
    handleClickBank,
    checkedItem,
    bankItems,
    nextStep,
    numberBeRp,
    categoryPerson,
    differenceDay,
    orderDetail
  } = props;

  return (
    <Container className={`mb-3 ${styles.cardCarDetail}`}>
      <Row>
        <Col className="col-7">
          <Card className="border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title className="mt-4">Pilih Bank Transfer</Card.Title>
              <Card.Text className="mt-4">
                <p>
                  Kamu bisa membayar dengan transfer melalui ATM, Internet
                  Banking atau Mobile Banking
                </p>
              </Card.Text>
              <ListGroup variant="flush" border={false} className={`mt-5`}>
                {bankItems.map((item) => (
                  <ListGroup.Item
                    key={item.id}
                    onClick={() => handleClickBank(item.id)}
                    className={styles.customListgroup}
                  >
                    <div className={styles.cardWrapper}>
                      <Card
                        style={{
                          marginRight: "10px",
                          width: "70px",
                          height: "30px",
                        }}
                      >
                        <Card.Body style={{ padding: "0" }}>
                          <Card.Text>
                            <p
                              style={{
                                marginLeft:
                                  item.name === "Mandiri" ? "7px" : "20px",
                              }}
                            >
                              {item.name}
                            </p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      {item.title}
                    </div>
                    <div className={styles.checklist}>
                      {checkedItem === item.id ? <span>&#10003;</span> : null}
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-5">
          <Card className="border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title>
                <h5>{orderDetail?.Car?.name}</h5>
              </Card.Title>
              <div className="d-flex flex">
                <div>
                  <img
                    src="/images/logo/users-logo.png"
                    alt=""
                    style={{ width: "15px", marginRight: "5px" }}
                  />{" "}
                </div>
                <Card.Title className="mt-1 fs-6 fw-semibold">
                  <p className="text-secondary">
                    {orderDetail && orderDetail?.Car?.category
                      ? categoryPerson(orderDetail?.Car?.category)
                      : ""}
                  </p>
                </Card.Title>
              </div>
              <div className="mt-5 mb-2">
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <p>Total</p>
                    <h6>{numberBeRp.format(orderDetail?.total_price)}</h6>
                  </div>
                </Card.Text>
                <Card.Text>
                  <h6>Harga</h6>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>
                        Sewa Mobil {numberBeRp.format(orderDetail?.Car?.price)}{" "}
                        x {differenceDay()} Hari
                      </li>
                    </ul>
                    <p>{numberBeRp.format(orderDetail?.total_price)}</p>
                  </div>
                </Card.Text>
                <Card.Text>
                  <h6>Biaya Lainnya</h6>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>Pajak</li>
                    </ul>
                    <p style={{ color: "#28a745" }}>Termasuk</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>Biaya makan supir</li>
                    </ul>
                    <p style={{ color: "#28a745" }}>Termasuk</p>
                  </div>
                </Card.Text>
                <Card.Text>
                  <h6>Belum Termasuk</h6>
                  <div className="d-flex justify-content-between">
                    <ul>
                      <li>Bensin</li>
                      <li>Total dan parkir</li>
                    </ul>
                  </div>
                </Card.Text>
              </div>
              <hr />
              <div className="mt-3 mb-5">
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <h6>Total</h6>
                    <h6>{numberBeRp.format(orderDetail?.total_price)}</h6>
                  </div>
                </Card.Text>
              </div>
              <div>
                <Button
                  type="button"
                  variant="success"
                  className="d-block"
                  style={{ width: "100%" }}
                  disabled={!checkedItem}
                  onClick={nextStep}
                >
                  Bayar
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StepOne;
