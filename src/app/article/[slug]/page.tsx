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

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  console.log("slug", params.slug);
  const article: Article = await getArticleBySlug(params.slug);
  console.log("article", article);

  return (
    article && (
      <>
        {/* <div>
          <img
            src={article.coverImage.url}
            alt={
              article.coverImage.alt ?? `${article.slug.current} cover image`
            }
          />
          <h1>{article.title}</h1>
          <PortableText value={article.content} />
        </div> */}
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
                        <i className="uil uil-schedule" /> 10th July 2021
                      </li>
                      <li>
                        <a href="#">
                          <i className="uil uil-user" /> admin
                        </a>
                      </li>
                      <li>
                        <i className="uil uil-folder-open" />{" "}
                        <a href="#">General</a>, <a href="#">Media</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="uil uil-comments-alt" /> 43 Comments
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="uil uil-camera" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .entry-meta end */}
                  {/* Entry Image
							============================================= */}
                  <div className="entry-image mb-5">
                    <a href="#">
                      <img
                        src={article.coverImage.url}
                        alt={
                          article.coverImage.alt ??
                          `${article.slug.current} cover image`
                        }
                      />
                    </a>
                  </div>
                  {/* .entry-image end */}
                  {/* Entry Content
							============================================= */}
                  <div className="entry-content mt-0">
                    <p>
                      <PortableText value={article.content} />
                    </p>
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
