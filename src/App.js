import './App.css';
import React, {Component} from 'react'
import Chart from './components/Chart';
import axios from "axios";

//function App() {
class App extends Component{
  constructor(props){
    super(props);
    this.state={
        chartData:{}
       }
  }

  componentWillMount(){
    this.getChartData();
    
  }
  
  getChartData(){
    //Ajax calls here
    axios({
      method: "get",
      url: "http://localhost/chart/month/sale",
      responseType: "json"
    }).then(function (response) {
        console.log(response);       

    }); //end then
    
    this.setState({
      chartData:{            
        labels:['1', '2', '3', '4', '5', '6','7','8','9','10','11','12'],
        datasets:[
            {
                label:'Population',
                data:[
                    117594,
                    131045,
                    153060,
                    106519,
                    105162,
                    95072,
                    153060,
                    106519,
                    105162,
                    106519,
                    105162,
                    95072
                ],
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(153,102,255,0.6)',
                    'rgba(255,159,64,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(153,102,255,0.6)',
                    'rgba(255,159,64,0.6)',
                    'rgba(54,162,235,0.6)'
                ]
            }
        ]               


      },
    }); //end setstate
    
  }

  render(){
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} location="서울" legendPosition="bottom" /> 
        {/* chart defaultPops에 있는  속성을 변경 */}
      </div>
    );
  }
}
 


export default App;
