import React, { Component } from 'react';
import PasswordGroup from './PasswordGroup';
import KeyboardPsw from './KeyboardPsw';
import './inputPassword.css';


export default class InputPassword extends Component {
    static defaultProps = {
        defaultValue:'',
    };

    constructor(props){        
        super(props);
        let activeIndex,
            len = props.defaultValue.length;
        if(len === 0){
            activeIndex = 0;
        }else{
            activeIndex = len;
        }
        this.state = {
            index: activeIndex,
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.defaultValue.length === 0){
            this.setState({
                index:0,
            });
        }
    }

    handleChangeValue = (newState) =>{
        this.setState({
            index: newState.length
        })
        if (newState.length === 6) {
            this.props.onChange(newState);
        }
    }

    render() {
        return (
            <div className="payPsw-group">       
                <PasswordGroup index = {this.state.index} />
                <KeyboardPsw 
                    index = {this.state.index}
                    onChange = {this.handleChangeValue}
                />
            </div>
        )
    }
}
