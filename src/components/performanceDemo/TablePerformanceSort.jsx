import React , { useState, useEffect }from 'react';

import styles from './TablePerformanceSort.module.less';
import { random } from 'zrender/src/tool/color';
import { array } from 'prop-types';

function getRandomWorld(num = 1){
    const strArr = []
    if(num > 0){
        for(let i=0; i < num; i++){
            const RandomStr = String.fromCodePoint(Math.round(Math.random() * 10000) + 19968);
            strArr.push(RandomStr)
        }
    }
    return strArr.join("")
}

//生成UUID
function generateUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

//获取唯一的UUID
function getRandomid(){
    var random = getRandom()
    console.log(random)
    if(array.includes(random)){
        getRandomid()
    }
    else array.push(random)
}

function getUserList(){
    new Array(10).map((item,index,array) => {
        const 
        return 
    })
}


function TablePerformanceSort() {

    return (
        <div className={styles.main}>
           测试
        </div>
    )
}

export default TablePerformanceSort;