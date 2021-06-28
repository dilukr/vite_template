import React, { Component,useState } from 'react';
import { Modal } from 'antd';
import { Form,Input } from 'antd';
import * as ReactDOM from 'react-dom';

let div = null;

/**
 *
 * 
 * 添加数据
 * 点击确定时返回表单所有数值
 * @param {*} props
 * @returns
 * 
 */
function AddData (props){
  var [visible, setVisible] = useState(true);
  const [form] = Form.useForm();

  console.log(props)


  function handleOk(e,a,b) {
    form.validateFields()
          .then((values) => {
            if(typeof(props.onOK) === "function"){
               props.onOK(values)
            }
            const unmountResult = ReactDOM.unmountComponentAtNode(div);
            if (unmountResult && div.parentNode) {
              div.parentNode.removeChild(div);
            }
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
          okText={"确定"}
          cancelText={"取消"}
        >
            <Form layout="horizontal" form={form} layout={formItemLayout} style={{marginTop:25}}>
                  <Form.Item 
                      name="type" 
                      label="类别"
                      rules={[{
                          required: true,
                          message: '请输入类别',
                          },
                      ]}>
                      <Input />
                  </Form.Item>
                  <Form.Item 
                      name="value" 
                      label="销量"
                      rules={[{
                          required: true,
                          message: '请输入销量',
                          },
                      ]}>
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
