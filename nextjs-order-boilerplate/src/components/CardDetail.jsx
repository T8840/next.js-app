import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import useCars from "@/containers/Cars/hooks/useCars";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import useOrders from "@/containers/Orders/hooks/useOrders";

function CardDetail(props) {
  const { fetchCarDetail, carDetail } = useCars();
  const { submitOrder, onChange, startDate, endDate } = useOrders();

  const numberBeRp = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const categoryPerson = (level) => {
    if (level === "small") {
      return "2 - 4 orang";
    } else if (level === "medium") {
      return "4 - 6 orang";
    } else {
      return "6 - 8 orang";
    }
  };

  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  useEffect(() => {
    fetchCarDetail(props.id);
  }, [props.id]);

  return (
    <Container className={`mb-3 ${styles.cardCarDetail}`}>
      <Row>
        <Col className="col-8">
          <Card className="border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title>Tentang Paket</Card.Title>
              <Card.Title>Include</Card.Title>
              <Card.Text style={{ color: "#8A8A8A" }}>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>
                    Sudah termasuk bensin selama 12 jam Sudah termasuk Tiket
                  </li>
                  <li>Wisata Sudah termasuk pajak</li>
                </ul>
              </Card.Text>
              <Card.Title>Exclude</Card.Title>
              <Card.Text style={{ color: "#8A8A8A" }}>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card.Text>
              <Card.Title>Refund, Reschedule, Overtime</Card.Title>
              <Card.Text style={{ color: "#8A8A8A" }}>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-4">
          <Card className="border-1 rounded border border-success p-2 border-opacity-10">
            {carDetail && carDetail?.image ? (
              <Card.Img className="p-3" src={carDetail?.image}></Card.Img>
            ) : (
              <Card.Img
                className="p-3"
                src="https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"
              ></Card.Img>
            )}

            <Card.Body>
              <Card.Title>
                {carDetail && carDetail?.name ? carDetail?.name : ""}
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
                    {carDetail && carDetail?.category
                      ? categoryPerson(carDetail?.category)
                      : ""}
                  </p>
                </Card.Title>
              </div>
              <div className="mt-2">
                <Card.Text>
                  <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                </Card.Text>
                <DatePicker
                  calendarClassName={`${styles.customCalendar}`}
                  className={`d-block ${styles.customDatepicker}`}
                  selected={startDate}
                  dateFormat="d MMMM yyyy"
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  shouldCloseOnSelect={false}
                  // fixedHeight
                  // customInput={
                  //   <FaCalendarAlt className={`${styles.datepickerIcon}`} />
                  // }
                  placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
                <Card.Title className="">Total</Card.Title>
                <Card.Title className="">
                  {numberBeRp.format(
                    carDetail && carDetail.price ? carDetail.price : ""
                  )}
                </Card.Title>
              </div>
              <div>
                <Button
                  type="button"
                  variant="success"
                  className="d-block"
                  style={{ width: "100%" }}
                  disabled={!endDate}
                  onClick={() => submitOrder(carDetail.id)}
                >
                  Lanjutkan Pembayaran
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardDetail;
