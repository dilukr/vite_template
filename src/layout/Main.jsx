import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

function Layout(props){
    //console.log(props)
    function handleClick(e){
        console.log(props)
    }
    return (
        <Menu onClick={handleClick} theme="dark" mode="horizontal">
            <Menu.Item key="mail">
                <Link to="/">主页</Link>
            </Menu.Item>
            <Menu.Item key="app">
                <Link to="/page1">page1</Link>
            </Menu.Item>
            <Menu.Item key="page2">
                <Link to="/page2">page2</Link>
            </Menu.Item>
            <Menu.Item key="page3">
                <Link to="/page3">page3</Link>
            </Menu.Item>
            <Menu.Item key="performance">
                <Link to="/performance/table">性能测试</Link>
            </Menu.Item>
            <Menu.Item key="dsl">
                <Link to="/dsl/dsl">自定义页面</Link>
            </Menu.Item>
        </Menu>
    )
}

export default withRouter(Layout)