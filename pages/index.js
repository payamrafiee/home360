import React, { Component } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="bg">
          <div className="container px-0">
            <section className="d-flex flex-column align-items-center justify-content-center intro">
              <h1 class="display-4 text-info text-center font-l">
                The smartest way to own your home
              </h1>
              <h5 class="text-light text-center pt-5 font-r">
                Home360 utilizes the most cutting-edge technologies to facilitate buy/sell a house
              </h5>
              <p class="text-secondary text-center font-l">
                scroll down for more info
              </p>
            </section>

            <section>
              <div className="row mt-5">
                <div className="col-md-4 d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center align-items-center circle border-info my-4">
                    <i class="fas fa-chart-area fa-5x"></i>
                  </div>
                  <p className="font-r text-center">
                    By analyzing historical pricing data against about 50 metrics on location
                    and things like transportation, crime, schools, etc Our machine learning algorithms can
                    accurately forecast which homes, and even neighborhoods will experience the
                    biggest bump in value over a certain time period.
                  </p>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center align-items-center circle border-info my-4">
                    <i class="fas fa-vr-cardboard fa-5x" />
                  </div>
                  <p className="font-r text-center">
                    Buying property for personal needs or business requires a
                    lot of time and patience. It gets even tougher when the property and the customer are geographically
                    distant. by visiting realty remotely, Any modern VR headset is capable of demonstrating such real estate
                    virtual tours. That could be guided tours in 360-video format or interactive tours with free navigation
                    throughout sites.
                  </p>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-center align-items-center circle border-info my-4">
                    <i class="fas fa-bell fa-5x"></i>
                  </div>
                  <p className="font-r text-center">
                    Do not miss any best possible house. Home360 by offering several features to
                    set your ideal house, you will be notified by application via
                    smart phone.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      <style>{`
          p {
            color: #c6c9ce;
          }

          .font-l {
            font-family: Open Sans;
            font-weight: 300;
          }

          .font-r {
            font-family: Open Sans;
            font-weight: 400;
          }

          .font-b {
            font-family: Open Sans;
            font-weight: 600;
          }

          .bg {
            background: black;
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

        `}</style>
      </div>
    );
  }
}

export default Home;
