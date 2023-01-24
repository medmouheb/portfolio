import './App.css';
import NavBar from "./components/navbar/navBar"
import Home from './pages/home/home'
import AboutMe from './pages/about me/aboutMe';
import Stack from './pages/stack/stack';
import Projects from "./pages/projects/projects"
import Contact from './pages/contact/contact';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <hr />
      <AboutMe />
      <hr />
      <Stack />
      <hr />
      <Projects />
      <hr />
      <Contact/>
    </div>
  );
}

export default App;
