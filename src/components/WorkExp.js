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
            {workList}
        </div>
    )

}


// Export Projects component
export default WorkExp;