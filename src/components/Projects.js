// Import React
import React from 'react';


// Projects component
function Projects(resumeData) {

    // Map through projects
    // const projects = resumeData.map((project) => (
    //     <div className="project">
    //         {/* <h3>{project.name}</h3> */}

    //     </div>
    // ))

    console.log(resumeData)

    return (
        <div>
            <div className="flex my-4 relative">
                <p className="font-semibold text-left z-20 bg-gray-800 rounded-sm p-1 pr-12 text-gray-100 flex items-center justify-center">
                    Projects
                </p>
                <div class="bg-fuchsia-700 absolute bg-opacity-50 w-12 top-4 z-10 h-6 rounded-sm"></div>
            </div>
            {/* {projects} */}
        </div>
    )

}


// Export Projects component
export default Projects;