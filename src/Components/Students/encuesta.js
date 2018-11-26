import React from "react";
import MyInput from './../Utils/MyInput';
import MyFrame from './../Utils/MyFrame';

const Quiz = (props) => {
    return (
        <div>
            <MyFrame title="Hablanos de ti" style={{
                display: 'flex',
                flexDirection: 'column',

            }} >
                <MyInput label="Por que esta escuela"
                    name="WhyThisSchool"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.WhyThisSchool}
                />
                <MyInput label="Metas"
                    name="Goals"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.Goals}
                />
                <MyInput label="Como se entero de la escuela"
                    name="Source"
                    type="text"
                    style={{ width: '200px' }}
                    onChange={props.handleInputChange}
                    value={props.RecordValue.Source}
                />

            </MyFrame>
            </div>
            );
        
        };
        
export default Quiz;