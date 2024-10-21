/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer id="footer" style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        {/* Footer Widgets
				============================================= */}
        <div className="footer-widgets-wrap">
          <div className="row">
            <div className="col-lg-5">
              <div className="widget">
                <div className="row">
                  <div className="col-lg-8 mb-5" style={{ color: "#888" }}>
                    <img
                      src="/images/logo-yayasan-bestari.png"
                      alt="Logo"
                      className="d-block"
                      style={{ width: 180 }}
                    />
                    <p>
                      <span className="fw-bold">
                        Yayasan Bestari Nurul Quran
                      </span>
                      <br />
                      Bertekad untuk membangun generasi yang memiliki akhlak
                      mulia, berbudi pekerti luhur, dan mampu menjadi teladan di
                      tengah masyarakat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="widget">
                <div className="row">
                  <div className="col-lg-8 mt-lg-5" style={{ color: "#888" }}>
                    <p>
                      <span className="fw-bold">Hubungi Kami:</span>
                      <br />
                      <a style={{ textDecoration: "none", color: "#888" }}>
                        {"+62 812 1389 6304"}
                      </a>
                      <br />
                      yayasanbestariquran@gmail.com
                      <br /> Kp. Sanding 1,RT 004/002, Desa Bojongnangka, Kec.
                      Gunung Putri, Kab. Bogor, Kode Pos 16963
                    </p>
                    <a
                      href="https://www.facebook.com/profile.php?id=61565802703381"
                      target="__blank"
                      className="social-icon si-small border-0 rounded-circle text-light bg-facebook"
                    >
                      <i className="fa-brands fa-facebook-f" />
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com/bestari.quran/"
                      target="__blank"
                      className="social-icon si-small border-0 rounded-circle text-light bg-instagram"
                    >
                      <i className="fa-brands fa-instagram" />
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a
                      href="https://www.youtube.com/@YayasanBestariNurulQuran"
                      target="__blank"
                      className="social-icon si-small border-0 rounded-circle text-light bg-youtube"
                    >
                      <i className="fa-brands fa-youtube" />
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyrights
			============================================= */}
      <div id="copyrights" className="bg-transparent pt-0">
        <div className="container">
          <div className="w-100 text-center text-md-start">
            Copyrights © {new Date().getFullYear()} All Rights Reserved. Yayasan
            Bestari Nurul Quran
          </div>
        </div>
      </div>
      {/* #copyrights end */}
    </footer>
  );
};

export default Footer;
