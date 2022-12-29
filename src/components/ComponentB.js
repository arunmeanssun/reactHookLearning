import React from 'react';
import ComponentC from './ComponentC';

function ComponentB() {
  return (<React.Fragment>
        <h2>Component B</h2>
        <ComponentC />
    </React.Fragment>
  )
}

export default ComponentB;