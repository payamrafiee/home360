import React, { Component } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
import { get } from 'https';

class Team extends Component {


  render() {
    return (
      <div>
        <Header />
        <section id="gallery ">
          <div className="content pt-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="card-deck">
                  <div className="card">
                    <img src="https://media.licdn.com/dms/image/C5603AQGfktbmMtp0JQ/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=aD4wJgqh63y6EMlL46FX3SSChZCaCiIngy63PjGnhLk" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Payam Rafiee</h5>
                      <p className="card-text text-secondary">
                        The co-founder and CEO of Home360.
                        BSc in Mathematics from Shiraz University.
                        Full-Stack Developer and Data Scientist.
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/payamrafiee/" className="btn btn-outline-primary btn-sm mr-3"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://twitter.com/payamrafiee92" className="btn btn-outline-info btn-sm"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                  <div className="card">
                    <img src="https://media.licdn.com/dms/image/C5603AQGD5afI3fl4FQ/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=8GFOrhW4vdqh7NkGkiKF64WAWa-mFEOxeGA53lqKlgY" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Mohammad Nazari</h5>
                      <p className="card-text text-secondary">
                        The co-founder and CTO of Home360.
                        BSc in petroleum engineering with
                        hands on data science. His responsibility is
                        to develop mobile application.
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/ryan-nazari-145529167/" className="btn btn-outline-primary btn-sm mr-3"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://twitter.com/ryannazari21" className="btn btn-outline-info btn-sm"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                  <div className="card">
                    <img src="https://media.licdn.com/dms/image/C5603AQHOnW0aWW22WA/profile-displayphoto-shrink_800_800/0?e=1556150400&v=beta&t=hfeoDTd85-RL4nDzp5blUUv6zWxanZjZ4DXlZCPmwC8" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Maryam Rafiee</h5>
                      <p className="card-text text-secondary">
                        The co-founder and UI/Ux designer.
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="https://www.linkedin.com/in/maryam-rafiee-024259138/" className="btn btn-outline-primary btn-sm mr-3"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://twitter.com/rafieemaryam" className="btn btn-outline-info btn-sm"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <style jsx>{`
          .bg {
            // background: white;
          }

          .content {
            height: 100vh;
          }
        `}</style>
      </div>
    );
  }
}

export default Team;
