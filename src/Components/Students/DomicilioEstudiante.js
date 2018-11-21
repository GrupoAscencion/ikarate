import React from "react";

const AddAddress = (props) => {
    return (
        <table >
            <tbody className="text">
                <tr>
                    <td className="textTD">
                        Calle
                    </td>
                    <td >
                        <input className="text-input"
                            name="address"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.address}
                            //size="30"
                        />
                    </td>
                    <td>
                        Num.Ext
                    </td>
                    <td >
                        <input className="text-input"
                            name="numExt"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.numExt}
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
                            name="numInt"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.numInt}
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
                            name="county"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.county}
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
                            name="city"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.city}
                            size="30"
                            placeholder="jalisco"
                        />
                    </td>
                    <td className="textTD">
                        Estado
                    </td>
                    <td >
                        <input className="text-input"
                            name="estado"
                            type="text"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.estado}
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
                            name="zipcode"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.zipcode}
                            size='30'
                            />
                    </td>
                    <td className="textTD">
                        Tel.Casa
                    </td>
                    <td >
                        <input className="text-input"
                            name="phoneHouse"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.phoneHouse}
                            size="9"
                            maxLength="9"
                            placeholder="jalisco"
                        />
                    </td>
                    <td className="textTD">
                        Tel.Cel
                    </td>
                    <td >
                        <input className="text-input"
                            name="phone"
                            type="number"
                            onChange={props.handleInputChange}
                            value={props.RecordValue.phone}
                            size="13"
                            placeholder="jalisco"
                        />
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default AddAddress;