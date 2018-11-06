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
                                name="nameFather"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.nameFather}
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
                                                name="addressFam"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.addressFam}
                                                //size="30"
                                            />
                                        </td>
                                        <td>
                                            Num.Ext
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="numExtFam"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.numExtFam}
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
                                                name="numIntFam"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.numIntFam}
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
                                                name="countyFam"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.countyFam}
                                                //size="30"
                                                placeholder="jalisco"
                                            />
                                        </td>
                                        <td className="textTD">
                                            Ciudad
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="cityFam"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.cityFam}
                                                //size="30"
                                                placeholder="jalisco"
                                            />
                                        </td>
                                        <td className="textTD">
                                            Estado
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="estadoFam"
                                                type="text"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.estadoFam}
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
                                            name="telJob"
                                            type="number"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.telJob}
                                            />
                                        </td>
                                        <td className="textTD">
                                            Tel.Casa
                                        </td>
                                        <td >
                                            <input className="text-input"
                                                name="phoneHouseFam"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.phoneHouseFam}
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
                                                name="phoneFam"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.phoneFam}
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
                                                name="zipcodeFam"
                                                type="number"
                                                onChange={props.handleInputChange}
                                                value={props.RecordValue.zipcodeFam}
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
                                name="emailAdderess"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.emailAdderessFam}
                            />
                        </td>
                        <td className="textTD">
                            Ocupacion
                        </td>
                        <td >
                            <input className="text-input"
                                name="job"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.jobFam}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddFamily;