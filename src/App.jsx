import { useState } from 'react';


function App() {
    const [name, newName] = useState("Sofía");


    let initNombres = ["Sofía", "Data", "Reyes", "Yolanda"];

    const [Nombres, setNombres] = useState(initNombres)

    const updateName = (nombre) => {

        newName(nombre)
    }
    const changeName = (event) => {
        event.preventDefault();
        
        if(name!="")
            setNombres([
                ...Nombres,
                name
            ])
       
    }
    return (
        <div>
            <h2>
                Teacher Name:{name}
            </h2>
            <ul>
                {Nombres.map((Profe) => {                    
                    return <li><button value={Profe} onClick={updateName.bind(this, Profe)}>{Profe}</button></li>
                })}
            </ul>
            <form onSubmit={changeName}>
                <label>Nuevo profesor</label>
                <input type='text' value={name} placeholder='add a name' onChange={event => {
                    newName(event.target.value)
                }}>
                </input>
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}



export default App

