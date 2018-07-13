import React, { Component } from 'react';


export default function PasswordGroup({index}){
    let items = [];
    for (var i = 1; i <= 6; i++) {
        if (i <= index) {
            items.push(<div key={i} className="focus"/>);
        } else if (i === index + 1) {
            items.push(<div key={i}><img src={require('../images/cursor.gif')} className="cursor-psw"/></div>);
        } else {
            items.push(<div key={i}/>);
        }
    }
    return (
        <div className="payPsw-input">
            {items}
        </div>
    )
}
