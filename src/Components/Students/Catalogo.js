import React from "react";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import StudentsTable from './StudentsTable';
import FormaEstudiante from './FormaEstudiante';
import 'react-tabs/style/react-tabs.css'
import * as firebase from 'firebase';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class StudentsCatalog extends React.Component {



  constructor() {
    super();

  }
  render() {
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
            <p>
              <b>Datos del Alumno</b>
              <FormaEstudiante />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <b>Domicilio</b>
            </p>
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
