// Import React
import React from 'react';


// Projects component
function Projects(resumeData) {

    // Destructure resumeData
    const { projects } = resumeData.resumeData[0]

    // Map through projects
    const projectList = projects.map((project, index) => {
        return (
            <div key={project.name + index} className="grid grid-cols-2 gap-5">
                <div className="col-span-2 lg:col-span-1 text-gray-600">
                    <div className="flex items-center space-x-2">
                        <p className="font-bold text-gray-800">{project.name}</p>
                        <a aria-label="GitHub" href={project.githubUrl}>G Icon</a>
                        <a aria-label={project.name} href={project.website}>L Icon</a>
                    </div>
                    <p>{project.summary}</p>
                </div>
            </div >
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
            {/* Display Projects */}
            {projectList}
        </div>
    )

}


// Export Projects component
export default Projects;