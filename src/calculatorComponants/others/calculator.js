import React, { useState } from 'react';
import CreateNumbersButton from '../buttons/numbers';
import Text from '../others/TextBox';

const mystyle = {
    marginBottom: "20px",
      width: "430px",
      height: "60px"
  };
  

function CreateCalculator(props) {
    return (
        <div>
           <Text result ={props.result}/>
            <CreateNumbersButton setResult ={props.setResult}/>
        </div>
      );
}

export default CreateCalculator;
