import  {useState} from "react";
function App() {
  const[counter, setCounter] = useState(0)
  const[name, setName] =useState('')

  const increment =() => {
    setCounter(currentVal => currentVal + 1)
  }

  const decrement =() => {
    if (counter ===0) return
    setCounter(currentVal => currentVal - 1)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }
  
    
  return (
    <div >
      <h1>COUNTER: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <input onChange={handleChange}/>
      <h3>Name: {name}</h3>
      
    </div>
  );
}

export default App;
