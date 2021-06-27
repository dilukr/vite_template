import React from 'react';
import getdata from '../lib/getdata';
import { Modal, Button } from 'antd';

class Page2 extends React.Component {
    state = {
        count: 0,
        visible: false
    }
    componentDidMount (){
        getdata("api/test.json").then(data => {
            console.log(this)
            this.setState({
                count:data.code
            })
        })
    }

    handleOk =() => {
        this.setState({
            visible:false
        })
    }

    showModal = () => {
        this.setState({
            visible:true
        })
    }

    render (){
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleOk}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }

}

export default Page2;