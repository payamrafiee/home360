const date = new Date()

const Header = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <div className="footer d-flex justify-content-center text-center align-items-center">
        <p className="par text-secondary">Copyright {date.getFullYear()} Home360 | Terms of Service</p>
      </div>
      <style>{`
        .footer {
          background: black;
          height: 60px;
          width: 100%;
        }

        .par {
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}

export default Header;
