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
      <main>
        <section>
          <div className="text-div">
            <h1>Reliable Financial Solution For Businesses</h1>
            <p>Cashbank provides reliable financial services for various business needs powered by the latest AI. We are pioneers in this service field and the best among others.</p>
            <button>Get Started Now <span><ion-icon name="arrow-forward-outline"></ion-icon></span></button>
            <button className="demo">View Live Demo</button>
            <footer>
              <article>
                <h3>20+</h3>
                <p>Multinational businesses have use Cashbank </p>
              </article>
              <article>
                <h3>4K+</h3>
                <p>Daily transactions from around the world</p>
              </article>
            </footer>
          </div>
          <div className="image-div">

          </div>
        </section>
      </main>
    </div>
  )
}

export default App
