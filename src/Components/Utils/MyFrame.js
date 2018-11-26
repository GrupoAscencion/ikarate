import React from "react";



const MyFrame = (props) => {

    var divStyle = {
        display: 'flex',
        flowDirection: 'row',
        padding: "0px",
        margin: "0px",
        fontSize: '1em',
        fontFamily: 'comic'
    }

    var titleStyle = {
        display: 'flex',
        flowDirection: 'column',
        padding: "0px",
        margin: "0px",
        fontSize: '1.5em',
        fontFamily: 'comic',
        justifyContent:'center',

    }
       
    return (
        <div style={{ ...props.style }}>
            <div style={titleStyle}>{props.title}</div>
            <div>{props.children}</div>
        </div>
    );
};


export default MyFrame;
