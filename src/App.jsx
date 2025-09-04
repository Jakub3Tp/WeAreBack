import './App.css'
import React from "react";

function App() {
  let tableData = ['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django']

    function handleclick(event){
      event.preventDefault()

    }
    return (
    <>
        <div className='container'>
            <h2>Liczba Kursów: {tableData.length}</h2>
            <ol>
                {tableData.map((item, index) => (
                    <li>{tableData[index]}</li>
                ))}
            </ol>
            <form onSubmit={handleclick}>
                <label>Imie i nazwisko:</label>
                <input type='text' className="form-control"></input>
                <label>Numer kursu:</label>
                <input type='text' className="form-control"></input>
                <button className="btn btn-primary">Zapisy do kursu</button>
            </form>
        </div>
    </>
  )
}

export default App
