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
function getRandomid(array){
    const randomUUID = generateUUID()
    if(array.includes(randomUUID)){
        getRandomid()
    }
    else{
        return randomUUID
    }
}

function getUserList(){
    const UserList = new Array(10)
    .join('.')
    .split('.')
    .map((item,index,array) => {
        let userObj = {
            name: getRandomWorld(3),
            uuid: getRandomid(array)
        }
        return userObj
    })
    return UserList
}


function TablePerformanceSort() {
    const [userList, setUserList] = useState([]);
    useEffect(()=>{
        console.log(userList)
        setUserList(getUserList());
    },[])
    return (
        <div className={styles.main}>
           测试
        </div>
    )
}

export default TablePerformanceSort;