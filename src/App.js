import './App.css';

// Import Components
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import WorkExp from './components/WorkExp'
import Education from './components/Education'
import Stacks from './components/Stacks'
import Me from './components/Me'


// Import Data
import resumeData from './resumeData.js'


// App
function App() {
  return (
    <main className="h-full w-screen flex flex-col">
      <div className="max-w-6xl p-6 mx-auto flex-grow">
        <div className="grid grid-cols-12 gap-0 lg:gap-0 h-full mt-6">
          <Me resumeData={resumeData} />
          <div className="lg:col-span-8 col-span-12 w-full h-full">
            <div className="flex flex-col space-y-6">
              <AboutMe />
              <Projects resumeData={resumeData} />
              <WorkExp resumeData={resumeData} />
              <Education resumeData={resumeData} />
              <Stacks resumeData={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Export App
export default App;
