import logo from './logo.svg';
import icon from './assets/favicon.ico';
import renuireland from './assets/renu-ireland.png';
import Appbar from './components/Appbar';
import './App.css';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import KParticles from "./components/Particles";

function App() {

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
    AOS.init();
    AOS.refresh();
    
  }, []);

  return (
    <div id="container">
    <Appbar/>
    <div style={{position:"relative"}}>
    <KParticles/>
    <h1 align="center">Kevin Portfolio</h1>
     <div data-aos="fade-up">
    <a href="https://www.renu-ireland.com">
     <img class="menu" style={{padding: 20, minWidth: 200, maxWidth: 500}} src={renuireland}/>
       </a>
     </div>
      </div>
    </div>
  );
}

export default App;
