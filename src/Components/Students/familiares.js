import React from "react";

const AddFamily = (props) => {
    return (
        <div>    
            <table >
                <tbody className="text">
                    <tr>
                        <td className="textTD">
                            Nombre
                        </td>
                        <td >                            
                            <input className="text-input"
                                name="FamName"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.FamName}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="textTD">
                            Domicilio
                        </td>
                        <td >
                            <table >
                                <tbody className="text">
                                    <tr>
                                        <td className="textTD">
                                            Calle
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamAddress"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamAddress}
                                                //size="30"
                                            />
                                        </td>
                                        <td>
                                            Num.Ext
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamNumExt"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamNumExt}
                                                //size="6"
                                                placeholder=""
                                                max='99999'
                                            />
                                        </td>
                                        <td>
                                            Num.Int
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamNumInt"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamNumInt}
                                                //size="5"
                                                placeholder="jalisco"
                                            />
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                    </tr>
                                    <tr>
                                    <td className="textTD">
                                            Colonia
                                    </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamCounty"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamCounty}
                                                //size="30"
                                                placeholder="jalisco"
                                            />
                                        </td>
                                        <td className="textTD">
                                            Ciudad
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamCity"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamCity}
                                                //size="30"
                                                placeholder="jalisco"
                                            />
                                        </td>
                                        <td className="textTD">
                                            Estado
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamState"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamState}
                                                placeholder="jalisco"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="textTD">
                                            Tel.Trabajo
                                        </td>
                                        <td >
                                            <input className="text-input"
                                            name="FamWorkPhone"
                                            type="number"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.FamWorkPhone}
                                            />
                                        </td>
                                        <td className="textTD">
                                            Tel.Casa
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamHomePhone"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamHomePhone}
                                                size="9"
                                                maxlength="9"
                                                placeholder="jalisco"
                                            />
                                        </td>
                                        <td className="textTD">
                                            Tel.Cel
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamCellPhone"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamCellPhone}
                                                size="13"
                                                placeholder="jalisco"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="textTD">
                                            Codigo Postal
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="FamZipCode"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.FamZipCode}
                                                size='30'
                                                />
                                        </td>

                                    </tr>

                                </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        
            <table>
                <tbody className="text">
                    <tr>
                        <td className="textTD">
                            Correo Electronico
                        </td>
                        <td >
                            <input className="text-input"
                                name="FamEmailAddress"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.FamEmailAddress}
                            />
                        </td>
                        <td className="textTD">
                            Ocupacion
                        </td>
                        <td >
                            <input className="text-input"
                                name="FamJob"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.FamJob}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddFamily;