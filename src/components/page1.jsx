import React , { useState, useEffect }from 'react';
import getdata from '../lib/getdata'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../models/page1';

function Page1({}) {

    //获取redux中的数据
    const count = useSelector(state => state.counter.value);
    const page1Obj = useSelector(state => state.page2);
    console.log(page1Obj)

    const dispatch = useDispatch()

    useEffect(() => {
        getdataAction()
    }, []);

    function getdataAction() {
        getdata("api/test.json").then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <button aria-label="Increment value" onClick={()=> dispatch(increment())}>
                Increment
            </button>
            <span>{count}</span>
            <button aria-label="Decrement value" onClick={()=> dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}

export default Page1;