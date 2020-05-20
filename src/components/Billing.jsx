import React, { Component } from "react";
import moment from "moment";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";

class Billing extends Component {
  plan_total = _.random(50, 70);
  credit = _.random(15);

  billinghistory = [
    {
      date: "2020 04",
      amount: _.random(50, this.plan_total),
    },
    {
      date: "2020 03",
      amount: _.random(50, this.plan_total),
    },
    {
      date: "2020 02",
      amount: _.random(50, this.plan_total),
    },
    {
      date: "2020 01",
      amount: _.random(50, this.plan_total),
    },
    {
      date: "2019 12",
      amount: _.random(50, this.plan_total),
    },
  ];
  lineData = {
    data: {
      labels: _.chain(this.billinghistory)
        .map("date")
        .map((eachDate) =>
          moment(eachDate, "YYYY MM").format("MMMM YYYY").toString()
        )
        .value(),
      datasets: [
        {
          label: "Amount",
          fill: true,
          lineTension: 0.3,
          borderColor: "#4c8577",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.map(this.billinghistory, "amount"),
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Months",
              fontSize: 20,
            },
          },
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Amount",
              fontSize: 20,
            },
          },
        ],
      },
    },
  };

  render() {
    return (
      <div>
        <div className="row m-2">
          <div className="card w-100">
            <h5 className="card-header">
              <strong>Your Plan</strong>
            </h5>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <p className="card-text">
                    Plan Name: <strong>ISP_PLAN_123</strong>
                  </p>
                  <p className="card-text">Plan Type: LIMITED</p>
                  <p className="card-text">
                    Amount: <strong>$ {this.plan_total}</strong>
                  </p>
                </div>
                <div className="col">
                  <p className="card-text">
                    Data Limit: <strong>100GB/Month</strong>
                  </p>
                  <p className="card-text">Amount per GB over limit: $2</p>
                  <button type="button" className="btn btn-outline-dark">
                    Change Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-2">
          <div className="col">
            <div className="card w-100">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    {" "}
                    <strong>Current Bill</strong>
                  </div>
                  <div className="col">
                    <Link to="/currentbill.pdf" target="_blank" download>
                      <FaFileDownload />
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      New charges due {moment().format("MMM").toString()} 26,{" "}
                      {moment().format("YYYY").toString()}
                    </div>
                    <div className="col">${this.plan_total}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Credits</div>
                    <div className="col">${this.credit}</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col align-self-center">
                      Total Balance due
                    </div>
                    <div className="col">
                      <h1>${this.plan_total - this.credit}</h1>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row mt-2">
                    <div className="col">
                      {/* <button type="button" class="btn btn-success">
                      View Bill Details
                    </button> */}
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={() => this.props.history.push("/payment")}
                      >
                        Make Payment
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card w-100">
              <div className="card-header">
                <strong>Billing History</strong>
              </div>
              <ul className="list-group list-group-flush">
                {this.billinghistory.map((history) => {
                  return (
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">
                          {moment(history.date, "YYYY MM")
                            .format("MMMM YYYY")
                            .toString()}
                        </div>
                        <div className="col font-weight-bold">
                          ${history.amount}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <Line data={this.lineData.data}
        options={this.lineData.options} />
      </div>
    );
  }
}

export default withRouter(Billing);
