import React from "react";
import MyInput from './../Utils/MyInput';
import MyFrame from './../Utils/MyFrame';





const AddStudent = (props) => {
    return (
        <div>
            <MyFrame title="Generales">
                <MyInput label="Apellidos"
                    name="LastName"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.LastName}
                />
                <MyInput label="Nombre(s)"
                    name="FirstName"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.FirstName}
                />

                <MyInput label="Fecha de Nacimiento"
                    name="Birthday"
                    type="date"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.Birthday}
                />
                <MyInput label="Actividad Principal"
                    name="Ocupation"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.Ocupation}
                />
                <MyInput label="Cinta"
                    name="Belt"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.Belt}
                />
            </MyFrame>
        </div >

    );

};

export default AddStudent;
