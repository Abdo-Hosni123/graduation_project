import './App.css';
import Home from './Components/Home';
import About from './Components/About';

import testmonial from './Components/testmonial';
import Work from './Components/Work';
import Footer from './Components/Footer';
import contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Home/> 
      <About/> 
      <Testmonial/> 
      <Footer/> 
      <Contact/> 
    </div>
  );
}

export default App;