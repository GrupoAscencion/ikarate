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
                <div style={{...props.labelStyle}}>{props.label}</div>
                <input
                    name={props.name}
                    type={props.type}
                    style={{ ...inputStyle, ...props.style }}
                    onChange={props.onChange}
                    value={props.Value} />
            </div>
        </div>
    );
};


class Test extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            name: ''
        };
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    render() {

        return (
            <div>
                <MyInput label="Nombre"
                    name="name"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={this.handleInputChange}
                    value={this.state.name} />

                <MyInput label="Dirección"
                    name="address"
                    type="text"
                    style={{ width: '150px' }}
                    onChange={this.handleInputChange}
                    value={this.state.address} />
                <MyInput label="Correo"
                    type="email"
                    name="email"
                    style={{ width: '100px' }}
                    onChange={this.handleInputChange}
                    value={this.state.email} />


                <button onClick={() => console.log(this.state)}></button>
            </div>
        );
    }
}

export default Test;
