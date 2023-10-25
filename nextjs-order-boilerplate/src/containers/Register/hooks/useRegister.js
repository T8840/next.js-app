import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerFailure,
  registerSuccess,
  registerStart,
} from "../../../redux/register/slice";
import axios from "axios";
import { useRouter } from "next/router";

function useRegister() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state) => state.register);
  const [formValue, setFormValue] = useState({
    email: null,
    password: null,
    role: "Customer",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(registerStart());
      const response = await axios.post(
        process.env.host  + "/customer/auth/register",
        formValue
      );

      dispatch(registerSuccess(response.data));
      router.push("/signin");
    } catch (error) {
      dispatch(registerFailure());
    }
  };

  return {
    formValue,
    setFormValue,
    handleSubmit,
    loading,
  };
}

export default useRegister;
