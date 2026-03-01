import './App.css';
import Features from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import Pricing from './components/pricing';
import Reviews from './components/reviews';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <Header/>
      <section id="home" className="section">
        <Home/>
      </section>
      <section id="features" className="section">
        <Features/>
      </section>

      <section id="reviews" className="section">
        <Reviews/>
      </section>

      <section id="pricing" className="section">
        <h1 style={{backgroundColor:'#fffbf0', margin:0,paddingTop:"40px"}}>Pricing</h1>
        <Pricing/>
      </section>

      <section id="footer" className="section">
        <h1 style={{backgroundColor:'#fae7b8', margin:0,paddingTop:"40px"}}>Contact</h1>
        <Footer/>
      </section>

       
    </div>
  );
}

export default App;
