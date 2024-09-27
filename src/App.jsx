import logo from "./assets/logo.png"

function App() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>Solutions</li>
            <li>Industry</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Company</li>
          </ul>
          <button>Get Started</button>
        </nav>
      </header>
    </div>
  )
}

export default App
