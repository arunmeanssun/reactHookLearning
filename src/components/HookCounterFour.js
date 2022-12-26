import React, {useState} from 'react';

function HookCounterFour() {
    const [items, setItems] = useState([]);

    const addItem = () => {
      setItems([...items, { id: items.length, value: Math.floor(Math.random() * 10) + 1}])
    }

  return (
    <React.Fragment>
      <p><button onClick={addItem}>Add Item</button></p>
      <ul className='customList'>
          {
              items.map((item) => <li key={item.id}>{item.value}</li>)
          }
      </ul>
    </React.Fragment>
  )
}

export default HookCounterFour;