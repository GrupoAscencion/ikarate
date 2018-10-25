import React from "react";


// Import React Table
import ReactTable from "react-table";

import * as firebase from 'firebase';
class DomicilioEstudiante extends React.Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            address:'',
            phone:'',
            zipcode:'',
            city:'',
            estado:'',
            conty:'',
        };
    }
    SaveData() {
        var newPostKey = firebase.database().ref().child('escuelas/Escuela/estudiantes/').push().key;
        const miRegistro = {
            address: this.state.address,
            phone: this.state.phone,
            zipcode: this.state.zipcode,
            city: this.state.city,
            estado: this.state.estado,
            conty: this.state.county,

        }

        var updates = {};

        updates['escuelas/Escuela/estudiantes/' + newPostKey] = miRegistro;
        console.log(miRegistro);

        return firebase.database().ref().update(updates)
            .then(() => {
                console.log('Grabado')
            });

        var updates = {};

        updates['escuelas/Escuela/estudiantes/' + newPostKey] = miRegistro;
        console.log(miRegistro);

        return firebase.database().ref().update(updates)
            .then(() => {
                console.log('Grabado')
                this.setState({
                    adres:'',
                    phone:'',
                    zipcode:'',
                    city:'',
                    estado:'',
                    conty:'',
                })
            });

    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }


    render() {
        const { data } = this.state;
        return (
            <div>
                <table >
                    <tbody className="text">
                        <tr>
                            <td className="textTD">
                                Direccion
                            </td>
                            <td >
                                <input className="text-input"
                                    name="address"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.address}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="textTD">
                                Telefono
                            </td>
                            <td >
                                <input className="text-input"
                                    name="phone"
                                    type="number"
                                    onChange={this.handleInputChange}
                                    value={this.state.phone}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="textTD">
                                Codigo Postal
                            </td>
                            <td >
                                <input className="text-input"
                                    name="zipcode"
                                    type="number"
                                    onChange={this.handleInputChange}
                                    value={this.state.zipcode}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="textTD">
                                Ciudad
                            </td>
                            <td >
                                <input className="text-input"
                                    name="city"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.city}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="textTD">
                                Estado
                            </td>
                            <td >
                                <input className="text-input"
                                    name="estado"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.estado}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="textTD">
                                Colonia
                            </td>
                            <td >
                                <input className="text-input"
                                    name="conty"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.conty}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DomicilioEstudiante;
