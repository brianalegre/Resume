// Import React
import React from 'react';


// Projects component
function Stacks(resumeData) {

    // Destructure resumeData
    const { stacks } = resumeData.resumeData[3]
    console.log(stacks)

    // Map through skills
    const stacksList = stacks.map((stack, index) => {
        return (
            <ul key={stack + index}>
                <li className="space-x-1">
                    <span className="font-bold">{stack.name}    </span>
                    {/* Map each keyword from each stack name */}
                    {stack.keywords.map((keyword, index, arr) => {
                        if (index === arr.length - 1) {
                            // Last keyword
                            return (
                                <span key={keyword + index} className="text-gray-600">{keyword}</span>
                            )
                        } else {
                            // Not last keyword
                            return (
                                <span key={keyword + index} className="text-gray-600">{keyword}, </span>
                            )
                        }
                    })}
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