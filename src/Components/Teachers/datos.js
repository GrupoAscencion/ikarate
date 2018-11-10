import React from "react";

const DatosTeachers = (props) => {
    return (
        <table >
            <tbody className="text">
                <tr>
                    <td className="textTD">
                        Apellidos
                  </td>
                    <td >
                        <input className="text-input"
                            name="lastNamesTeach"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.lastNamesTeach}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Nombre
                  </td>
                    <td >
                        <input className="text-input"
                            name="namesTeach"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.namesTeach}
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
                                            name="addressTeach"
                                            type="text"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.addressTeac}
                                            //size="30"
                                        />
                                    </td>
                                    <td>
                                        Num.Ext
                                    </td>
                                    <td >
                                        <input className="text-input"
                                            name="numExtTeach"
                                            type="number"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.numExtTeach}
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
                                            name="numIntTeach"
                                            type="text"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.numIntTeach}
                                            //size="5"
                                            placeholder="jalisco"
                                        />
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td className="textTD">
                                        Colonia
                                </td>
                                    <td >
                                        <input className="text-input"
                                            name="countyTeach"
                                            type="text"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.countyTeach}
                                            size="30"
                                            placeholder="jalisco"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="textTD">
                                        Ciudad
                                    </td>
                                    <td >
                                        <input className="text-input"
                                            name="cityTeach"
                                            type="text"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.cityTeach}
                                            size="30"
                                            placeholder="jalisco"
                                        />
                                    </td>
                                    <td className="textTD">
                                        Estado
                                    </td>
                                    <td >
                                        <input className="text-input"
                                            name="estadoTeach"
                                            type="text"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.estadoTeach}
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
                                            name="zipcodeTeach"
                                            type="number"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.zipcodeTeach}
                                            size='30'
                                            />
                                    </td>
                                    <td className="textTD">
                                        Tel.Casa
                                    </td>
                                    <td >
                                        <input className="text-input"
                                            name="phoneHouseTeach"
                                            type="number"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.phoneHouseTeach}
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
                                            name="phoneTeach"
                                            type="number"
                                            onChange={props.handleInputChange}
                                            value={props.RecordValue.phoneTeach}
                                            size="13"
                                            placeholder="jalisco"
                                        />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </td>

                </tr>
                <tr>
                    <td className="textTD">
                        grado
                  </td>
                    <td >
                        <input className="text-input"
                            name="grado"
                            type="select"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.grado}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        disponibilidad
                  </td>
                    <td >
                        <input className="text-input"
                            name="availabilitiy"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.availabilitiy}
                        />
                    </td>
                </tr>

            </tbody>
        </table>

    );

};

export default DatosTeachers;
