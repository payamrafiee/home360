export default () => (
  <section>
    <div className="row">
      <div className="page1 d-flex justify-content-start align-items-center col-lg-6">
        <div className="box1 ml-5 px-4 py-4">
          <h2 className="text1">
            Advance Analytics
          </h2>
          <p className="text-secondary pt-5">
            By analyzing historical pricing data against about
            50 metrics on location and things like
            transportation, crime, schools, etc Our machine
            learning algorithms can accurately forecast which
            homes, and even neighborhoods will experience the
            biggest bump in value over a certain time period.
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center col-lg-6">
        <img className="img-fluid imgg1" style={{height: '400px', width: '100%'}} src="https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/09/Photos/Processed/517703860-ka4G--621x414@LiveMint.jpg"/>
      </div>
    </div>

    <div className="row mt-5">
      <div className="d-flex align-items-center col-lg-6">
        <img className="img-fluid imgg2" style={{height: '400px', width: '100%'}} src="../static/images/360.jpg"/>
      </div>
      <div className="page2 d-flex justify-content-end align-items-center col-lg-6">
        <div className="box2 mr-5 px-4 py-4">
          <h2 className="text1">
            360 View
          </h2>
          <p className="text-secondary pt-5">
            Buying property for personal needs or business
            requires a lot of time and patience. It gets even
            tougher when the property and the customer are
            geographically distant. by visiting realty
            remotely, Any modern VR headset is capable of
            demonstrating such real estate virtual tours.
            That could be guided tours in 360-video format
            or interactive tours with free navigation
            throughout sites.
          </p>
        </div>
      </div>
    </div>

    <div className="row mt-5">
      <div className="page1 d-flex justify-content-start align-items-center col-lg-6">
        <div className="box1 ml-5 px-4 py-4">
          <h2 className="text1">
            Heat map
          </h2>
          <p className="text-secondary pt-5">
            Basically, heat map analysis is the use of a
            heat filter to identify the difference in
            performance between one area or another in a
            neighborhood, allowing real estate investors
            to determine the best locations in each
            neighborhood when searching for an investment
            property.
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center col-lg-6">
        <img className="img-fluid imgg1" style={{height: '400px', width: '100%'}} src="../static/images/heatmap.png"/>
      </div>
    </div>

    <div className="row mt-5">
      <div className="d-flex align-items-center col-lg-6">
        <img className="img-fluid imgg2" style={{height: '400px', width: '100%'}} src="../static/images/notification.jpg"/>
      </div>
      <div className="page2 d-flex justify-content-end align-items-center col-lg-6">
        <div className="box2 mr-5 px-4 py-4">
          <h2 className="text1">
            Smart Notification
          </h2>
          <p className="text-secondary pt-5">
            Do not miss any best possible house. Home360 by
            offering several features to set your ideal
            house, you will be notified by application
            via smart phone.
          </p>
        </div>
      </div>
    </div>
    <style>{`
      .page1 {
        height: 500px;
        background: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .imgg1 {
        position: absolute;
        top: 50px;
        right: 75px;
      }

      .box1 {
        width: 70%;
        height: 70%;
        // background: pink;
        border-left: 2px solid black;
      }

      .page2 {
        height: 500px;
        background: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }

      .imgg2 {
        position: absolute;
        top: 50px;
        left: 75px;
        z-index: 1;
      }

      .box2 {
        width: 70%;
        height: 70%;
        // background: pink;
        border-right: 2px solid black;
      }
    `}</style>
  </section>
)
