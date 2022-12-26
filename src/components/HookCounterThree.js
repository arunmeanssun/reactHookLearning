import React, {useState} from 'react';

function HookCounterThree() {
    const [name, setName] = useState({firstName: 'Arun', lastName: 'Kumar S'});
  return (
    <form>
        <input type="text" name="firstName" value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value})} />
        <input type="text" name="lastName" value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value})} />

        <p>Your Full Name is { name.firstName + ' ' + name.lastName }</p>
        <p>{ JSON.stringify(name) }</p>
    </form>
  )
}

export default HookCounterThree;