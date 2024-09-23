/* eslint-disable @next/next/no-img-element */
export const Content = () => {
  return (
    <section id="content">
      <div className="content-wrap">
        {/* Modal */}
        <div className="modal1 mfp-hide" id="modal-login">
          <div
            className="block mx-auto"
            style={{ backgroundColor: "#FFF", maxWidth: 400 }}
          >
            <div style={{ padding: 50 }}>
              <h3 className="font-body">Login to your Account</h3>
              <form action="#" method="post" className="row mb-0">
                <div className="col-12 form-group">
                  <label
                    className="font-body text-capitalize"
                    htmlFor="login-form-modal-username"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="login-form-modal-username"
                    name="login-form-modal-username"
                    defaultValue=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 form-group">
                  <label
                    className="font-body text-capitalize"
                    htmlFor="login-form-modal-password"
                  >
                    Password:
                  </label>
                  <input
                    type="password"
                    id="login-form-modal-password"
                    name="login-form-modal-password"
                    defaultValue=""
                    className="form-control"
                  />
                </div>
                <div className="col-12 form-group">
                  <div className="d-flex justify-content-between">
                    <button
                      className="button button-rounded m-0"
                      id="login-form-modal-submit"
                      name="login-form-modal-submit"
                      value="login"
                    >
                      Login
                    </button>
                    <a href="#">Forgot Password?</a>
                  </div>
                </div>
              </form>
              <div className="line line-sm" />
              <a
                href="#"
                className="button rounded w-100 fw-normal text-center text-capitalize bg-facebook mx-0"
              >
                Login with Facebook
              </a>
              <a
                href="#"
                className="button rounded w-100 fw-normal text-center text-capitalize bg-google m-0"
              >
                Login with Google
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div id="section-masjid" className="page-section mb-6">
            <div className="row">
              <div className="col-lg-7 text-center">
                <img
                  src="/demos/app-landing/images/section/iphone-watch.png"
                  alt="NextGen Framework"
                  data-animate="fadeInLeft"
                />
              </div>
              <div className="col-lg-5">
                <div className="mt-6 d-none d-lg-block" />
                <img
                  src="/images/logo-masjid.png"
                  alt="Image"
                  className="d-block mb-4"
                  width={64}
                ></img>
                <div className="emphasis-title mb-4">
                  <h2
                    style={{ fontSize: 42 }}
                    className="font-body ls-1 fw-normal"
                  >
                    Masjid
                  </h2>
                </div>
                <p style={{ color: "#777" }} className="lead">
                  bertekad menyediakan fasilitas masjid yang nyaman sebagai
                  tempat ibadah, pembelajaran, serta pengembangan karakter
                  islami. Menyatu dalam lingkungan pendidikan yang berlandaskan
                  nilai-nilai keislaman.
                </p>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="clear" />
          <div id="section-pendidikan" className="page-section mt-5 mb-6">
            <div className="row">
              <div className="col-lg-5">
                <div className="mt-6 d-none d-lg-block" />
                <img
                  src="/images/logo-pendidikan.png"
                  alt="Image"
                  className="d-block mb-4"
                  width={64}
                ></img>
                <div className="emphasis-title mb-4">
                  <h2
                    style={{ fontSize: 42 }}
                    className="font-body ls-1 fw-normal"
                  >
                    Pendidikan
                  </h2>
                </div>
                <p style={{ color: "#777" }} className="lead">
                  bertekad untuk memberikan pendidikan yang berkualitas baik dan
                  program pendidikan yang terintegrasi dengan nilai-nilai
                  keislaman & pengembangan berkarakter.
                </p>
              </div>
              <div className="col-lg-7 text-center">
                <img
                  src="/demos/app-landing/images/section/iphone-nexus.png"
                  alt="Stunning Graphics"
                  data-animate="fadeInRight"
                />
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="clear" />
          <div id="section-zakat-infaq" className="page-section mb-6">
            <div className="row">
              <div className="col-lg-7 text-center">
                <img
                  src="/demos/app-landing/images/section/iphone-watch.png"
                  alt="NextGen Framework"
                  data-animate="fadeInLeft"
                />
              </div>
              <div className="col-lg-5">
                <div className="mt-6 d-none d-lg-block" />
                <img
                  src="/images/logo-zakat-infaq.png"
                  alt="Image"
                  className="d-block mb-4"
                  width={64}
                ></img>
                <div className="emphasis-title mb-4">
                  <h2
                    style={{ fontSize: 42 }}
                    className="font-body ls-1 fw-normal"
                  >
                    Zakat & Infaq
                  </h2>
                </div>
                <p style={{ color: "#777" }} className="lead">
                  bertekad untuk memberi dengan hati, tumbuh dengan berkah.
                  Melalui Zakat dan Infaq, bersama-sama membangun pendidikan
                  yang berkualitas.
                </p>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="clear" />
          <div id="section-dakwah-kajian" className="page-section mt-5 mb-6">
            <div className="row">
              <div className="col-lg-5">
                <div className="mt-6 d-none d-lg-block" />
                <img
                  src="/images/logo-dakwah-kajian.png"
                  alt="Image"
                  className="d-block mb-4"
                  width={64}
                ></img>
                <div className="emphasis-title mb-4">
                  <h2
                    style={{ fontSize: 42 }}
                    className="font-body ls-1 fw-normal"
                  >
                    Dakwah & Kajian
                  </h2>
                </div>
                <p style={{ color: "#777" }} className="lead">
                  {`bertekad untuk menggelar kajian ba'da sholat & kajian akbar dengan materi kajian, seperti, Aqidah/Tauhid, Tafsir, Hadist, Fiqih, Akhlak, Ceramah umum,.`}
                </p>
              </div>
              <div className="col-lg-7 text-center">
                <img
                  src="/demos/app-landing/images/section/iphone-nexus.png"
                  alt="Stunning Graphics"
                  data-animate="fadeInRight"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="clear" />
        <div
          id="section-pelayanan-masyarakat"
          className="page-section section p-0 mt-4"
          style={{
            background:
              'url("/demos/app-landing/images/section/iphone-3d-bg.png") no-repeat left bottom',
            backgroundSize: "100% auto",
          }}
          data-height-lg={700}
          data-height-xs={450}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-6">
                <div className="mt-6 d-none d-lg-block" />
                <div className="mt-6 d-none d-lg-block" />
                <img
                  src="/images/logo-pelayanan-masyarakat.png"
                  alt="Image"
                  className="d-block mb-4"
                  width={64}
                ></img>
                <div className="emphasis-title mb-4">
                  <h2
                    style={{ fontSize: 42 }}
                    className="font-body ls-1 fw-normal"
                  >
                    Pelayanan Masyarakat
                  </h2>
                </div>
                <p style={{ color: "#777" }} className="lead">
                  bertekad menyediakan layanan kesehatan yang berkualitas,
                  berintegrasi dengan nilai-nilai keislaman. Bersama, kita
                  wujudkan masyarakat yang sehat jasmani dan rohani, serta
                  berkarakter unggul.
                </p>
              </div>
            </div>
          </div>
          <div
            className="video-wrap"
            style={{ position: "absolute", height: "100%", zIndex: 1 }}
          >
            <div
              className="video-overlay d-none d-lg-block"
              style={{
                background:
                  'url("/demos/app-landing/images/section/iphone-3d.png") no-repeat left top',
                backgroundSize: "auto 100%",
              }}
              data-animate="fadeInLeft"
            />
          </div>
        </div>
        <div className="clear" />

        <div id="section-about-us" className="section">
          <div className="container">
            <div className="heading-block mt-4 text-center">
              <h3>Pengurus Yayasan</h3>
            </div>
            <div className="row g-5 mb-5 justify-content-center">
              <div className="col-lg-3 col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/pengurus-yayasan/6.jpg"
                      alt="Ir. Tauchid Roelianto, M.M"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="team-desc team-desc-bg">
                    <div className="team-title">
                      <h4>Ir. Tauchid Roelianto, M.M</h4>
                      <span>Pembina</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/pengurus-yayasan/7.jpg"
                      alt="Dr. Bunyamin, M. Pd"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="team-desc team-desc-bg">
                    <div className="team-title">
                      <h4>Dr. Bunyamin, M. Pd</h4>
                      <span>Pengawas</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/images/pengurus-yayasan/8.jpg"
                      alt="Dr. Ir. Sintha Wahjusaputri, M. M"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="team-desc team-desc-bg">
                    <div className="team-title">
                      <h4>Dr. Ir. Sintha Wahjusaputri, M. M</h4>
                      <span>Ketua Yayasan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clear" />
        <div
          id="section-clients"
          className="section mb-6"
          style={{
            backgroundColor: "#F8FAFB",
            borderTop: "1px solid #E5E5E5",
            borderBottom: "1px solid #E5E5E5",
          }}
        >
          <div className="container mt-5 mb-6 text-center">
            <h3
              className="ls-1 fw-normal"
              style={{ fontSize: 32, marginBottom: 10 }}
            >
              Mitra Kami
            </h3>
          </div>
          <div
            className="fslider testimonial testimonial-full text-center"
            data-animation="fade"
            data-autoplay="5000"
            style={{ maxWidth: "none" }}
          >
            <div className="flexslider">
              <div className="slider-wrap">
                <div className="slide">
                  <div className="row justify-content-center mx-auto mw-xs">
                    <div className="col-auto">
                      <img
                        src="images/clients/human-initiative.png"
                        alt="Clients"
                        style={{
                          width: 200,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div id="section-agendas" className="page-section p-0 m-0">
          <div className="container mt-5 mb-6 text-center">
            <h3
              className="ls-1 fw-normal"
              style={{ fontSize: 32, marginBottom: 10 }}
            >
              Info Agenda Terkini
            </h3>
          </div>
          <div
            className="owl-carousel owl-carousel-full image-carousel carousel-widget mb-5"
            data-margin={20}
            data-center="true"
            data-loop="false"
            data-nav="false"
            data-pagi="true"
            data-autoplay="5000"
            data-items-xs={2}
            data-items-sm={2}
            data-items-md={4}
            data-items-lg={4}
            data-items-xl={6}
            data-stage-padding={30}
            data-lightbox="gallery"
          >
            <div className="oc-item">
              <a
                data-lightbox="gallery-item"
                href="/demos/app-landing/images/gallery/img-1.jpg"
              >
                <img
                  src="/demos/app-landing/images/gallery/img-1.jpg"
                  alt="Image 1"
                />
              </a>
            </div>
            <div className="oc-item">
              <a
                data-lightbox="gallery-item"
                href="/demos/app-landing/images/gallery/img-2.jpg"
              >
                <img
                  src="/demos/app-landing/images/gallery/img-2.jpg"
                  alt="Image 2"
                />
              </a>
            </div>
            <div className="oc-item">
              <a
                data-lightbox="gallery-item"
                href="/demos/app-landing/images/gallery/img-3.jpg"
              >
                <img
                  src="/demos/app-landing/images/gallery/img-3.jpg"
                  alt="Image 3"
                />
              </a>
            </div>
            <div className="oc-item">
              <a
                data-lightbox="gallery-item"
                href="/demos/app-landing/images/gallery/img-4.jpg"
              >
                <img
                  src="/demos/app-landing/images/gallery/img-4.jpg"
                  alt="Image 4"
                />
              </a>
            </div>
            <div className="oc-item">
              <a
                data-lightbox="gallery-item"
                href="/demos/app-landing/images/gallery/img-5.jpg"
              >
                <img
                  src="/demos/app-landing/images/gallery/img-5.jpg"
                  alt="Image 5"
                />
              </a>
            </div>
            <div className="oc-item">
              <a
                data-lightbox="gallery-item"
                href="/demos/app-landing/images/gallery/img-6.jpg"
              >
                <img
                  src="/demos/app-landing/images/gallery/img-6.jpg"
                  alt="Image 5"
                />
              </a>
            </div>
            <div className="oc-item">
              <a
                data-lightbox="gallery-item"
                href="/demos/app-landing/images/gallery/img-7.jpg"
              >
                <img
                  src="/demos/app-landing/images/gallery/img-7.jpg"
                  alt="Image 5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
