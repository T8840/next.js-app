import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button, Tab, Nav } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

function StepThree(props) {
  const { styles, orderDetail } = props;

  const [imageBlob, setImageBlob] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(orderDetail?.slip);
        const blob = await response.blob();
        setImageBlob(blob);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = orderDetail?.slip;
    link.download = "slip-bukti-bayar.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };

  return (
    <Container className={`mb-3 ${styles.cardCarDetail}`}>
      <div className="mt-4 mb-5 d-flex flex-column justify-content-center align-items-center">
        <img
          src="/images/success.png"
          alt=""
          style={{ width: "60px" }}
          className="mb-4"
        />
        <h4 className="mb-4">Pembayaran Berhasil!</h4>
        <p className="fs-5">
          Tunjukkan invoice ini ke petugas BCR di titik temu.
        </p>

        <div>
          <Card style={{ width: "1000px", height: "550px" }} className="p-4">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>Invoice</Card.Title>
                  <Button variant="outline-primary" onClick={handleDownload}>
                    <FaDownload size={15} className="mb-2 me-2" />
                    Unduh
                  </Button>
              </div>
              <Card.Text>*no. invoice</Card.Text>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={orderDetail?.slip}
                  alt="Slip Image"
                  style={{ width: "920px", height: "400px" }}
                  className="mb-4"
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default StepThree;
