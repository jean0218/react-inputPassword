/*---------------------------------------------------------
@ 创建时间：20170517
@ 创 建 者：lunjiao.peng
@ 版本：V0.01
@ 功能描述：解决div click事件在安卓和ios不同的响应策略
@ param
---------------------------------------------------------*/
import React, { Component } from 'react';
import { isIOSClient } from '../utils/isIOSClient';
// import PropTypes from 'prop-types';


export default class DivClick extends Component {
    static defaultProps = {
        isClick:true,
        className:'',
        onClick:() => {},
    };

    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        let render = this.props.isClick != nextProps.isClick;
        return render;
    }

    handleTouchStart = (e) =>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        const { isClick } = this.props;
        if(isClick){
            this.props.onClick();
        }        
    }

    render(){
        let events = {
            onClick:this.handleTouchStart
        };
        if(isIOSClient()){
            events = {
                onTouchStart:this.handleTouchStart
            };
        }
        const {className, children} = this.props;
        return (
            <div 
                className = {className} 
                {...events}
            >
                {children}
            </div>
        )
    }
}