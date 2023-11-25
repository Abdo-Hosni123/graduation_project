import './App.css';
import Home from './Components/Home';
import About from './Components/About';

import Testmonial from './Components/Testmonial';
import Work from './Components/Work';
import Footer from './Components/Footer';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Home/> 
      <About/> 
      <Work/>
      <Testmonial/> 
      <Footer/> 
      <Contact/> 
    </div>
  );
}

export default App;
