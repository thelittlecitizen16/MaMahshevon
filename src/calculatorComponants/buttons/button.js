import React from 'react';
import Calculate from '../others/calculate';


const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "13px",
    fontFamily: "Arial",
    marginBottom: "20px",
    width: "60px",
    height: "50px"
  };


function CreateButton(props)
{
    return (
          <button onClick={() => {Calculate(props.value, props.setResult)}} style={mystyle}>{props.value} </button>
      );
}

//props.setResult(props.value)
  export default CreateButton;
