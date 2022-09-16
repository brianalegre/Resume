// Import React
import React from 'react';


// Projects component
function Education(resumeData) {

    // Destructure resumeData
    const { education } = resumeData.resumeData[2]

    // Map through work
    const eduList = education.map((school, index) => {
        return (
            <li key={school + index} className="text-gray-600 space-y-2">
                <div>
                    <p>
                        <span className="font-bold text-gray-800">{school.area}, {school.studyType}, </span>
                        {school.institution}
                    </p>
                    <p className="text-sm">
                        {school.endDate}
                    </p>
                </div>
            </li>
        )
    })

    return (
        <div>
            <div className="flex my-4 relative">
                <p className="font-semibold text-left z-20 bg-gray-800 rounded-sm p-1 pr-12 text-gray-100 flex items-center justify-center">
                    Education
                </p>
                <div className="bg-fuchsia-700 absolute bg-opacity-50 w-12 top-4 z-10 h-6 rounded-sm"></div>
            </div>
            <ul className="space-y-2">
                {eduList}
            </ul >

        </div>
    )

}


// Export Education component
export default Education;