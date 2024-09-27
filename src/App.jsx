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
        <section className="all">
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
            <div>
            <div>
              <aside>
                <h4>Today's orders</h4>
                <p> <span> <ion-icon name="ellipsis-vertical"></ion-icon> </span> </p>
              </aside>
              <aside>
                <h5>12,891</h5>
                <span className="inc"> <ion-icon name="arrow-up"></ion-icon> <p>31%</p></span>
              </aside>
            </div>
            <div>
              <aside>
                <h4>Avg. order value</h4>
                <p> <span> <ion-icon name="ellipsis-vertical"></ion-icon> </span> </p>
              </aside>
              <aside>
                <h5>$431.876</h5>
                <span className="dec"> <ion-icon name="arrow-up"></ion-icon> <p>31%</p></span>
              </aside>
            </div>
            <footer></footer>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
