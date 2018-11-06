import React from "react";

const Quiz = (props) => {
    return (
        <div>
            <table >
                <tbody className="text">
                    <tr>
                        <td className="textTD">
                            Razon de la Inscripcion
                    </td>
                        <td >
                            <input className="text-input"
                                name="inscripcion"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.inscrepcion}
                            />
                        </td>
                        <td className="textTD">
                            Objetivos a Realizar
                        </td>
                        <td >
                            <input className="text-input"
                                name="objetivos"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.objetivos}
                            />
                        </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td className="textTD">
                            Como se Entero
                        </td>
                        <td >
                            <input className="text-input"
                                name="fuente"
                                type="text"
                                onChange={props.handleInputChange}
                                value={props.RecordValue.fuente}
                            />
                        </td>

                    </tr>

                </tbody>
            </table>
            <table>
                <tr>
                        <td className="textTD">
                            Opiniones
                        </td>
                        
                </tr> 
                <tr>           
                    <table>
                        <tr>
                            <td className="textTD">
                                Maestro
                            </td>
                            <td >
                                <input className="text-input"
                                    name="master"
                                    type="text"
                                    onChange={props.handleInputChange}
                                    value={props.RecordValue.master}
                                />
                            </td>
                            <td className="textTD">
                                Instalaciones
                            </td>
                            <td >
                                <input className="text-input"
                                    name="instalaciones"
                                    type="text"
                                    onChange={props.handleInputChange}
                                    value={props.RecordValue.instalaciones}
                                />
                            </td>
                            <td className="textTD">
                                Ubicacion
                            </td>
                            <td >
                                <input className="text-input"
                                    name="ubicacion"
                                    type="text"
                                    onChange={props.handleInputChange}
                                    value={props.RecordValue.ubicacion}
                                />
                            </td>
                            <td className="textTD">
                                Precio
                            </td>
                            <td >
                                <input className="text-input"
                                    name="precio"
                                    type="text"
                                    onChange={props.handleInputChange}
                                    value={props.RecordValue.precio}
                                />
                            </td>
                        </tr>
                        <tr>


                        </tr>
                    </table>

                </tr>    

            </table>
        </div>
    );

};

export default Quiz;