/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  return (
    <>
      <header
        id="header"
        className="light"
        data-sticky-class="not-light"
        data-responsive-class="not-light"
        data-sticky-logo-height={80}
        data-sticky-menu-padding={29}
      >
        <div id="header-wrap">
          <div className="container">
            <div className="header-row justify-content-lg-between">
              {/* Logo
						============================================= */}
              <div id="logo" className="col-auto order-lg-2 me-lg-0 px-0">
                <a href="#" data-href="#slider">
                  <img
                    className="logo-default"
                    src="/images/logo-yayasan-bestari.png"
                    alt="Logo Yayasan Bestari"
                  />
                </a>
              </div>
              {/* #logo end */}
              <div className="primary-menu-trigger">
                <button
                  className="cnvs-hamburger"
                  type="button"
                  title="Open Mobile Menu"
                >
                  <span className="cnvs-hamburger-box">
                    <span className="cnvs-hamburger-inner" />
                  </span>
                </button>
              </div>
              {/* Primary Navigation
						============================================= */}
              <nav className="primary-menu with-arrows col-lg-8 order-lg-1 px-0">
                <ul
                  className="menu-container one-page-menu"
                  data-easing="easeInOutExpo"
                  data-speed={1250}
                  data-offset={160}
                >
                  <li className="menu-item">
                    <a className="menu-link" href="#" data-href="#slider">
                      <div>Home</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu-link"
                      href="#"
                      data-href="#section-about-us"
                    >
                      <div>Tentang Kami</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu-link"
                      href="#"
                      data-href="#section-nextgen"
                    >
                      <div>Kegiatan</div>
                    </a>
                    <ul
                      className="sub-menu-container"
                      data-class="up-lg:not-dark"
                    >
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          href="#"
                          data-href="#section-masjid"
                        >
                          <div>Masjid</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          href="#"
                          data-href="#section-pendidikan"
                        >
                          <div>Pendidikan</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          href="#"
                          data-href="#section-zakat-infaq"
                        >
                          <div>Zakat & Infaq</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          href="#"
                          data-href="#section-dakwah-kajian"
                        >
                          <div>Dakwah & Kajian</div>
                        </a>
                      </li>
                      <li className="menu-item">
                        <a
                          className="menu-link"
                          href="#"
                          data-href="#section-pelayanan-masyarakat"
                        >
                          <div>Pelayanan Masyarakat</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu-link"
                      href="#"
                      data-href="#section-clients"
                    >
                      <div>Mitra</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="menu-link"
                      href="#"
                      data-href="#section-agendas"
                    >
                      <div>Agenda Terkini</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#" data-href="#footer">
                      <div>Hubungi Kami</div>
                    </a>
                  </li>
                </ul>
              </nav>
              {/* #primary-menu end */}
            </div>
          </div>
        </div>
        <div className="header-wrap-clone" />
      </header>
      <section
        id="slider"
        className="slider-element slider-parallax min-vh-60 min-vh-md-100 include-header"
      >
        <div
          className="slider-inner"
          style={{
            background: 'url("/images/home/1.jpg") center center no-repeat',
            backgroundSize: "cover",
          }}
        >
          <div className="vertical-middle slider-element-fade">
            <div className="container dark py-5 py-md-0">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <div className="emphasis-title">
                    <h1 className="font-body">Yayasan Bestari Nurul Quran</h1>
                    {/* <br /> */}
                    <h4>
                      bertekad untuk membangun generasi yang memiliki akhlak
                      mulia, berbudi pekerti luhur, dan mampu menjadi teladan di
                      tengah masyarakat.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="video-wrap">
            <div
              className="video-overlay"
              style={{ background: "rgba(0,0,0,0.2)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
