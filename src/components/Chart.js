import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
//, Bubble, Line, Pie
class Chart extends Component {
  // constructor(props) {
  //   super(props);
  // }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "top",
    
  };
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.props.chartData} //현 클래스의 state의 chartdata를 의미
          options={{
            title: {
              type: 'bar',
              display: this.props.displayTitle,
              text: this.props.range + " 판매량",
              fontSize: 35,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
        
        
      </div>
    );
  }
}
export default Chart;