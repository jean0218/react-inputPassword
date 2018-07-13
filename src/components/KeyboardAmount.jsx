import React, { Component } from 'react';
import KeyboardItem from './KeyboardItem';
import DivClick from './DivClick';


export default class KeyboardAmount extends Component {
    static defaultProps = {
        value:0,
        clearBtnIcon:<i className="iconfont">&#xe659;</i>,
    }

    constructor(props){
        super(props);
        const defaultValue = this.props.value.toString().split('');
        let isClickConfirm = this.props.isClickConfirm;
        this.state = {
            choose: defaultValue,
            isClickConfirm:isClickConfirm,
        };
    }

    componentWillReceiveProps(newProps){
        if(this.props.isClickConfirm != newProps.isClickConfirm && newProps.isClickConfirm){
            this.setState({
                isClickConfirm:true,
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState){      
        let render = this.props.value != nextProps.value || this.state.isClickConfirm != nextState.isClickConfirm;
        return render;
    }

    handleNumber = (newState) =>{//
        let thisChoosen = this.state.choose;
        const pointerNum = thisChoosen.indexOf('.');
        if (pointerNum > 0 && (thisChoosen.length - pointerNum === 3)) {
            return;
        } 
        if (pointerNum === -1 && (thisChoosen.length === 6)) {
            return;
        }           
        if (thisChoosen.length >= this.props.maxlength) {
            return;
        }
        thisChoosen.push(newState);
        let isAllZero = true;
        for(let i = 0, len = thisChoosen.length; i < len; i++){
            if(thisChoosen[i] != '0'){
                isAllZero = false;
                break;
            }
        }
        if(isAllZero){
            this.handelClearAll();
        }else{            
            this.changeValue(thisChoosen);
        }    
    }

    handleCancel = () =>{//删除
        let thisChoosen = this.state.choose;
        thisChoosen.pop();//删除数组最后一位
        if (thisChoosen.length == 0) {
            this.handelClearAll();
        }else{
            this.changeValue(thisChoosen);
        }
    }

    handelClearAll = () =>{//清空
        this.setState({
            choose:['0'],
            isClickConfirm:false,
        })
        this.props.valueCallback('0');
    }

    changeValue = (thisChoosen) =>{ 
        let choosenValue = thisChoosen.join('');
        if (parseFloat(choosenValue) === 0) {
            this.setState({
                choose: thisChoosen,
                isClickConfirm: false,
            });
            this.props.valueCallback(thisChoosen.join(''));
            return;
        }
        if(thisChoosen[0] === '0' && thisChoosen[1] !== '.'){
            thisChoosen.shift();
        }
        this.setState({
            choose: thisChoosen,
            isClickConfirm: true,
        });
        this.props.valueCallback(thisChoosen.join(''));
    }

    handlePointer = () =>{
        let thisChoosen = this.state.choose;
        if (thisChoosen.indexOf('.') === -1) {
            thisChoosen.push('.');
            this.setState({
                choose: thisChoosen,
            })
            this.props.valueCallback(thisChoosen.join(''));
        }
    }

    handleConfirm = () =>{ //确定
        this.setState({
            isClickConfirm: false,
        });
        this.props.confirmCallback({
            open: false,
            value:this.state.choose.join(''),
        });
    }

    renderClearAll(){
        return(
            <KeyboardItem 
                className = "item clear-all" 
                item = '清空' 
                onChange = {this.handelClearAll} 
                class = "item" 
            />
        )
    }

    renderRight(){
        const { isClickConfirm } = this.state;
        const { clearBtnIcon } = this.props;
        
        const className = isClickConfirm ? "item confirm-number" : "item confirm-number disabled";
        const clickBtn = (
            <DivClick 
                className = {className}
                isClick = {isClickConfirm}
                onClick = {this.handleConfirm}
            >
                {this.props.payBtnName}
            </DivClick>
        )

        return(
            <div className = "right">
                <DivClick 
                    className = "item clear-number" 
                    onClick = {this.handleCancel}
                >
                    {clearBtnIcon}
                </DivClick>
                {clickBtn}
            </div>
        )
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

    render() {    
        return(
            <div className = "amount-keyboard">
                <div className = "left">
                    {this.renderNumber()}
                    <DivClick 
                        className = "item" 
                        onClick = {this.handlePointer}
                    >
                        .
                    </DivClick>
                    <KeyboardItem 
                        item = '0' 
                        onChange = {this.handleNumber} 
                        className = "item"
                    />
                    {this.renderClearAll()}
                </div>
                {this.renderRight()}
            </div>
        )
    }
}

