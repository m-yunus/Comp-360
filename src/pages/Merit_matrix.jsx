import React from 'react'
import Graph from '../routes/Merit-Matrix/Merit_metrix_left/Merit_metrix_left'
import Matrix_type from '../routes/Merit-Matrix/Merit_metrix_right/Matrix_type/Matrix_type';


const Merit_matrix = () => {
  return (
    <>
      <div className='flex'>
        <Graph />
     <Matrix_type/>
      </div>
    </>
  );
}

export default Merit_matrix