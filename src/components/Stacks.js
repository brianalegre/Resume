// Import React
import React from 'react';


// Projects component
function Stacks(resumeData) {

    // Destructure resumeData
    const { stacks } = resumeData.resumeData[3]
    console.log(stacks)

    // Destructure keywords from each name


    // Map through skills
    const stacksList = stacks.map((stack, index) => {
        return (
            <ul key={stack + index}>
                <li className="space-x-3">
                    <span className="font-bold">{stack.name}</span>
                </li>
            </ul>
        )
    })

    return (
        <div>
            <div className="flex my-4 relative">
                <p className="font-semibold text-left z-20 bg-gray-800 rounded-sm p-1 pr-12 text-gray-100 flex items-center justify-center">
                    Stacks
                </p>
                <div className="bg-fuchsia-700 absolute bg-opacity-50 w-12 top-4 z-10 h-6 rounded-sm"></div>
            </div>
            {stacksList}
        </div>

    )

}


// Export Education component
export default Stacks;