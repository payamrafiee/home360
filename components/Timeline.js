export default () => (
  <section>
    <div >
      <div className="row justify-content-around">
        <div className="card my-3" style={{width: '250px'}}>
          <div className="card-body">
            <h5 className="card-title">Enter a zipcode</h5>
            <p className="card-text text-secondary">
              Enter a zip code or a city
            </p>
          </div>
        </div>
        <div className="card my-3" style={{width: '250px'}}>
          <div className="card-body">
            <h5 className="card-title">Pick a House</h5>
            <p className="card-text text-secondary">
              By providing a wide range of analytics and filtering,
              You can pick your ideal house in a fraction.
            </p>
          </div>
        </div>
        <div className="card my-3" style={{width: '250px'}}>
          <div className="card-body">
            <h5 className="card-title">Go for 360 view</h5>
            <p className="card-text text-secondary">
              Interactive 3D and VR
              experiences that feel as real as being there.
            </p>
          </div>
        </div>
        <div className="card my-3" style={{width: '250px'}}>
          <div className="card-body">
            <h5 className="card-title">Make a call</h5>
            <p className="card-text text-secondary">
              Thats it.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="row justify-content-around">
        <div className="d-flex text-black align-items-center justify-content-center circle">
          1
        </div>
        <div className="d-flex text-black align-items-center justify-content-center circle">
          2
        </div>
        <div className="d-flex text-black align-items-center justify-content-center circle">
          3
        </div>
        <div className="d-flex text-black align-items-center justify-content-center circle">
          4
        </div>
      </div> */}
    </div>
    <style jsx>{`
      .circle {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: white;
        border: 1px solid black;
      }


      hr {
        -moz-border-bottom-colors: none;
        -moz-border-image: none;
        -moz-border-left-colors: none;
        -moz-border-right-colors: none;
        -moz-border-top-colors: none;
        border-color: #EEEEEE -moz-use-text-color #FFFFFF;
        border-style: solid none;
        border-width: 1px 0;
        margin: 0px 0;
      }
    `}</style>
  </section>
)
