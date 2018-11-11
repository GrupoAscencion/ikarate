import React from "react";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import * as firebase from 'firebase';
import { isNull } from "util";

class StudentsTable extends React.Component {



  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
    this.database = firebase.database().ref().child('/escuelas/Escuela/estudiantes');

    this.state = {
      data: [
        {
          firstName: "Caro",
          lastName: "De Navarro",
          age: Math.floor(Math.random() * 30),
          visits: Math.floor(Math.random() * 100),
          progress: Math.floor(Math.random() * 100),
          status: "Complicado"
        }
      ]
    };
    this.loadData = this.loadData.bind(this);
    this.gotData = this.gotData.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
  }


  loadData() {
    console.log('Entre a load Data');
    this.database.once('value', this.gotData, this.errData)

  }



  gotData(data) {
    var myStudents = data.val();
    if (!isNull(myStudents)){
    var keys = Object.keys(myStudents)
    let fullName = "";
    let estudiantes;

    this.Students = [];
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      estudiantes = myStudents[k];
      fullName = estudiantes.lastNames + ", " + estudiantes.names;
      estudiantes.fullName = fullName;
      this.Students.push({ id: k, Student: estudiantes })
    }
    console.log(this.Students);
    this.setState({
      data: this.Students,

    });
    }
    this.props.refreshComplete();

  }

  errData(err) {
    console.log('Error leyendo datos!');
    console.log(err);

  }

  

  removeRecord(id) {

 console.log(id);
    if (window.confirm('Eliminar al Estudiante, '+ id.original.Student.fullName +' ?')) {
      firebase.database().ref('escuelas/Escuela/estudiantes/' + id.value).remove()
        .then(() => {
          console.log("Elimiado !");
          this.loadData();

        }).catch((error) => {
          console.log('Error while removing : ', error);
        });
           }


  }

  render() {
    const { data } = this.state;
    if (this.props.refreshNow) {
      this.loadData();
    }
    return (
      <div>
        <ReactTable
          data={data}
          previousText='Anterior'
          nextText='Siguiente'
          pageText='Pagina'
          ofText='de'
          rowsText='Registros'
          columns={[
            {
              Header: "Datos Personales",

              columns: [
                {
                  Header: "Nombre",
                  accessor: "Student.fullName"
                },
                {
                  Header: "Escuela",
                  accessor: "Student.school"
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Edad",
                  accessor: "Student.age"
                },
                {
                  Header: "Cinta",
                  accessor: "Student.belt"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            },
            {
              Header: 'Acciones',
              columns: [
                {
                  Header: "Acciones",
                  accessor: "id",
                  Cell: row => (
                    <div
                      style={{
                        display:'flex',
                        alignContent:'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#dadada',
                        borderRadius: '2px'

                      }}>
                      <button onClick={() => this.props.loadStudent(row.value)}>
                        Editar
                      </button>

                      <button onClick={() => this.removeRecord(row)}>
                        Eliminar
                      </button>
                    </div>
                  )
                },

              ]
            }

          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default StudentsTable;
