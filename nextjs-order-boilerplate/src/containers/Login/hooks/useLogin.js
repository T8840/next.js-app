import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../../redux/login/slice";
import axios from "axios";

function useLogin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state) => state.login);
  const [formValue, setFormValue] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());
      const response = await axios.post(
        process.env.host  + "/customer/auth/login",
        formValue
      );
      dispatch(loginSuccess(response.data));
      router.push("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return {
    formValue,
    setFormValue,
    handleSubmit,
    loading,
  };
}

export default useLogin;
