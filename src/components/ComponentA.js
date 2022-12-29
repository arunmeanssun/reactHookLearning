import React from 'react';
import ComponentB from './ComponentB';

function ComponentA() {
  return (<React.Fragment>
            <h2>ComponentA</h2>
            <ComponentB />
            </React.Fragment>    
  )
}

export default ComponentA;