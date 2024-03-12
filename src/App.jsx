import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Sofia');
  const [newName, setNewName] = useState('');

  function changeName (e) {
    e.preventDefault(); 
    if (newName.trim() !== '') {
      setName(newName);
      setNewName('');
    }
  };

  return (
    <>
      <h2>Teacher name: {name}</h2>
      <ul>
        <li onClick={() => setName('Data')}>Data</li>
        <li onClick={() => setName('Reyes')}>Reyes</li>
        <li onClick={() => setName('Yolanda')}>Yolanda</li>
      </ul>
      <form onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)} // Aquí está la corrección
          placeholder="Add a name"
        />
        <button type="submit">Add</button>
      </form>
    </>
  )
};     
export default App;
