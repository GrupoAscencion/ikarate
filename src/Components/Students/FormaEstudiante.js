import React from "react";
import MyInput from './../Utils/MyInput';






const AddStudent = (props) => {
    return (
        <div>
            <MyInput label="Apellidos"
                name="lastNames"
                type="text"
                style={{ width: '200px' }}
                onChange={props.handleInputChange}
                value={props.RecordValue.lastNames}
            />
            <MyInput label="Nombre(s)"
                name="names"
                type="text"
                style={{ width: '200px' }}
                onChange={props.handleInputChange}
                value={props.RecordValue.names}
            />

            <MyInput label="Fecha de Nacimiento"
                name="birthday"
                type="date"
                style={{ width: '200px' }}
                onChange={props.handleInputChange}
                value={props.RecordValue.birthday}
            />
            <MyInput label="Ocupación"
                name="ocupation"
                type="text"
                style={{ width: '200px' }}
                onChange={props.handleInputChange}
                value={props.RecordValue.ocupation}
            />
        </div >

    );

};

export default AddStudent;
