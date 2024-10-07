/* eslint-disable @next/next/no-img-element */
import { getArticleBySlug } from "@/sanity/queries";
import { Article } from "@/sanity/types";
import { PortableText } from "next-sanity";
import React from "react";
import "../../styles/globals.css";
import "../../styles/font-icons.css";
import "../../styles/et-line.css";
import "../../styles/bs-switches.css";
import "../../styles/app-landing.css";
import "../../styles/custom.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import moment from "moment";
import "moment/locale/id";

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  console.log("slug", params.slug);
  const article: Article = await getArticleBySlug(params.slug);
  console.log("article", article);
  moment.locale("id");

  return (
    article && (
      <>
        <Header />
        <section id="content">
          <div className="content-wrap">
            <div className="container">
              <div className="single-post mb-0">
                {/* Single Post
						============================================= */}
                <div className="entry">
                  {/* Entry Title
							============================================= */}
                  <div className="entry-title">
                    <h2>{article.title}</h2>
                  </div>
                  {/* .entry-title end */}
                  {/* Entry Meta
							============================================= */}
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <i className="uil uil-schedule" />
                        {moment(article._createdAt).format(
                          "dddd, DD MMMM YYYY"
                        )}
                      </li>
                    </ul>
                  </div>
                  {/* .entry-meta end */}
                  {/* Entry Image
							============================================= */}
                  <img
                    className="entry-image mb-5"
                    style={{
                      width: "50%",
                      height: "auto",
                    }} // This ensures the image fits its container
                    src={article.coverImage.url}
                    alt={
                      article.coverImage.alt ??
                      `${article.slug.current} cover image`
                    }
                  />
                  {/* .entry-image end */}
                  {/* Entry Content
							============================================= */}
                  <div className="entry-content mt-0">
                    <PortableText value={article.content} />
                    {/* Post Single - Content End */}
                    <div className="clear" />
                    {/* Post Single - Share
								============================================= */}
                    <div className="card border-default my-4">
                      <div className="card-body p-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="fs-6 fw-semibold mb-0">Share:</h6>
                          <div className="d-flex">
                            <a
                              href="#"
                              className="social-icon si-small text-white border-transparent rounded-circle bg-facebook"
                              title="Facebook"
                            >
                              <i className="fa-brands fa-facebook-f" />
                              <i className="fa-brands fa-facebook-f" />
                            </a>
                            <a
                              href="#"
                              className="social-icon si-small text-white border-transparent rounded-circle bg-twitter"
                              title="Twitter"
                            >
                              <i className="fa-brands fa-twitter" />
                              <i className="fa-brands fa-twitter" />
                            </a>
                            <a
                              href="#"
                              className="social-icon si-small text-white border-transparent rounded-circle bg-pinterest"
                              title="Pinterest"
                            >
                              <i className="fa-brands fa-pinterest-p" />
                              <i className="fa-brands fa-pinterest-p" />
                            </a>
                            <a
                              href="#"
                              className="social-icon si-small text-white border-transparent rounded-circle bg-whatsapp"
                              title="Whatsapp"
                            >
                              <i className="fa-brands fa-whatsapp" />
                              <i className="fa-brands fa-whatsapp" />
                            </a>
                            <a
                              href="#"
                              className="social-icon si-small text-white border-transparent rounded-circle bg-rss"
                              title="RSS"
                            >
                              <i className="fa-solid fa-rss" />
                              <i className="fa-solid fa-rss" />
                            </a>
                            <a
                              href="#"
                              className="social-icon si-small text-white border-transparent rounded-circle bg-email3 me-0"
                              title="Mail"
                            >
                              <i className="fa-solid fa-envelope" />
                              <i className="fa-solid fa-envelope" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Post Single - Share End */}
                  </div>
                </div>
                {/* .entry end */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  );
};

export default ArticlePage;
