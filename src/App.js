import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <header className='App-header bg-yellow-600'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='hover:scale-105 font-bold'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link hover:scale-105 font-bold'
          href='https://blogs.prahladinala.in/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React and Tailwind
        </a>
      </header>
    </div>
  )
}

export default App
