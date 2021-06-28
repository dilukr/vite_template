import React, { Component,useState } from 'react';
import { Modal } from 'antd';
import { Form,Input } from 'antd';
import * as ReactDOM from 'react-dom';

let div = null;

function AddData (props){
  var [visible, setVisible] = useState(true);
  const [form] = Form.useForm();

  console.log(props)


  function handleOk(e,a,b) {
    form.validateFields()
          .then((values) => {
            console.log(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
  
  }

  function handleCancel (e) {
      setVisible(false)
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
  }
    //表格基础配置
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
    };

	  return (
        <Modal
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
            <Form layout="horizontal" form={form} layout={formItemLayout} style={{marginTop:25}}>
            <Form.Item name="title" label="Title"
                rules={[
                    {
                    required: true,
                    message: 'Please input the title of collection!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>
            </Form> 
        </Modal>
	  );
  
}


export default function backup(config){
        div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<AddData {...config}/>, div);
}
