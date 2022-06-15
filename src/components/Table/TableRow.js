import React from 'react';

import './TableRow.css';

const TableRow = (props) => {
  
if(props.value !==0){
  return (
   <div className="TableRow">
    <h1>{props.label}</h1>
    <h2>{props.value}</h2>
   </div>
  );
}
 



};
export default TableRow;