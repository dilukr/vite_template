import React from 'react';
import getdata from '../lib/getdata';

class Page2 extends React.Component {
    state = {
        count: 0
    }
    componentDidMount (){
        getdata("api/test.json").then(data => {
            console.log(this)
            this.setState({
                count:data.code
            })
        })
    }

    render (){
        return (
            <div>
                {this.state.count}
            </div>
        )
    }

}

export default Page2;