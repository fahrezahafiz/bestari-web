/* eslint-disable @next/next/no-img-element */
import { getArticles } from "@/sanity/queries";
import { ArticlePreview } from "@/sanity/types";
import moment from "moment";

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
                    <h1 className="font-body fw-normal">
                      Yayasan Bestari Nurul Quran
                    </h1>
                    {/* <br /> */}
                    <p className="lead">
                      bertekad untuk membangun generasi yang memiliki akhlak
                      mulia, berbudi pekerti luhur, dan mampu menjadi teladan di
                      tengah masyarakat.
                    </p>
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
        <div className="clear" />

        <div
          className="slider-element boxed-slider pt-0"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <div className="container mt-5 mb-6 text-center">
            <h2
              id="about-us"
              style={{ fontSize: 42 }}
              className=" heading-block font-body ls-1 fw-normal"
            >
              Tentang Kami
            </h2>
          </div>
          <div className="container">
            <div
              id="oc-slider"
              className="owl-carousel carousel-widget"
              data-margin="100"
              data-items="1"
              data-speed="450"
              data-loop="true"
              data-autoplay="5000"
            >
              <a href="#" className="block w-full h-72">
                <img
                  src="/images/tentang-kami/18.png"
                  alt="Slider"
                  className="w-full h-full object-cover"
                />
              </a>
              <a href="#" className="block w-full h-72">
                <img
                  src="/images/tentang-kami/2.jpg"
                  alt="Slider"
                  className="w-full h-full object-cover"
                />
              </a>
              <a href="#" className="block w-full h-72">
                <img
                  src="/images/tentang-kami/3.jpg"
                  alt="Slider"
                  className="w-full h-full object-cover"
                />
              </a>
              <a href="#" className="block w-full h-72">
                <img
                  src="/images/tentang-kami/4.jpg"
                  alt="Slider"
                  className="w-full h-full object-cover"
                />
              </a>
              <a href="#" className="block w-full h-72">
                <img
                  src="/images/tentang-kami/5.jpg"
                  alt="Slider"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          <div className="section">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-9">
                  <div className="emphasis-title mb-4">
                    <h2
                      style={{ fontSize: 42 }}
                      className="font-body ls-1 fw-normal"
                    >
                      Yayasan Bestari Nurul Quran
                    </h2>
                  </div>

                  <p style={{ color: "#777" }} className="lead">
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

        <div id="activities" className="container d-none d-md-block">
          <div id="masjid" className="page-section mb-6">
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
                  islami. Menyatu dalam lingkungan pendidikan yang berlandaskan
                  nilai-nilai keislaman.
                </p>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="clear" />
          <div id="pendidikan" className="page-section mt-5 mb-6">
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
                  src="/images/kegiatan/15.jpg"
                  alt="Pendidikan"
                  data-animate="fadeInRight"
                  style={{ borderRadius: 25, width: 500 }}
                />
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="clear" />
          <div id="zakat-infaq" className="page-section mb-6">
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
          <div id="dakwah-kajian" className="page-section mt-5 mb-6">
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
          <div id="pelayanan-masyarakat" className="page-section mb-6">
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

        <div id="activities-mobile" className="container d-lg-none">
          {/* Masjid Section */}
          <div id="masjid-mobile" className="page-section mb-6 text-center">
            <img
              src="/images/kegiatan/9.jpg"
              alt="Masjid"
              style={{ borderRadius: 25, width: "100%", maxWidth: 250 }}
            />
            <img
              src="/images/logo-masjid.png"
              alt="Logo Masjid"
              width={64}
              className="d-block my-4 mx-auto"
            />
            <h2 style={{ fontSize: 32 }} className="font-body ls-1 fw-normal">
              Masjid
            </h2>
            <p className="lead" style={{ color: "#777" }}>
              bertekad menyediakan fasilitas masjid yang nyaman sebagai tempat
              ibadah, pembelajaran, serta pengembangan karakter islami. Menyatu
              dalam lingkungan pendidikan yang berlandaskan nilai-nilai
              keislaman.
            </p>
          </div>

          <div className="line" />

          {/* Pendidikan Section */}
          <div id="pendidikan-mobile" className="page-section mb-6 text-center">
            <img
              src="/images/kegiatan/15.jpg"
              alt="Pendidikan"
              style={{ borderRadius: 25, width: "100%", maxWidth: 250 }}
            />
            <img
              src="/images/logo-pendidikan.png"
              alt="Logo Pendidikan"
              width={64}
              className="d-block my-4 mx-auto"
            />
            <h2 style={{ fontSize: 32 }} className="font-body ls-1 fw-normal">
              Pendidikan
            </h2>
            <p className="lead" style={{ color: "#777" }}>
              bertekad untuk memberikan pendidikan yang berkualitas baik dan
              program pendidikan yang terintegrasi dengan nilai-nilai keislaman
              & pengembangan berkarakter.
            </p>
          </div>

          <div className="line" />

          {/* Zakat & Infaq Section */}
          <div
            id="zakat-infaq-mobile"
            className="page-section mb-6 text-center"
          >
            <img
              src="/images/kegiatan/11.jpg"
              alt="Zakat Infaq"
              style={{ borderRadius: 25, width: "100%", maxWidth: 250 }}
            />
            <img
              src="/images/logo-zakat-infaq.png"
              alt="Logo Zakat Infaq"
              width={64}
              className="d-block my-4 mx-auto"
            />
            <h2 style={{ fontSize: 32 }} className="font-body ls-1 fw-normal">
              Zakat & Infaq
            </h2>
            <p className="lead" style={{ color: "#777" }}>
              bertekad untuk memberi dengan hati, tumbuh dengan berkah. Melalui
              Zakat dan Infaq, bersama-sama membangun pendidikan yang
              berkualitas.
            </p>
          </div>

          <div className="line" />

          {/* Dakwah & Kajian Section */}
          <div
            id="dakwah-kajian-mobile"
            className="page-section mb-6 text-center"
          >
            <img
              src="/images/kegiatan/12.jpg"
              alt="Dakwah Kajian"
              style={{ borderRadius: 25, width: "100%", maxWidth: 250 }}
            />
            <img
              src="/images/logo-dakwah-kajian.png"
              alt="Logo Dakwah Kajian"
              width={64}
              className="d-block my-4 mx-auto"
            />
            <h2 style={{ fontSize: 32 }} className="font-body ls-1 fw-normal">
              Dakwah & Kajian
            </h2>
            <p className="lead" style={{ color: "#777" }}>
              bertekad untuk menggelar kajian {`ba'da`} sholat & kajian akbar
              dengan materi kajian seperti Aqidah/Tauhid, Tafsir, Hadist, Fiqih,
              Akhlak, Ceramah umum.
            </p>
          </div>

          <div className="line" />

          {/* Pelayanan Masyarakat Section */}
          <div
            id="pelayanan-masyarakat-mobile"
            className="page-section mb-6 text-center"
          >
            <img
              src="/images/kegiatan/13.jpg"
              alt="Pelayanan Masyarakat"
              style={{ borderRadius: 25, width: "100%", maxWidth: 250 }}
            />
            <img
              src="/images/logo-zakat-infaq.png"
              alt="Logo Pelayanan Masyarakat"
              width={64}
              className="d-block my-4 mx-auto"
            />
            <h2 style={{ fontSize: 32 }} className="font-body ls-1 fw-normal">
              Pelayanan Masyarakat
            </h2>
            <p className="lead" style={{ color: "#777" }}>
              bertekad menyediakan layanan kesehatan yang berkualitas,
              berintegrasi dengan nilai-nilai keislaman. Bersama, kita wujudkan
              masyarakat yang sehat jasmani dan rohani, serta berkarakter
              unggul.
            </p>
          </div>
        </div>

        <div className="clear" />

        <div className="section">
          <div className="container">
            <div className="container mt-5 mb-6 text-center">
              <h2
                style={{ fontSize: 42 }}
                className=" heading-block font-body ls-1 fw-normal"
              >
                Pengurus Yayasan
              </h2>
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
                      <p>
                        <strong>Ir. Tauchid Roelianto, M.M</strong>
                        <br />
                        Pembina
                      </p>
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
                      <p>
                        <strong>Dr. Bunyamin, M. Pd</strong>
                        <br />
                        Pengawas
                      </p>
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
                      <p>
                        <strong> Dr. Ir. Sintha Wahjusaputri, M. M</strong>
                        <br />
                        Ketua Yayasan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clear" />

        <div
          id="clients"
          className="section mb-6"
          style={{
            backgroundColor: "#FFF",
          }}
        >
          <div className="container mt-5 mb-6 text-center">
            <h2
              id="clients"
              style={{ fontSize: 42 }}
              className=" heading-block font-body ls-1 fw-normal"
            >
              Mitra Kami
            </h2>
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
          id="agendas"
          // className="section mb-6"
          style={{ padding: "100px 0", backgroundColor: "#F8F9FA" }}
        >
          <div className="container">
            <div className="container mt-5 mb-6 text-center">
              <h2
                id="agendas"
                style={{ fontSize: 42 }}
                className=" heading-block font-body ls-1 fw-normal"
              >
                Agenda Terkini
              </h2>
            </div>
            <div className="row">
              {articles &&
                articles.map((article, index) => (
                  <>
                    <div className="col-md-6 col-lg-4 mb-3" key={index}>
                      <div className="card">
                        <img
                          className="card-img-top w-100 h-auto"
                          src={article.coverImage.url}
                          alt="Card image cap"
                        />
                        <div className="card-body" style={{ color: "#777" }}>
                          <p
                            className="card-text"
                            style={{ fontWeight: "normal" }}
                          >
                            {article.title}
                          </p>
                          <p>
                            <i className="bi-calendar" />{" "}
                            {moment(article._createdAt).format("DD MMM YYYY")}
                          </p>
                          <a
                            href={`/article/${article.slug.current}`}
                            className="btn btn-secondary"
                          >
                            Lihat selengkapnya
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
