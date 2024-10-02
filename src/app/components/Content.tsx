/* eslint-disable @next/next/no-img-element */
import { getArticles } from "@/sanity/queries";
import { ArticlePreview } from "@/sanity/types";

export const Content = async () => {
  const articles: ArticlePreview[] = await getArticles();

  return (
    <>
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

          <div className="clear" />

          <div className="slider-element boxed-slider pt-0">
            <div className="container mt-5 mb-6 text-center">
              <h3
                id="section-about-us"
                className="heading-block ls-1 fw-normal"
                style={{ fontSize: 32, marginBottom: 10 }}
              >
                Tentang Kami
              </h3>
            </div>
            <div className="container">
              <div
                id="oc-slider"
                className="owl-carousel carousel-widget"
                data-margin="0"
                data-items="1"
                data-speed="450"
                data-loop="true"
                data-autoplay="5000"
              >
                <a href="#">
                  <img src="/images/tentang-kami/2.jpg" alt="Slider" />
                </a>
                <a href="#">
                  <img src="/images/tentang-kami/3.jpg" alt="Slider" />
                </a>
                <a href="#">
                  <img src="/images/tentang-kami/4.jpg" alt="Slider" />
                </a>
                <a href="#">
                  <img src="/images/tentang-kami/5.jpg" alt="Slider" />
                </a>
              </div>
            </div>
            <div className="section header-stick">
              <div className="container">
                <div className="row align-items-end">
                  <div className="col-lg-9">
                    <div className="heading-block border-0 mb-4">
                      <h3>Yayasan Bestari Nurul Quran</h3>
                    </div>

                    <p className="mb-0 fs-5">
                      Didirikan berdasarkan Akta yang dibuat di hadapan Notaris
                      Bastriandi, SH., Mkn. di Jakarta, sejak tanggal 3 Mei 2023
                      Akta Nomor 4.
                      <br />
                      Masjid At - Tauhid adalah sebuah masjid pertama yang
                      berlokasi di Kp. Sanding 1,RT 004/002, Desa Bojongnangka,
                      Kec. Gunung Putri, Kab. Bogor, Kode Pos 16963. Masjid ini
                      diresmikan pada tanggal 19 Juni 2024.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clear mb-5" />

          <div className="container">
            <div id="section-masjid" className="page-section mb-6">
              <div className="row">
                <div className="col-lg-7 text-center">
                  <img
                    src="/images/kegiatan/9.jpg"
                    alt="Masjid"
                    data-animate="fadeInLeft"
                    style={{ borderRadius: 25, width: 500 }}
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
                    islami. Menyatu dalam lingkungan pendidikan yang
                    berlandaskan nilai-nilai keislaman.
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
                    bertekad untuk memberikan pendidikan yang berkualitas baik
                    dan program pendidikan yang terintegrasi dengan nilai-nilai
                    keislaman & pengembangan berkarakter.
                  </p>
                </div>
                <div className="col-lg-7 text-center">
                  <img
                    src="/images/kegiatan/10.jpg"
                    alt="Pendidikan"
                    data-animate="fadeInRight"
                    style={{ borderRadius: 25, width: 500 }}
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
                    src="/images/kegiatan/11.jpg"
                    alt="Zakat Infaq"
                    data-animate="fadeInLeft"
                    style={{ borderRadius: 25, width: 500 }}
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
                    src="/images/kegiatan/12.jpg"
                    alt="Dakwah Kajian"
                    data-animate="fadeInRight"
                    style={{ borderRadius: 25, width: 500 }}
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
                    src="/images/kegiatan/13.jpg"
                    alt="Pelayanan Masyarakat"
                    data-animate="fadeInLeft"
                    style={{ borderRadius: 25, width: 500 }}
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
          </div>

          <div className="clear" />

          <div className="section">
            <div className="container">
              <div className="container mt-5 mb-6 text-center">
                <h3
                  id="section-about-us"
                  className="heading-block ls-1 fw-normal"
                  style={{ fontSize: 32, marginBottom: 10 }}
                >
                  Pengurus Yayasan
                </h3>
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
            }}
          >
            <div className="container mt-5 mb-6 text-center">
              <h3
                id="section-about-us"
                className="heading-block ls-1 fw-normal"
                style={{ fontSize: 32, marginBottom: 10 }}
              >
                Mitra Kami
              </h3>
            </div>
            <div
              id="slider-mitra-kami"
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

          <div
            id="section-agendas"
            className="section mb-6"
            style={{ padding: "100px 0" }}
          >
            <div className="container">
              <div className="container mt-5 mb-6 text-center">
                <h3
                  id="section-about-us"
                  className="heading-block ls-1 fw-normal"
                  style={{ fontSize: 32, marginBottom: 10 }}
                >
                  Agenda Terkini
                </h3>
              </div>
              <div className="row grid-item">
                {articles &&
                  articles.map((article) => (
                    <>
                      <div className="col-md-2 grid-image">
                        <img
                          src={article.coverImage.url}
                          alt={
                            article.coverImage.alt ??
                            `${article.slug.current} Cover Image`
                          }
                        />
                      </div>
                      <div className="col-md-2">
                        <div className="grid-info">
                          <h3>
                            <a href={`/article/${article.slug.current}`}>
                              {article.title}
                              <span>{`${new Date(article._createdAt).toLocaleDateString('id-ID')}`}</span>
                            </a>
                          </h3>
                          <a
                            href={`/article/${article.slug.current}`}
                            className="more-link"
                          >
                            Lihat Selengkapnya
                          </a>
                        </div>
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>

          {/* <div id="section-agendas" className="page-section p-0 m-0">
            <div className="container mt-5 mb-6 text-center">
              <h3
                className="ls-1 fw-normal"
                style={{ fontSize: 32, marginBottom: 10 }}
              >
                Agenda Terkini
              </h3>
            </div>
            <div
              className="owl-carousel carousel-widget mb-5"
              data-margin={20}
              data-center="true"
              data-loop="false"
              data-nav="true"
              data-pagi="true"
              data-autoplay="10000"
              data-items-xs={2}
              data-items-sm={2}
              data-items-md={4}
              data-items-lg={4}
              data-items-xl={6}
              data-stage-padding={30}
              data-lightbox="gallery"
            >
              {articles &&
                articles.map((article) => (
                  // <div key={article.slug.current} className="oc-item">
                  //   <a
                  //   // data-lightbox="gallery-item"
                  //   // href={`/article/${article.slug.current}`}
                  //   >
                  //     <img
                  //       src={article.coverImage.url}
                  //       alt={
                  //         article.coverImage.alt ??
                  //         `${article.slug.current} cover image`
                  //       }
                  //     />
                  //   </a>
                  //   <h4>{article.title}</h4>
                  //   <p>{article.abstract}</p>
                  // </div>
                  <div
                    className="oc-item"
                    style={{
                      width: "250px", // Set your desired card width
                      height: "350px", // Set your desired card height
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      padding: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Card shadow for the card effect
                      borderRadius: "8px", // Rounded corners
                      backgroundColor: "#fff", // Background color
                      margin: "10px", // Spacing between cards
                      overflow: "hidden",
                    }}
                  >
                    <a
                      data-lightbox="gallery-item"
                      href="demos/app-landing/images/gallery/img-1.jpg"
                    >
                      <img src={article.coverImage.url} alt="Image 1" />
                    </a>
                  </div>
                ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
