import React from "react";

function Footer() {
  return (
    <footer className="mt-5 border-top">

      <div className="container py-5">

        <div className="row">

          {/* Logo & Copyright */}
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="/media/image/logo.svg"
              alt="Zerodha"
              style={{ width: "130px" }}
              className="mb-2"
            />

            <p className="mb-0">
              © 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Company</h5>

            <div className="d-flex flex-column gap-2 mt-3">
              <a href="/about">About</a>
              <a href="/products">Products</a>
              <a href="/pricing">Pricing</a>
              <a href="/">Referral programme</a>
              <a href="/">Careers</a>
              <a href="/">Zerodha.tech</a>
              <a href="/">Press & media</a>
              <a href="/">Zerodha cares (CSR)</a>
            </div>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Support</h5>

            <div className="d-flex flex-column gap-2 mt-3">
              <a href="/contact">Contact</a>
              <a href="/support">Support portal</a>
              <a href="/">Z-Connect blog</a>
              <a href="/">List of charges</a>
              <a href="/">Downloads & resources</a>
            </div>
          </div>

          {/* Account */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Account</h5>

            <div className="d-flex flex-column gap-2 mt-3">
              <a href="/signup">Open an account</a>
              <a href="/">Fund transfer</a>
              <a href="/">60 day challenge</a>
            </div>
          </div>

        </div>

        {/* Legal / Disclaimer */}
        <div className="row mt-4">
          <div className="col-12">

            <p className="text-muted small">
              Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
              INZ00031633 CDSL: Depository services through Zerodha Securities Pvt.
              Ltd. – SEBI Registration no.: IN-DP-100-574. Commodity Trading through
              Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
              INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
              Cross, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
              For any complaints pertaining to securities broking please write to
              complaints@zerodha.com, DP related complaints write to
              dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
              Document as prescribed by SEBI ICF
            </p>

            <p className="text-muted small">
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name, PAN,
              Address, Mobile Number, E-mail ID. Communication, Speedy redressal of
              the grievances
            </p>

            <p className="text-muted small">
              Investments in securities market are subject to market risks; read all
              the related documents carefully before investing.
            </p>

            <p className="text-muted small">
              Prevent unauthorised transactions in your account. Update your mobile
              numbers/email IDs with your stock brokers. Receive information of your
              transactions directly from Exchange on your mobile/email at the end of
              the day. Issued in the interest of investors.
            </p>

            <p className="text-muted small">
              KYC is one time exercise while dealing in securities markets – once KYC
              is done through a SEBI registered intermediary (broker, DP, Mutual Fund
              etc.), you need not undergo the same process again when you approach
              another intermediary.
            </p>

            <p className="text-muted small">
              Dear Investor, if you are subscribing to an IPO, there is no need to
              issue the bank account number and sign the IPO application form to
              authorize your bank to make payment in case of allotment. In case of
              non allotment the funds will remain in your bank account. The same
              should be authorized through UPI.
            </p>

            <p className="text-muted small">
              We do not give stock tips, and have not authorized anyone to trade on
              behalf of others. If you find anyone claiming to be part of Zerodha
              and offering such services, please create a ticket here.
            </p>

          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;