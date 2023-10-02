import './App.css'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting name="Job" greetingMsg="Hello!" />
    </div>
  )
}

export default App
