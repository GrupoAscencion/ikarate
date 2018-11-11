import React from "react";



const MyInput = (props) => {
    var divStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',

        background: '#EEEEEE',
        padding: "3px",
        margin: "5px",
        fontSize: '1em',
        fontFamily: 'comic'
    };

    var inputStyle = {
        background: '#BBDEFB',
        width: '10em',
        border: 'none'
    }

    return (
        <div>
            <div style={divStyle}>
                <div style={{ ...props.labelStyle }}>{props.label}</div>
                <input
                    name={props.name}
                    type={props.type}
                    style={{ ...inputStyle, ...props.style }}
                    onChange={props.onChange}
                    value={props.value} />
            </div>
        </div>
    );
};


export default MyInput;
