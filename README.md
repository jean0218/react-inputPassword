# react-inputPassword
    基于React实现的移动端输入密码组件

## 何时使用
输入数值型支付密码,只能输入数字

# 示例Demo
    https://jean0218.github.io/react-inputPassword/

## 代码演示
                        
```jsx
import React, { Component } from 'react';
import { InputPassword } from '../../src/index';
import './demoExample01.css';

export default class DemoExample01 extends Component{ 
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            password: ''
        };
    }   
    
    handleChange(newState){
        this.setState({password: newState});
    }
    
    render(){
        return (
            <div className = "demo01-content">
                <h4 className = "demo-title">输入支付码</h4>
                <InputPassword
                    onChange = {this.handleChange}
                />
                <p className = "demo-msg">{this.state.password}</p>
            </div>
        )        
    }
};
```
                        
## API
### List

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
|defaultValue | 密码 | string | '' |
|onChange | 输入完成后，获取密码 | function | - |
# Fetures
    React √
    ES6 support √
    webpack √

# 启动 & 开发
    // clone 仓库
    git clone https://github.com/jean0218/react-inputPassword.git

    // 安装依赖包
    npm install

    // 启动
    npm run start

    // 跑测试用例
    npm test

# 目录
    ├── README.md
    ├── index.html   //示例demo入口
    ├── package.json 
    ├── dist // 示例demo
    ├── examples // 示例demo源文件
    ├── src // 组件源文件
    │   ├── components // React组件
    │   ├── fonts //组件中使用到的字体
    │   ├── images
    │   ├── style
    │   ├── utils //常用工具、函数
    │   └── index.js //组件入口
    └── build 
        ├── wepback.base.config // webpack基础配置
        ├── webpack.config  //webpack本地运行环境配置
        └── fileEntry.js  //示例demo生成的html文件入口配置
