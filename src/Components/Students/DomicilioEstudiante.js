import React from "react";

const AddAddress = (props) => {
    return (
        <table >
            <tbody className="text">
                <tr>
                    <td className="textTD">
                        Direccion
                  </td>
                    <td >
                        <input className="text-input"
                            name="address"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.address}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Telefono
                  </td>
                    <td >
                        <input className="text-input"
                            name="phone"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.phone}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Codigo Postal
                  </td>
                    <td >
                        <input className="text-input"
                            name="zipcode"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.zipcode}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Ciudad
                  </td>
                    <td >
                        <input className="text-input"
                            name="city"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.city}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Estado
                  </td>
                    <td >
                        <input className="text-input"
                            name="estado"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.estado}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="textTD">
                        Colonia
                  </td>
                    <td >
                        <input className="text-input"
                            name="county"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.county}
                        />
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default AddAddress;