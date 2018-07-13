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
