import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Define, refine and deliver</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-50 mb-4">We offer a flexible service, either taking your project from beginning
                  to end or helping out at any point in between.
                  We pride ourselves on being friendly, approachable and providing maximum value to our customers.</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Get Started!</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">At your service</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Development</h3>
                  <p className="text-muted mb-0">No matter the task or the technology, we can help.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-clipboard-check text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Quality Assurance</h3>
                  <p className="text-muted mb-0">Your projects, tested to the highest standard.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-network-wired text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Infrastructure</h3>
                  <p className="text-muted mb-0">We'll ensure your project scales with your business.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-chess-knight text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Strategy</h3>
                  <p className="text-muted mb-0">Board level SaaS and tech experience at your disposal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Website and App Development
                    </div>
                    <div className="project-name">
                      Konquest
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Development and QA
                    </div>
                    <div className="project-name">
                      Imagine Build
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">
                      Fractional CTO
                    </div>
                    <div className="project-name">
                      Tungl
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Read the latest from our team</h2>
            <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Get in touch!</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an
                  email
                  and we will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+44 (0) xxxxx xxx xxx</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:contact@yourwebsite.com">hello@developkerr.com</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <Carousel interval={null} indicators={false} defaultActiveIndex={this.state.modalCurrent} slide={false}>
            <Carousel.Item>
              <h2>Konquest</h2>
              <h3>Services</h3>
              <ul>
                <li>Tech Leadership</li>
                <li>Web Application Development</li>
                <li>Web Development</li>
              </ul>
              <h3>Description</h3>
              <p>
                We were engaged by this exciting start-up to provide technical and SaaS leadership, in addition to development services,
                during the launch of its flagship product. We quickly researched and understood the domain of commission,
                offering immediate advice on road map, strategy and delivery. We also contributed directly to the
                development workload, implementing key features and integrations. Finally, we built the corporate website
                from a bespoke design using modern JAMstack technologies.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <h2>Imagine Build</h2>
              <h3>Services</h3>
              <ul>
                <li>Flash Conversion</li>
                <li>Interactive Web Development</li>
                <li>Quality Assurance</li>
              </ul>
              <h3>Description</h3>
              <p>
                We assisted this software consultancy in a large project to convert a series of highly interactive and
                bespoke flash activities to current web technologies. The activities covered a variety of topics, including
                mathematics, where legacy ActionScript needed to be rewritten into JavaScript. We also offered comprehensive
                QA services on the project, testing across a range of modern and legacy browsers/devices.
              </p>
            </Carousel.Item>
            <Carousel.Item>
              <h2>Tungl</h2>
              <h3>Services</h3>
              <ul>
                <li>Tech Leadership</li>
                <li>DevOps and Infrastructure</li>
                <li>Web Application Development</li>
              </ul>
              <h3>Description</h3>
              <p>
                Having previously been employed by this tech assessment organisation, our services were retained in order
                to keep the experience and domain knowledge upon which the business depends. The services provided align
                with those of a start-up CTO, providing tech leadership and strategy around key concerns such as compliance,
                security and scalability. Additionally we continued to own the majority of infrastructure and DevOps
                processes as well as developing on the company's legacy and current applications.
              </p>
            </Carousel.Item>
          </Carousel>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
