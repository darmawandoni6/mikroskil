import React from "react";
import { Container } from "reactstrap";
import Info from "./Info";

//image
import profil from "../../../assets/images/profil.png";
import krs from "../../../assets/images/krs.png";
import nilai from "../../../assets/images/transkrip.png";
import kuesioner from "../../../assets/images/kuesioner.png";
import info from "../../../assets/images/jadwal.png";
import FormLogin from "./FormLogin";

const Content = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <Info />
        </div>
        <div className="col-8">
          <div className="d-flex align-items-center">
            <img src={profil} alt="profil" height="80px" width="80px" />
            <div>
              <h4>Profil</h4>
              <span>
                Periksa kebenaran profil dan riwayat pembayaran uang kuliah
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={krs} alt="krs" height="80px" width="80px" />
            <div>
              <h4>KRS & KHS</h4>
              <span>
                Pengisian KRS secara online dan informasi hasil studi yang
                ditampilkan per semester
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={nilai} alt="nilai" height="80px" width="80px" />
            <div>
              <h4>Nilai</h4>
              <span>
                Rekapitulasi dari seluruh hasil studi mahasiswa dan IPK
                sementara
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={kuesioner} alt="kuesioner" height="80px" width="80px" />
            <div>
              <h4>Kuesioner</h4>
              <span>
                Pengisian kuesioner evaluasi dosen oleh mahasiswa setiap
                semester
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={info} alt="info" height="80px" width="80px" />
            <div>
              <h4>Info</h4>
              <span>
                Akses jadwal kuliah dan ujian, absensi, kalender dan peraturan
                akademik, informasi wisuda dan lainnya
              </span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <FormLogin />
        </div>
      </div>
    </Container>
  );
};

export default Content;
