import './App.css';

// Import Components
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

// Import Data
import resumeData from './resume.js'

// App
function App() {
  return (
    <>
      <AboutMe />
      <Projects resumeData={resumeData} />
    </>
  )
}

// Export App
export default App;
