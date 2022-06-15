import React from 'react';

import TableRow from './TableRow';
import './Table.css';

const Table= (props) => {
  const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
  

  return (
    <div className='Table'>
      {props.dataPoints.map((dataPoint) => (
        <TableRow
          key={dataPoint.label}
          value={dataPoint.value}
         
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Table;