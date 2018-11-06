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
import Quiz from "./emcuesta";
import AddFamily from "./familiares";
import  "./Catalogo.css";



class StudentsCatalog extends React.Component {

  constructor(props) {

    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      RecordValue: null,
      studentID: null,

      address: '',
      numExt: '',
      numInt: '',
      phoneHouse: '',
      phone: '',
      zipcode: '',
      city: '',
      estado: '',
      county: '',

      lastNames: '',
      names: '',
      birthday: '',
      ocupation: '',
      belt: '1',
      school: '1',

      refreshTable: true,
      formVisible:false,

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

      addressFam: this.state.addressFam,
      numExt: this.state.numExtFam,
      numInt: this.state.numIntFam,
      phone: this.state.phoneFam,
      zipcode: this.state.zipcodeFam,
      city: this.state.cityFam,
      estado: this.state.estadoFam,
      county: this.state.countyFam,
      teljob: this.state.teljob,
      emailAddress: this.state.emailAddress,
      job: this.state.job,

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
          ocupation: '',
          belt: '1',
          school: '1',

          studentID: null,
          refreshTable: true,
          formVisible: false,

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
          belt: Student.belt,
          school: Student.school,

          weigth: Student.weigth,
          heigth: Student.heigth,
          size: Student.size,
          blood: Student.blood,
          sufferings: Student.sufferings,
          part: Student.part,
          gestation: Student.gestation,
          gateo: Student.gateo,
          steps: Student.steps,

          addressFam:Student.addressFam,
          nameFather: Student.nameFather,
          numExtFam: Student.numExtFam,
          numIntFam: Student.numIntFam,
          countyFam: Student.countyFam,
          cityFam: Student.cityFam,
          estadoFam: Student.estadoFam,
          zipcodeFam: Student.zipcodeFam,
          phoneHouseFam: Student.phoneHouseFamFam,
          phoneFam: Student.phoneFam,
          teljob: Student.teljob,
          emailAddress: Student.emailAddress,
          job: Student.job,

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

  CleanStudentRecord(){
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
    });
  }

  NewStudent (){
    this.CleanStudentRecord();
    this.setState({
      formVisible: true,
    })
  }

  render() {
    { var formVisible = this.state.formVisible }
    return (
      <div >
        {formVisible && (
        <div>
          <Tabs >
            <TabList>
              <Tab style={{backgroundColor:'rgba(226,222,222)'}}>Datos del Alumno</Tab>
              <Tab style={{backgroundColor:'rgba(211, 207, 148)'}}>Domicilio</Tab>
              <Tab style={{backgroundColor:'rgba(193,255,191)'}}>Datos Medicos</Tab>
              <Tab style={{backgroundColor:'rgba(255,197,191)'}}>Familiares</Tab>
              <Tab style={{backgroundColor:'rgba(188,192,244)'}}>Encuesta</Tab>
            </TabList>

            <TabPanel style={{backgroundColor:'rgba(226,222,222)'}}>
              <div key="myDiv">
                <b>Datos del Alumno</b>
                <AddStudent handleInputChange={this.handleInputChange} RecordValue={this.state} />
              </div>
            </TabPanel>
            <TabPanel style={{backgroundColor:'rgba(211, 207, 148)'}}>
              <div>
                <b>Domicilio</b>
                <AddAddress handleInputChange={this.handleInputChange} RecordValue={this.state} />
              </div>
            </TabPanel>
            <TabPanel style={{backgroundColor:'rgba(193,255,191)'}}>
              <p>
                <b>Datos Medicos</b>
                <AddMedicalData handleInputChange={this.handleInputChange}RecordValue={this.state}/>
              </p>
            </TabPanel>
            <TabPanel style={{backgroundColor:'rgba(255,197,191)'}}>
              <p>
                <b>Familiare</b>
                <AddFamily handleInputChange={this.handleInputChange}RecordValue={this.state}/>
              </p>
            </TabPanel>
            <TabPanel style={{backgroundColor:'rgba(188,192,244)'}}>
              <p>
                <b>Emcuesta</b>
                <Quiz handleInputChange={this.handleInputChange}RecordValue={this.state}/>
              </p>
            </TabPanel>
          </Tabs>

          <button onClick={() => this.SaveData()}>
            Guardar
          </button>
          <hr />
        </div>
        )}
        <button onClick={this.NewStudent}> + Nuevo estudiante</button>
        <StudentsTable refreshNow={this.state.refreshTable} refreshComplete={this.refreshComplete} loadStudent={this.loadRecord} deleteStudent={this.removeRecord} />
        <button onClick={()=> this.setState({formVisible: true})}>Ver </button>
        <button onClick={()=> this.setState({formVisible: false})}>Ocultar </button>
        {formVisible}
      </div>
    );
  }
}

export default StudentsCatalog;
