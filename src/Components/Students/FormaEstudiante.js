import React from "react";


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import * as firebase from 'firebase';

class FormaEstudiante extends React.Component {



  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state ={
        name:'',
        age:'',
        weigth:'',
        belt:'1',
        school:'1',
    
    };
}
SaveData(){
    var newPostKey = firebase.database().ref().child('escuelas/Escuela/estudiantes/estudiante').push().key;
    const miRegistro ={
      name: this.state.name,
      age: this.state.age,
      weigth: this.state.weigth,
      belt: this.state.belt,
      school: this.state.school,
    }

    var updates = {};
    
    updates['escuelas/Escuela/estudiantes/estudiante' + newPostKey] = miRegistro;
    console.log(miRegistro);

    return firebase.database().ref().update(updates)
    .then(()=>{
      console.log('Grabado')
      this.setState({        
        name:'',
        age:'',
        weigth:'',
        belt:'1',
        school:'1',
      })
    });
      
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }



  render() {
    const { data } = this.state;
    return (
      <div>
        <br />
        <table > 
            <tbody className="text">
            <tr>
                <td className="textTD">
                    Nombre                    
                </td>
                <td >
                    <input className="text-input" 
                    name="name"
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                  />
                </td>
            </tr>
            <tr>
                <td className="textTD">
                    Edad
                </td>
                <td >
                <input className="text-input" 
                    name="age"
                    type="number"
                    onChange={this.handleInputChange}
                    value={this.state.age}
                  />
                </td>

            </tr>
            <tr>
                <td className="textTD">
                    Peso
                </td>
                <td >
                <input className="text-input" 
                    name="weigth"
                    type="number"
                    onChange={this.handleInputChange}
                    value={this.state.weigth}
                  />
                </td>
            </tr>
            <tr>
                <td className="textTD">
                    Cinta
                </td>
                <td >
                <select className="text-input" 
                    name="belt"
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.belt}>
                    <option value="1">Blanca</option>
                    <option value="2">Amarilla</option>
                    <option value="3">Naranja</option>
                    <option value="4">Azul</option>
                    <option value="5">Azul avanzada</option>
                    <option value="6">Verde</option>
                    <option value="7">Verde avanzada</option>
                    <option value="8">cafe</option>
                    <option value="9">Cafe avanzada</option>
                    <option value="10">Negra</option>
                </select>
                </td>
            </tr>
            <tr>
                <td className="textTD">
                    Dojo
                </td>
                <td >
                <select className="text-input" 
                    name="school"
                    type="select"
                    onChange={this.handleInputChange}
                    value={this.state.school}
                >
                  <option value="1">fortin</option>
                  <option value="2">Cruz de el sur</option>
                  <option value="3">Plan de sanluis</option>
                </select>
                </td>
            </tr>
            <tr>
              <td>
                <button onClick={()=> this.SaveData()}>                  
                  guardar
                </button>
              </td>
            </tr>
            </tbody>
        </table>

      </div>
    );
  }
}

export default FormaEstudiante;
