//import "./App.css";
import React, { Component } from "react";
import Chart from "./components/Chart";
import ChartLine from "./components/ChartLine";
import ChartDoughnut from "./components/ChartDoughnut";
//import Option from "./components/Option";
import Nav from "./components/Nav";
import axios from "axios";
import {Transition, animated} from 'react-spring/renderprops';
//import LineChart from "./components/LineChart";
//import BarChart from "./components/BarChart";
//import DoughnutChart from "./components/DoughnutChart";




//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [],
      },
      searchCondition:{
        year:2020,
        range:'월별'
      },
      showChart: true,
      showChartBar: true,
      showChartLine: false,
      showChartDoughnut: false,
    
      
    };
  }
 
  //loadData =async () => {
    getChartData() {
    let seacherYear = this.state.searchCondition.year
    return axios({
      method: "get",
      url: "http://localhost/chart/month/sale/"+seacherYear,
      responseType: "json",
    }).then( (response)=> {
      //console.log(response)
      var newData2020=[];
      var newData2021=[];
      var newDataMONTH=[];
      var data2020 = response.data.sales2020
      var data2021 = response.data.sales2021
      
      data2020.forEach(d => {
        newDataMONTH.push(d.MONTH);
        newData2020.push(d.TOTAL_SALE);
      });
      data2021.forEach(d => {
        newData2021.push(d.TOTAL_SALE);
      });
      //console.log(newData2020,newData2021);
      
      
      this.setState({
        chartData: {
          labels: newDataMONTH,
          datasets: [
            {
              label: 2020,
              data: newData2020,
              backgroundColor: [       
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(75,192,192,0.6)",
              ],
            },{
              label: 2021,
              data: newData2021,
              backgroundColor: [
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                "rgba(255,99,132,0.6)",
                
              ],
            }
          ],
        },
      }); //end setstate
    }); //end then
  }

  componentDidMount(){
    this.getChartData();
  }

  toggle = e=> this.setState({ showChart:
    !this.state.showChart});

  toggleBar = e=> this.setState({ showChartBar:
    !this.state.showChartBar});
    toggleLine = e=> this.setState({ showChartLine:
      !this.state.showChartLine});
      toggleDoughnut = e=> this.setState({ showChartDoughnut:
        !this.state.showChartDoughnut});

  onSearch = e =>  this.setState({
    searchCondition:{
      year:2021,
      range:'월별'
      }
    }) ;
  

  render() {
    //console.log("render")
    return (
      <div className="App">
        <Nav toggle={this.toggle}
        toggleBar={this.toggleBar}                  
        toggleLine={this.toggleLine}
        toggleDoughnut={this.toggleDoughnut}
        onSearch={function(){
          this.setState({
            searchCondition:{
              year:2021,
              range:'월별'
            },
         })
         this.getChartData()}.bind(this)}  
        
         />
         
        <Transition
            native 
            items={this.state.showChartBar}
            from={{opacity:0}}
            enter={{opacity:1}}
            leave={{opacity:0}}
          >{show =>show && (props =>(
            <animated.div style={props}>             
               <Chart                  
                  chartData={this.state.chartData}
                  range={this.state.searchCondition.range}
                  legendPosition="top"
                />
              
            </animated.div>
          ))}
        </Transition>
        <Transition
            native 
            items={this.state.showChartLine}
            from={{opacity:0}}
            enter={{opacity:1}}
            leave={{opacity:0}}
          >{show =>show && (props =>(
            <animated.div style={props}>             
            
                <ChartLine
                  chartData={this.state.chartData}
                  range={this.state.searchCondition.range}
                  legendPosition="top"
                />
            </animated.div>
          ))}
        </Transition>
        <Transition
            native 
            items={this.state.showChartDoughnut}
            from={{opacity:0}}
            enter={{opacity:1}}
            leave={{opacity:0}}
          >{show =>show && (props =>(
            <animated.div style={props}>            
             
                <ChartDoughnut
                  
                  chartData={this.state.chartData}
                  range={this.state.searchCondition.range}
                  legendPosition="top"
                />
            </animated.div>
          ))}
        </Transition>
         
       
        {/* chart defaultPops에 있는  속성을 변경 */}
      </div>
    );
  }
}

export default App;