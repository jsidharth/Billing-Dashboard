import React, { Component } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { withRouter } from "react-router-dom";
import moment from "moment";
import _ from "lodash";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaExclamation,
  FaDollarSign,
} from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

class Dashboard extends Component {
  totalData = [_.random(6, 30), _.random(1, 5)];
  doughnutData = {
    data: {
      labels: ["Downloaded data", "Uploaded data"],
      datasets: [
        {
          data: this.totalData,
          backgroundColor: ["#7adfbb", "#4c8577"],
        },
      ],
    },
  };

  barData = {
    data: {
      labels: moment.monthsShort(),
      datasets: [
        {
          label: "Total data usage",
          data: _.times(12, (i) => _.random(30, 150)),
          backgroundColor: [
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
            "#54DEFD",
          ],
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            barPercentage: 0.5,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
              labelString: "Months",
              fontSize: 20,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)",
            },
            scaleLabel: {
              display: true,
              labelString: "Data in GB",
              fontSize: 20,
            },
            ticks: {
              beginAtZero: true,
              precision: 0,
            },
          },
        ],
      },
    },
  };

  elementClicked = (element) => {
    this.props.history.push(`/data/month/${element[0]._index}`);
  };
  render() {
    return (
      <div>
        <div className="row m-2">
          <h3>Current Usage</h3>
        </div>
        <div className="row m-2">
          <div class="card shadow p-2 bg-white rounded w-50 col m-1">
            <div class="card-body">
              <Doughnut data={this.doughnutData.data} />
            </div>
          </div>
          <div class="col m-1">
            <div className="row">
              <div className="col">
                <div class="card shadow p-2 bg-white rounded m-1">
                  <div class="card-body">
                    <p className="font-weight-bold">
                      Monthly Downtime <FaExclamation />
                    </p>
                    <p className="font-weight-bolder">{_.random(1, 10)} mins</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card shadow p-2 bg-white rounded m-1">
                  <div class="card-body">
                    <p className="font-weight-bold">
                      Total Data <BsGraphUp />
                    </p>
                    <p className="font-weight-bolder">
                      {this.totalData.reduce((sum, data) => {
                        return (sum += data);
                      }, 0)}{" "}
                      GB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div class="card shadow p-2 bg-white rounded m-1">
                  <div class="card-body">
                    <p className="font-weight-bold">
                      Avg D/W Speed <FaArrowCircleDown />
                    </p>
                    <p className="font-weight-bolder">
                      {_.random(50, 100)} mbps
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card shadow p-2 bg-white rounded m-1">
                  <div class="card-body">
                    <p className="font-weight-bold">
                      Avg U/p Speed <FaArrowCircleUp />
                    </p>
                    <p className="font-weight-bolder">{_.random(1, 10)} mbps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-2">
          <h3>Monthly Usage</h3>
        </div>
        <div className="row m-2">
          <div class="card shadow p-2 bg-white rounded w-100">
            <div class="card-body">
              <Bar
                data={this.barData.data}
                options={this.barData.options}
                onElementsClick={this.elementClicked}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
