import React from "react";


// Import React Table
import "react-table/react-table.css";
import 'react-tabs/style/react-tabs.css'

import * as firebase from 'firebase';
import { CSSTransitionGroup } from 'react-transition-group';
import Modal from 'react-responsive-modal';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AddAddress from './Domicilio';
import AddStudent from './Generales';
import AddMedicalData from "./DatosMedicos";
import AddQuiz from "./Encuesta";
import AddFamily from "./Familiares";
import StudentsTable from "./StudentsTable";

import "./Catalogo.css";

class StudentsCatalog extends React.Component {

  constructor(props) {

    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      RecordValue: null,
      studentID: null,
      refreshTable: true,
      formVisible: false,
      /* Datos Alumnno */
      FirstName: '',
      LastName: '',
      Birthday: '',
      Ocupation: '',
      Belt: '',
      Age: '',
      /* Domicilio */
      Street: '',
      NumExt: '',
      NumInt: '',
      County: '',
      City: '',
      State: '',
      ZipCode: '',
      HomePhone: '',
      WorkPhone: '',
      CellPhone: '',
      /* Datos Medicos */
      Weigth: '',
      Heigth: '',
      Size: '',
      BloodType: '',
      MedicalHistory: '',
      BirthType: '',
      PregnancyDuration: '',
      Crawl: '',
      FirstTimeWalked: '',
      /* Familiares */
      FamName: '',
      FamAddress: '',
      FamNumExt: '',
      FamNumInt: '',
      FamZipCode: '',
      FamCity: '',
      FamState: '',
      FamCounty: '',
      FamWorkPhone: '',
      FamHomePhone: '',
      FamCellPhone: '',
      FamEmailAddress: '',
      FamJob: '',
      /* Encuesta */
      WhyThisSchool: '',
      Goals: '',
      Source: '',

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
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Birthday: this.state.Birthday,
      Ocupation: this.state.Ocupation,
      Belt: this.state.Belt,
      Age: this.state.Age,

      Street: this.state.Street,
      NumExt: this.state.NumExt,
      NumInt: this.state.NumInt,
      County: this.state.County,
      City: this.state.City,
      State: this.state.State,
      ZipCode: this.state.ZipCode,
      HomePhone: this.state.HomePhone,
      WorkPhone: this.state.WorkPhone,
      CellPhone: this.state.CellPhone,

      /* Datos Medicos */
      Weigth: this.state.Weigth,
      Heigth: this.state.Heigth,
      Size: this.state.Size,
      BloodType: this.state.BloodType,
      MedicalHistory: this.state.MedicalHistory,
      BirthType: this.state.BirthType,
      PregnancyDuration: this.state.PregnancyDuration,
      Crawl: this.state.Crawl,
      FirstTimeWalked: this.state.FirstTimeWalked,


      FamName: this.state.FamName,
      FamAddress: this.state.FamAddress,
      FamNumExt: this.state.FamNumExt,
      FamNumInt: this.state.FamNumInt,
      FamZipCode: this.state.FamZipCode,
      FamCity: this.state.FamCity,
      FamState: this.state.FamState,
      FamCounty: this.state.FamCounty,
      FamHomePhone: this.state.FamHomePhone,
      FamWorkPhone: this.state.FamWorkPhone,
      FamCellPhone: this.state.FamCellPhone,
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

          FirstName: '',
          LastName: '',
          Birthday: '',
          Ocupation: '',
          Belt: '',
          Age: '',

          Street: '',
          NumExt: '',
          NumInt: '',
          County: '',
          City: '',
          State: '',
          ZipCode: '',
          HomePhone: '',
          WorkPhone: '',
          CellPhone: '',

          /* Datos Medicos */
          Weigth: '',
          Heigth: '',
          Size: '',
          BloodType: '',
          MedicalHistory: '',
          BirthType: '',
          PregnancyDuration: '',
          Crawl: '',
          FirstTimeWalked: '',

          FamName: '',
          FamAddress: '',
          FamNumExt: '',
          FamNumInt: '',
          FamZipCode: '',
          FamCity: '',
          FamState: '',
          FamCounty: '',
          FamWorkPhone: '',
          FamHomePhone: '',
          FamCellPhone: '',
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

          Street: Student.Street,
          NumExt: Student.NumExt,
          NumInt: Student.NumInt,
          County: Student.County,
          City: Student.City,
          State: Student.State,
          ZipCode: Student.ZipCode,
          HomePhone: Student.HomePhone,
          WorkPhone: Student.WorkPhone,
          CellPhone: Student.CellPhone,

          FirstName: Student.FirstName,
          LastName: Student.LastName,
          Birthday: Student.Birthday,
          Ocupation: Student.Ocupation,
          Belt: Student.Belt,
          Age: Student.Age,

          /* Datos Medicos */
          Weigth: Student.Weigth,
          Heigth: Student.Heigth,
          Size: Student.Size,
          BloodType: Student.BloodType,
          MedicalHistory: Student.MedicalHistory,
          BirthType: Student.BirthType,
          PregnancyDuration: Student.PregnancyDuration,
          Crawl: Student.Crawl,
          FirstTimeWalked: Student.FirstTimeWalked,

          FamName: Student.FamName,
          FamAddress: Student.FamAddress,
          FamNumExt: Student.FamNumExt,
          FamNumInt: Student.FamNumInt,
          FamZipCode: Student.FamZipCode,
          FamCity: Student.FamCity,
          FamState: Student.FamState,
          FamCounty: Student.FamCounty,
          FamHomePhone: Student.FamHomePhone,
          FamCellPhone: Student.FamCellPhone,
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

      Street: '',
      NumExt: '',
      NumInt: '',
      County: '',
      City: '',
      State: '',
      ZipCode: '',
      HomePhone: '',
      WorkPhone: '',
      CellPhone: '',

      FirstName: '',
      LastName: '',
      Birthday: '',
      Ocupation: '',

      /* Datos Medicos */
      Weigth: '',
      Heigth: '',
      Size: '',
      BloodType: '',
      MedicalHistory: '',
      BirthType: '',
      PregnancyDuration: '',
      Crawl: '',
      FirstTimeWalked: '',


      FamName: '',
      FamAddress: '',
      FamNumExt: '',
      FamNumInt: '',
      FamZipCode: '',
      FamCity: '',
      FamState: '',
      FamCounty: '',
      FamWorkPhone: '',
      FamHomePhone: '',
      FamCellPhone: '',
      FamEmailAddress: '',
      FamJob: '',

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
        <br/>
        <Modal
          open={this.state.formVisible}
          onClose={() => this.setState({ formVisible: false })}
          showCloseIcon={false}
        >
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
                  <AddStudent handleInputChange={this.handleInputChange} RecordValue={this.state} />
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(211, 207, 148)' }}>
                  <AddAddress handleInputChange={this.handleInputChange} RecordValue={this.state} />
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(193,255,191)' }}>
                  <AddMedicalData handleInputChange={this.handleInputChange} RecordValue={this.state} />
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(255,197,191)' }}>
                  <AddFamily handleInputChange={this.handleInputChange} RecordValue={this.state} />
                </TabPanel>
                <TabPanel style={{ backgroundColor: 'rgba(188,192,244)' }}>
                  <AddQuiz handleInputChange={this.handleInputChange} RecordValue={this.state} />
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
