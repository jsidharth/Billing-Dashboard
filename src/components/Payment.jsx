import React, { Component } from "react";
class Payment extends Component {
  state = {};
  render() {
    return (
      <div className="row m-2 justify-content-center">
        <div className="card w-50">
          <h5 className="card-header">Pay with Card</h5>
          <div className="card-body">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Name on Card
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Email
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  Card Number
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Card number"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  CVV
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="CVV"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend ml-1">
                <span class="input-group-text" id="basic-addon1">
                  Valid Until
                </span>
              </div>
              <input
                type="date"
                class="form-control"
                placeholder="Username"
                aria-label="Name"
                aria-describedby="basic-addon1"
              />
            </div>
            <button type="button" class="btn btn-primary">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
