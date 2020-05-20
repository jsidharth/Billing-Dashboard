import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import _ from "lodash";

class MonthlyDetail extends Component {
  lineData = {
    data: {
      labels: (() => {
        const curMonth = moment()
          .month(this.props.match.params.monthidx)
          .format("YYYY-MM")
          .toString();
        const days = new Array(moment(curMonth, "YYYY-MM").daysInMonth());
        for (let i = 0; i < days.length; i++) {
          days[i] = i + 1;
        }
        return days;
      })(),
      datasets: [
        {
          label: "Data used per day",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "#fffbfa",
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
          data: (() => {
            const curMonth = moment()
              .month(this.props.match.params.monthidx)
              .format("YYYY-MM")
              .toString();
            const days = new Array(moment(curMonth, "YYYY-MM").daysInMonth());
            for (let i = 0; i < days.length; i++) {
              days[i] = _.random(2, 30);
            }
            return days;
          })(),
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
            scaleLabel: {
              display: true,
              labelString: "Days",
              fontSize: 20,
            },
          },
        ],
        yAxes: [
          {
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
  render() {
    return (
      <div className="row m-2">
        <div className="row m-2">
          <h3>
            {moment()
              .month(this.props.match.params.monthidx)
              .format("MMMM")
              .toString()}
          </h3>
        </div>
        <Line data={this.lineData.data} options={this.lineData.options} />
      </div>
    );
  }
}

export default MonthlyDetail;
