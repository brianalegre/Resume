// Import React
import React from 'react';

// Import React Icons
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'


// Projects component
function Projects(resumeData) {

    // Destructure resumeData
    const { projects } = resumeData.resumeData[0]

    // Map through projects
    const projectList = projects.map((project, index) => {
        return (
            <div key={project.name + index} className="col-span-2 lg:col-span-1 text-gray-600">
                <div className="flex items-center space-x-2">
                    <p className="font-bold text-gray-800">{project.name}</p>
                    <a aria-label="GitHub" href={project.githubUrl} target='_blank' rel='noreferrer' ><AiFillGithub className='hover:text-fuchsia-700' /> </a>
                    <a aria-label={project.name} href={project.website} target='_blank' rel='noreferrer'><FiExternalLink className='hover:text-fuchsia-700' /> </a>
                </div>
                <p>{project.summary}</p>
            </div>
        )
    });

    return (
        <div>
            <div className="flex my-4 relative">
                <p className="font-semibold text-left z-20 bg-gray-800 rounded-sm p-1 pr-12 text-gray-100 flex items-center justify-center">
                    Projects
                </p>
                <div className="bg-fuchsia-700 absolute bg-opacity-50 w-12 top-4 z-10 h-6 rounded-sm"></div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {/* Display Projects */}
                {projectList}
            </div>
        </div>
    )

}


// Export Projects component
export default Projects;