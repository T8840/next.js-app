import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Whyus() {
  return (
    <div>
      <section id="why-us" className="mb-3">
        <div className="container my-5">
          <div className="text-center text-lg-start">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <div className="row g-3">
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-4">
                  <span className={`${styles.iconW} ${styles.yellow}`}>
                    <img src="/images/logo/thumbs-logo.png" alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Mobil Lengkap</span>
                  <span className="d-block mb-2">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-2">
                  <span className={`${styles.iconW} ${styles.red}`}>
                    <img src="/images/logo/tag-logo.png" alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Harga Murah</span>
                  <span className="d-block mb-2">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-2">
                  <span className={`${styles.iconW} ${styles.blue}`}>
                    <img src="/images/logo/clock-logo.png" alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Layanan 24 Jam</span>
                  <span className="d-block mb-2">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-2">
                  <span className={`${styles.iconW} ${styles.green}`}>
                    <img src="/images/logo/award-logo.png" alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Sopir Profesional</span>
                  <span className="d-block mb-2">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whyus;
