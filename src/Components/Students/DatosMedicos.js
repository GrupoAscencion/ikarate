import React from "react";
import MyInput from './../Utils/MyInput';
import MyFrame from './../Utils/MyFrame';


const AddMedicalData = (props) => {
    return (

        <div>
            <MyFrame title="Ficha Medica" style={{
                display: 'flex',
                flexDirection: 'column',

            }} >
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Peso"
                        name="Weigth"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.Weigth}
                    />
                    <MyInput label="Estatura"
                        name="Heigth"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.Heigth}
                    />
                    <MyInput label="Talla"
                        name="Size"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.Size}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Tipo de Sangre"
                        name="BloodType"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.BloodType}
                    />
                    <MyInput label="Padecimientos"
                        name="MedicalHistory"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.MedicalHistory}
                    />
                    <MyInput label="Tipo de Parto"
                        name="BirthType"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.BirthType}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <MyInput label="Meses de Gestación"
                        name="PregnancyDuration"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.PregnancyDuration}
                    />
                    <MyInput label="Primeros Pasos"
                        name="FirstTimeWalked"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.FirstTimeWalked}
                    />
                    <MyInput label="Gateo"
                        name="Crawl"
                        type="text"
                        style={{ width: '100px' }}
                        onChange={props.handleInputChange}
                        value={props.RecordValue.Crawl}
                    />
                </div>
            </MyFrame>
        </div>
    )
}

export default AddMedicalData;