import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";

function Cta() {
  const router = useRouter();
  const toSearch = () => {
    router.push("/search");
  };
  return (
    <div>
      <section id={`${styles.cta}`} className="mb-3">
        <div className="container">
          <div className={`card ${styles.card}`}>
            <div
              className="d-flex gap-4 flex-column text-center justify-content-center align-items-center p-5"
              style={{ height: "100%" }}
            >
              <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quae
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={toSearch}
                >
                  Mulai Sewa Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
