// Import React
import React from 'react';


// AboutMe component
function AboutMe() {
    return (
        <div>
            <div class="flex my-4 relative">
                <p class="font-semibold text-left z-20 bg-gray-800 rounded-sm p-1 pr-12 text-gray-100 flex items-center justify-center">
                    About Me
                </p>
                <div class="bg-fuchsia-700 absolute bg-opacity-50 w-12 top-4 z-10 h-6 rounded-sm"></div>
            </div>
            <p>
                {/* I am a full stack web developer with a background in customer service and
        sales. I am a recent graduate of the University of Washington's Full Stack
        Web Development Bootcamp. I am currently looking for a position as a
        full stack web developer. */}
                I am a full stack web developer with four years of experience in software development building tools quickly, efficiently, without sacrificing quality and care. I am a great problem solver who can quickly identify and methodically solve issues. Highly dynamic and adaptive; combining creativity and critical thinking to solve complex problems. Known among colleagues for strong collaboration skills, leadership qualities and a keen understanding of design and user needs.
            </p>
        </div>
    );
}

// Export AboutMe component
export default AboutMe;
