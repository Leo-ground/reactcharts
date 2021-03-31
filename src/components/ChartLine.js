import React, { Component } from "react";
import {Line} from "react-chartjs-2";

class ChartLine extends Component {
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
        <Line
          data={this.props.chartData} //현 클래스의 state의 chartdata를 의미
          options={{
            title: {
              type: 'bar',
              display: this.props.displayTitle,
              text: this.props.range + " 판매량",
              fontSize: 25
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
export default ChartLine;