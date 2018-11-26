import React from "react";
import MyInput from './../Utils/MyInput';
import MyFrame from './../Utils/MyFrame';

const AddAddress = (props) => {
    return (
        <div>
            <MyFrame title="Dirección" style={{
                display: 'flex',
                flexDirection: 'column',

            }} >
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Calle"
                        name="Street"
                        type="text"
                        style={{ width: '200px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.Street}
                    />
                    <MyInput label="#Exterior"
                        name="NumExt"
                        type="text"
                        style={{ width: '50px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.NumExt}
                    />
                    <MyInput label="#Interior"
                        name="NumInt"
                        type="text"
                        style={{ width: '50px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.NumInt}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Colonia"
                        name="County"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.County}
                    />
                    <MyInput label="Ciudad"
                        name="City"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.City}
                    />
                    <MyInput label="Estado"
                        name="State"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.State}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="C.P."
                        name="ZipCode"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.ZipCode}
                    />
                </div>
            </MyFrame>
            <MyFrame title="Telefonos">
                <div style={{ display: 'flex', flexDirection: 'row' }} >

                    <MyInput label="Casa"
                        name="HomePhone"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.HomePhone}
                    />
                    <MyInput label="Trabajo"
                        name="WorkPhone"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.WorkPhone}
                    />
                    <MyInput label="Celular"
                        name="CellPhone"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.CellPhone}
                    />
                    <br />
                </div>
            </MyFrame>

        </div>
    )
}

export default AddAddress;