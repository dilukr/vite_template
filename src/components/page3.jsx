import React , { useState, useEffect }from 'react';

import * as echarts from 'echarts';




function barOption(){
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };
    return option
}



function Page3() {
    const [data, SetData] = useState([5, 20, 36, 10, 10, 20])
    useEffect(()=>{
        let myChart = echarts.init(document.getElementById('echarts_area'));
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: data
            }]
        });
    })
    
    console.log(data)
    return (
        <div>
            <div id="echarts_area" style={{width:500,height:300}} />
            <button style={{width:20,height:30}} onClick={()=>{SetData([1,2,3,4,5,6])}}></button>
        </div>
    )
}

export default Page3;