import React , { useState, useEffect }from 'react';

import * as echarts from 'echarts';

import { Form, Input, Button, Checkbox } from 'antd';

import addDataComponent from './demo1/addData';

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
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <button style={{width:50,height:50}} onClick={()=>{addDataComponent({data:1})}}>点击</button>
            <div id="echarts_area" style={{width:500,height:300}} />
        </div>
    )
}

export default Page3;