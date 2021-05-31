import React , { useState, useEffect }from 'react';
import getdata from '../lib/getdata'

function Page1({}){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        getdataAction()
    },[]);

    function getdataAction(){
        getdata("api/test.json").then(data => {
            console.log(data)
        })
    }
    
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Page1;