import React from "react";


// Import React Table
import "react-table/react-table.css";
import 'react-tabs/style/react-tabs.css'

import * as firebase from 'firebase';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddAddress from './DomicilioEstudiante';
import AddStudent from './FormaEstudiante';
import StudedentsTable from './StudentsTable';
import StudentsTable from "./StudentsTable";



class StudentsCatalog extends React.Component {

  constructor(props) {

    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      studentID: null,
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
      refreshTable: true,
      formVisible:false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.SaveData = this.SaveData.bind(this);
    this.loadRecord = this.loadRecord.bind(this);
    this.refreshComplete = this.refreshComplete.bind(this);


  }

  SaveData() {
    let newPostKey;
    if (this.state.studentID)
      newPostKey = this.state.studentID
    else
      newPostKey = firebase.database().ref().child('escuelas/Escuela/estudiantes/').push().key;
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
          studentID: null,
          refreshTable: true,
          formVisible: false,
        })
      });

  }

  loadRecord(id) {
    this.setState({
      formVisible: true
    });
    let Student;
    return firebase.database().ref('escuelas/Escuela/estudiantes/' + id).once('value')
      .then((snapshot) => {
        Student = snapshot.val();
        this.setState({
          studentID: id,
          address: Student.address,
          phone: Student.phone,
          zipcode: Student.zipcode,
          city: Student.city,
          estado: Student.estado,
          county: Student.county,
          lastNames: Student.lastNames,
          names: Student.names,
          birthday: Student.birthday,
          ocupation: Student.ocupation,
          weigth: Student.weigth,
          belt: Student.belt,
          school: Student.school,
        });

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




  refreshComplete() {
    this.setState({ refreshTable: false });
  }

  

  render() {
    { var formVisible = this.state.formVisible }
    return (
      <div >
        {formVisible && (
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
          <hr />
        </div>
        )}
        <StudentsTable refreshNow={this.state.refreshTable} refreshComplete={this.refreshComplete} loadStudent={this.loadRecord} deleteStudent={this.removeRecord} />
        <button onClick={()=> this.setState({formVisible: true})}>Ver </button>
        <button onClick={()=> this.setState({formVisible: false})}>Ocultar </button>
        {formVisible}
      </div>
    );
  }
}

export default StudentsCatalog;
