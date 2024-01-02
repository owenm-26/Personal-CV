import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='Personal-CV/home' element={<Home />}/>
          <Route path='Personal-CV/projects' element={<Projects />}/>
          <Route path='Personal-CV/project/:id' element={<ProjectDisplay/>}/>
          <Route path='Personal-CV/experience' element={<Experience />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;