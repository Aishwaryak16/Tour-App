import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact-us" element={<ContactForm/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
