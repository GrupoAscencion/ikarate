import React from "react";
import MyInput from './../Utils/MyInput';
import MyFrame from './../Utils/MyFrame';

const AddFamily = (props) => {
    return (
        <div>
            <MyFrame title="Dirección" style={{
                display: 'flex',
                flexDirection: 'column',
            }} >
                <div style={{ display: 'flex', flexDirection: 'row' }} >

                    <MyInput label="Nombre"
                        name="FamName"
                        type="text"
                        style={{ width: '200px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamName}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Calle"
                        name="FamAddress"
                        type="text"
                        style={{ width: '200px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamAddress}
                    />
                    <MyInput label="#Exterior"
                        name="FamNumExt"
                        type="text"
                        style={{ width: '50px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamNumExt}
                    />
                    <MyInput label="#Interior"
                        name="FamNumInt"
                        type="text"
                        style={{ width: '50px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamNumInt}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Colonia"
                        name="FamCounty"
                        type="text"
                        style={{ width: '150px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamCounty}
                    />
                    <MyInput label="Ciudad"
                        name="FamCity"
                        type="text"
                        style={{ width: '150px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamCity}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Estado"
                        name="FamState"
                        type="text"
                        style={{ width: '150px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamState}
                    />

                    <MyInput label="C.P."
                        name="FamZipCode"
                        type="text"
                        style={{ width: '150px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamZipCode}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Casa"
                        name="FamHomePhone"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamHomePhone}
                    />
                    <MyInput label="Trabajo"
                        name="FamWorkPhone"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamWorkPhone}
                    />
                    <MyInput label="Celular"
                        name="FamCellPhone"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamCellPhone}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="eMail"
                        name="FamEmailAddress"
                        type="text"
                        style={{ width: '150px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamEmailAddress}
                    />
                    <MyInput label="Ocupación"
                        name="FamJob"
                        type="text"
                        style={{ width: '150px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FamJob}
                    />
                </div>
           </MyFrame>
        </div>
    )
}               

export default AddFamily;                