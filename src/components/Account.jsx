import React, { Component } from "react";
class Account extends Component {
  state = {};
  render() {
    return (
      <div className="row m-2 justify-content-center">
        <div className="card w-75">
          <h5 className="card-header">Your account</h5>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-4">
                <img
                  src="https://skillquo.com/wp-content/uploads/2016/10/user-avatar.png"
                  alt="..."
                  className="rounded img-thumbnail "
                  max-width="100%"
                  height="180px"
                />
              </div>
              <div className="col align-self-center">
                <p className="card-text">
                  First Name: <strong>Sidharth</strong>
                </p>
                <p className="card-text">
                  Last Name: <strong>Jayaprakash</strong>
                </p>
                <p className="card-text">
                  Street: <strong>101 East San Fernando</strong>
                </p>
                <p className="card-text">
                  Apt No: <strong>#138</strong>
                </p>
                <p className="card-text">
                  City: <strong>San Jose</strong>
                </p>
                <p className="card-text">
                  Zip: <strong>95122</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
