
import './App.css';
import Header from './Header/header';
import About from './About/about';
import Skill from './skill/Skill';
import Projectcontent from './projects/projectcontent';
import Experience from './Expcontent/Experience';
import Contact from './contac/contact'


function App() { 
  
  return (
    <div className="App">
     <Header/> 
     <About/> 
     <Skill/>
     <Projectcontent/>
  <Experience/>
  <Contact/>
    </div>
  );
}

export default App;
