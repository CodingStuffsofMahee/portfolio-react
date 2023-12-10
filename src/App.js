import './App.css';
import Main from './components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
function App() {
  return (
    <>
      {/* <Services/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path="/" exact element={<Main />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/blogs" exact element={<Blog />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
