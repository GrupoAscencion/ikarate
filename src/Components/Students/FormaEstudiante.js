import React from "react";

const AddStudent = (props) => {
    return (
        <table >
            <tbody className="text">
                <tr>
                    <td className="textTD">
                        Apellidos
                  </td>
                    <td >
                        <input className="text-input"
                            name="lastNames"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.lastNames}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Nombre
                  </td>
                    <td >
                        <input className="text-input"
                            name="names"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.names}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Cumpleaños
                  </td>
                    <td >
                        <input className="text-input"
                            name="birthday"
                            type="date"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.birthday}
                        />
                    </td>

                </tr>
                <tr>
                    <td className="textTD">
                        Ocupacion
                  </td>
                    <td >
                        <input className="text-input"
                            name="ocupation"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.ocupation}
                        />
                    </td>
                </tr>

            </tbody>
        </table>

    );

};

export default AddStudent;
