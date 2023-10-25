import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";
import useOrders from "@/containers/Orders/hooks/useOrders";

function Searchform(props) {
  const { fetchOrderDetail, orderDetail } = useOrders();
  const router = useRouter();

  const {
    withButtonSearchCar = false,
    withValueForm = false,
    disabledForm = false,
    orderForm = false,
    withJustOrderForm = false,
    id,
  } = props;

  const [name, setName] = useState();
  const [kategori, setKategori] = useState();
  const [harga, setHarga] = useState();
  const [status, setStatus] = useState();
  const [nameUrl, setNameUrl] = useState();
  const [kategoriUrl, setKategoriUrl] = useState();
  const [statusUrl, setStatusUrl] = useState();
  const [hargaUrl, setHargaUrl] = useState();

  const categoryPerson = (level) => {
    if (level === "small") {
      return "2 - 4 orang";
    } else if (level === "medium") {
      return "4 - 6 orang";
    } else {
      return "6 - 8 orang";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    router.push(
      `/result?name=${name}&kategori=${kategori}&harga=${harga}&status=${status}`
    );
    // window.location.reload();
  };

  useEffect(() => {
    fetchOrderDetail(id);
  }, [id]);

  return (
    <Container className={`py-3 ${styles.searchForm}`}>
      <Card className="py-3 px-3 my-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            {withButtonSearchCar ? (
              withJustOrderForm ? (
                <h5>Detail Pesananmu</h5>
              ) : (
                <h5>Pencarian mu</h5>
              )
            ) : null}
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>
                  {orderForm ? "Nama / Tipe Mobil" : "Nama Mobil"}
                </Form.Label>
                {orderForm ? (
                  <Form.Control
                    type="text"
                    className="search-input"
                    readOnly={orderForm ? true : false}
                    value={orderForm ? orderDetail?.Car?.name : ""}
                  ></Form.Control>
                ) : (
                  <Form.Control
                    type="text"
                    placeholder={disabledForm ? "" : `Ketik nama / tipe mobil`}
                    className="search-input"
                    defaultValue={withValueForm ? nameUrl : ""}
                    onChange={(evt) => setName(evt.target.value)}
                    disabled={disabledForm ? true : false}
                  ></Form.Control>
                )}
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                {orderForm ? (
                  <>
                    <Form.Control
                      type="text"
                      className="search-input"
                      readOnly={orderForm ? true : false}
                      value={
                        orderForm
                          ? categoryPerson(orderDetail?.Car?.category)
                          : ""
                      }
                    ></Form.Control>
                  </>
                ) : (
                  <>
                    <Form.Select
                      className="search-input"
                      defaultValue={withValueForm ? kategoriUrl : ""}
                      onChange={(e) => setKategori(e.target.value)}
                      disabled={disabledForm ? true : false}
                    >
                      <option value="">
                        {disabledForm ? "" : `Masukkan Kapasitas Mobil`}
                      </option>
                      <option value="small">2 - 4 orang</option>
                      <option value="medium">4 - 6 orang</option>
                      <option value="large">6 - 8 orang</option>
                    </Form.Select>
                  </>
                )}
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>
                  {orderForm ? "Tanggal Mulai Sewa" : "Harga"}
                </Form.Label>
                {orderForm ? (
                  <>
                    <Form.Control
                      type="text"
                      className="search-input"
                      readOnly={orderForm ? true : false}
                      value={
                        orderForm ? formatDate(orderDetail?.start_rent_at) : ""
                      }
                    ></Form.Control>
                  </>
                ) : (
                  <>
                    <Form.Select
                      className="search-input"
                      defaultValue={withValueForm ? hargaUrl : ""}
                      onChange={(e) => setHarga(e.target.value)}
                      disabled={disabledForm ? true : false}
                    >
                      <option value="">
                        {disabledForm ? "" : `Masukkan Harga Sewa per Hari`}
                      </option>
                      <option value="0-399999">{`< 400.000`}</option>
                      <option value="400000-600000">{`400.000 - 600.000`}</option>
                      <option value="600001-99999999999">{`> 600.000`}</option>
                    </Form.Select>
                  </>
                )}
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <div className="d-flex align-items-end gap-3">
                <Form.Group className="flex-fill">
                  <Form.Label>
                    {orderForm ? "Tanggal Akhir Sewa" : "Status"}
                  </Form.Label>
                  {orderForm ? (
                    <>
                      <Form.Control
                        type="text"
                        className="search-input"
                        readOnly={orderForm ? true : false}
                        value={
                          orderForm
                            ? formatDate(orderDetail?.finish_rent_at)
                            : ""
                        }
                      ></Form.Control>
                    </>
                  ) : (
                    <>
                      <Form.Select
                        className="search-input"
                        defaultValue={withValueForm ? statusUrl : ""}
                        onChange={(e) => setStatus(e.target.value)}
                        disabled={disabledForm ? true : false}
                      >
                        <option value={true}>
                          {disabledForm ? "" : `Disewa`}
                        </option>
                        <option value={false}>Tersewa</option>
                      </Form.Select>
                    </>
                  )}
                </Form.Group>
                {withButtonSearchCar ? (
                  disabledForm || orderForm ? (
                    <></>
                  ) : (
                    <Button type="submit" variant="outline-primary">
                      Edit
                    </Button>
                  )
                ) : (
                  <Button type="submit" variant="success">
                    Cari Mobil
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Searchform;
