import auth from "@/utils/auth";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  Tab,
  Nav,
  Form,
} from "react-bootstrap";
import { FaCopy } from "react-icons/fa";

function StepTwo(props) {
  const {
    styles,
    nextStep,
    orderDetail,
    formatDateToIndonesian,
    numberBeRp,
    checkedItem,
  } = props;
  const [payed, setPayed] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [nameBank, setNameBank] = useState({
    title: null,
    name: null,
  });
  const [filePreview, setFilePreview] = useState();

  const handleChangeFile = (e) => {
    const selectedFiles = e.target.files;

    setFilePreview(selectedFiles[0]);

    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const selectedFiles = e.dataTransfer.files;
    setFilePreview(selectedFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(filePreview, '<<< file');
    try {
      const response = await axios.put(
        process.env.host  + `/customer/order/${orderDetail?.id}/slip`,
        {
          slip: filePreview,
        },
        {
          headers: {
            access_token: auth.getToken(),
            "Content-Type": "multipart/form-data",
          },
        }
      );
    //   if (response.status === '200') {
        nextStep(e)
    //   }
      console.log(response, "<<< berhasil");
    } catch (error) {
      console.log(error, "<<<< gagal");
    }
  };

  const targetDate = new Date(orderDetail?.createdAt);
  targetDate.setDate(targetDate.getDate() + 1);
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;
    const totalSeconds = Math.floor(difference / 1000);
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  const targetDate10 = new Date();
  targetDate10.setMinutes(targetDate10.getMinutes() + 10);
  const calculateTimeRemaining10 = () => {
    const now = new Date();
    const difference = targetDate10 - now;
    const totalSeconds = Math.floor(difference / 1000);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      minutes,
      seconds,
    };
  };

  const [isActive, setIsActive] = useState(false);
  const [timeRemaining10, setTimeRemaining10] = useState(
    calculateTimeRemaining10()
  );

  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("Text copied to clipboard!");
  };

  const openPay = () => {
    setIsActive(true);
    setPayed(true);
  };

  const paySlip = (e) => {
    nextStep(e);
  };

  useEffect(() => {
    if (checkedItem) {
      if (checkedItem === 1) {
        setNameBank({ ...nameBank, title: "BCA Transfer", name: "BCA" });
      } else if (checkedItem === 2) {
        setNameBank({ ...nameBank, title: "BNI Transfer", name: "BNI" });
      } else {
        setNameBank({
          ...nameBank,
          title: "Mandiri Transfer",
          name: "Mandiri",
        });
      }
    }

    let timer10;
    if (isActive) {
      timer10 = setInterval(() => {
        setTimeRemaining10(calculateTimeRemaining10());
      }, 1000);
    }

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(timer10);
    };
  }, []);

  const formatCountdownTime = () => {
    const { hours, minutes, seconds } = timeRemaining;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatCountdownTime10 = () => {
    const { minutes, seconds } = timeRemaining10;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Container className={`mb-3 ${styles.cardCarDetail}`}>
      <Row>
        <Col className="col-7">
          <Card className="mb-2 border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <div className="d-flex mt-4 justify-content-between">
                <Card.Title>Selesaikan Pembayaran Sebelum</Card.Title>
                <Card.Text>
                  <h5>{formatCountdownTime()}</h5>
                </Card.Text>
              </div>
              <Card.Text className="mt-4">
                <p>{formatDateToIndonesian()}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4 border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title className="mt-4">Lakukan Transfer Ke</Card.Title>
              <div className={`${styles.cardWrapper} mt-3`}>
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
                            nameBank.name === "Mandiri" ? "7px" : "20px",
                        }}
                      >
                        {nameBank.name}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className="d-flex flex-column justify-content-center">
                  <p style={{ marginBottom: "5px" }}>{nameBank.title}</p>
                  <p>{"a.n Binar Car Rental"}</p>
                </div>
              </div>
              <Card.Text className="mt-4">
                <p>Nomor Rekening</p>
                <div
                  className={`copyable ${styles.copyField}`}
                  onClick={() => copyToClipboard("54104257877")}
                >
                  <p className={styles.copyText}>54104257877</p>
                  <FaCopy className={styles.copyIcon1} />
                </div>
              </Card.Text>
              <Card.Text className="mt-4">
                <p>Total Bayar</p>
                <div
                  className={`copyable ${styles.copyField}`}
                  onClick={() => copyToClipboard(`${orderDetail?.total_price}`)}
                >
                  <p className={styles.copyText}>
                    {numberBeRp.format(orderDetail?.total_price)}
                  </p>
                  <FaCopy className={styles.copyIcon2} />
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4 border-1 rounded border border-success p-2 border-opacity-10">
            <Card.Body>
              <Card.Title>Intruksi Pembayaran</Card.Title>
              <Tab.Container
                activeKey={activeTab}
                onSelect={(key) => setActiveTab(key)}
              >
                <Nav fill variant="tabs" className="mb-3">
                  <Nav.Item>
                    <Nav.Link style={{ color: "black" }} eventKey="tab1">
                      ATM BCA
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{ color: "black" }} eventKey="tab2">
                      M-BCA
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{ color: "black" }} eventKey="tab3">
                      BCA Klik
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link style={{ color: "black" }} eventKey="tab4">
                      Internet Banking
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="tab1">
                    <Card.Text style={{ color: "#8A8A8A" }}>
                      <ul>
                        <li>Masukkan kartu ATM, lalu PIN</li>
                        <li>
                          Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek
                          BCA Virtual Account”
                        </li>
                        <li>
                          <p>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID
                          </p>{" "}
                          <p>Contoh:</p>{" "}
                          <p>
                            No. Peserta: 12345678, maka ditulis 7002012345678
                          </p>
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab2">
                    <Card.Text style={{ color: "#8A8A8A" }}>
                      <ul>
                        <li>Masukkan kartu ATM, lalu PIN</li>
                        <li>
                          Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek
                          BCA Virtual Account”
                        </li>
                        <li>
                          <p>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID
                          </p>{" "}
                          <p>Contoh:</p>{" "}
                          <p>
                            No. Peserta: 12345678, maka ditulis 7002012345678
                          </p>
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab3">
                    <Card.Text style={{ color: "#8A8A8A" }}>
                      <ul>
                        <li>Masukkan kartu ATM, lalu PIN</li>
                        <li>
                          Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek
                          BCA Virtual Account”
                        </li>
                        <li>
                          <p>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID
                          </p>{" "}
                          <p>Contoh:</p>{" "}
                          <p>
                            No. Peserta: 12345678, maka ditulis 7002012345678
                          </p>
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tab4">
                    <Card.Text style={{ color: "#8A8A8A" }}>
                      <ul>
                        <li>Masukkan kartu ATM, lalu PIN</li>
                        <li>
                          Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek
                          BCA Virtual Account”
                        </li>
                        <li>
                          <p>
                            Masukkan nomor BCA Virtual Account: 70020+Order ID
                          </p>{" "}
                          <p>Contoh:</p>{" "}
                          <p>
                            No. Peserta: 12345678, maka ditulis 7002012345678
                          </p>
                        </li>
                        <li>Layar ATM akan menampilkan konfirmasi</li>
                        <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                      </ul>
                    </Card.Text>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-5">
          <Card className="border-1 rounded border border-success p-2 border-opacity-10">
            {payed ? (
              <>
                <Card.Body>
                  <Card.Text className="mb-5">
                    <div className="d-flex mt-4 justify-content-between">
                      <h5 className="pb-4">Konfirmasi Pembayaran</h5>
                      <Card.Text>
                        <h5>{formatCountdownTime10()}</h5>
                      </Card.Text>
                    </div>
                    <p>
                      Terima kasih telah melakukan konfirmasi pembayaran.
                      Pembayaranmu akan segera kami cek tunggu kurang lebih 10
                      menit untuk mendapatkan konfirmasi.
                    </p>
                  </Card.Text>
                  <Card.Text>
                    <p className="fs-5">Upload Bukti Pembayaran</p>
                    <p>
                      Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                      bisa upload bukti bayarmu
                    </p>
                  </Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <div className="mt-4 mb-4">
                      <div
                        draggable
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                      >
                        <label
                          htmlFor="upload"
                          className={`${styles.labelFileUpload} d-flex justify-content-center align-items-center`}
                        >
                          {filePreview ? (
                            <div style={{ width: "100%" }}>
                              <img
                                src={URL.createObjectURL(filePreview)}
                                alt="img-preview"
                                style={{ width: "100%" }}
                              />
                            </div>
                          ) : (
                            <img src="/images/logo/uknown-slip.png" alt="" />
                          )}

                          <input
                            type="file"
                            name="upload"
                            id="upload"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleChangeFile}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Button
                        type="submit"
                        variant="success"
                        className="d-block"
                        style={{ width: "100%" }}
                        // onClick={paySlip}
                      >
                        {filePreview ? "Konfirmasi" : "Upload"}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </>
            ) : (
              <>
                <Card.Body>
                  <Card.Text>
                    <p>
                      Klik konfirmasi pembayaran untuk mempercepat proses
                      pengecekan
                    </p>
                  </Card.Text>
                  <div className="mt-5">
                    <Button
                      type="button"
                      variant="success"
                      className="d-block"
                      style={{ width: "100%" }}
                      onClick={() => openPay()}
                    >
                      Konfirmasi Pembayaran
                    </Button>
                  </div>
                </Card.Body>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StepTwo;
