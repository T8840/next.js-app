import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  orderDetailFailure,
  orderDetailSuccess,
  orderDetailStart,
  ordersSuccess,
  ordersFailure,
  ordersStart,
  addStep,
  minStep,
  setChecked
} from "../../../redux/orders/slice";
import { useRouter } from "next/router";
import axios from "axios";
import auth from "@/utils/auth";

function useOrders() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { orderDetail, steps, checkedItem } = useSelector((state) => state.order);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleClickBank = async (id) => {
    dispatch(setChecked(id));
  };

  const handleNextStep = () => {
    if (steps <= 3) {
      dispatch(addStep());
    }
  };

  const handlePrevStep = () => {
    if (steps >= 1) {
      dispatch(minStep());
    }
  };

  const formatDate = (localDate) => {
    const date = new Date(localDate);
    date.setDate(date.getDate() + 1);
    const formattedDate = date.toISOString().slice(0, 10);

    return formattedDate;
  };

  const fetchOrderDetail = async (id) => {
    try {
      dispatch(orderDetailStart());
      const response = await axios.get(
        process.env.host + `/customer/order/${id}`,
        {
          headers: {
            access_token: auth.getToken(),
          },
        }
      );
      dispatch(orderDetailSuccess(response.data));
    } catch (error) {
      dispatch(orderDetailFailure());
    }
  };

  const submitOrder = async (idCar) => {
    // e.preventDefault();

    const values = {
      start_rent_at: formatDate(startDate),
      finish_rent_at: formatDate(endDate),
      car_id: idCar,
    };

    try {
      dispatch(ordersStart());
      const response = await axios.post(
        process.env.host  + "/customer/order",
        values,
        {
          headers: {
            access_token: auth.getToken(),
          },
        }
      );
      if (response.status === 201) {
        dispatch(ordersSuccess(response.data));
        router.push(`/payment/${response.data.id}`);
      }
    } catch (error) {
      dispatch(ordersFailure());
    }
  };

  return {
    fetchOrderDetail,
    orderDetail,
    submitOrder,
    onChange,
    startDate,
    endDate,
    handleNextStep,
    handlePrevStep,
    steps,
    handleClickBank,
    checkedItem
  };
}

export default useOrders;
