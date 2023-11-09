import Homepage from './Homepage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to='/' className='nav-item'>Homepage</Link>
        <Link to='/about-me' className='nav-item'>About me</Link>
        <Link to="/contact-us" className='nav-item'>Contact us</Link>
      </nav> 
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
