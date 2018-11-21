import React from "react";


// Import React Table
import "react-table/react-table.css";
import 'react-tabs/style/react-tabs.css'

import * as firebase from 'firebase';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddAddress from './DomicilioEstudiante';
import AddStudent from './FormaEstudiante';
import StudentsTable from "./StudentsTable";
import AddMedicalData from "./DatosMedicosEstudiante";
import Quiz from "./encuesta";
import AddFamily from "./familiares";
import "./Catalogo.css";

import { CSSTransitionGroup } from 'react-transition-group';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class StudentsCatalog extends React.Component {

  constructor(props) {

    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      RecordValue: null,
      studentID: null,
      refreshTable: true,
      formVisible: false,


      address: '',
      numExt: '',
      numInt: '',
      phone: '',
      zipcode: '',
      city: '',
      estado: '',
      county: '',

      lastNames: '',
      names: '',
      birthday: '',
      belt: '',
      school: '',
      ocupation: '',

      weigth: '',
      heigth: '',
      size: '',
      blood: '',
      sufferings: '',
      part: '',
      gestation: '',
      gateo: '',
      steps: '',

      FamAddress: '',
      FamNumExt: '',
      FamNumInt: '',
      FamPhone: '',
      FamZipCode: '',
      FamCity: '',
      FamState: '',
      FamCounty: '',
      FamWorkPhone: '',
      FamEmailAddress: '',
      FamJob: '',

      inscripcion: '',
      objetivos: '',
      fuente: '',
      master: '',
      instalaciones: '',
      ubicacion: '',
      precio: '',

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.SaveData = this.SaveData.bind(this);
    this.loadRecord = this.loadRecord.bind(this);
    this.refreshComplete = this.refreshComplete.bind(this);
    this.CleanStudentRecord = this.CleanStudentRecord.bind(this);
    this.NewStudent = this.NewStudent.bind(this);

  }


  SaveData() {
    let newPostKey;
    if (this.state.studentID)
      newPostKey = this.state.studentID
    else
      newPostKey = firebase.database().ref().child('escuelas/Escuela/estudiantes/').push().key;
    const miRegistro = {
      address: this.state.address,
      numExt: this.state.numExt,
      numInt: this.state.numInt,
      phone: this.state.phone,
      zipcode: this.state.zipcode,
      city: this.state.city,
      estado: this.state.estado,
      county: this.state.county,

      lastNames: this.state.lastNames,
      names: this.state.names,
      birthday: this.state.birthday,
      belt: this.state.belt,
      school: this.state.school,
      ocupation: this.state.ocupation,

      weigth: this.state.weigth,
      heigth: this.state.heigth,
      size: this.state.size,
      blood: this.state.blood,
      sufferings: this.state.sufferings,
      part: this.state.part,
      gestation: this.state.gestation,
      gateo: this.state.gateo,
      steps: this.state.steps,

      FamAddress: this.state.FamAddress,
      FamNumExt: this.state.FamNumExt,
      FamNumInt: this.state.FamNumInt,
      FamPhone: this.state.FamPhone,
      FamZipCode: this.state.FamZipCode,
      FamCity: this.state.FamCity,
      FamState: this.state.FamState,
      FamCounty: this.state.FamCounty,
      FamWorkPhone: this.state.FamWorkPhone,
      FamEmailAddress: this.state.FamEmailAddress,
      FamJob: this.state.FamJob,

      inscripcion: this.state.inscripcion,
      objetivos: this.state.objetivos,
      fuente: this.state.fuente,
      master: this.state.master,
      instalaciones: this.state.instalaciones,
      ubicacion: this.state.ubicacion,
      precio: this.state.precio,

    }

    var updates = {};

    updates['escuelas/Escuela/estudiantes/' + newPostKey] = miRegistro;
    console.log(miRegistro);

    return firebase.database().ref().update(updates)
      .then(() => {
        console.log('Grabado', miRegistro)
        this.setState({
          refreshTable: true,
          formVisible: false,
    

          address: '',
          numExt: '',
          numInt: '',
          phone: '',
          zipcode: '',
          city: '',
          estado: '',
          county: '',

          lastNames: '',
          names: '',
          birthday: '',
          belt: '',
          school: '',
          ocupation: '',

          weigth: '',
          heigth: '',
          size: '',
          blood: '',
          sufferings: '',
          part: '',
          gestation: '',
          gateo: '',
          steps: '',

          FamAddress: '',
          FamNumExt: '',
          FamNumInt: '',
          FamPhone: '',
          FamZipCode: '',
          FamCity: '',
          FamState: '',
          FamCounty: '',
          FamWorkPhone: '',
          FamEmailAddress: '',
          FamJob: '',

          inscripcion: '',
          objetivos: '',
          fuente: '',
          master: '',
          instalaciones: '',
          ubicacion: '',
          precio: '',

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
        console.log(Student);
        this.setState({
          studentID: id,

          address: Student.address,
          numExt: Student.numExt,
          numInt: Student.numInt,
          phone: Student.phone,
          zipcode: Student.zipcode,
          city: Student.city,
          estado: Student.estado,
          county: Student.county,

          lastNames: Student.lastNames,
          names: Student.names,
          birthday: Student.birthday,
          belt: Student.belt,
          school: Student.school,
          ocupation: Student.ocupation,

          weigth: Student.weigth,
          heigth: Student.heigth,
          size: Student.size,
          blood: Student.blood,
          sufferings: Student.sufferings,
          part: Student.part,
          gestation: Student.gestation,
          gateo: Student.gateo,
          steps: Student.steps,

          FamAddress: Student.FamAddress,
          FamNumExt: Student.FamNumExt,
          FamNumInt: Student.FamNumInt,
          FamPhone: Student.FamPhone,
          FamZipCode: Student.FamZipCode,
          FamCity: Student.FamCity,
          FamState: Student.FamState,
          FamCounty: Student.FamCounty,
          FamWorkPhone: Student.FamWorkPhone,
          FamEmailAddress: Student.FamEmailAddress,
          FamJob: Student.FamJob,

          inscripcion: Student.inscripcion,
          objetivos: Student.objetivos,
          fuente: Student.fuente,
          master: Student.master,
          instalaciones: Student.instalaciones,
          ubicacion: Student.ubicacion,
          precio: Student.precio,
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

  CleanStudentRecord() {
    this.setState({
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
      heigth: '',
      size: '',
      blood: '',
      sufferings: '',
      part: '',
      gestation: '',
      gateo: '',
      steps: '',

      addressFam: '',
      nameFather: '',
      numExtFam: '',
      numIntFam: '',
      countyFam: '',
      cityFam: '',
      estadoFam: '',
      zipcodeFam: '',
      phoneHouseFam: '',
      phoneFam: '',
      teljob: '',
      emailAddress: '',
      job: '',

      inscripcion: '',
      objetivos: '',
      fuente: '',
      master: '',
      instalaciones: '',
      ubicacion: '',
      precio: '',

    });
  }

  NewStudent() {
    this.CleanStudentRecord();
    this.setState({
      formVisible: true,
    })
  }

  render() {
    return (
      <div >
        <Modal
          style={{ content: { top: 50, left: 50, right: 'auto', bottom: 'auto' } }}
          isOpen={this.state.formVisible}
          onRequestClose={() => this.setState({ formVisible: false })}
          shouldCloseOnOverlayClick={true}
          overflowY='auto'
          maxHeight='100vh'
          overlfow='scroll'
          animationType={'slide'}>
          <CSSTransitionGroup
            transitionName="alta"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div id="alta">
              <Tabs >
                <TabList>
                  <Tab style={{ backgroundColor: 'rgba(226,222,222)' }}>Datos del Alumno</Tab>
                  <Tab style={{ backgroundColor: 'rgba(211, 207, 148)' }}>Domicilio</Tab>
                  <Tab style={{ backgroundColor: 'rgba(193,255,191)' }}>Datos Medicos</Tab>
                  <Tab style={{ backgroundColor: 'rgba(255,197,191)' }}>Familiares</Tab>
                  <Tab style={{ backgroundColor: 'rgba(188,192,244)' }}>Encuesta</Tab>
                </TabList>

                <TabPanel style={{ backgroundColor: 'rgba(226,222,222)' }}>
                  <div key="myDiv">
                    <b>Datos del Alumno</b>
                    <AddStudent handleInputChange={this.handleInputChange} RecordValue={this.state} />
                    <br />
                  </div>
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(211, 207, 148)' }}>
                  <div>
                    <b>Domicilio</b>
                    <AddAddress handleInputChange={this.handleInputChange} RecordValue={this.state} />
                  </div>
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(193,255,191)' }}>
                  <p>
                    <b>Datos Medicos</b>
                    <AddMedicalData handleInputChange={this.handleInputChange} RecordValue={this.state} />
                  </p>
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(255,197,191)' }}>
                  <p>
                    <b>Familiare</b>
                    <AddFamily handleInputChange={this.handleInputChange} RecordValue={this.state} />
                  </p>
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(188,192,244)' }}>
                  <p>
                    <b>Encuesta</b>
                    <Quiz handleInputChange={this.handleInputChange} RecordValue={this.state} />
                  </p>
                </TabPanel>
              </Tabs>
              <div style={{ height: '5px' }}></div>

              <button onClick={() => this.setState({ formVisible: false })}>[X] Cancelar</button>
              <button onClick={() => this.SaveData()}>Guardar</button>

            </div>
          </CSSTransitionGroup>
        </Modal>

        <button onClick={this.NewStudent}> + Nuevo estudiante</button>

        <StudentsTable refreshNow={this.state.refreshTable} refreshComplete={this.refreshComplete} loadStudent={this.loadRecord} deleteStudent={this.removeRecord} />
        <button onClick={() => this.setState({ formVisible: true })}>Ver </button>
        <button onClick={() => this.setState({ formVisible: false })}>Ocultar </button>
      </div>

    );
  }
}

export default StudentsCatalog;
