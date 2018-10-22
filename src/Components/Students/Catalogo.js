import React from "react";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import StudentsTable from './StudentsTable';
import FormaEstudiante from './FormaEstudiante';

import * as firebase from 'firebase';

class StudentsCatalog extends React.Component {



  constructor() {
    super();

}
  render() {
    return (
      <div>
        <FormaEstudiante/>
        <StudentsTable/>
      </div>
    );
  }
}

export default StudentsCatalog;
