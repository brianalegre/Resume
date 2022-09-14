import './App.css';

// Import Components
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import WorkExp from './components/WorkExp'
import Education from './components/Education'
import Stacks from './components/Stacks'


// Import Data
import resumeData from './resumeData.js'


// App
function App() {
  return (
    <>
      <AboutMe />
      <Projects resumeData={resumeData} />
      <WorkExp resumeData={resumeData} />
      <Education resumeData={resumeData} />
      <Stacks resumeData={resumeData} />
    </>
  )
}

// Export App
export default App;
