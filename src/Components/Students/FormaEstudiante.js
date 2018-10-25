import React from "react";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import * as firebase from 'firebase';
class FormaEstudiante extends React.Component {

    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            lastNames: '',
            names: '',
            birthday: '',
            ocupation:'',
            weigth: '',
            belt: '1',
            school: '1',

        };
    }
    SaveData() {
        var newPostKey = firebase.database().ref().child('escuelas/Escuela/estudiantes/').push().key;
        const miRegistro = {
            names: this.state.names,
            birthday: this.state.birthday,
            weigth: this.state.weigth,
            belt: this.state.belt,
            school: this.state.school,
            ocupation: this.state.ocupation,
            lastNames: this.state.lastNames,

            
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
                    lastNames: '',
                    names: '',
                    birthday: '',
                    ocupation:'',
                    weigth: '',
                    belt: '1',
                    school: '1',
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

        const AddAddress = () =>{
            return (
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
            )
        }
        const AddStudent = () => {
            return (
                <table >
                    <tbody className="text">
                        <tr>
                            <td className="textTD">
                                Apellidos
                            </td>
                            <td >
                                <input className="text-input"
                                    name="lastNames"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="textTD">
                                Nombre
                            </td>
                            <td >
                                <input className="text-input"
                                    name="names"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.names}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="textTD">
                                Cumpleaños
                            </td>
                            <td >
                                <input className="text-input"
                                    name="birthday"
                                    type="date"
                                    onChange={this.handleInputChange}
                                    value={this.state.birthday}
                                />
                            </td>

                        </tr>
                        <tr>
                            <td className="textTD">
                                Ocupacion
                            </td>
                            <td >
                                <input className="text-input"
                                    name="ocupation"
                                    type="text"
                                    onChange={this.handleInputChange}
                                    value={this.state.ocupation}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={() => this.SaveData()}>
                                    Guardar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        
            );
        
        };
        
        return (
            <div>
                <br />
                <AddStudent/>
                <AddAddress/>
            </div>
        );
    }
}

export default FormaEstudiante;
