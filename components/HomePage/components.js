import { InputGroup, InputGroupButton, Input, Col } from 'reactstrap';

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="in-homepage">
        <h1>Review and discover great companies!</h1>
        <p>Read reviews. Write reviews. Shop smarter.</p>
        <InputGroup size="lg" style={{'margin': '0 auto', 'width': '60%'}} >
          <Input />
          <InputGroupButton color="secondary">Search</InputGroupButton>
        </InputGroup>
      </div>
      <div className="recent-review">
        <p>Recent Reviews</p>
      </div>
      <div className="review-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-5 review-box">
              <div>
                sss
              </div>
              <p><strong>Philip Cottle</strong> reviewed <strong>Wex Photographic</strong></p>
              <p>
                This is the only company that I buy photographic gear from.
                Excellent service has always been provided.
                I am a satisfied customer over many years. I can unreservedly recommend this company.
              </p>
            </div>
            <div className="col-sm-5 review-box">
              <div>
                sss
              </div>
              <p><strong>Philip Cottle</strong> reviewed <strong>Wex Photographic</strong></p>
              <p>
                This is the only company that I buy photographic gear from.
                Excellent service has always been provided.
                I am a satisfied customer over many years. I can unreservedly recommend this company.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 review-box">
              <div>
                sss
              </div>
              <p><strong>Philip Cottle</strong> reviewed <strong>Wex Photographic</strong></p>
              <p>
                This is the only company that I buy photographic gear from.
                Excellent service has always been provided.
                I am a satisfied customer over many years. I can unreservedly recommend this company.
              </p>
            </div>
            <div className="col-sm-5 review-box">
              <div>
                sss
              </div>
              <p><strong>Philip Cottle</strong> reviewed <strong>Wex Photographic</strong></p>
              <p>
                This is the only company that I buy photographic gear from.
                Excellent service has always been provided.
                I am a satisfied customer over many years. I can unreservedly recommend this company.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 review-box">
              <div>
                sss
              </div>
              <p><strong>Philip Cottle</strong> reviewed <strong>Wex Photographic</strong></p>
              <p>
                This is the only company that I buy photographic gear from.
                Excellent service has always been provided.
                I am a satisfied customer over many years. I can unreservedly recommend this company.
              </p>
            </div>
            <div className="col-sm-5 review-box">
              <div>
                sss
              </div>
              <p><strong>Philip Cottle</strong> reviewed <strong>Wex Photographic</strong></p>
              <p>
                This is the only company that I buy photographic gear from.
                Excellent service has always been provided.
                I am a satisfied customer over many years. I can unreservedly recommend this company.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .homepage-wrapper {
        }
        .in-homepage {
          background-image: url("/static/images/homepage_5_1440-900.jpg");
          height: 506px;
          background-size: 100% auto;
          background-repeat: no-repeat;
          padding: 170px 0px 0px 0px;
          text-align: center;
          color: #fff;
        }
        .input-search {
          margin: 0 auto;
          width: 67%;
        }
        .recent-review {
          margin: 0;
          padding: 0;
          text-align: center;
          box-shadow: 0 5px 5px -4px #c8c8c8;
        }
        .recent-review p{
          padding: 10px 20px;
          margin: 0px;
          color: #1b1b1b;
          font-weight: 700;
          font-size: 14px;
        }
        .review-wrapper {
          background-color: #f1f1f1;
        }
        .review-box {
          background: none #fff;
          padding: 17px;
          margin: 52px 40px 17px;
          border-radius: 5px;
          cursor: pointer;
          box-shadow: 0 4px 4px -5px #c8c8c8;
        }
      `}
      </style>
    </div>
  )
}

export default HomePage
