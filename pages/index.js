import React, { Component } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Timeline from '../components/Timeline'
import Card from '../components/Card'
import Benefits from '../components/Benefits'
import Follow from '../components/Follow';

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="bg-light">
          <div className="container">
            <section className="row img-text">
              <div className="col-md-6 text-content d-flex flex-column justify-content-center">
                <h1 className=" text-black text-center text1">
                  The smartest way to own your home
                </h1>
                <h5 className="text-black text-center mt-5 text2">
                  Home360 utilizes the most cutting-edge technologies to facilitate buy/sell a house
                </h5>
              </div>
              <div className="d-flex align-items-center col-md-6">
                <img className="img-bg img-fluid" alt="Responsive image" src="../static/images/mn.jpg" />
              </div>
            </section>

            <section className="flex-column mt-5">
              <div className="mb-5">
                <h3>How it works?</ h3>
              </div>
              <Timeline />
            </section>

            <section className="mt-5">
              <div className="mb-5">
                <h3>Our Technology:</ h3>
              </div>
              <Card />
            </section>

            <section className="mt-5 pb-5">
              <div className="mb-5">
                <h3>Benefits from us:</ h3>
              </div>
              <Benefits />
            </section>

            <section className="mt-5 pb-5">
              <div className="mb-5">
                <h3>Follow us on:</ h3>
              </div>
              <Follow />
            </section>


          </div>
        </div>
        <Footer />
      <style>{`
          .img-bg {
            filter: grayscale(100%);
            width: 100%;
            height: 450px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }

          .img-text {
            height: 85vh;
          }

          body {
            font-family: Open Sans;
          }

          .text1 {
            font-weight: 300;
          }

          .text2 {
            font-weight: 400;

          }

          .text3 {
            font-weight: 600;
          }

          h3 {
            font-weight: 300;
          }

          .intro {
            height: 90vh;
          }

          i {
            color: #17a2bb;
            color: white
          }

          .circle {
            height: 200px;
            width: 200px;
            border-radius: 100px;
            border: 2px solid white;
          }

          @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }

            h5 {
                font-size: 1rem;
            }

            h2 {
              font-size: 1.8rem;
            }

            .text-content {
              height: 400px;
            }

            .img-text {
              margin-bottom: 350px;
            }
          }

        `}</style>
      </div>
    );
  }
}

export default Home;
