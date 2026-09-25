import React from 'react';

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Side - Varsity Image */}
        <div className="col-6">
          <img
            src="/media/image/education.svg"
            style={{ width: "90%" }}
            alt="Zerodha Varsity"
          />
        </div>

        {/* Right Side - Education Content */}
        <div className="col-6">

          <h2 className="mb-4">
            Free and open market education
          </h2>

          <p>
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a
            href="/"
            style={{
              textDecoration: "none",
              marginRight: "20px"
            }}
          >
            Varsity
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>

          <br />
          <br />

          <p>
            TradingQ&A, the most active trading and investment community
            in India for all your market related queries.
          </p>

          <a
            href="/"
            style={{ textDecoration: "none" }}
          >
            TradingQ&A
            <i
              className="fa fa-long-arrow-right"
              aria-hidden="true"
            ></i>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;