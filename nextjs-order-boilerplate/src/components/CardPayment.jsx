import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Button, ListGroup } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import useOrders from "@/containers/Orders/hooks/useOrders";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function CardPayment(props) {
  const {
    fetchOrderDetail,
    orderDetail,
    handleNextStep,
    handleClickBank,
    checkedItem,
    steps,
  } = useOrders();

  const bankItems = [
    { id: 1, title: "BCA Transfer", name: "BCA" },
    { id: 2, title: "BNI Transfer", name: "BNI" },
    { id: 3, title: "Mandiri Transfer", name: "Mandiri" },
  ];

  const nextStep = async (e) => {
    e.preventDefault();
    handleNextStep();
  };

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

  const differenceDay = () => {
    const date1 = new Date(orderDetail?.start_rent_at);
    const date2 = new Date(orderDetail?.finish_rent_at);

    const timeDifference = date2.getTime() - date1.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return daysDifference + 1;
  };

  const formatDateToIndonesian = () => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const date = new Date(orderDetail?.createdAt);
    date.setDate(date.getDate() + 1);
    const day = days[date.getUTCDay()];
    const dateNumber = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");

    return `${day}, ${dateNumber} ${month} ${year} jam ${hours}.${minutes} WIB`;
  };

  useEffect(() => {
    if (props.idOrder) {
      fetchOrderDetail(props.idOrder);
    }
  }, [props.idOrder]);

  return (
    <>
      {steps === 1 ? (
        <StepOne
          styles={styles}
          handleClickBank={handleClickBank}
          checkedItem={checkedItem}
          bankItems={bankItems}
          nextStep={nextStep}
          numberBeRp={numberBeRp}
          categoryPerson={categoryPerson}
          orderDetail={orderDetail}
          differenceDay={differenceDay}
        />
      ) : steps === 2 ? (
        <StepTwo
          styles={styles}
          nextStep={nextStep}
          orderDetail={orderDetail}
          formatDateToIndonesian={formatDateToIndonesian}
          numberBeRp={numberBeRp}
          checkedItem={checkedItem}
        />
      ) : (
        <StepThree styles={styles} orderDetail={orderDetail}/>
      )}
    </>
  );
}

export default CardPayment;
