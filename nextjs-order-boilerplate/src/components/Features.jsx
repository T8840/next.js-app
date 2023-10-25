import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div>
      <section id="features" className="mb-3">
        <div className="container my-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="p-5 p-lg-0">
                <img
                  src="/images/woman.png"
                  className="img-fluid object-fit-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <h1 className="mb-3">
                Best Car Rental for any kind of trip in (Lokasimu)!
              </h1>
              <p className="mb-3">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <img
                      src="/images/logo/checklist.png"
                      alt=""
                      className="me-3"
                    />
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </li>
                  <li className="mb-3">
                    <img
                      src="/images/logo/checklist.png"
                      alt=""
                      className="me-3"
                    />
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </li>
                  <li className="mb-3">
                    <img
                      src="/images/logo/checklist.png"
                      alt=""
                      className="me-3"
                    />
                    Sewa Mobil Jangka Panjang Bulanan
                  </li>
                  <li className="mb-3">
                    <img
                      src="/images/logo/checklist.png"
                      alt=""
                      className="me-3"
                    />
                    Gratis Antar - Jemput Mobil di Bandara
                  </li>
                  <li className="mb-3">
                    <img
                      src="/images/logo/checklist.png"
                      alt=""
                      className="me-3"
                    />
                    Layanan Airport Transfer / Drop In Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
