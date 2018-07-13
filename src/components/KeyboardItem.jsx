import React, { Component } from 'react';
import DivClick from './DivClick';


export default class KeyboardItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    handleClick(){
        this.props.onChange(this.props.item);
    }

    render() {
        return(
            <DivClick 
                className = {this.props.className} 
                onClick = {this.handleClick}
            >
                {this.props.item}
            </DivClick>
        );

    }
}

