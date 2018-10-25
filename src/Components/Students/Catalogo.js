import React from "react";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import StudentsTable from './StudentsTable';
import 'react-tabs/style/react-tabs.css'

import * as firebase from 'firebase';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class StudentsCatalog extends React.Component {
 
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
      address: this.state.address,
      phone: this.state.phone,
      zipcode: this.state.zipcode,
      city: this.state.city,
      estado: this.state.estado,
      conty: this.state.county,

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
          this.setState({
              adres:'',
              phone:'',
              zipcode:'',
              city:'',
              estado:'',
              conty:'',

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
        <Tabs>
          <TabList>
            <Tab>Datos del Alumno</Tab>
            <Tab>Domicilio</Tab>
            <Tab>Datos Medicos</Tab>
            <Tab>Familiares</Tab>
            <Tab>Referencias</Tab>
          </TabList>

          <TabPanel>
            <div>
              <b>Datos del Alumno</b>
              <AddStudent />
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <b>Domicilio</b>
              <AddAddress/>
            </div>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Datos Medicos</b>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Familiare</b>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Referencias</b>
            </p>
          </TabPanel>
        </Tabs>
        <StudentsTable></StudentsTable>
      </div>
    );
  }
}

export default StudentsCatalog;
