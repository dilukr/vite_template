import React from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import {Link} from "react-router-dom";

export default function Layout(){
    function handleClick(e){
        console.log(e)
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
        </Menu>
    )
}