import { useState } from 'react'
import './App.css'

/*function App() {
 //Aquí tu código
    const [name, setName] = useState('Sofia');
    const [newName, setNewName] = useState('');
    const teacherChange = (newTeacherName) => {
        setName(newTeacherName);
    };
    return (
        <div>
            <h2>Teacher name: {name}</h2>
            <ul>
                <li onClick={() => teacherChange('Data') }>Data</li>
                <li onClick={() => teacherChange('Reyes')}>Reyes</li>
                <li onClick={() => teacherChange('Yolanda')}>Yolanda</li>
            </ul>
        </div>
    )
}*/

function App() {
    const [name, setName] = useState('Sofia');
    const [newName, setNewName] = useState('');
  
    const changeName = (e) => {
      e.preventDefault(); 
      if (newName.trim() !== '') {
        setName(newName);
        setNewName('');
      }
    };
  
    const nameInputChange = (e) => {
      setNewName(e.target.value);
    };
  
    return (
      <div>
        <h2>Teacher Name: {name}</h2>
        <form onSubmit={changeName}>
          <input
            type="text"
            value={newName}
            onChange={nameInputChange}
            placeholder="Add a name"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

export default App
