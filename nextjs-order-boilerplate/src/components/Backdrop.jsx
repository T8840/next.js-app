import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function Backdrop(props) {
  const { triggerClass } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (evt) => {
      if (evt.target.className.includes(triggerClass)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [triggerClass]);

  return show ? <div className={`${styles.backdrop}`}></div> : <></>;
}

export default Backdrop;
