import React from 'react'
import {Doughnut} from 'react-chartjs-2'

function DoughnutChart() {
    
    const data = {
        labels:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May'
           ],
        datasets:[
            {
                label:'Sales for 2020(M)',
                data: [3,2,2,1,5],
                borderColor:['rgba(255,206,86,0.2'],
                backgroundColor:['rgba(255,99,132,1)','rgba(255,205,86,1)','rgba(54,162,235,1)','rgba(255,159,64,1)','rgba(153,102,255,1)'],
                pointBackgroundColor:'rgba(255,206,86,0.2',
                pointBorderColor:'rgba(255,206,86,0.2'
            }
        ]
    }

    const options ={
        title:{
            displya: true,
            text:'Doughnut Chart'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:6,
                        stepSize: 1
                    }
                }
            ]
        }
    }
    
    return (
        <Doughnut data={data} option={options}/>
    )
}

export default DoughnutChart
