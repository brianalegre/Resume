import './App.css';

// Import Components
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import WorkExp from './components/WorkExp'

// Import Data
import resumeData from './resumeData.js'

// App
function App() {
  return (
    <>
      <AboutMe />
      <Projects resumeData={resumeData} />
      <WorkExp resumeData={resumeData} />

    </>
  )
}

// Export App
export default App;
