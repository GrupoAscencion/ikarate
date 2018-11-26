import React from "react";
import MyFrame from "./Utils/MyFrame";

class Test extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div >
                <MyFrame 
                    title="Su Padre"
                    style={{
                        background: '#EEEEEE',
                        fontSize: '1em',
                    }}>
                    Hola  Puto
                </MyFrame>
            </div>
        );
    }
}

export default Test;
