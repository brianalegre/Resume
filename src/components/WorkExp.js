// Import React
import React from 'react';


// Projects component
function WorkExp(resumeData) {

    // Destructure resumeData
    const { work } = resumeData.resumeData[1]

    // Map through work
    const workList = work.map((company, index) => {
        return (
            <ul key={company + index} className="text-gray-600">
                <li>
                    <p className="space-x-2">
                        <a href="{{website}}" className="underline font-bold text-gray-800 cursor-pointer transition-colors duration-150 ease-in-out {{../hoverAccent}}">{company.company}</a>
                        <span>{company.position}</span>
                    </p>
                    <p className="text-sm">
                        {company.startDate} - <span className="italic">present </span>
                        | {company.location}
                    </p>
                    <ul className="list-inside my-2">
                        <li className="ml-4"> {company.highlights[0]}</li>
                        <li className="ml-4"> {company.highlights[1]}</li>
                        <li className="ml-4"> {company.highlights[2]}</li>
                    </ul>
                </li>
            </ul>
        )
    })

    return (
        <div>
            <div className="flex my-4 relative">
                <p className="font-semibold text-left z-20 bg-gray-800 rounded-sm p-1 pr-12 text-gray-100 flex items-center justify-center">
                    Work Experience
                </p>
                <div className="bg-fuchsia-700 absolute bg-opacity-50 w-12 top-4 z-10 h-6 rounded-sm"></div>
            </div>
            {workList}
        </div>
    )

}


// Export WorkExp component
export default WorkExp;