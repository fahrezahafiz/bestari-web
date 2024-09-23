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
                      alt="BSI Logo"
                      className="d-block"
                      style={{ width: 180 }}
                    />
                    <p>
                      +62 812 1389 6304
                      <br /> Kp. Sanding 1,RT 004/002, Desa Bojongnangka, Kec.
                      Gunung Putri, Kab. Bogor, Kode Pos 16963
                    </p>
                    <a
                      href="#"
                      className="social-icon si-small border-0 rounded-circle text-light bg-facebook"
                    >
                      <i className="fa-brands fa-facebook-f" />
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      href="#"
                      className="social-icon si-small border-0 rounded-circle text-light bg-instagram"
                    >
                      <i className="fa-brands fa-instagram" />
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a
                      href="#"
                      className="social-icon si-small border-0 rounded-circle text-light bg-youtube"
                    >
                      <i className="fa-brands fa-youtube" />
                      <i className="fa-brands fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="widget">
                <div className="row">
                  <div
                    className="col-lg-8 mb-5 text-center"
                    style={{ color: "#888" }}
                  >
                    <img
                      src="/images/BSI.jpeg"
                      alt="BSI Logo"
                      className="d-block mb-2 mx-auto"
                    />
                    <p>
                      7560010014
                      <br /> YAYASAN BESTARI NURUL QURAN
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-7">
              <div className="row g-5">
                <div className="col-6 col-lg-4">
                  <div className="widget widget_links widget-li-noicon app_landing_widget_link text-center">
                    <img
                      src="/images/BSI.jpeg"
                      alt="BSI Logo"
                      className="d-block mb-2 mx-auto"
                    />
                    <p className="mb-1">7560010014</p>
                    <p className="mb-0">YAYASAN BESTARI NURUL QURAN</p>
                  </div>
                </div>
                <div className="col-6 col-lg-4">
                  <div className="widget widget_links widget-li-noicon app_landing_widget_link">
                    <h4>About Us</h4>
                    <ul>
                      <li>
                        <a href="https://codex.wordpress.org/">Documentation</a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/support/forum/requests-and-feedback">
                          Feedback
                        </a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/extend/plugins/">
                          Plugins
                        </a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/support/">
                          Support Forums
                        </a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/extend/themes/">
                          Themes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-lg-4">
                  <div className="widget widget_links widget-li-noicon app_landing_widget_link">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="https://codex.wordpress.org/">Documentation</a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/support/forum/requests-and-feedback">
                          Feedback
                        </a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/extend/plugins/">
                          Plugins
                        </a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/support/">
                          Support Forums
                        </a>
                      </li>
                      <li>
                        <a href="https://wordpress.org/extend/themes/">
                          Themes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
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
