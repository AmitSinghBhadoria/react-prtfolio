import React, { Component } from "react";

export default class Services extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-world" />
                </span>
                <div className="desc">
                  <h3>Front End Development </h3>
                  <p>
                    Experience building websites and chrome extentions
                    using JavaScript,Angular, React, HTML, CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-paperplane" />
                </span>
                <div className="desc">
                  <h3>Back End Development</h3>
                  <p>
                    Experience in Design and implementation of REST API for critical online service using NodeJs with Express.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>Mobile Development</h3>
                  <p>
                  Experience building Mobile Application
                    using React Native, have done 1 React native app.
                  </p>
                </div>
              </div>
            </div>
            

            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-note" />
                </span>
                <div className="desc">
                  <h3>Blockchain</h3>
                  <p>Experience with etherereun blockchain, have done 2 projects on ethereum smart contract development</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>Databases</h3>
                  <p>Experience with Sturctured as well as Unstructured Databases like PostgresSQL, MySQL, MongoDB</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-github" />
                </span>
                <div className="desc">
                  <h3>Code Versioning</h3>
                  <p>Proficient understanding of Git and Web-based repository hosting service, such as Github, Bitbucket </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
