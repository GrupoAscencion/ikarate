import React from "react";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import * as firebase from 'firebase';

class StudentsTable extends React.Component {



  constructor() {
    super();
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
  }


  loadData() {
    console.log('Entre a load Data');
    this.Students = [];
    this.database.on('child_added', (dataSnapshot) => {
      this.Students.push({ id: dataSnapshot.key, Student: dataSnapshot.val() })
      this.setState({

        data: this.Students,
      });
      this.database.off();
    });

  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Datos Personales",   
              
              columns: [
                {
                  Header: "Nombre",
                  accessor: "Student.name"
                },
                {
                  Header: "Escuela",
                  accessor: "Student.school"                }
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
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />

        <button onClick={this.loadData}>Refresh</button>
      </div>
    );
  }
}

export default StudentsTable;
