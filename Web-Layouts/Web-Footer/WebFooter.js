export default function WebFooter() {
  return (
    <footer className="bg-footer " id="contantus">
      <div className="container mb-3">
        <div className="row ">
          <div className="col-12 col-md-3  mt-5 text-center text-md-start ">
            <a href="/">
              <img src="images/Upskillzf.png" className="img-fuild  mb-3" />
            </a>
            <p
              style={{
                color: "#fff",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div>
              <i className="fa-brands fa-twitter icon-2 pointer"></i>
              <i className="fa-brands fa-facebook icon-2 pointer"></i>
              <i className="fa-brands fa-instagram icon-2 pointer"></i>
            </div>
          </div>
          <div className="col-12 col-md-3  mt-5  ps-md-5 text-center text-md-start ">
            <span
              style={{
                fontSize: "20px",
              }}
            >
              Services
            </span>
            <p
              className="mt-3 "
              style={{
                color: "#fff",
              }}
            >
              <a href="#services" className="pointer">
                Website Development
              </a>
            </p>
            <p
              style={{
                color: "#fff",
              }}
            >
              <a href="#services" className="pointer">
                Mobile App Development
              </a>
            </p>
            <p
              style={{
                color: "#fff",
              }}
            >
              <a href="#services" className="pointer">
                Digital Marketing
              </a>
            </p>
            <p
              style={{
                color: "#fff",
              }}
            >
              <a href="#services" className="pointer">
                White Label
              </a>
            </p>
            <p
              style={{
                color: "#fff",
              }}
            >
              <a href="#services" className="pointer">
                Website Design
              </a>
            </p>
          </div>
          <div className="col-12 col-md-3  mt-5  ps-md-5 text-center text-md-start">
            <span
              style={{
                fontSize: "20px",
              }}
            >
              Support
            </span>
            <p
              className="mt-3"
              style={{
                color: "#fff",
              }}
            >
              Help Center
            </p>
            <p
              style={{
                color: "#fff",
              }}
            >
              Delivery Service
            </p>
            <p
              style={{
                color: "#fff",
              }}
            >
              Privacy Policy
            </p>
            <p
              style={{
                color: "#fff",
              }}
            >
              Terms of service
            </p>
          </div>
          <div className="col-12 col-md-3 mt-5 text-center text-md-start">
            <span
              style={{
                fontSize: "20px",
              }}
            >
              Contact
            </span>
            <p
              className="mt-3"
              style={{
                color: "#fff",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <a
              className="d-block d-md-flex mt-4 pointer"
              target="_blank"
              href="tel:1234567890"
            >
              <i className="fa-solid fa-phone icon-21 "></i>
              <h6
                style={{
                  color: "#fff",
                }}
                className="ps-2 mt-1"
              >
                +1234567890
              </h6>
            </a>
            <a
              href="mailto:upskillz@gmail.com"
              className="d-block d-md-flex  pointer"
              target="_blank"
            >
              <i className="fa-regular fa-envelope icon-21"></i>
              <h6
                style={{
                  color: "#fff",
                }}
                className="ps-2 mt-1 "
              >
                upskillz@gmail.com
              </h6>
            </a>
          </div>
        </div>
        <div className="footer_hr " />
        <h4
          className="text-center pb-2 pt-3"
          style={{
            color: "#fff",
          }}
        >
          © 2023 Knewton Consulting | All Rights Reserved
        </h4>
      </div>
    </footer>
  );
}
