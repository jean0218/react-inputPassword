import React, { Component } from 'react';
import DemoApi01 from './demo/DemoApi01';
import './main.css';

export default class Main extends Component{
    render(){
        return (
            <div className = "main-content">
                <DemoApi01 />
                <div className = "iframe_mobile">
                    <div className = "iframe_mobile_header_wrap">   
                        <div className = "iframe_mobile_header">                        
                        </div>
                        <input 
                            type = "text" 
                            className = "iframe_mobile_input" 
                            value = "demo01.html" 
                        />             
                    </div>
                    <iframe src = "demo01.html" className = "iframe_mobile_content" />          
                </div>
            </div>
        )
    }
}