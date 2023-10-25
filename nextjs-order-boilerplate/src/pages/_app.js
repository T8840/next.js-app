import "@/styles/globals.css";
import store from "@/redux/store";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
