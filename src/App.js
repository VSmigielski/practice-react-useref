import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()

  // function focus() {
  //   inputRef.current.focus()
  // }

  useEffect(() => {
    prevname.current = name
  }, [name])

  return (
    <div className="App">
     <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
     <div>My name is {name} and it used to be {prevName.current}</div>
    </div>
  );
}

export default App;
