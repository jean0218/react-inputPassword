import React, { Component } from 'react';
import KeyboardItem from './KeyboardItem';
import DivClick from './DivClick';


export default class KeyboardPsw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: [],
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.index === 0){
            this.setState({
                choose: [],
            });
        }
    }

    handleNumber = (newState) =>{
        var _choose = this.state.choose,
            _len = _choose.length,
            _value;
        if (_len <= 6) {
            _choose.push(newState);
            this.setState({
                choose: _choose
            })
            this.props.onChange(this.state.choose.join(''));
        }
    }

    renderNumber(){
        var numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            self = this;
        return numberList.map(function(item,index){
            return(
                <KeyboardItem 
                    key = {index} 
                    item = {item} 
                    onChange = {self.handleNumber} 
                    className = "item"
                />
            )
        })
    }
    handleCancel = () =>{
        this.state.choose.pop();
        var _value = this.state.choose;
        this.setState({
            choose: _value
        })
        this.props.onChange(_value.join(''));
    }

    returnReturn(){
        return(
            <DivClick 
                className = "item clear-number" 
                onClick = {this.handleCancel}
            >
                <i className="iconfont">&#xe602;</i>
            </DivClick>
        )
    }

    
    renderZero(){
        return(
            <KeyboardItem 
                className = "item pointer-number"
                item = '0' 
                onChange = {this.handleNumber}                 
            />
        )
    }

    render() {
        return(
            <div className = "digital-keyboard">
                {this.renderNumber()}
                <div className = "null-item">&nbsp;</div>
                {this. renderZero()}
                {this.returnReturn()}
            </div>
        )
    }
};