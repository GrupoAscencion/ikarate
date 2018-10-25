import React from "react";


// Import React Table
import "react-table/react-table.css";
import 'react-tabs/style/react-tabs.css'

import * as firebase from 'firebase';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import AddStudent from './Students/FormaEstudiante';
import AddAddress from './Students/DomicilioEstudiante';



class Test extends React.Component {

    constructor(props) {

        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            address: '',
            phone: '',
            zipcode: '',
            city: '',
            estado: '',
            county: '',
            lastNames: '',
            names: '',
            birthday: '',
            ocupation: '',
            weigth: '',
            belt: '1',
            school: '1',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.SaveData = this.SaveData.bind(this);
    }

    SaveData() {
        var newPostKey = firebase.database().ref().child('escuelas/Escuela/estudiantes/').push().key;
        const miRegistro = {
            address: this.state.address,
            phone: this.state.phone,
            zipcode: this.state.zipcode,
            city: this.state.city,
            estado: this.state.estado,
            county: this.state.county,
            lastNames: this.state.lastNames,
            names: this.state.names,
            birthday: this.state.birthday,
            weigth: this.state.weigth,
            belt: this.state.belt,
            school: this.state.school,
            ocupation: this.state.ocupation,
        }

        var updates = {};

        updates['escuelas/Escuela/estudiantes/' + newPostKey] = miRegistro;
        console.log(miRegistro);

        return firebase.database().ref().update(updates)
            .then(() => {
                console.log('Grabado', miRegistro)
                this.setState({
                    tabIndex: 0,
                    address: '',
                    phone: '',
                    zipcode: '',
                    city: '',
                    estado: '', 
                    county: '',
                    lastNames: '',
                    names: '',
                    birthday: '',
                    ocupation: '',
                    weigth: '',
                    belt: '1',
                    school: '1',
                })
            });

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
                <Tabs >
                    <TabList>
                        <Tab>Datos del Alumno</Tab>
                        <Tab>Domicilio</Tab>
                        <Tab>Datos Medicos</Tab>
                        <Tab>Familiares</Tab>
                        <Tab>Referencias</Tab>
                    </TabList>

                    <TabPanel>
                        <div key="myDiv">
                            <b>Datos del Alumno</b>
                            <AddStudent handleInputChange={this.handleInputChange} RecordValue={this.state} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <b>Domicilio</b>
                            <AddAddress handleInputChange={this.handleInputChange} RecordValue={this.state} />
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

                <button onClick={() => this.SaveData()}>
                    Guardar
                      </button>
            </div>
        );
    }
}

export default Test;
