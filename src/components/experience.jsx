import React, { Component } from 'react'

export default class Experience extends Component {
    render () {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">experience</span>
                <h2 className="colorlib-heading animate-box">work experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                 
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer at Gyde <span>Feb 2020 - Present</span></h2>
                        <ul>
                            <li>Designing, Developing, Implementation and troubleshooting of applications.</li>
                            <li>Developing a javascript chatbot which is fully configurable and can be used by business for lead generation, user interaction, surveys.</li>
                            <li>Developed admin pannel for chatbaot configuration using Angular 8.</li>
                            <li>Developed RestApi's using NodeJs for Admin and Chatbot project.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer at Varahi Technologies <span>Apr 2018 - Jan 2020</span></h2>
                        <ul>
                            <li>Worked as Web and Mobile apps developer, completed 3 web projects using Angular, NodeJs, Express, PostgreSQL with Material UI and Bootstrap.</li>
                            <li>Involved in Understanding functional specifications and developing creative solutions to meet business requirements.</li>
                            <li>Managing and leading the team of software developers worked on the critical progressive web application.</li>
                            <li>Mentoring and coaching newly hired team members.Conducting educational sessions for new team members</li>
                            <li>Providing suggestions to manage and enhance work culture of Company.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Angular Developer at Varahi Technologies <span>Dec 2018 - Apr 2019</span></h2>
                        <ul>
                            <li>Resolved complex issues related to browser and network performance, cross-browser and legacy IE compatibility, client-side scaling, usability and testability</li>
                            <li>Responsible for checking cross browser compatibility and hence worked on different browsers like Safari, Opera, Firefox, Google Chrome and Internet Explorer.</li>
                            <li>Profiling, Troubleshooting & Bugs fixes.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        );
    }
}