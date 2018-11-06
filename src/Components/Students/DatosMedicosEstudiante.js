import React from "react";

const AddMedicalData = (props) => {
    return (
        <table >
            <tbody className="text">
                <tr>
                    <td className="textTD">
                        Peso
                    </td>
                    <td >
                        <input className="text-input"
                            name="weigth"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.weigth}
                        />
                    </td>
                    <td className="textTD">
                        Estatura
                    </td>
                    <td >
                        <input className="text-input"
                            name="height"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.height}
                        />
                    </td>
                    <td className="textTD">
                        Talla
                  </td>
                    <td >
                        <input className="text-input"
                            name="size"
                            type="sellect"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.size}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Tipo De sangre
                  </td>
                    <td >
                        <input className="text-input"
                            name="blood"
                            type="sellect"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.blood}
                        />
                    </td>
                    <td className="textTD">
                        Padecimientos
                  </td>
                    <td >
                        <input className="text-input"
                            name="sufferings"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.sufferings}
                        />
                    </td>
                    <td className="textTD">
                        Tipo De Parto
                  </td>
                    <td >
                        <input className="text-input"
                            name="part"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.part}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Semanas De Gestacion
                  </td>
                    <td >
                        <input className="text-input"
                            name="gestation"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.gestation}
                        />
                    </td>
                    <td className="textTD">
                        Gateo
                  </td>
                    <td >
                        <input className="text-input"
                            name="gateo"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.gateo}
                        />
                    </td>
                    <td className="textTD">
                        Primeros Pasos                        
                    </td>
                    <td >
                        <input className="text-input"
                            name="steps"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.steps}
                        />
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default AddMedicalData;