import React from "react";


// Import React Table
import "react-table/react-table.css";
import 'react-tabs/style/react-tabs.css'

import * as firebase from 'firebase';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DatosTeachers from './datos';



class teachersCatalog extends React.Component {

  constructor(props) {

    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      RecordValue: null,
      studentID: null,

      refreshTable: true,
      formVisible:false,

      lastNamesTeach: '',
      namesTeach: '',
      addressTeach: '',
      numExtTeach: '',
      numIntTeach: '',
      countyTeach: '',
      cityTeach: '',
      estadoTeach: '',
      zipcodeTeach: '',
      phoneHouseTeach: '',
      phoneTeach: '',
      grado: '',
      aviailabilitiy: '',  
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
        lastNamesTeach: this.state.precio,
        namesTeach: this.state.precio,
        addressTeach: this.state.precio,
        numExtTeach: this.state.precio,
        numIntTeach: this.state.precio,
        countyTeach: this.state.precio,
        cityTeach: this.state.precio,
        estadoTeach: this.state.precio,
        zipcodeTeach: this.state.precio,
        phoneHouseTeach: this.state.precio,
        phoneTeach: this.state.precio,
        grado: this.state.precio,
        aviailabilitiy:this.state.precio,  
        precio: this.state.precio,

    }

    var updates = {};

    updates['escuelas/Escuela/estudiantes/' + newPostKey] = miRegistro;
    console.log(miRegistro);

    return firebase.database().ref().update(updates)
      .then(() => {
        console.log('Grabado', miRegistro)
        this.setState({

          studentID: null,
          refreshTable: true,
          formVisible: false,

          lastNamesTeach: '',
          namesTeach: '',
          addressTeach: '',
          numExtTeach: '',
          numIntTeach: '',
          countyTeach: '',
          cityTeach: '',
          estadoTeach: '',
          zipcodeTeach: '',
          phoneHouseTeach: '',
          phoneTeach: '',
          grado: '',
          aviailabilitiy: '',  
        
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
            lastNamesTeach: Student.lastNamesTeach,
            namesTeach: Student.namesTeach,
            addressTeach: Student.addressTeach,
            numExtTeach: Student.numExtTeach,
            numIntTeach: Student.numIntTeach,
            countyTeach: Student.countyTeach,
            cityTeach: Student.cityTeach,
            estadoTeach: Student.estadoTeach,
            zipcodeTeach: Student.zipcodeTeach,
            phoneHouseTeach: Student.phoneHouseTeach,
            phoneTeach: Student.phoneHouseTeach,
            grado: Student.grado,
            aviailabilitiy: Student.aviailabilitiy,  

    
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
      studentID: null,

      lastNamesTeach: '',
      namesTeach: '',
      addressTeach: '',
      numExtTeach: '',
      numIntTeach: '',
      countyTeach: '',
      cityTeach: '',
      estadoTeach: '',
      zipcodeTeach: '',
      phoneHouseTeach: '',
      phoneTeach: '',
      grado: '',
      aviailabilitiy: '',  

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
              <Tab style={{backgroundColor:'rgba(226,222,222)'}}>Datos del Sensei</Tab>
            </TabList>

            <TabPanel style={{backgroundColor:'rgba(226,222,222)'}}>
              <div key="myDiv">
                <b>Datos del sensei</b>
                <DatosTeachers handleInputChange={this.handleInputChange} RecordValue={this.state} />
              </div>
            </TabPanel>
          </Tabs>

          <button onClick={() => this.SaveData()}>
            Guardar
          </button>
          <hr />
        </div>
        )}
        <button onClick={this.NewStudent}> + Nuevo sensei</button>
        <StudentsTable refreshNow={this.state.refreshTable} refreshComplete={this.refreshComplete} loadStudent={this.loadRecord} deleteStudent={this.removeRecord} />
        <button onClick={()=> this.setState({formVisible: true})}>Ver </button>
        <button onClick={()=> this.setState({formVisible: false})}>Ocultar </button>
        {formVisible}
      </div>
    );
  }
}

export default teachersCatalog;
