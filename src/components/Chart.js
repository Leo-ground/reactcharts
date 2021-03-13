import React, {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition: 'right',
        location:'City'
    }
    render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData} //현 클래스의 state의 chartdata를 의미
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'월별 판매량'+this.props.location,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}
export default Chart;