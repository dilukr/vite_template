import React , { useState, useEffect }from 'react';

import * as echarts from 'echarts';
import styles from './Page3.module.less';

import { Form, Input, Button, Checkbox } from 'antd';

import addDataComponent from './demo1/addData';




function Page3() {
    //纵坐标数值
    const [data, setData] = useState([5, 20])
    //横坐标，类型
    const [type, setType] = useState(['洗衣机','消毒柜'])

    useEffect(()=>{
        let myChart = echarts.init(document.getElementById('echarts_area'));
        myChart.setOption({
            title: {
                text: '销量统计图'
            },
            tooltip: {},
            xAxis: {
                data: type
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                barWidth : 30,
                data: data
            }]
        });
    })
    
    function addbarData(obj){
        console.log(obj)
        setData(data.concat([obj.value]))
        setType(type.concat([obj.type]))
    }
    
    return (
        <div className={styles.main}>
            <div>
                <div id="echarts_area" style={{width:800,height:300}} />
            </div>
            <button style={{width:150,height:50}} onClick={()=>{addDataComponent({onOK:addbarData})}}>添加数据</button>
        </div>
    )
}

export default Page3;